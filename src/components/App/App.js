import React from "react";
import styles from "./App.scss";

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>Simple gratitude App</h1>
        <h2 className={styles.subtitle}>What made you smile today?</h2>
      </main>
    );
  }
}

export default App;
