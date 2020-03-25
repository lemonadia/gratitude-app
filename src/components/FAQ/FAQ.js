import React from "react";
import Container from "../Container/Container";
import Hero from "../Hero/Hero";
import { faqContents } from "../../data/dataStore";

const FAQ = () => (
  <Container>
    <Hero title={faqContents.title} />
  </Container>
);

export default FAQ;
