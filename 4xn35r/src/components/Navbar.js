import { Component } from "react";
import { Link } from "react-router-dom";
import { menuItem } from "./menuItem";
import "./NavbarStyle.css";

class Navbar extends Component {
  state = {
    clicked: false
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItem">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {menuItem.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}

          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
