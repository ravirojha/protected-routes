# Getting Started with Routing and Auth routes

### To run

```shell
npm i -g pnpm
pnpm install
npm start
```


This example code has React router dom integrated, and we will see how we can use
Protected routes to show some Page based on user authentication and roles

1. Auth component currently accepts 2 props. `role` and `element`. Correct the code so that
   1. Auth component should load the the logged in user details from UserService fetchLoggedInUserDetails function
   2. The function mock an actual api call and returns data after 2 seconds, Show the loader component till data is not being loaded from the function
   3. if role props is empty or null, and loggedInUserDetails returns valid user, then render the component it is supposed to render
   4. if role props have some role, and loggedInUserDetails has one of the role as in props, render the component it is supposed to render
   5. if the role props have some role, and loggedInUserDetails role does not belong to any one of them, show the forbidden access component

2. When navigating to / or /home page, the loader component should be shown for some time till data is not being loaded, then it should render the Home component


3. When navigating to /dashboard page, the loader component should be shown for some time till data is not being loadedm then based on user role is admin or regular, either render the dashboard component or forbidden access


4. At some case, the fetchLoggedInUserDetails would throw error at random, if that happens, navigating to any route should redirect to /login page and console.log the error



