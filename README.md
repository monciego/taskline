# Project Management Dashboard

A Project Management system built using a modern web stack. This project leverages the following technologies and services:

## Tech Stack

### Frontend:

- **Next.js**: A powerful React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Material UI Data Grid**: Provides advanced data table capabilities to display and manipulate complex datasets with ease.
- **Redux Toolkit**: Simplifies state management with centralized stores and reducers.
- **Redux Toolkit Query**: Handles efficient data fetching and caching, integrating seamlessly with Redux.

### Backend:

- **Node.js**: A versatile runtime for building fast and scalable server-side applications.
- **Express**: A minimal and flexible Node.js web application framework for building APIs.
- **PostgreSQL**: A powerful, open-source relational database system.
- **Prisma**: A next-generation ORM that simplifies database access and queries.
- **PgAdmin**: A feature-rich tool for managing and administering PostgreSQL databases.

### Cloud & DevOps:

- **AWS Lambda**: Serverless computing service that runs code in response to events.
- **AWS Cognito**: Provides user authentication and access control for the application.

## Features

- **Project Management Dashboard**: A central hub to manage and track projects with customizable workflows.
- **User Authentication**: Secure login and registration system powered by AWS Cognito.
- **State Management**: Centralized state management with Redux Toolkit to ensure smooth UI/UX.
- **Data Handling**: Efficient data fetching and caching using Redux Toolkit Query.
- **Responsive Design**: Styled with Tailwind CSS to ensure the application looks great on all devices.

## Installation and Setup

To get started with this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/monciego/taskline.git
   cd taskline
   cd client
   ```

2. **Install Dependencies**:

   ```bash
   pnpm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the necessary environment variables for PostgreSQL, Prisma, AWS, etc.

4. **Database Setup**:
   Ensure PostgreSQL is installed and running. Then, run Prisma migrations to set up your database schema:

   ```bash
   npx prisma migrate dev
   ```

5. **Run the Application**:
   ```bash
   pnpm run dev
   ```
   This will start your Next.js application in development mode. You can access it at `http://localhost:3000`.

## Additional Setup

- **AWS Configuration**: Ensure you have AWS credentials configured locally. Set up your Lambda functions and Cognito user pool as required.

## License

This project is licensed under the MIT License.
