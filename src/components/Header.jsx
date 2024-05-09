import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {

  const {carts} = useSelector((state) => state.allCart);
  console.log(carts);



  return (
    <Navbar style={{ height: "60px", background: "black", color: "white" }}>
      <Container>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive ? "text-orange-700" : "text-gray-700"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
        >
          <h3 className="text-light">Ecommerce</h3>
        </NavLink>
        <div id="ex4">
          <span className="p1 fa-stack fa-2x has-badge" data-count={carts.length}>
            <NavLink to="/cart" className="text-decoration-none text-light mx-2">
              <i class="fa-solid fa-cart-shopping"></i>
            </NavLink>
          </span>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
