# Global Cuisine
Heroku Link <br/>
https://global-cuisine.herokuapp.com/#/

# Intro
Have you ever wished that all of your favorite recipes were all stored in one, safe, easy to access place? Are you ever curious about what other peoples favorite recipes are. Well the application Global Cuisine will fulfill all of your desires.

This application will allow users to upload their favorite recipes, as well as browse the recipes of other users and leave reviews on them.

To build this app we must

•	Build a database to store our data on users and recipes

•	Construct a Web application to hold and visualize our data

# MVPs
•  Splash Page 

•  User authorization: sign up and log in 

•  Saving data on Users and recipes to the database

•  Interactive search bar allowing users to search for recipes based on different filters

•  Display each recipe 

•  Allow users to review each individual recipe and to display each recipes reviews.

•  Production README

## Home page
<img width="762" alt="home page" src="https://user-images.githubusercontent.com/86028417/144790691-055b101f-48d7-4999-a84d-63be41fc46ca.png">

## Recipe show page

<img width="762" alt="Show page" src="https://user-images.githubusercontent.com/86028417/144790709-b93c95fb-9af9-41a5-bf10-0fc1b86261e5.png">

## Index page that show filtered recipe from search result

<img width="762" alt="Screen Shot 2021-12-05 at 9 22 39 PM" src="https://user-images.githubusercontent.com/86028417/144791848-1887db82-abb6-4c8f-a8ab-7bc4575d71bf.png">

## Technical Challenges

### Overview
Global Cuisine is built with the MERN stack(MongoDB, Express, React, and Node). MongoDB will be used to store user authorization information including emails, passwords, and usernames. Amazon Web Services will be used to store images.

MongoDB will also store recipe and review information.  The lack of a fixed schema will make the user’s recipe and review field data fields concise. There will not be an abundance of blank cells for the optional data fields. 

We will use bcrypt to salt the passwords. Validator will be used for validations. Express will provide the framework to create JSON APIs.

**Backend Technical challenges:**

* Connecting the backend to the front-end while working on two different branches
* Storing images in Amazon Web Services
* Seeding the database in a timely manner


The front end will render the data from the MongoDB database and style it effectively.

React JS handles the logic behind the visual display of the data stored in MongoDB.  CSS will be used to style the pages. We will use Babel to transpile ES6+ Javascript and Webpack to bundle client side-javascript.

**Front-Technical challenges**

* Fetching accurate data to build the recipe page

* Rendering error messages which reflect the database constraints

* Ensuring that only the recipe owner can modify their own listings

* Ensuring that hosts are not able to write reviews on their own recipes

* Building an effective search function with a limited amount of users and recipes stored in the database.


# Work Breakdown and Roles

* Back-end lead: **Andrew**
* Front-end lead: **Cal**
* Lead/Front and Backend helper: **Anusha**
  
### Day 1: User Auth
* UserAuth and backend routes and testing-**Andrew**
* Create a React-Skeleton(components,containers,front-end routes, index, show pages etc)-**Cal and Anusha**
* Create front-end routes, Action thunk creators, entry page and login/signup forms/connect to backend-**Cal**
    
### Day 2: Listings
* Backend routes and db-**Andrew**
* Front-end listing show page/index page/containers/components-**Cal**
* Style login form and splash page-**Anusha**
* Seed the database-**Anusha**
    
### Day 3: Reviews
* Meet to discuss our progress
* Backend routes and db for reviews
* Front-end work for the reviews
* Styling of listing pages

### Day 4: Searchbar
* Implement search bar
* Finish styling
* Search for bugs
* Complete Production README.MD
