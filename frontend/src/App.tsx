import { Authenticated, Refine, WelcomePage } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { useNotificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { dataProvider } from "./providers/data";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { ForgotPassword } from "./pages/forgotPassword";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { authProvider } from "./providers/auth";
import Layout from "./components/layout";
import DisplayDocuments from "./components/displayDocuments";
import { CustomKanban } from "./pages/tasks/list";
import CoursePage from "./pages/courses";
import TeacherPage from "./pages/teacher";
import Create from "./pages/teacher/Create";
import CourseSetUp from "./pages/teacher/SetUp";
import DisplayBlog from "./pages/blog/display";
import FullPageBlog from "./pages/blog/fullpageblog";
import { AlertOutlined, AppstoreAddOutlined, CompassOutlined, DragOutlined, FolderOpenOutlined, FormOutlined, TableOutlined, UserOutlined } from "@ant-design/icons";
import TagBlogs from "./pages/blog/tags";
import SearchPage from "./pages/blog/searchpage";
import CreateBlog from "./pages/blog/create";
import Table from "./pages/tasks/table";

function App() {
  return (
    <BrowserRouter>
      {/* <GitHubBanner /> */}
      <RefineKbarProvider>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={useNotificationProvider}
              routerProvider={routerBindings}
              authProvider={authProvider}
              resources={[
                {
                  name: "blog",
                  list: "/Blog",
                  icon: <FolderOpenOutlined />
                },
                {
                  name: "All",
                  list: "/Blog/",
                  meta: { parent: "blog", label:"All" },
                  icon: <FormOutlined />
                },
                {
                  name: "Announcement",
                  list: "/Blog/announcement",
                  meta: { parent: "blog" },
                  icon: <AlertOutlined />
                },
                {
                  name: "Update",
                  list: "/Blog/update",
                  meta: { parent: "blog" },
                  icon: <AppstoreAddOutlined />
                },
                {
                  name: "task",
                  list: "/tasks",
                  icon: <CompassOutlined />
                },
                {
                  name: "kanban",
                  list: "/tasks/kanban",
                  meta: { parent: "task", label:"Kanban" },
                  icon: <DragOutlined />
                },
                {
                  name: "table",
                  list: "/tasks/table",
                  meta: { parent: "task", label:"Table" },
                  icon: <TableOutlined />
                },
                {
                  name: "Community",
                  list: "/Blog/community",
                  meta: { parent: "blog" },
                  icon: <UserOutlined />
                },
              ]}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "HLkwyd-T3Cl6J-IGhDpA",
              }}
            >
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
                  element={
                    <Authenticated
                      key={"authenticated-layout"}
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <Layout>
                        <Outlet />
                      </Layout>
                    </Authenticated>
                  }
                >
                  <Route index element={<></>} />
                  <Route
                    path="/sharedDocuments"
                    element={<DisplayDocuments />}
                  />
                  <Route path="/tasks/kanban" element={<CustomKanban />} />
                  <Route path="/tasks/table" element={<Table />} />
                  <Route path="/course" element={<CoursePage />} />
                  <Route path="/teacher" element={<TeacherPage />} />
                  <Route path="/teacher/create" element={<Create />} />
                  <Route path="/teacher/create/:id" element={<CourseSetUp />} />
                  <Route path="/blog" >
                    <Route index element={<DisplayBlog />} />
                    <Route path="/blog/announcement" element={<TagBlogs />} />
                    <Route path="/blog/update" element={<TagBlogs />} />
                    <Route path="/blog/community" element={<TagBlogs />} />
                    <Route path="/blog/search" element={<SearchPage />} />
                    <Route path="/blog/create" element={<CreateBlog />} />
                    <Route path="*" element={<FullPageBlog />} />
                  </Route>
                  
                  {/* <Route index element={<WelcomePage />} /> */}
                </Route>
              </Routes>

              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;


