import React from "react";
import styles from "./Card.scss";
import PropTypes from "prop-types";

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
  };
  render() {
    return (
      <section className={styles.component}>
        {this.props.cards}
        <h3>{this.props.title}</h3>
      </section>
    );
  }
}

export default Card;
