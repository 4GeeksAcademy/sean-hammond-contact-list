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
      <h1>Add a new contact</h1>

      {/* Name: */}
      <label for="fullname">Full Name</label>
      <br />
      <input type="text" name="fullname" id="fullname" placeholder="First and Last Name" size="50" required />
      <br />

      {/* Email: */}
      <label for="email">Email</label>
      <br />
      <input type="email" name="email" id="email" placeholder="Email Address" size="50" required />
      <br />

      {/* Phone: */}
      <label for="phone">Phone</label>
      <br />
      <input type="tel" name="phone" id="phone" placeholder="Phone Number" size="50" required />
      <br />

      {/* Address: */}
      <label for="fullname">Address</label>
      <br />
      <input type="text" name="fullname" id="fullname" placeholder="Mailing Address" size="50" required />
      <br />

      <button
        onClick={() => {
          createContacts();
        }}
        href="Home.jsx"
      >
        Save contact
      </button>
      <br />

      <a href="Home.jsx">Back to contact list</a>
    </div>
  );
};
