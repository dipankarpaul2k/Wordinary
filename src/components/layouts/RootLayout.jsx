import { Container } from "@mantine/core";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function RootLayout() {
  return (
    <>
      <Container size="md" pos="sticky" top={0} style={{ zIndex: 5 }}
      bg={"var(--mantine-color-body)"}>
        <nav>
          <Navbar />
        </nav>
      </Container>
      <Container size="sm">
        <main>
          <Outlet />
        </main>
      </Container>
    </>
  );
}

export default RootLayout;
