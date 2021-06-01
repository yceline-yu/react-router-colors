import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";
import Homepage from "./Homepage";
import NewColorForm from "./NewColorForm";

/** ColorsApp
 * 
 * State:
 * - colorList
 * 
 * ColorsApp -> { NewColorForm, Color, ColorList, Homepage }
 */
function ColorsApp() {
  const [colorList, setColorList] = useState([]);

  function update(formData) {
    let color = formData.color;
    setColorList(colors => [color, ...colors]);
  };

  return (
    <Switch>
      <Route exact path="/colors/new"><NewColorForm update={update} /></Route>
      <Route exact path="/colors/:color"><Color colors={colorList} /></Route>
      <Route exact path="/colors"><ColorList colors={colorList} /></Route>
      <Route exact path="/"><Homepage colorList={colorList} /></Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default ColorsApp;