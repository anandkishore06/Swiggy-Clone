# Hey React 🚀

# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- Use File Watching Algorithm - written in C++
- Caching - faster Builds
- Image Optimization
- Minification
- Bundling
- Compress the file
- Consistent Hashing
- Code Splitting
- Differential Bundling - supports older browsers
- Error Handling
- HTTPs
- Diagnostics
- Tree Shaking - remove unused codes 
- Different dev and production bundles

# Assignment - 01

# 01. What is Emmet ?
- Emmet (formerly Zen Coding) is a set of plug-ins for text editors that allows for high-speed coding and editing in HTML, XML, XSLT, and other structured code formats via content assist.

- Support for Emmet snippets and expansion is built right into Visual Studio Code, no extension required

- Generating HTML Skeleton
  Just type ‘!` in the editor, it will show a pop up with the content that will be generated, press enter and there you have your HTML skeleton . Cool isn’t is?
  '''html
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    
    </body>
    </html>
  '''


# Two Types of export & import :

- Default Export/Import
  export default Component; 
  import Component from "path";

- Named Export/Import

  export const Component;
  import {Component} from "path";

# React Hooks

- They are normal JS utility functions.
  - useState() - Superpowerful State variables in react.
  - useEffect()

# Two types of routing - 

- Client Side Routing
- Server Side Routing

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Create a Slice (cartSlice)
- dispatch(action)
- selector

# Types of Testing (Developer)

- Unit Testing
  Testing one unit in isolation

- Integration Testing
  
- End to End Testing - e2e Testing

# Setting up Testing in our App
- Installed React Testing library
- Installed Jest
- Installed Babel dependencies
- Configure babel
- Configure Parcel Config file to disable default babel transpilation
- Jest Configuration  - npx jest --init 
- Install jsdom lib
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- Install @testing-library/jest-dom