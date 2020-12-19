# FriendlyPlant

## Description
FriendlyPlant is a free App where users can share their own plants, knowledge, seeds and much more!

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the plants.
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account.
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **Plants Section** - As a user I want to see all the plants options that other users uploaded.
- **Plants Info** - As a user I want to see all plant details.
- **My profile** - As a user I want to see my profile, upload it and upload my plants
- **About Us** - As a user I want to read about the owners of the app.

## Backlog

User profile:
- Chat
- Add comments about other users's plants
- See other users profile
- Add Favourites section on user profile

Homepage
- English version

## ROUTES:

- GET / 
  - renders the homepage
- GET /auth/signup
  - redirects to / if user logged in
  - renders the signup form (with flash msg)
- POST /auth/signup
  - redirects to / if user logged in
  - body:
    - username
    - email
    - password
- GET /auth/login
  - redirects to / if user logged in
  - renders the login form (with flash msg)
- POST /auth/login
  - redirects to / if user logged in
  - body:
    - username
    - password
- POST /auth/logout
  - body: (empty)
- GET /my-profile
  - renders /plants/edit
  - renders /plants/create
  
- GET /plants
  - renders the plants list + the create form
- POST /plants/create 
  - body: 
    - name
    - image
    - description
- POST /plants/edit 
  - Render user page
  - Update and add plant info

- GET /plants/:id
  - renders the same page only changing the state
  - includes the list of plants
  - attend favorite button 
- POST /events/:id/attend 
  - body: (empty - the user is already stored in the session)
  
-GET /AboutUs
  - renders About Us page 
  
  ## Models

-User model
  -email: String
  -username: String
  -password: String

-Plant model
  -PlantName: String
  -Description: String
  -Image: <img>
  -Date: date
  -Owner: String
  -Location: String
  
  ## Links

### Trello
https://trello.com/b/viLgYYeN/friendly-plants

### Git

https://github.com/Ayline1695/FriendlyPlant
  
