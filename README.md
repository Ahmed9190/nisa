# nisa - Modest Fashion E-commerce Site

This is a production-ready e-commerce website for a modest fashion brand, built with Astro and Tailwind CSS. The project is designed for performance, SEO, and easy content management through JSON files.

## Live Demo

[https://nisa0.netlify.app]

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
/nisa
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
    git clone https://github.com/Ahmed9190/nisa.git
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

This will generate a `dist/` directory with the optimized and bundled files for your site. In server mode, the output includes a Node.js server entrypoint.

## Admin Panel

Nisa includes a password-protected admin panel at `/admin/` for managing products visually. It is available only when running in server mode (`output: 'server'`).

### Setup

1. Set the `ADMIN_PASSWORD` environment variable in `.env` or in your hosting dashboard.
2. Ensure `astro.config.mjs` has `output: 'server'` and the Node adapter is configured.
3. Deploy to a Node.js hosting platform (see [Deployment Requirements](#deployment-requirements)).

### Usage

1. Navigate to `/admin/login` and enter the password.
2. After login, the **Dashboard** shows product statistics.
3. Use the **Products → Add product** button to create a new product.
4. Click a product's **Edit** button to modify its fields, colors, sizes, and images.
5. Click **Delete** to remove a product after confirmation.
6. Logout via the button in the header.

### Environment Variables

| Variable | Required | Default | Description |
|---|---|---|---|
| `ADMIN_PASSWORD` | Yes | `changeme` | The password for the admin panel. Change this before production deployment. |

### Image Size Recommendations

- **Maximum file size**: 5 MB per image.
- **Supported formats**: JPEG, PNG, WebP, GIF.
- **Recommended dimensions**: At least 800×800px (1:1 aspect ratio) for sharp thumbnails. Larger images up to 2000×2000px work well for product detail views.
- Images are stored in `public/images/products/` and referenced by relative paths in product JSON files. Large images may slow page load; optimize with a compression tool before uploading.

### Deployment Requirements

- **Node.js hosting**: The admin panel requires server-side rendering (SSR). Static-only hosts (Netlify static, GitHub Pages) **are not compatible**.
- **Recommended platforms**:
  - [Railway](https://railway.app/)
  - [Render](https://render.com/)
  - [Fly.io](https://fly.io/)
  - Any VPS with Node.js (v18+) and a process manager (PM2, systemd)
- **File-system writes**: The admin panel writes to `src/data/products-en.json` and `src/data/products-ar.json`. Ensure the hosting filesystem is writable.
- **Session cookie**: The admin session cookie uses `Secure` flag, so HTTPS is required when not on localhost.

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
