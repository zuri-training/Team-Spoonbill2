# Contributing to favicon_gen
Our individual contribution is what will see this project to finish, to make the contributions seamless we have to follow some rules by:
- Reporting an issue
- Discussing the current state of the code.
- Submitting a fix.
- Proposing new features
- Becoming a maintainer.
## Our Development Process
All changes happen through pull requests. Pull requests are the best way to propose changes. We actively welcome your pull requests and invite you to submit pull requests directly to the main project , and after review, these can be merged into the project.
## Contribution Guidelines to adhere if you haven't forked the repo

1. Clone the repo 
    ```
    https://github.com/zuri-training/Team-Spoonbill2.git
    ```
2. Open your terminal & set the origin branch:
    ```
    https://github.com/zuri-training/Team-Spoonbill2.git
    ```
3. Pull origin 
    ```
    git pull
    ````
4. Create a new branch for the task you were assigned to, eg :
    ```
    git checkout -b {name of your branch}
    ```
5. After making changes, do 
    ```
    git add .
    ```
6. Commit your changes with a descriptive commit message :
    ```
    git commit -m "your commit message e.g Added a user login"
    ```
7. To make sure there are no conflicts, run 
    ```
    git pull
    ```
8. Push changes to your new branch, run 
    ```
    git push  origin {feat-user-login}
    ```

9. Create a pull request to the `main` branch.
10. Please describe your pull request.
11. If you've added code that should be tested, add some test examples.

 Your changes will be merged into the `main` branch when they are approved by the reviewer.
 
## Quickstart Local Frontend Development

## Manual Full Local Development
How to run locally:

## Tech Requirement
2. **MongoDB** (installed)
4. **Nodejs** (installed)
5. **NPM** / **Yarn** (installed)

## Getting Started

1. Clone the repo.

#### Frontend.

2. move into the `frontend` folder 
3. Install all projects dependencies using
    ```
       npm install
    ``` 
4. Start frontend development server. 
    ```
    npm start
    ```
    This should startup a local server at 
    ```
    http://localhost:3000
    ```
     we will be using parcel bundler at the end.
     this is after every page has been developed


#### Backend.

2. move into the backend folder
    ```
    cd backend
    ``` 
3. Install all projects dependencies using 
    ```
       npm install
    ``` 
4. Start backend server locally.. 
    ```
       npm start
    ```
    This should startup a local server at
     ```
     http://localhost:5000
     ```
5. On Start, make sure MongoDB server is running succesfully

