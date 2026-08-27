import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "easytrip",
    title: "EasyTrip BD",
    category: "FULL STACK",

    shortDescription:
      "A full-stack Bangladesh tourism and hotel booking platform connecting travelers with destinations and hotels.",

    description:
      "EasyTrip BD is a full-stack tourism platform designed to help travelers discover destinations and hotels while supporting hotel management and booking workflows. The project focuses on building a scalable architecture with a modern React frontend, FastAPI backend, PostgreSQL database, authentication, and role-based functionality.",

    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "JWT",
      "Docker",
    ],

    highlights: [
      "REST API architecture",
      "JWT authentication",
      "Role-based workflows",
      "Hotel and booking management",
      "PostgreSQL database",
      "SQLAlchemy ORM",
      "Alembic migrations",
      "Dockerized development",
    ],

    githubUrl: "https://github.com/Biozidtonoy/easyTrip-BD",
    liveUrl: "https://easytrip-bd-chi.vercel.app/",

    // Put your actual screenshots here later.
    images: [
      "/projects/easytrip-1.png",
      "/projects/easytrip-2.png",
    ],
  },

  {
    slug: "quicknote",
    title: "QuickNote",
    category: "FULL STACK",

    shortDescription:
      "A full-stack note management application for securely creating, searching, editing, and managing personal notes.",

    description:
      "QuickNote is a full-stack note management application built with React, TypeScript, FastAPI, and PostgreSQL. Users can register, authenticate securely, create personal notes, search notes instantly, edit and delete notes, and manage their profile information.",

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "SQLAlchemy",
      "JWT",
      "Axios",
      "Vercel",
      "Render",
      "Neon",
    ],

    highlights: [
      "User registration and login",
      "JWT authentication",
      "Protected routes",
      "Create, read, update and delete notes",
      "Instant note search",
      "User-specific notes",
      "Profile image upload",
      "Frontend and backend validation",
      "Vercel frontend deployment",
      "Render backend deployment",
      "Neon PostgreSQL database",
    ],

    githubUrl: "https://github.com/Biozidtonoy/quicknote",
    liveUrl: "https://quicknote-rosy.vercel.app",

    images: [
      "/projects/quicknote-1.png",
      "/projects/quicknote-2.png",
    ],
  },

  {
    slug: "pokemon-memory",
    title: "Pokémon Memory Card Game",
    category: "FRONTEND",

    shortDescription:
      "An interactive React memory game where players must select unique Pokémon cards without clicking the same card twice.",

    description:
      "The Pokémon Memory Card Game is an interactive React application created to practice component-based architecture, state management, side effects, API integration, and dynamic rendering. Pokémon data and images are fetched from the PokéAPI, while the cards shuffle after every successful selection to make the game progressively more challenging.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "PokéAPI",
      "useState",
      "useEffect",
    ],

    highlights: [
      "PokéAPI integration",
      "Dynamic Pokémon data",
      "Random card shuffling",
      "Real-time score tracking",
      "Best score tracking",
      "Duplicate card detection",
      "Game reset functionality",
      "Responsive card layout",
      "Interactive hover effects",
    ],

    githubUrl: "https://github.com/Biozidtonoy/memory-card",
    liveUrl: "https://memory-card-six-lac.vercel.app/",

    images: [
      "/projects/pokemon-memory-1.png",
    ],
  },
];