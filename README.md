``How to run locally``

## Install dependencies:

npm install

## For Mac user Install dependencies:

sudo npm install

## Start the frontend server:

npm run dev || sudo npm run dev

``Project Description``

This is a Next.js full-stack project where users can register, log in, create posts, edit or delete them, update their profile, and search posts by title. It’s built with Next.js, Tailwind CSS, TypeScript, and uses MongoDB for the database. The project demonstrates a simple social posting platform with essential CRUD functionality and user authentication.

``Features``

- User Authentication: Register, login, and logout securely.

- Create Post: Users can create new posts with a title and content.

- Edit & Delete Post: Update or remove your existing posts.

- Profile Page: View and update user information.

- Search Posts: Search posts by title for easy filtering.

- Responsive UI: Built with Tailwind CSS for a clean and responsive design.


``How I would scale this for production``

## Frontend:

Component library + design tokens, strict folder structure, TypeScript, React Query for caching, SSR where needed, bundling optimization, CDN + Vercel for edge.

E2E tests (Cypress), unit tests (Jest/RTL), CI pipeline to run tests and lint.

## Backend:

Separate microservices for auth and core APIs, use Postgres or managed Mongo for production, use connection pooling (PgBouncer).

Use refresh tokens with rotating refresh tokens, rate limiting, input sanitization, centralized logging (ELK), monitoring (Prometheus + Grafana), and deploy behind load balancer with autoscaling.

Use managed secrets (AWS Secrets Manager) and set up CI/CD (GitHub Actions).

## Database & infra:

Use managed DB (Mongo Atlas / RDS). Use replicas and backups. Use Redis for caching and sessions. Use a CDN and put static assets on S3.


``These are all API endpoints (test them)``

- POST /api/register — { fullName, email, password } → create account

- POST /api/login — { email, password } → returns token

- GET /api/profile — auth required → returns user detail

- PUT /api/profile — auth required → update user detail

- GET /api/post — users all posts

- POST /api/post — create post

- PUT /api/post/:id — update post

- DELETE /api/post/:id — delete post

``Thats it ``