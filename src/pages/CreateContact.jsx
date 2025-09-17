import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CreateContact = () => {
  const { store, dispatch } = useGlobalReducer();
  return (
    <div>
      <h1>{store.fname} {store.lname}</h1>
      <p>page where user enters contact info</p>
    </div>
  );
};
