
# Session Application



Welcome to the Session Application! This application allows users to dynamically set their availability and schedule sessions accordingly.
## Installation

- **Clone the repository:**

```bash
git clone https://github.com/Varunreddy489/SessionSync.git
```
    
- **Navigate to the project directory:**

```bash
cd SessionSync
```

- **Open 2 terminals and navigate to the project directory in both:**

    - Backend terminal

    ```bash
    cd backend
    ```
    - Frontend terminal

    ```bash
    cd frontend
    ```

-  **Install backend dependencies and run :**

    ```bash
    npm install
    npm run dev
    ```

-  **Install frontend dependencies and run :**

    ```bash
    npm install
    npm run dev
    ```
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```bash
MONGO_URI=your_mongodb_uri
ADMIN_JWT_SECRET=your_admin_jwt_secret
JWT_SECRET=your_jwt_secret
PORT=your_port_number
```



## Tech Stack

**Client:** React, Shadcn, TailwindCSS ,TanStack Query

**Server:** Node, Express , Nodemailer ,REST Api

**Prerequisites:**
   - Node.js,
- npm or yarn
-    MongoDB


## Features

 **Dynamic Availability Setting:**
 - Users can set their availability for specific days or for the entire week.
 **Admin Scheduling:**
- Admin can view user availability and schedule sessions (one-on-one or group).

 **Admin Panel:**
- A dedicated panel for the admin to manage sessions, users, and availability.
**Rate Limiting:**
- Controls the number of requests to enhance performance and security.

**Email Notifications:**
- Automatically sends emails to participants when sessions are scheduled.
**Backend Logging:**
- Logs system activity, session creation, availability updates, and scheduling events.

- Tracks errors and exceptions for easier debugging and troubleshooting.
- Monitors performance metrics, such as request response times, for system optimization.

