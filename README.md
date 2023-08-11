### Blog Crud api

### Tech Stack

- nodejs , expressjs , mongodb , mongoose

### Instructions for using locally

```diff
- Fork this repository
- install all required libraries by 'npm install' inside folder
- make .env file and paste this "MONGO_URI=" with mondodb url
```

### Routes:

&nbsp;

| Method | Url        | Description                     |
| ------ | ---------- | ------------------------------- |
| GET    | /blogs     | Get all blog posts.             |
| GET    | /blogs/:id | Get a specific blog post by ID. |
| POST   | /blogs     | Create a new blog post.         |
| PUT    | /blogs/:id | Update an existing blog post.   |
| DELETE | /blogs/:id | Delete a blog post.             |
