import React from "react"
import { useParams, Redirect, Link } from "react-router-dom";

/** Color -renders page with background color
 * 
 * Props:
 * - colors [color, color,...]
 * 
 * Params:
 * - :color
 * 
 * ColorsApp -> Color
 */
function Color({ colors }) {

  const { color } = useParams();

  if (!(colors.includes(color))) {
    return <Redirect to="/" />;
  };

  return (
    <div style={{ backgroundColor: color }}>
      <p>{color}</p>
      <Link to="/">Back</Link>
    </div>
  )
}

export default Color;