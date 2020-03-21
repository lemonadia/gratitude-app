import React from "react";
import styles from "./List.scss";
import PropTypes from "prop-types";
import Column from "../Column/ColumnContainer.js";
import { settings } from "../../data/dataStore";
import Creator from "../Creator/Creator.js";

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };

  render() {
    const { addColumn, columns } = this.props;
    return (
      <section className={styles.component}>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn} />
        </div>
      </section>
    );
  }
}

export default List;
