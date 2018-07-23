import React from "react";
import ThemeContext from "context/theame";

export default function ConsumerComponents() {
  console.log(ThemeContext,"ThemeContext");
  return (
    <span>
    <ThemeContext.Consumer>
      {value => value}
    </ThemeContext.Consumer>
    </span>
  )

}