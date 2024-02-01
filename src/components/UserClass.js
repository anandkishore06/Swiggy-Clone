import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // Way to create state variables in class Component
    // console.log("Child Constructor");
    this.state = {
      userInfo: {
        name: "DummyName",
        location: "Kolkata",
      },
    };
  }

  async componentDidMount() {
    // console.log(" child ComponentDidMount");
    const data = await fetch("https://api.github.com/users/anandkishore06");
    const json = await data.json();
    // console.log(json);
    this.setState({
      userInfo: json,
    });

    // this.timer = setInterval( () =>{
    //   console.log("Hey React !");
    // },2000)

    
  }

  componentDidUpdate() {
    // console.log("ComponentDidUpdate called");
   
    
  }
  componentWillUnmount(){
    // console.log("ComponentWillUnmount called");
    clearInterval(this.timer)
  }

  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;
    // console.log("Child Render");
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name : {name}</h2>
        <h4>Bio: {bio}</h4>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * --- MOUNTING ----
 *
 * constructor(called with dummy data)
 * render(render component with dummy data)
 *    <DOM with dummy data>
 * componentDidMount(called)
 *    <API call>
 *    <this.setState>  -> State variable is updated
 *
 * --- UPDATING ----
 *
 * render(called with API Data)
 * <DOM filled with new api data>
 * componentDidUpdate(called)
 *
 *
 */
