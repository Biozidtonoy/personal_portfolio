import type { RouteObject } from "react-router";

import MainLayout from "../components/layout/MainLayout";

import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import EasyTripPage from "../pages/EasyTripPage";
import QuickNotePage from "../pages/QuickNotePage";
// import ProjectDetailsPage from "../pages/ProjectDetailPage";
import ResumePage from "../pages/ResumePage";
import ContactPage from "../pages/ContactPage";
import PokemonMemoryPage from "../pages/PokemonMemoryPage";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/projects",
        element: <ProjectsPage />,
      },

      // Existing detailed pages
      {
        path: "/projects/easytrip",
        element: <EasyTripPage />,
      },

      {
        path: "/projects/quicknote",
        element: <QuickNotePage />,
      },

      // Pokémon details
      {
        path: "/projects/pokemon-memory",
        element: <PokemonMemoryPage />,
      },

      {
        path: "/resume",
        element: <ResumePage />,
      },

      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
];

export default routes;