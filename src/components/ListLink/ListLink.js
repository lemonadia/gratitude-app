import React from "react";
import styles from "./ListLink.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const ListLink = ({ id, title }) => (
  <Link to={`/list/${id}`} className={styles.link}>
    <section className={styles.component}>
      <div className={styles.text}>
        <h2 className={styles.title}>{ReactHtmlParser(title)}</h2>
      </div>
    </section>
  </Link>
);

ListLink.propTypes = {
  id: PropTypes.string,
  title: PropTypes.node.isRequired,
};

export default ListLink;
