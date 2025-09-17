import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const [user, setUser] = useState("Sean");

  const createAgenda = () => {
    let options = {
      method: "POST",
      headers: {"content-type":"application/JSON"},
      body: JSON.stringify({
        "slug": "sean-hammond",
        "id": 0
      })
    }
    fetch(store.baseURL + "/agendas/sean-hammond" , options)
    .then((resp)=>resp.json())
    .then((data)=>console.log("createAgenda data :". data))
  }

  useEffect(
    () => {
    createAgenda()
  },[] // the sq.brackets make useEffect is triggered every time page loads
);

  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <Link to="/test">Go To Test Page</Link>
      <div className="m-3">
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({
              type: "set-fname",
              payload: "Alex",
            });
          }}
        >
          {store.fname}
        </button>
      </div>

      <div className="m-3">
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({
              type: "set-lname",
              payload: "Ayala",
            });
          }}
        >
          {store.lname}
        </button>
      </div>
    </div>
  );
};
