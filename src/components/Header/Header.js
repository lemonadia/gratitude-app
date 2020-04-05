import React from "react";
import styles from "./Header.scss";
import Container from "../Container/Container";
import Search from "../Search/Search";
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to="/" />
            <nav>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink exact to="/info" activeClassName="active">
                Info
              </NavLink>
              <NavLink exact to="/faq" activeClassName="active">
                faq
              </NavLink>
              <Search />
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
