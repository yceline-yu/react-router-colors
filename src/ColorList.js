import React from "react";
import { Link } from "react-router-dom";

/** Color List
 * 
 * Props:
 * - colors
 * 
 * Homepage -> ColorList
 */
function ColorList({ colors }) {

  let colorLinks = colors.map(color =>
    <li key={color}>
      <Link to={`/colors/${color}`}>{color}</Link>
    </li>);

  return (
    <div>
      <ul>
        {colorLinks}
      </ul>
    </div>
  );
}

export default ColorList;