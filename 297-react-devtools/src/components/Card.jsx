import React from "react";
import Avatar from "./Avatar.jsx";
import Telephone from "./Telephone.jsx";
import Email from "./Email.jsx";
function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        {/*<img className="circle-img" src={props.img} alt="avatar_img" />*/}
          <Avatar img={props.img} alt="Avatar_img" />
      </div>
      <div className="bottom">
          <Telephone phone={props.tel} />
          <Email email={props.email}  />
      </div>
    </div>
  );
}

export default Card;
