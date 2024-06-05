import { DataProvider, GetOneParams } from "@refinedev/core";
import { CrudFilters, CrudSorting } from "@refinedev/core";
import { fetchWrapper } from "./fetchWrapper";

const BACKEND_API = "http://localhost:3000";

export const client = {
  get: (endpoint: string, options: RequestInit = {}) =>
    fetchWrapper(BACKEND_API + endpoint, { ...options, method: "GET" }),
  post: (endpoint: string, body: any, options: RequestInit = {}) =>
    fetchWrapper(BACKEND_API + endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    }),
  put: (endpoint: string, body: any, options: RequestInit = {}) =>
    fetchWrapper(BACKEND_API + endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
    }),
  delete: (endpoint: string, options: RequestInit = {}) =>
    fetchWrapper(BACKEND_API + endpoint, { ...options, method: "DELETE" }),
};

const generateQueryParams = (
  pagination?: { current?: number; pageSize?: number },
  filters?: CrudFilters,
  sort?: CrudSorting
) => {
  const query = new URLSearchParams();
  if(!pagination || !pagination.current || !pagination.pageSize) {
    return query.toString();
  }
  query.append("_page", pagination.current.toString());
  query.append("_limit", pagination.pageSize.toString());

  if (sort) {
    sort.forEach(({ field, order }) => {
      query.append("_sort", field);
      query.append("_order", order);
    });
  }

  if (filters) {
    filters.forEach((filter) => {
      if (filter.operator === "eq") {
        query.append(filter.field, filter.value);
      }
    });
  }

  return query.toString();
};

export const dataProvider: DataProvider = {
  getList: async ({ resource, pagination, filters, sort }) => {
    const queryParams = generateQueryParams(pagination, filters, sort);
    const endpoint = `/${resource}?${queryParams}`;
    const response = await client.get(endpoint);
    const data = await response.json();
    return {
      data,
      total: parseInt(response.headers.get("X-Total-Count") || "0", 10),
    };
  },
  getOne: async ({ resource, id }: GetOneParams) => {
    const endpoint = `/${resource}/${id}`;
    const response = await client.get(endpoint);
    const data = response.json();
    return data;
  },
  create: async ({ resource, variables }) => {
    const endpoint = `/${resource}`;
    const response = await client.post(endpoint, variables);
    const data = response.json();
    return data;
  },
  update: async ({ resource, id, variables }) => {  
    const endpoint = `/${resource}/${id}`;
    const response = await client.put(endpoint, variables);
    const data = response.json();
    return data;
  },
  deleteOne: async ({ resource, id }) => {
    const endpoint = `/${resource}/${id}`;
    const response = await client.delete(endpoint);
    return response.json();
  },
  getApiUrl: () => BACKEND_API,
};
