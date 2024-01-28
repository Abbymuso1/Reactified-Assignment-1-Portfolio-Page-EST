# Portfolio Page

This project is the an upgraded reactified version of my [first portfolio website](https://abbymuso1.github.io/Assignment-1-Portfolio-Page-EST/)

### Technologies Used

* HTML
* CSS
* JavaScript
* ReactJS
* Vite

### Interesting and new features in it

* Enables Dark and light mode
* Enables changing of themes
  
### Link to my deployed website
Deployed using netlify
* [Abigail's Portfoliio]()

----------------------------------------------------------
# Assignment - Questions and Answers

1. What is `NPM`?
**NPM stands for Node Package Manager. It is basically a package manager and a software register and using it users can utilize packages within it for their personal projects. It is used in the management of Node.js packages and supports the Javascript community. (Metwalli, 2023)**
1. What is `SPA`?
**SPA stands for a single page application. This refers to a web page that engages in real-time interaction with the web browser by dynamically updating its content with data fetched from the web server. Essentially, the page remains active within the browser without the need for reloading in the browser. It is mainly applied in ReactJS. (Chauhan, 2022)**
1. What is `the event loop`?
**An event loop is responsible for continually retrieving tasks from a queue and pushing them onto the function execution stack whenever the stack is cleared.. (GeeksforGeeks, 2023)**
1. What is the difference between `export x` and `export default x`? How do you import them differently?
**In React, export default serves to export a single value or function as the default export, while export with named exports is utilized to export multiple values under distinct names. (Hesham El Masry, 2023)**
1. Why do you use `className` as a property in React and not `class`?
**The reason for using className over class stems from JavaScript's reserved keyword class, which could lead to conflicts within JSX syntax. Given that JSX is an extension of JavaScript primarily used in React, the usage of className ensures compatibility and avoids potential naming collisions with the class keyword (GeeksforGeeks, 2023)**
1. Why should you not write the following? What will happen?
```
<button onClick={setCounter(counter + 1)}> +1 </button>
```
1. What is `object deconstruction` and how is it connected to React components (example)?
**It is a feature in JavaScript that enables the extraction of multiple data elements from an array or object, assigning them to individual variables. It enhances code readability and maintainability and within React, object destructuring finds frequent application in extracting state values passed to a component. (freeCodeCamp.org, 2018)**
1. How is it possible to use `HTML` and `JavaScript` in the same function (like in a `React Component`)? What makes it possible under the hood?
**React components offer the ability to blend HTML-like syntax, known as JSX, with JavaScript seamlessly within a single function. This integration is facilitated by React's JSX compiler, which translates JSX into JavaScript functions responsible for manipulating the Document Object Model (DOM) (Introducing JSX – React, 2024)**
1. What is `async/await`? Bring an example
**Async means asynchronous.It is a JavaScript feature designed to manage asynchronous tasks in a manner that resembles synchronous programming. It enables the execution of functions without blocking the entire program. This capability is achieved through the use of the async and await keywords. (Kumar, 2021)**
1. What is a `Promise`? Bring an example
**A Promise is a JavaScript object designed to handle the outcome of asynchronous tasks. It encompasses three states: pending, resolved (or fulfilled), and rejected. The primary goal is to enhance the readability and maintainability of asynchronous code by providing a structured approach that mimics synchronous programming. (Shad, 2023)**

## References
* [Chauhan, H. (2022, May 6). A Beginner’s Guide to Create SPA with React Js. DEV Community.] (https://dev.to/hiteshtech/a-beginners-guide-to-create-spa-with-react-js-491c)
* [freeCodeCamp.org. (2018, April 23). Learn the basics of destructuring props in React.] (https://www.freecodecamp.org/news/the-basics-of-destructuring-props-in-react-a196696f5477/)
* [GeeksforGeeks. (2023, December 18). What is an event loop in JavaScript.] (https://www.geeksforgeeks.org/what-is-an-event-loop-in-javascript/)
* [GeeksforGeeks. (2023a, October 30). Why React uses className over class attribute.] (https://www.geeksforgeeks.org/why-react-uses-classname-over-class-attribute/)
* [Hesham El Masry, H. R. H. E. M. (2023, August 15). Understanding the Difference between export default and export with Named Exports in JavaScript. Medium.] (https://medium.com/@heshramsis/understanding-the-difference-between-export-default-and-export-with-named-exports-in-javascript-f0569c221a3#:~:text=export%20default%20is%20used%20to,for%20code%20organization%20and%20reusability.)
* [Introducing JSX – React. (2024). React.] (https://legacy.reactjs.org/docs/introducing-jsx.html)
* [Kumar, N. (2021, February 2). How to Use Async/Await in JavaScript with Example JS Code. freeCodeCamp.org.] (https://www.freecodecamp.org/news/async-await-in-javascript/#:~:text=Async%2FAwait%20makes%20it%20easier,wait%20until%20the%20Promise%20resolves.)
* [Metwalli, S. (2023, March 28). What is NPM? Built In.] (https://builtin.com/software-engineering-perspectives/npm)
* [Shad, S. (2023, November 7). Understanding promises in JavaScript and their use in React. Medium.] (https://medium.com/@sharareshaddev/understanding-promises-in-javascript-and-their-use-in-react-a77564aae576)
* [TiShow. (2022, January 4). 【React Hooks】Why you shouldn’t write setCount(count + 1). Medium.] (https://t-i-show.medium.com/react-hooks-why-you-shouldnt-write-setcount-count-1-e3ef2f046d31)



