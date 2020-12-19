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
- **Plants Form** - As a user I want to create, edit and delete plants.
- **My profile** - As a user I want to see and edit my profile
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
  - Renders profile/view
  - URL /plants/edit
  - URL /plants/create
  
- GET /plants
  - renders the plants list + 
-Get /plants/create
  - render plants-form-create (plantilla)
- POST /plants/create 
  - body: 
    - name
    - image
    - description
- POST /plants/edit 
  - Render plant-form-edit(plantilla)
  - Update and add plant info

- GET /plants/:id
  - renders the view and details of the plants (plants-view)
  - favorite button 
- POST /plants/:id/favourites
-Add id plant to user profile
  
-GET /AboutUs
  - renders About Us page 
  
  ## Models
```
-User model
  -email: String
  -username: String
  -password: String
  -createdPlants: [ { type: Schema.Types.ObjectId, ref: "Plant" } ]
```
```
-Plant model
  
  -plantName: String
  -description: String
  -image: String
  -date: Date
  -owner: { type: Schema.Types.ObjectId, ref: "User" }
  -location: String
  ```
  ## Links

### Trello
https://trello.com/b/viLgYYeN/friendly-plants

### Git

https://github.com/Ayline1695/FriendlyPlant
  
