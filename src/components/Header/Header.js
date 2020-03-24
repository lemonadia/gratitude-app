import React from "react";
import styles from "./Header.scss";
import Container from "../Container/Container";
import { NavLink, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to="/" />
            <nav>
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink exact to="/info">
                Info
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
