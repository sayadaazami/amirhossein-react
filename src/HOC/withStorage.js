import React from "react";

const customStorage = {
  setItem: (key, value) => localStorage.setItem(key, value),
  getItem: (key) => localStorage.getItem(key),
};

function withStorage(Component) {
  return (props) => <Component {...props} storage={customStorage} />;
}

export default withStorage;
