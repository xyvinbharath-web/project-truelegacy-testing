import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Layout from "../layout/Layout";

import Home from "../pages/home";
import Services from "../pages/services";
import WhyChooseUs from "../pages/why-choose-us";
import Contact from "../pages/contact";
import Resources from "../pages/resources";
import BlogsView from "../pages/resources/BlogsView";
import SurveyForm from "../pages/succession";
import SuccessionLayout from "../layout/SuccessionLayout";
import SuccessionTree from "../pages/succession/SuccessionTree";
import FamilyMembers from "../pages/succession/FamilyView";
import SignIn from "../pages/succession/SignIn";
import ProtectedRoute from "./ProtectRouter";
import TermsOfService from "../pages/Terms";
import Privacy from "../pages/privacy";

const Router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "services", element: <Services /> },
          { path: "why-choose-us", element: <WhyChooseUs /> },
          { path: "contact", element: <Contact /> },
          { path: "resources", element: <Resources /> },
          { path: "resources/:id", element: <BlogsView /> },
          { path: "succession", element: <SurveyForm /> },
          { path: "privacy-policy", element: <Privacy /> },
          { path: "terms-of-service", element: <TermsOfService /> },
        ],
      },
      {
        path: "/succession",
        element: (
          <ProtectedRoute>
            <SuccessionLayout />
          </ProtectedRoute>
        ),
        children: [
          { path: "view", element: <SuccessionTree /> },
          { path: "family", element: <FamilyMembers /> },
        ],
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "*",
        element: <h1>404 | Page Not Found</h1>,
      },
    ],
  },
]);

export default Router;
