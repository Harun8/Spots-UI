import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import HomePage from "./pages/HomePage";

import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage/>}></Route>
      {/* <Route
        path="/createJobPost"
        element={<CreateJobPost></CreateJobPost>}></Route> */}

      {/*


      <Route path="/blog/:blogId" element={<Blog></Blog>}></Route>

     
      <Route path="create" element={<CreateBlogPost />}></Route>
       */}
    </Route>
  )
);

function App() {
  return (
    <>
      {/* <ThemeProvider> */}
      <div className="App"></div>
      <RouterProvider router={router} />

  {/* </ThemeProvider> */}
    </>
  );
}

export default App;