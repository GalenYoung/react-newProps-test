import React from "react";
import ThemeContext from "context/theame";

export default function ConsumerComponents() {
  return (
    <span>
    <ThemeContext.Consumer>
      {value => value}
    </ThemeContext.Consumer>
    </span>
  )

}