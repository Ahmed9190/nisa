# nisa - Modest Fashion E-commerce Site

This is a production-ready e-commerce website for a modest fashion brand, built with Astro and Tailwind CSS. The project is designed for performance, SEO, and easy content management through JSON files.

## Live Demo

[Link to your live site] <!-- Add your live site URL here -->

## Features

- **Static Site Generation with Astro:** Blazing fast performance and optimal SEO.
- **Styled with Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **JSON-based Content Management:** Easily update site content, products, and metadata by editing JSON files.
- **Responsive Design:** Mobile-first and fully responsive layout.
- **Image Gallery:** Product details page with a gallery for multiple images per color.
- **Client-side Cart:** A functional shopping cart that persists in local storage.
- **Deployment Ready:** Pre-configured for deployment on Netlify, Vercel, and GitHub Pages.

## Project Structure

```
/nisa-website
├── public/
│   └── assets/         # Product images and other static assets
├── src/
│   ├── components/     # Reusable Astro components (Header, Footer, ProductCard, etc.)
│   ├── data/           # JSON files for content
│   │   ├── content.json
│   │   ├── products.json
│   │   └── site.json
│   ├── layouts/        # Main site layout
│   │   └── Layout.astro
│   ├── pages/          # Site pages
│   └── types.ts        # TypeScript type definitions
├── .gitignore
├── astro.config.mjs
├── package.json
├── README.md
├── tailwind.config.mjs
└── ... (deployment files)
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd nisa-website
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Development Server

To start the local development server, run:

```bash
npm run dev
```

This will open a new browser tab with the live preview of your site. The server will automatically reload when you make changes to the code.

## Building for Production

To build a production-ready version of your site, run:

```bash
npm run build
```

This will generate a `dist/` directory with the optimized and bundled files for your site.

## Content Management

All the content for the website is managed through the JSON files in the `src/data/` directory:

-   **`site.json`**: Contains global site metadata like the site title, description, and navigation links.
-   **`products.json`**: The product catalog. Each product has an ID, name, price, description, images, etc.
-   **`content.json`**: Contains content for specific pages, like the hero section on the home page and the text for the about page. To control which products are featured on the home page, add their IDs to the `featuredProductIds` array in this file.

## Deployment

This project is ready to be deployed on various platforms.

### Netlify

1.  Push your code to a GitHub repository.
2.  Go to your Netlify dashboard, click "Add new site" -> "Import an existing project".
3.  Connect to your Git provider and select your repository.
4.  Netlify will automatically detect the `_netlify.toml` file and use the correct build settings. The settings are:
    -   **Build command:** `npm run build`
    -   **Publish directory:** `dist`
5.  Click "Deploy site".

### Vercel

1.  Push your code to a GitHub, GitLab, or Bitbucket repository.
2.  Go to your Vercel dashboard and click "Add New..." -> "Project".
3.  Import your repository.
4.  Vercel will automatically detect that you are using Astro and configure the build settings.
5.  Click "Deploy".

### GitHub Pages

1.  Push your code to a GitHub repository.
2.  The `.github/workflows/deploy.yml` file is already set up to build and deploy your site to GitHub Pages automatically whenever you push to the `main` branch.
3.  You may need to configure the repository settings to enable GitHub Pages and select the `gh-pages` branch as the source.