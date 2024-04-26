import React from "react";

import { Outlet } from "react-router-dom";

import { Container } from "@mantine/core";

import Navbar from "./Navbar";
import Footer from "./Footer";

function RootLayout() {
  return (
    <>
      <Container
        size="md"
        pos="sticky"
        top={0}
        style={{ zIndex: 5 }}
        bg={"var(--mantine-color-body)"}
      >
        <nav>
          <Navbar />
        </nav>
      </Container>
      <Container size="sm" mih="75vh">
        <main>
          <Outlet />
        </main>
      </Container>
      <Container size="md">
        <footer>
          <Footer />
        </footer>
      </Container>
    </>
  );
}

export default RootLayout;
