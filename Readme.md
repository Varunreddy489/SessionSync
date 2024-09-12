# Session Application

Welcome to the Session Application! This application allows users to dynamically set their availability and schedule sessions accordingly.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [License](#license)

## Features

- **Dynamic Availability Setting**:
    **Users can set their availability for specific days or for the entire week.**
- **Admin Scheduling**: 
    **Admin can view user availability and schedule sessions (one-on-one or group).**
- **Admin Panel**: 
    **A dedicated panel for the admin to manage sessions, users, and availability.**
- **Clean and Intuitive User Interface**:
    **User-friendly design for seamless interaction.**
- **Rate Limiting**:
    **Controls the number of requests to enhance performance and security.**
- **Email Notifications**:
    **Automatically sends emails to participants when sessions are scheduled.**
- **Backend Logging**:
   **Logs system activity, session creation, availability updates, and scheduling events.**
  **Tracks errors and exceptions for easier debugging and troubleshooting.**
   **Monitors performance metrics, such as request response times, for system optimization.**



## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

## Installation

1. **Clone the repository:**

```bash
    git clone https://github.com/Varunreddy489/SessionSync.git
```

2. **Navigate to the project directory:**

```bash
    cd SessionSync
```

3. **Open 2 terminals and navigate to the project directory in both:**

   Backend terminal

   ```bash
   cd backend
   ```

    Frontend terminal

    ```bash
    cd frontend
    ```

4. **Install backend dependencies and run :**

    ```bash
    npm Install
    npm run dev
    ```x

5. **Install frontend dependencies and run :**

   ```bash
   npm Install
   npm run dev
   ```

## Environment Variables

**Create a `.env` file in the backend directory and add the following environment variables:**

```env
    MONGO_URI=your_mongodb_uri
    ADMIN_JWT_SECRET=your_admin_jwt_secret
    JWT_SECRET=your_jwt_secret
    PORT=your_port_number

