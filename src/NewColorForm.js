import React, { useState } from "react";
import { useHistory } from "react-router-dom";

/** NewColorForm
 * 
 * Props:
 * - update()
 * 
 * State:
 * - formData {color}
 * 
 * ColorsApp -> NewColorForm
 */
function NewColorForm({ update }) {
  const initialState = {color:""};
  const history = useHistory();
  const [formData, setFormData] = useState(initialState);


  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  };

  /** Send { color } to parent & resets formData & redirects via history.push() */
  function handleSubmit(evt) {
    evt.preventDefault();
    update(formData);
    setFormData(initialState);
    history.push("/");
  };

  return (
    <form className="NewColorForm" onSubmit={handleSubmit}>
      <label htmlFor="color">Add a new color:</label>
      <input id="color" onChange={handleChange} name="color" value={formData.color} />
      <button>Add!</button>
    </form>
  );
}

export default NewColorForm;