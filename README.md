# React + TypeScript + Vite

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Features

- Fast Refresh for a better development experience.
- TypeScript support for type safety.
- ESLint configuration for code quality.
- Ability to query OMDB API to fetch movie data.


## API Key Setup Guide

1. Create an `.env` file in the root of the project.
2. Add your API key in the following format:
   ```
VITE_API_KEY=your_api_key_here
   ```
3. Access the API key in your application using `process.env.VITE_API_KEY`.
````
