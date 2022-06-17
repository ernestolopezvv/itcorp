import React from "react";

const ReadOnlyRow = ({ object, handleDeleteClick }) => {
  return (
    <tr>
      <td>{object.User}</td>
      <td>{object.Nombre}</td>
      <td>
        <button
          className="button4"
          type="button"
          onClick={(event) => handleDeleteClick(event, object)}
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
