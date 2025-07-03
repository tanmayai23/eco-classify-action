# Eco-Classify: E-Waste Management System

## Project Overview

Eco-Classify is an application that helps users identify and properly dispose of electronic waste (e-waste). The application uses Google's Gemini AI to classify uploaded images of electronic devices and provides information on how to properly recycle or dispose of them.

**Original Project URL**: https://lovable.dev/projects/6638a9b6-e665-4753-8955-aceae4175e03

## Setting Up Gemini API

To use the image classification feature, you need to set up a Gemini API key:

1. Go to [Google AI Studio](https://ai.google.dev/)
2. Sign in with your Google account
3. Navigate to the API keys section
4. Create a new API key
5. Copy the `.env.example` file to `.env`
   ```bash
   cp .env.example .env
   ```
6. Add your API key to the `.env` file
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/6638a9b6-e665-4753-8955-aceae4175e03) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Google Gemini AI for image classification
- React Router for navigation

## Features

- **Image Classification**: Upload images of electronic devices to identify what type of e-waste they are
- **AI-Powered Analysis**: Utilizes Google's Gemini AI for accurate classification
- **Disposal Information**: Get information on how to properly dispose of your e-waste
- **Recycling Centers**: Find nearby recycling centers that accept your type of e-waste

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/6638a9b6-e665-4753-8955-aceae4175e03) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
