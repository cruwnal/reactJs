import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
        {contacts.map((contacts,index) => (
            <Card
                key={index}
                name={contacts.name}
                img={contacts.imgURL}
                tel={contacts.phone}
                email={contacts.email}
            />
        ))

        }
    </div>
  );
}

export default App;
