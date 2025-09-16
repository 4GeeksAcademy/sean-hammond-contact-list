import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Test = () => {
  const { store, dispatch } = useGlobalReducer();
  return <div>test</div>;
};
