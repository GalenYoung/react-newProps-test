import React, { Component } from "react";

const ThemeContext = React.createContext({
  theme:"dark",
  toggleTheme:()=>{},
});
export default  ThemeContext;