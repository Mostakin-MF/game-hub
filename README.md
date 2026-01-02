# GameHub – Video Game Discovery App

A modern, responsive video game discovery application built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. This project utilizes the [RAWG API](https://rawg.io/apidocs) to browse, search, filter, and sort a vast library of video games.

## Features

- **Game Discovery**: Browse paginated games with rich imagery and critic scores.
- **Advanced Filtering**: Filter games by Genre and Platform.
- **Sorting**: Sort results by relevance, release date, rating, and more.
- **Search**: Instant search functionality to find specific titles.
- **Player Profiles**: View user stats and recent activity with real game data.
- **Leaderboard**: Global leaderboard featuring top players and their favorite games.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS.
- **State Management**: Scalable global state management using **Context API**.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Data Fetching**: [Axios](https://axios-http.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine.
- An API key from [RAWG.io](https://rawg.io/apidocs).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Mostakin-MF/game-hub.git
   cd game-hub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Environment Variables:
   - Create a `.env` file in the root directory.
   - Add your RAWG API key:
     ```env
     NEXT_PUBLIC_RAWG_API_KEY=your_api_key_here
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components.
- `src/context`: React Context definitions (e.g., `GameQueryContext`).
- `src/hooks`: Custom hooks for data fetching (`useGames`, `useGenres`, etc.).
- `src/services`: API client configuration and utilities.
- `src/entities`: TypeScript interfaces/types.

## State Management

The application uses the **Context API** to manage the global `GameQuery` state, eliminating prop drilling. The `GameQueryContext` provides the current filters (genre, platform, sort order, search text) to any component that needs them, such as `NavBar`, `GameGrid`, and selectors.

## License

This project is open-source and available under the MIT License.
