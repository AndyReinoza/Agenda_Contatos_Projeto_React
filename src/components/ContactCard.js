import React from "react";

import EditButton from "./editButton";
import DeleteButton from "./deleteButton";

function ContactCard(props) {
  return (
    <div className="ContactCard">
      <h2>Nome: {props.nome} </h2>
      <p>E-mail: {props.email} </p>
      <p>Telefone: {props.telefone} </p>
      <div className="ContactCard--ButtonSection">
        <EditButton /> <DeleteButton />
      </div>
    </div>
  );
}

export default ContactCard;
