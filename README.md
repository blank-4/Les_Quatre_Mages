# _blank's End of Year project

## How ?
- You'll have to create a team of 3 developers.
- Then tackle this assignment, and specify your teams : [https://classroom.github.com/g/OJdVoPaW](https://classroom.github.com/g/OJdVoPaW). 
- Code and push regularly on your team's GitHub repository.
- __We will review the master branch on the last commit before the due dates.__

## Due dates
- You will have to deliver a first (static, front-end only) version of the project _BEFORE_ __Friday 6th, March 2019, 23:59__. No functionality is required, only the design of the front-end (style, animations, pages, etc.).
- The code and documentation in their final versions have to be delivered _BEFORE_ __Friday 7th, June 2019, 23:59__.

## Purpose
This assigment has been created to test all the knowledge and skills you acquired during _blank. Thus, you'll have to create a web app from scratch following the given specs.
Improving your project beyond instructions will be greatly appreciated and rewarded with Bonus Points (complex features, improved UI/UX, hosting, etc.).

## Oral exam
You will have to defend your project in front of a jury. During this exam, you will have to :
- Shortly introduce the context
- Make a live demo of the website
- Describe how your technical choices satisfy the needs
- Develop problems encountered and how you solved them
- Conclude

This oral exam will take place on __Monday 10th, June 2019 between 10am and 1pm__. You will have __20min__ to defend your project, and the jury will have __20min__ to ask your group questions.

## Seeking help
Each group is allowed to ask five questions to teachers. To do this, email directly one of us, or message us on the chat.

## Specs
### Goal
Create a web app mimicking the concept of : "Word Search" or "Mots Mêlés" in french.

### Functionalities
- __The user arrives on a landing page explaining the game. This page contains:__
  - A button leading to the game page ( Done )
  - A button leading to the scores page ( Done )
  - A button allowing user to login on the login page ( Done )
  - A button allowing user to signup on the signup page ( Done )
  - If the user is connected :
    - A button linking to its profile on the profile page
    - A button linking to its scores
    - A button allowing user to logout
- __The game page displays :__
  - A grid containing letters scrambled ( Done )
  - A dedicated area displaying words (you'll have to imagine a mechanism to show which words have been found) ( Done )
  - A place displaying current score
  - A place displaying the 3 best scores in this difficulty
  - A button to go back to landing page ( Done )
  - If the user is connected :
    - A button linking to its profile
    - A button linking to its scores
    - A button allowing user to logout
- __The score page displays :__
  - All scores in all difficulties (or at least the top ten in each difficulty)
  - If the user is connected :
    - A button linking to its profile
    - A button linking to its scores
    - A button allowing user to logout
    - Highlight its scores
  - Bonus points will be awarded for sorting, filtering, pagination, etc.
- __The login page displays :__
  - A field to enter username ( Done )
  - A field to enter password ( Done )
  - A button to login ( Done )
  - A button to signup on the signup page ( Done )
  - If the login is successful you will have to redirect the user on the front page or game page ( Done )
  - Upon login failure, adequate feedback is expected (error message, alert, ...)
- __The signup page displays :__
  - All information you need on the users as form fields (at least username and password) ( Done )
  - A button to signup ( Done )
  - If the signup is successful you will have to login the user redirect it on the front page or game page ( Done )
  - Upon signup failure, adequate feedback is expected (error message, alert, ...) ( Done )
- __The profile page displays :__
  - All information you have on the user as form fields (disabled if you do not want the user to edit those)
  - A button to edit information
  - Upon edit success, adequate feedback is expected (success message, alert, ...)
  - Upon edit failure, adequate feedback is expected (error message, alert, ...)
  - A button to cancel information and return on front page
- __Difficulty :__
  - Your game will have at least three levels of difficulty (Easy, Medium, Hard) ( Done )
  - Each level has to :
    - Have a different grid scale ( Done )
    - Have a different score growing scale
### Front-end
- **The Front-end has to communicate with the Back-end through REST API.**
- **You will have to use a front-end framework embracing the MVVM application design (Vue, React, ...).**

The Front-end will have to be : 
- Responsive (usable on tablet, mobile, and desktop) ( Done )
### Back-end
- **The Back-end has to communicate with the Front-end through REST API.**
- **The Back-end has to use concepts like routing, MVC**

The Back-end has to :
- Manage all data related to the web app
- Provide an API allowing user to login, logout, signup
- Provide an API allowing score saving and retrieving
- Provide an API to generate the Word Search grid (optional, you can do it in the frontend)
- Embrace security guidelines
### Database
- **The Database has to be either MongoDB or MariaDB**
- **You'll have to provide an MCD (Modèle Conceptuel de Données)**
- You have to connect your database to the backend embracing security guidelines
## Documentation
- **You will have to create a Technical Documentation describing the backend APIs  (routes, parameters, etc.) and how to setup the web app on a new server (database, backend and frontend)**
- **You will have to create an User Documentation explaning how the it can use your web app**
## Scoring scale (/20)
### Code & documentation (/5)
- Code comments ( Done )
- Technical documentation (API & setup)
- User documentation
- Code conventions & organisation (indentation, variable and functions names, etc.) ( Done )
- Git & Github ( Done )
### Functionnalities (/5)
- Login, signup, logout, edit user
- Can play the game
- See the found and remaining words
- Can see the scores
- Has different levels of difficulty
### Back-End (/3)
- MVC pattern
- Routing and routes clarity
- Use of middlewares
- Framework used
- ORM used
### Front-End (/3)
- Design (UI/UX) ( Done )
- API calls
- MVVM pattern ( Done )
- Framework used ( Done )
- Responsive ( Done )
### Presentation (/4)
- Slides quality
- Distribution of speaking time
- Website presentation
- Ease of public speaking
- Answer questions from _blank team
### Bonuses (+6)
- UI/UX Mockups (2)
- Deployment guidelines (docker, apache configuration, etc.) (2)
- Unit testing (2)
