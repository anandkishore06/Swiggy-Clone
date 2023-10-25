import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement() => JS-Object => render() => HTMLElement

// const heading = React.createElement("h1", { id: "heading" }, "Hey React 🚀");

// JSX (transpiled before it reaches the JS Engine) - Parcel - Babel
// JSX => Babel Transpiled to React.createElement => JS-Object => render-HTMLElemenet
// React Element
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    Hey React From JSX 🚀🚀🚀
  </h1>
);

// React Component

// React Functional Component

// const HeadingComponent = () => {
//   return <h1>Hey Functional Component ! 🚀</h1>;
// };

const Title = function(){
  return(
    <h1>This is Normal Function !</h1>
  );
}

const number = 1000;

const HeadingComponent2 = () => <h1>Hello Component2!</h1>;

const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    
    <HeadingComponent2 />
    <h2>{jsxHeading}</h2>
    <h1 className="heading"> Hello React ! How Are You ?</h1>
  </div>
);

console.log(jsxHeading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
