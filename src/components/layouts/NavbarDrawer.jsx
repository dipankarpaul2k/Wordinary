import { Drawer, Flex, Group, Text } from "@mantine/core";
import { Book } from "@phosphor-icons/react";

function NavbarDrawer({ opened, close, links }) {
  return (
    <Drawer.Root
      opened={opened}
      onClose={close}
      position="bottom"
      offset={8}
      size="35%"
      radius="md"
    >
      <Drawer.Overlay />
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>
            <Group align="center" gap="xs">
              <Book size={32} weight="fill" color="#504C97" />
              <Text fz={{ base: "h5", sm: "h3" }} fw={700}>
                Wordinary
              </Text>
            </Group>
          </Drawer.Title>
          <Drawer.CloseButton />
        </Drawer.Header>
        <Drawer.Body py={5}>
          <Flex direction="column" gap="md">
            {links}
          </Flex>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
}

export default NavbarDrawer;
