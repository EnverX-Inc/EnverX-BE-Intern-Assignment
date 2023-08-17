[<image src="https://iili.io/Hi9giog.png" width="300" height="100">](https://www.enverx.com/)

EnverX offers a simple and convenient platform to fund early-stage projects
and trade future carbon credits.

## _Assginment For Backend Intern Role_
1. **Clone the Repository**: Start by cloning this repository to your local machine.
 git clone https://github.com/your-username/EnverX-BE-INTERN-ASSIGNMENT.git
 2.npm install to install all the required packages to run the project.
 3.make a database on mongodB atlas.
 3.Create a .env file in the project root directory and set up the necessary environment variables. 
 DB_USERNAME=your-mongodb-connection-string
 DB_PASSWORD=your-secret-key
 4.to run the project : npm start
 The server will run on http://localhost:5000


API Endpoints
**Users**
GET /api/user: Get a list of all users.
POST /api/user/signup: Register a new user.
POST /api/user/login: Log in an existing user.
**Blogs**
GET /api/blog/posts: Get a list of all blogs.
POST /api/blog/posts: Add a new blog.
PUT /api/blog/posts/:id: Update a blog by ID.
GET /api/blog/posts/:id: Get a specific blog by ID.
DELETE /api/blog/posts/:id: Delete a blog by ID.
GET /api/blog/user/:id: Get blogs by user ID.

5.use the above given api to test it on postman.
