# Happy.Co 
![happyco](https://github.com/raquellchavezz/Happy.Co_finalProject/assets/119717206/6ccc4332-f077-46de-8d24-333333391dbf)

# Contents
* About
* API Reference
# About
* Happy.Co is a simple yet user-friendly web application that allows visitors to browse through our selection of products as soon as they land on our site. Our platform features an easy-to-use interface that lets users add products to their favorites list for future reference.
* For added convenience and security, the application uses Auth0 to provide a reliable login process that verifies users' email addresses. Once logged in, visitors can continue exploring our product range and adding items to their favorites list at their leisure.
* APIs used: fake store API, Auth0

## API References 
  <ul>
        <li><a href="https://fakestoreapi.com/">Fake Store API</a></li>
        <li><a href="https://auth0.com/docs">Auth0 Authentication</a></li>
    </ul>
 
## Installation
Step 1. Go to the source directory in your terminal to clone this project. Once that is done, switch into the project directory.
```bash
 git clone https://github.com/raquellchavezz/Happy.Co_finalProject.git
```

Step 2. To remove the owner git track from the project's main directory, run the command `rm -rf .git`. Then run the command `git init` to start your own git track.
```bash
 rm -rf .git
 git init
```

Step 3. Switch into the server folder with the command `cd server` and install npm with the command `npm install`.
```bash
 cd server
 npm install
```

Step 4. Inside your server folder, create an .env file with the command `touch .env`. Copy the instructions in the .env.example files to copy the correct option for your configuation into the new .env file. 
```bash
 touch .env
```

Step 5. Staying inside of the server folder, run either option A or option B:
<ul>
 <li>A. The command `psql -U postgres -f db.sql` if your postgres is set-up with a user and password</li>
 <li>B. The command `psql -f db.sql` if your postgres is not set-up with a user and password</li>
</ul>

Here is what your command might look like:

```bash
 psql postgres -f db.sql
```
Step 6. Go to the client folder in the project with the command `cd ..` and `cd client`. Then run the command `npm install` in that client folder.
```bash
 cd .. 
 cd client
 npm install
```

Step 7: Run both servers by opening a new terminal and by switching over to the server folder with the command `cd server`in it. Then run the command `npm run dev` inside the new terminal. 
```bash
 cd server
 npm run dev
```
Note: Client server will be running on http://localhost:5173 and server will be running on http://localhost:8080.
Provided here is a test user so you will not have to create a an account to log in: 
* username: happy.couser@gmail.com
* password: Happy.Co4