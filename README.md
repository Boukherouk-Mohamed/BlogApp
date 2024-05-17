# Blog CRUD App

This is a full-stack blog CRUD (Create, Read, Update, Delete) application built with Next.js, MongoDB, and NextAuth for authentication. The app allows users to register, log in, and manage blog posts. Each blog post includes a title, content, creation date, and information about the author. The app uses Tailwind CSS and DaisyUI for styling and is fully dockerized for easy deployment.

### Features

- User authentication (register and login) with NextAuth
- CRUD operations for blog posts
  - Create a new blog post
  - Edit an existing blog post
  - Delete a blog post
  - View details of a specific blog post, including the author and creation date
- Pagination for the list of blog posts
- Search functionality to allow users to search for blog posts by title or content
- A rich text editor for creating and editing blog post content
- Responsive UI built with Tailwind CSS and DaisyUI

### Prerequisites

- Node.js
- Docker (optional, for containerized deployment)
- MongoDB instance (local or cloud)

### Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/Boukherouk-Mohamed/BlogApp.git
cd BlogApp
```


## 2. Install Dependencies

```bash
npm install

```

## 3. Environment Variables

Create a .env file in the root of your project and add the following environment variables:
```bash
NEXTAUTH_SECRET=your_nextauth_secret
MONGODB_URI=your_mongodb_uri
```

## 4. Running the App
### 4-1. Without Docker

To run the app locally without Docker:
```bash
npm run dev
```
The app will be available at http://localhost:3000.
### 4-1. With Docker

To run the app using Docker:

Build and start the containers:
```bash
docker-compose up --build
```
The app will be available at http://localhost:3000.

## Usage
  ### Authentication
  - Register a new user or log in with an existing account.
  - After logging in, users can create, edit, and delete their own blog posts.
  ### Blog Management
  - Create a Blog Post: Navigate to the "Create Blog" page, fill in the title and content, and submit.
  - Edit a Blog Post: Navigate to the blog post details page and click "Edit". Update the content and save changes.
  - Delete a Blog Post: Navigate to the blog post details page and click "Delete".
  - View Blog Post Details: Click on a blog post title from the list to view its details, including the author and creation date.
  - Pagination: Navigate through the list of blog posts using the pagination controls at the bottom of the list.
  - Search: Use the search bar to find blog posts by title or content.


## Contact
For any questions or feedback, please contact boukherouk.mohamed@gmail.com.
