import { Box, Burger, Flex, Group, Text, rem, Anchor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Book } from "@phosphor-icons/react";

import { NavLink, Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import NavbarDrawer from "./NavbarDrawer";

function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const navlinks = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/bookmarks",
      label: "Bookmarks",
    },
    {
      link: "/history",
      label: "History",
    },
  ];

  const links = navlinks.map((item) => (
    <NavLink
      key={item.label}
      to={item.link}
      className={({ isActive, isPending }) =>
        isPending
          ? `${classes.pending} ${classes.navlink}`
          : isActive
          ? `${classes.active} ${classes.navlink}`
          : `${classes.navlink}`
      }
      onClick={closeDrawer}
    >
      {item.label}
    </NavLink>
  ));

  return (
    <Box py="sm">
      <Flex mah={rem("56px")} align="center" justify="space-between">
        {/* navbar left side */}
        <Group align="center" gap="xs">
          <Book size={32} weight="fill" color="#504C97" />
          <Text component={Link} to="/" fz={{ base: "h4", sm: "h3" }} fw={700}>
            Wordinary
          </Text>
        </Group>

        {/* navbar right side */}
        <Group gap={5} visibleFrom="xs">
          {links}
        </Group>
        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          size="20px"
          hiddenFrom="xs"
          aria-label="Toggle navigation"
        />
      </Flex>
      <NavbarDrawer opened={drawerOpened} close={closeDrawer} links={links} />
    </Box>
  );
}

export default Navbar;
