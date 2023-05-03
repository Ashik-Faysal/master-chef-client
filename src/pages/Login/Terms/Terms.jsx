import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Condition</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sint sed
        suscipit dolorum mollitia animi quam excepturi iure tempora fuga.
      </p>

      <p>
        Go back To <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;
