import User from "./User";
import UserClass from "./UserClass";
import React from "react";
// import "@progress/kendo-theme-material";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <p>This is About Page🚀</p>
        <UserClass name="Anand Kishore (Class)" Location="Kolkata" />
        <div>
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default About;
