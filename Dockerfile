# Use the official Node.js image as a base image
FROM node:14

# Set working directory for the application
WORKDIR /app

# Copy both frontend and backend package.json and package-lock.json to leverage Docker cache

# Install dependencies for both frontend and backend


# Copy the rest of the application code for both frontend and backend
COPY frontend/ ./frontend
COPY backend/ ./backend

RUN npm install --prefix frontend && npm install --prefix backend
# COPY frontend/package*.json backend/package*.json ./

# Build frontend
RUN npm run build --prefix frontend

# Copy the built frontend from frontend to backend's public folder
COPY frontend/dist /app/backend/src/public

# Expose port for the application
EXPOSE 3333

# Start the application
CMD ["npm", "run", "dev", "--prefix", "backend"]
