### Description 
LinkedIn Clone

Implementation of the LinkedIn-style Front-End.

### Screen `Profile Page`
![001](https://user-images.githubusercontent.com/98649610/216772433-a34779a6-94c7-4b45-9cf6-780ca9952a08.JPG)

### Screen `Screenshot #2`
![002](https://user-images.githubusercontent.com/98649610/216772436-86c5e064-f5b6-49d7-aedc-387829f6f717.JPG)

### Screen `Screenshot #3`
![003](https://user-images.githubusercontent.com/98649610/216772439-9d83f7c1-c26b-4f53-851b-8dfd6a082144.JPG)

### LinkedIn clone
Q1: You will implement the LinkedIn style frontend.

My profile page:
Recreate it as faithfully as possible to the original.
https://www.linkedin.com/in/me/

Create your profile HERE: https://strive.school/linkedin-registration
Receive the API authentication token.

API Docs: (provide authentication with your Bearer Token)

### PROFILES:
GET https://striveschool-api.herokuapp.com/api/profile/
     Returns the list of user profiles
GET https://striveschool-api.herokuapp.com/api/profile/me
     Return your profile
GET https://striveschool-api.herokuapp.com/api/profile/{userId}
     Returns a specific profile
PUT https://striveschool-api.herokuapp.com/api/profile/
     Update your user profile

     PROFILE model:

     {
         "_id": "5d84937322b7b54d848eb41b", // server generated
         "name": "Diego",
         "surname": "Banovaz",
         "email": "diego@strive.school",
         "bio": "SW ENG",
         "title": "COO @ Strive School",
         "area": "Berlin",
         "image": ..., // server generated on upload
         "username": "admin", // server generated from Auth
         "createdAt": "2019-09-20T08:53:07.094Z", // server generated
         "updatedAt": "2019-09-20T09:00:46.977Z", // server generated
         "__v": 0 // server generated
     }

     Suggestions:
         Divide the page into reusable components
         Define as a team who will do what
         When you fetch the current user,
saves the information in the Redux Store so that each component
can access the information later (e.g. the Navbar component)

### LinkedIn clone – D2

You will implement the LinkedIn style frontend.
Experiences section of the profile you started yesterday.

Recreate it as faithfully as possible to the original.
https://www.linkedin.com/in/me/

Create your profile HERE ➡️ https://strive.school/linkedin-registration ⬅️

And receive the auth token to the API.

📃 API Docs: (provide authentication with your Bearer Token)

### EXPERIENCES:
- GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
Returns a list of experiences
- POST https://striveschool-api.herokuapp.com/api/profile/:userId/experiences
Create a new experience. NOTE: Each user is only allowed to edit their own experiences
- GET https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
Return a specific experience
- PUT https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
Modify a specific experience

- DELETE https://striveschool-api.herokuapp.com/api/profile/:userId/experiences/:expId
Deletes a specific experience


### LinkedIn clone – D3
You will implement the LinkedIn style frontend.
Today we will focus on the news page (news)
If there is something unfinished, finish it before starting a new feature.

Recreate it as faithfully as possible to the original.
https://www.linkedin.com/in/me/

Create your profile HERE ➡️ https://strive.school/linkedin-registration ⬅️
And receive the auth token to the API.

📃 API Docs: (provide authentication with your Bearer Token)

POSTS:
- GET https://striveschool-api.herokuapp.com/api/posts/
  Returns a list of existing posts
- POST https://striveschool-api.herokuapp.com/api/posts/
  Create a new post. NOTE: Each user is allowed to edit only his own posts
- GET https://striveschool-api.herokuapp.com/api/posts/{postId}
  Returns a specific post
- PUT https://striveschool-api.herokuapp.com/api/posts/{postId}
  Edit a specific post
- DELETE https://striveschool-api.herokuapp.com/api/posts/{postId}
  Delete a specific post


POST model:
     {
         "_id": "5d93ac84b86e220017e76ae1", // server generated
         "text": "this is a post text", // the only property you need to send
         "username": "admin", // server generated
         "createdAt": "2019-10-01T19:44:04.496Z", // server generated
         "updatedAt": "2019-10-01T19:44:04.496Z", // server generated
         "__v": 0 // server generated
     }


### LinkedIn clone – D4

You will implement the LinkedIn style frontend.
Today we will focus on uploading images
Each user will need to be able to include images for their profile/experiences/posts

To upload images you will need to use an input of type file and a FormData object. 
Part of the challenge is researching and figuring out how to use it.
 
If there is something unfinished, finish it before starting a new feature.

Recreate it as faithfully as possible to the original.
 https://www.linkedin.com/in/me/

Create your profile HERE:
https://strive.school/linkedin-registration

And receive the auth token to the API.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
