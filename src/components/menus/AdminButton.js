import React from "react";
import { useNavigate } from "react-router-dom";

const AdminButton = () => {
  const history = useNavigate();
  return (
    <div>
      <button className="button3" onClick={() => history("/administracion")}>
        Administración
      </button>
    </div>
  );
};

export default AdminButton;
