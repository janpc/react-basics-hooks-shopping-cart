import React from "react";

function Button({ disableButton = false, type = "button", children,  ...props }) {
  return (
    <button type={type} {...props} className="btn btn-dark" disabled={disableButton}>
      {children}
    </button>
  );
}

export default Button;
