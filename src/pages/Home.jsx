import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <Link to="/test">Go To Test Page</Link>
    </div>
  );
};
