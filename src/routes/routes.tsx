import { createBrowserRouter } from 'react-router'
import MainLayout from '../components/layout/MainLayout.tsx'
import ContactPage from '../pages/ContactPage.tsx'
import HomePage from '../pages/HomePage.tsx'
import ProjectsPage from '../pages/ProjectsPage.tsx'
import ResumePage from '../pages/ResumePage.tsx'
import EasyTripPage from '../pages/projects/EasyTripPage.tsx'
import QuickNotePage from '../pages/projects/QuickNotePage.tsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'projects',
        children: [
          { index: true, element: <ProjectsPage /> },
          { path: 'easytrip', element: <EasyTripPage /> },
          { path: 'quicknote', element: <QuickNotePage /> },
        ],
      },
      { path: 'resume', element: <ResumePage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])
