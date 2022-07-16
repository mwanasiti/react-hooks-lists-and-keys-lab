import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const strings = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

  return <nav>{strings}</nav>;
}

export default NavBar;
