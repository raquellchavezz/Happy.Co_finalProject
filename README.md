# Happy.Co

![happyco](https://github.com/raquellchavezz/Happy.Co_finalProject/assets/119717206/6ccc4332-f077-46de-8d24-333333391dbf)

Link to the website: https://server-r1g6.onrender.com/

# Contents

- About
- API Reference

# About

- Happy.Co is a simple yet user-friendly web application that allows visitors to browse through our selection of products as soon as they land on our site. Our platform features an easy-to-use interface that lets users add products to their favorites list for future reference.
- For added convenience and security, the application uses Auth0 to provide a reliable login process that verifies users' email addresses. Once logged in, visitors can continue exploring our product range and adding items to their favorites list at their leisure.
- APIs used: fake store API, Auth0

## API References

  <ul>
        <li><a href="https://fakestoreapi.com/">Fake Store API</a></li>
        <li><a href="https://auth0.com/docs">Auth0 Authentication</a></li>
    </ul>

### Built With

<table align="center">
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168923681-ece848fc-5700-430b-957f-e8de784e9847.png" width="48" height="48" alt="html" />
      <br>html
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168924521-589f95da-069a-496a-bcc1-ee6dd132ff12.png" width="48" height="48" alt="CSS" />
      <br>CSS
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168977094-6a5073a2-2f48-4f5a-ae0e-ed1421a678c6.png" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168976819-15a1f4e0-29cf-4ac0-94a7-1f15eee374a1.png" width="48" height="48" alt="postgreSQL" />
      <br>postgreSQL
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168978951-5ac2af5e-c911-4e59-b493-683071cf1860.png" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979311-4a486cad-32c8-46f4-a5da-912fdc51b2d6.png" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168979848-733f7090-0f78-401a-9ceb-4267231abef7.png" width="48" height="48" alt="Node" />
      <br>Node
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168980647-1690f9de-bf0e-4318-93cb-1b2ba3701ded.png" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap
    </td>
    <td align="center" width="96">
        <img src="https://pbs.twimg.com/profile_images/1337188620222906368/oNKK_fVe_400x400.jpg" width="48" height="48" alt="Render" />
      <br>Render
    </td>
  </tr>
</table>

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

- username: happy.couser@gmail.com
- password: Happy.Co4

## Contact Me

Feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/rachel-raquel-chavez-758292212) for any comments or questions.
