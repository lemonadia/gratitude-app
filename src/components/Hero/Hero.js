import React from "react";
import styles from "./Hero.scss";
import PropTypes from "prop-types";

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{props.title}</h2>
  </header>
);

Hero.propTypes = {
  title: PropTypes.node.isRequired
};

export default Hero;
