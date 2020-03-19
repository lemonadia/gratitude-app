import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero.js";
import PropTypes from "prop-types";
import Column from "../Column/Column.js";

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node
  };

  render() {
    return (
      <section className={styles.component}>
        <Hero title={this.props.title} />
        <div className={styles.description}>{this.props.children}</div>
        <div className={styles.columns}>
          <Column titleText="Food" />
          <Column titleText="Emotion" />
          <Column titleText="Person" />
        </div>
      </section>
    );
  }
}

export default List;
