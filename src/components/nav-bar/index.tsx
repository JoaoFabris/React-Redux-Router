import { NavLink } from "react-router-dom";
import "./nav-bar.css";

function NavBar() {
  return (
    <nav>
      <img src="/src/assets/pokeball-pokemon.svg" width={35} alt="pokemon logo" />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <img src="/src/assets/pokeball-pokemon.svg" width={35} alt="pokemon logo" />
    </nav>
  );
}

export default NavBar;
