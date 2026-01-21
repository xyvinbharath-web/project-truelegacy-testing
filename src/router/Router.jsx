import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "../layout/RootLayout";
import Layout from "../layout/Layout";

// Eager-load home shell and shared layout pieces. Lazy-load route pages.
import Home from "../pages/home/index.jsx";
const Services = lazy(() => import("../pages/services/index.jsx"));
const WhyChooseUs = lazy(() => import("../pages/why-choose-us"));
const Contact = lazy(() => import("../pages/contact"));
const Resources = lazy(() => import("../pages/resources"));
const BlogsView = lazy(() => import("../pages/resources/BlogsView"));
const SurveyForm = lazy(() => import("../pages/succession"));
import SuccessionLayout from "../layout/SuccessionLayout";
const SuccessionTree = lazy(() => import("../pages/succession/SuccessionTree"));
const FamilyMembers = lazy(() => import("../pages/succession/FamilyView"));
const SignIn = lazy(() => import("../pages/succession/SignIn"));
import ProtectedRoute from "./ProtectRouter";
const TermsOfService = lazy(() => import("../pages/Terms"));
const Privacy = lazy(() => import("../pages/privacy/PrivacyPolicy.jsx"));

const Router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "services",
            element: (
              <Suspense fallback={null}>
                <Services />
              </Suspense>
            ),
          },
          {
            path: "why-choose-us",
            element: (
              <Suspense fallback={null}>
                <WhyChooseUs />
              </Suspense>
            ),
          },
          {
            path: "contact",
            element: (
              <Suspense fallback={null}>
                <Contact />
              </Suspense>
            ),
          },
          {
            path: "resources",
            element: (
              <Suspense fallback={null}>
                <Resources />
              </Suspense>
            ),
          },
          {
            path: "resources/:id",
            element: (
              <Suspense fallback={null}>
                <BlogsView />
              </Suspense>
            ),
          },
          {
            path: "succession",
            element: (
              <Suspense fallback={null}>
                <SurveyForm />
              </Suspense>
            ),
          },
          {
            path: "privacy-policy",
            element: (
              <Suspense fallback={null}>
                <Privacy />
              </Suspense>
            ),
          },
          {
            path: "terms-of-service",
            element: (
              <Suspense fallback={null}>
                <TermsOfService />
              </Suspense>
            ),
          },
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
          {
            path: "view",
            element: (
              <Suspense fallback={null}>
                <SuccessionTree />
              </Suspense>
            ),
          },
          {
            path: "family",
            element: (
              <Suspense fallback={null}>
                <FamilyMembers />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "signin",
        element: (
          <Suspense fallback={null}>
            <SignIn />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <h1>404 | Page Not Found</h1>,
      },
    ],
  },
]);

export default Router;
