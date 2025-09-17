import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const CreateContact = () => {
  const { store, dispatch } = useGlobalReducer();

  const createContacts = () => {
    let options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: "user3",
        phone: "phone3",
        email: "email3",
        address: "address3",
      }),
    };
    fetch(store.baseURL + "/agendas/sean-hammond/contacts", options)
      .then((resp) => resp.json())
      .then((data) => console.log("Data of Contacts: ", data));
  };

  return (
    <div>
      <h1>
        {store.fname} {store.lname}
      </h1>
      <p>page where user enters contact info</p>
      <button
        onClick={() => {
          createContacts();
        }}
      >
        Create Contact
      </button>
    </div>
  );
};
