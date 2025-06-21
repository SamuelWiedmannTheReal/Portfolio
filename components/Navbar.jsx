import React from "react";
import Link from "next/link";
import NavLink from "next/link";

const Navbar = () => {
  return (
    <header className="header">
        <NavLink href="/">
            <p>SW</p>
        </NavLink>
    </header>
  );
}

export default Navbar;