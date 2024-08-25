# Prerequisites
Ensure you have the following installed:

- Node.js (v14 or higher)
- Docker and Docker Compose (if using Docker)
- npm or yarn (for managing dependencies)

# Setup Instructions

## Server Setup
Navigate to the server directory:

```sh
cd server
```

Create a `.env` file based on the `.env.example` file. You need to provide your environment-specific variables in this file. For example:
```sh
cp .env.example .env
```
Edit the .env file and configure your environment variables as need

# Running the Project
## Development Mode
1. Start the server:

```sh
cd server
npm install
npm start
```

2. In a new terminal, start the client:

```sh
cd client
npm install
npm run dev
```

## Production Mode
Build the Docker images:

```sh
docker-compose up -d --build
```