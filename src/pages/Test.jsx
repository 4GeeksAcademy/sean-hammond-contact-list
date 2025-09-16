import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Test = () => {
  const { store, dispatch } = useGlobalReducer();
  return (
    <div>
      <h1>{store.fname} {store.lname}</h1>
      <p>Test</p>
    </div>
  );
};
