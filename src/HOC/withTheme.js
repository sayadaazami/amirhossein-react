import React from "react";

const lightTheme = {
  backgroundColor: "#eee",
  textColor: "#44f",
};

const darkTheme = {
  backgroundColor: "#444",
  textColor: "#fff",
};

function withTheme(Component) {
  return (props) => <Component {...props} theme={darkTheme} />;
}

export default withTheme;
