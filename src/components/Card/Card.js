import React from "react";
import styles from "./Card.scss";
import PropTypes from "prop-types";

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
  };
  render() {
    const { title, cards } = this.props;
    return (
      <section className={styles.component}>
        {cards}
        <h3>{title}</h3>
      </section>
    );
  }
}

export default Card;
