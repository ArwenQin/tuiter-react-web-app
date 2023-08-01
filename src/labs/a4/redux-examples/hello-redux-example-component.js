import React from "react";
import {useSelector} from "react-redux";
const HelloReduxExampleComponent = () => {
  const message = useSelector((state) => state.hello.message);
  return(<h3>{message}</h3>);
};
export default HelloReduxExampleComponent;
// import useSelector hook
// from react-redux

// extract 'Hello World' from reducer

// render <h1>Hello World</h1>
