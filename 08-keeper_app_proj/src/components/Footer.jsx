import React from "react";

function FooterElement() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {year}</p>
    </footer>
  );
}

export default FooterElement;
