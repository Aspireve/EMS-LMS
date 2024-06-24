// import { AuthProvider } from "@refinedev/core";

import { AuthProvider } from "@refinedev/core";
import { fetchWrapper } from "./data/fetchWrapper";
import { AuthActionResponse } from "@refinedev/core/dist/contexts/auth/types";
import { client } from "./data";

// import { User } from "@/graphql/schema.types";

// import { API_URL, dataProvider } from "./data";

/**
 * For demo purposes and to make it easier to test the app, you can use the following credentials:
 */
export const authCredentials = {
  email: "michael.scott@dundermifflin.com",
  password: "demodemo",
};

export const authProvider: AuthProvider = {
  register: async ({ email, password }) => {
    try {
      const response = await client.post("/v1/auth/register", {
        email,
        password,
      });
      const data = await response.json();
      localStorage.setItem("access_token", data.token.accessToken);
      localStorage.setItem("refresh_token", data.token.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      return {
        success: true,
        redirectTo: "/",
      };
    } catch (e) {
      const error = e as Error;
      return {
        success: false,
        error: {
          message: "message" in error ? error.message : "Registration failed",
          name: "name" in error ? error.name : "Invalid email or password",
        },
      };
    }
  },
  login: async ({ email, password }) => {
    try {
      const response = await client.post("/v1/auth/login", { email, password });
      const data = await response.json();
      localStorage.setItem("access_token", data.token.accessToken);
      localStorage.setItem("refresh_token", data.token.refreshToken);
      localStorage.setItem("user", JSON.stringify(data.user));
      return {
        success: true,
        redirectTo: "/",
      };
    } catch (e) {
      const error = e as Error;
      return {
        success: false,
        error: {
          message: "message" in error ? error.message : "Login failed",
          name: "name" in error ? error.name : "Invalid email or password",
        },
      };
    }
  },
  logout: async () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  onError: async (error) => {
    if (error.statusCode === "UNAUTHENTICATED") {
      return {
        logout: true,
      };
    }
    return { error };
  },
  check: async () => {
    try {
      console.log("check")
      const accessToken = localStorage.getItem("access_token");
      await client.get("/v1/users/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // return {
      //   authenticated: !!accessToken,
      //   redirectTo: "/",
      // };
      return {
        authenticated: true,
        redirectTo: "/",
      };
    } catch (error) {
      console.log(error)
      return {
        authenticated: false,
        redirectTo: "/login",
      };
    }
  },
  getIdentity: async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      const response = await client.get("/v1/users/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await response.json();
      return {...data};
    } catch (error) {
      return undefined;
    }
  },
};
