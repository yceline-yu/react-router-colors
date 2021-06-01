import React from "react";
import { Link } from "react-router-dom";
import ColorList from "./ColorList";

/** Homepage
 * 
 * Props:
 * - colorList [color,color,...]
 * 
 * Homepage -> ColorList
 */
function Homepage({ colorList }) {

  return (<div>
    <h1>Welcome to the Color Factory</h1>
    <Link to="/colors/new">Add a New Color</Link>
    <h3>Pick a Color</h3>
    <ColorList colors={colorList} />
  </div>
  );
}

export default Homepage;