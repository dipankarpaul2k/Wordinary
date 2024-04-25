import {
  ActionIcon,
  Box,
  Card,
  Group,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import useStore from "../../store";
import { ArrowLeft, Trash, FolderMinus } from "@phosphor-icons/react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./Bookmarks.module.css";
import formatDate from "../../utils/formatDate";

function Bookmarks() {
  const { bookmarks, clearBookmarks, removeBookmark } = useStore();
  const navigate = useNavigate();

  return (
    <Box>
      {/* topbar */}
      <Group align="center" justify="space-between">
        <Group gap="xs" align="center">
          <ActionIcon
            variant="subtle"
            aria-label="back button"
            onClick={() => navigate(-1)}
            className={classes.topbar_icons}
            title="Back button"
          >
            <ArrowLeft size={20} weight="bold" />
          </ActionIcon>
          <Text fz={{ base: "h5", sm: "h4" }} fw={500}>
            Bookmarks
          </Text>
        </Group>
        <Tooltip position="left" label="Clear all bookmarks">
          <ActionIcon
            variant="subtle"
            aria-label="Clear all bookmarks button"
            onClick={clearBookmarks}
            className={classes.topbar_icons}
            title="Clear all bookmarks button"
          >
            <FolderMinus size={20} weight="bold" />
          </ActionIcon>
        </Tooltip>
      </Group>
      
      {/* bookmarks body */}
      <Box>
        {Object.values(bookmarks).map(({ word, date }) => (
          <Card
            key={word}
            shadow="sm"
            py={{ base: "sm", xs: "sm" }}
            px={{ base: "sm", xs: "md" }}
            withBorder
            mt="md"
          >
            <Group gap="sm" align="center" justify="space-between">
              <Stack
                gap={0}
                component={Link}
                to={`/search/${word}`}
                td="none"
                flex={1}
                className={classes.topbar_icons}
              >
                <Text tt="capitalize" flex={1}>
                  {word}
                </Text>
                <Text size="xs" c="dimmed">
                  {formatDate(date)}
                </Text>
              </Stack>
              <Tooltip position="left" label="Remove from bookmarks">
                <ActionIcon
                  variant="subtle"
                  aria-label="remove word from bookmark button"
                  onClick={() => removeBookmark(word)}
                  className={classes.topbar_icons}
                  title="Remove from bookmarks"
                >
                  <Trash size={20} />
                </ActionIcon>
              </Tooltip>
            </Group>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Bookmarks;
