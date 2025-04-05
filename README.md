# Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- Dark mode support
- Contact form
- Social media links
- Projects showcase (coming soon)
- Smooth scroll-to-top button

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/debiprasad/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This website is optimized for deployment on [Vercel](https://vercel.com). To deploy:

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Click "Deploy"

Vercel will automatically detect that this is a Next.js project and configure the build settings.

### Alternative Deployment Options

1. **Static Export**
   ```bash
   npm run build
   ```
   This will create a static version in the `out` directory that you can deploy to any static hosting service.

2. **Docker**
   ```bash
   # Build the container
   docker build -t personal-website .
   
   # Run the container
   docker run -p 3000:3000 personal-website
   ```

## Tech Stack

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [React](https://reactjs.org)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
