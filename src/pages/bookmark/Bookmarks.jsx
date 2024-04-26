import { useNavigate, Link } from "react-router-dom";

import {
  ActionIcon,
  Box,
  Card,
  Group,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { modals } from "@mantine/modals";

import { ArrowLeft, Trash, FolderMinus } from "@phosphor-icons/react";

import useStore from "../../store";
import classes from "./Bookmarks.module.css";
import formatDate from "../../utils/formatDate";

function Bookmarks() {
  const { bookmarks, clearBookmarks, removeBookmark } = useStore();
  const navigate = useNavigate();

  const clearAllBookmarksModal = () =>
    modals.openConfirmModal({
      title: "Clear All Bookmarks!!!",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete all your bookmarks? This action can
          not be undone. Your bookmarks will be permanently deleted.
        </Text>
      ),
      labels: { confirm: "Clear all", cancel: "No don't do it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel clear all bookmarks."),
      onConfirm: () => clearBookmarks(),
    });

    const deleteBookmarkModal = (word) =>
    modals.openConfirmModal({
      title: "Delete Bookmark!!!",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your bookmark? This action can
          not be undone. Your bookmark will be permanently deleted.
        </Text>
      ),
      labels: { confirm: "Delete", cancel: "No don't do it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel delete bookmark."),
      onConfirm: () => removeBookmark(word),
    });  

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
            onClick={clearAllBookmarksModal}
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
                  onClick={() => deleteBookmarkModal(word)}
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
