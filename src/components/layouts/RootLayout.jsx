import { Link, Outlet } from "react-router-dom";

import {
  AppShell,
  Burger,
  Container,
  Group,
  Text,
  UnstyledButton,
} from "@mantine/core";

import classes from "./MobileNavbar.module.css";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDisclosure } from "@mantine/hooks";
import { Book } from "@phosphor-icons/react";

function RootLayout() {
  // return (
  //   <>
  //     <Container
  //       size="md"
  //       pos="sticky"
  //       top={0}
  //       style={{ zIndex: 5 }}
  //       bg={"var(--mantine-color-body)"}
  //     >
  //       <nav>
  //         <Navbar />
  //       </nav>
  //     </Container>
  //     <Container size="sm" mih="70vh">
  //       <main>
  //         <Outlet />
  //       </main>
  //     </Container>
  //     <Container size="md">
  //       <footer>
  //         <Footer />
  //       </footer>
  //     </Container>
  //   </>
  // );
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <Group align="center" gap="xs">
              <Book size={32} weight="fill" color="#504C97" />
              <Text
                component={Link}
                to="/"
                fz={{ base: "h4", sm: "h3" }}
                fw={700}
              >
                Wordinary
              </Text>
            </Group>
            <Group ml="xl" gap={0} visibleFrom="sm">
              <Link to={`/`} className={classes.control}>
                Home
              </Link>
              <Link to={`/bookmarks`} className={classes.control}>
                Bookmarks
              </Link>
              <Link to={`/history`} className={classes.control}>
                History
              </Link>
            </Group>
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Link to={`/`} className={classes.control} onClick={close}>
          Home
        </Link>
        <Link to={`/bookmarks`} className={classes.control} onClick={close}>
          Bookmarks
        </Link>
        <Link to={`/history`} className={classes.control} onClick={close}>
          History
        </Link>
      </AppShell.Navbar>

      <AppShell.Main>
        <Container size="md" mih="70vh">
          <Outlet />
        </Container>
        <footer>
          <Footer />
        </footer>
      </AppShell.Main>
    </AppShell>
  );
}

export default RootLayout;
