import * as React from "react";

function handleFunction(){
  return(
    alert("Submitted Successfully !")
  )
}
const Contact = () => {
  return (
    <div>
      <h1>Welcome Developer 😎</h1>
      <input type="text" placeholder="firstname" className="border border-black m-2"/>
      <input type="text" placeholder="lastname" className="border border-black m-2" />
      <button className="border border-black m-2 px-2 rounded" onClick={handleFunction}>Submit</button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam magni
        at asperiores nam voluptas animi ut modi veritatis, impedit a hic
        tempore inventore porro doloribus ullam illum itaque eveniet vero.
      </p>
    </div>
  );
};

export default Contact;
