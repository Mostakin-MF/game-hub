# GameHub – Video Game Discovery App

## Overview
- Video game discovery app built with React 18, TypeScript, and Vite  
- Uses RAWG API to browse, search, filter, and sort games  
- Responsive UI with dark/light mode, genres, platforms, images, and critic scores  
- Inspired by Mosh Hamedani’s GameHub project  

---

## Goals

- Build a production-style React frontend  
- Integrate a real-world REST API (RAWG)  
- Practice components, custom hooks, and state management  
- Implement search, filter, and sort features  

---

## Features

- Paginated game grid with images and scores  
- Search games by name  
- Filter by genre and platform  
- Sort by relevance, rating, name, or release date  
- Dark / Light mode (Chakra UI)  
- Loading skeletons and error handling  

---

## Tech Stack

### Frontend
- React 18  
- TypeScript  
- Vite  
- Chakra UI  

### Data & HTTP
- RAWG Video Games Database API  
- Axios  

### Tooling
- Node.js + npm  
- Environment variables via Vite  

---

## RAWG API

- Large game database (350k+ games, 50+ platforms)  
- REST API with paginated responses  

### Endpoints Used
- `GET /games` – games list with filters and search  
- `GET /genres` – game genres  
- `GET /platforms/lists/parents` – parent platforms  

### API Client
- Axios instance with base URL and API key from env  

---

## Project Structure

- `components/` – UI components  
- `hooks/` – custom data-fetching hooks  
- `services/` – API and utilities  
- `entities/` – TypeScript models  
- `assets/` – images and static files  

---

## Data Models

### Game
- id, name, background image  
- platforms, rating, metacritic score  

### Genre
- id, name, background image, slug  

### Platform
- id, name, slug  

---

## Application State

- Central `GameQuery` state:
  - genre  
  - platform  
  - sort order  
  - search text  
- Passed to `useGames` to build API queries  

---

## Custom Hooks

- `useGames` – fetch games with filters and sorting  
- `useGenres` – fetch genres  
- `usePlatforms` – fetch platforms  
- Uses loading, error states, and request cancellation  

---

## Main Components

- `App` – layout and global state  
- `NavBar` – search and theme switch  
- `GenreList` – genre filter  
- `PlatformSelector` – platform filter  
- `SortSelector` – sorting options  
- `GameGrid` – displays games  

---

## Game UI

- Game cards with image, title, and critic score  
- Skeleton loaders while fetching data  
- Responsive grid layout  

---

## Services & Utilities

- API client with base URL and API key  
- Image utility for cropped thumbnails  

---

## Theming

- Chakra UI for layout and components  
- Global dark/light mode support  

---

## App Flow

- Initial load fetches games  
- Filters update query state  
- Query changes trigger refetch  
- UI updates with loading and results  

---

## Possible Extensions

- Game details page  
- Infinite scroll or load more  
- Advanced state management (React Query/Zustand)  
- Favorites and authentication  

---

## Summary

- Modern React + TypeScript project  
- Real-world REST API integration  
- Clean architecture with custom hooks  
- Common UX patterns: search, filter, sort  

## React + TypeScript + Vite (Key Points)

- Minimal template for React with Vite
- Fast development with **HMR (Hot Module Replacement)**
- Two official Vite plugins:
  - `@vitejs/plugin-react` – uses Babel for Fast Refresh
  - `@vitejs/plugin-react-swc` – uses SWC for faster builds

## React Compiler

- Not enabled by default due to dev/build performance impact
- Can be added manually if needed

## ESLint (Production Recommendation)

- Enable **type-aware ESLint rules** for better code safety
- Use:
  - `recommendedTypeChecked` (balanced)
  - `strictTypeChecked` (stricter)
  - `stylisticTypeChecked` (style-focused)

## React ESLint Plugins (Optional)

- `eslint-plugin-react-x` – React-specific TypeScript linting
- `eslint-plugin-react-dom` – React DOM best practices
