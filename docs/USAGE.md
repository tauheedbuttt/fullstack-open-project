# Usage Guide

This project uses [NX](https://nx.dev) as the monorepo tool. All applications (backend API, admin dashboard, and mobile app) are managed as separate workspaces. You can serve or run each app independently using the provided NX commands.

## 1. Prerequisites

- Ensure you have installed all dependencies:
  ```
  npm install
  ```
- Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

## 2. Running Applications

You can serve each app individually using `npx nx serve <appname>`.  
The main applications are:

- `backend` — NestJS API server
- `dashboard` — React admin dashboard
- `mobile` — React Native mobile application

### To Serve Backend API

```
npx nx serve backend
```

- By default, this starts the NestJS backend API (usually on [http://localhost:3000](http://localhost:3000)).

### To Serve Admin Dashboard

```
npx nx serve dashboard
```

- Opens the React dashboard locally, typically on [http://localhost:4200](http://localhost:4200).

### To Serve Mobile App

```
npx nx serve mobile
```

- This will launch the React Native project.
- Use your preferred emulator or device for development (see mobile app README for detailed instructions on running iOS/Android builds).

---

## 3. Development Workflow

- Make changes in any app or shared package as needed.
- The monorepo setup allows code sharing and efficient builds across the workspace.
- Use `npx nx affected:apps` to see which apps are impacted by your changes.

## 4. Troubleshooting

- If any serve command fails, make sure all dependencies are installed and your environment variables (e.g., database connection) are properly configured in the relevant app's `.env` file.
- Consult individual app READMEs for advanced usage, tests, or build commands.

---
