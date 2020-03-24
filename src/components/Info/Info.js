import React from "react";
import Container from "../Container/Container";
import Hero from "../Hero/Hero";
import { infoContents } from "../../data/dataStore";
import styles from "./Info.scss";

const Info = () => (
  <Container>
    <Hero title={infoContents.title} />
    <p className={styles.description}>{infoContents.content}</p>
  </Container>
);

export default Info;
