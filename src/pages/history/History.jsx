import {
  ActionIcon,
  Box,
  Card,
  Group,
  Text,
  Tooltip,
  Stack,
} from "@mantine/core";
import useStore from "../../store";
import { ArrowLeft, Trash, FolderMinus } from "@phosphor-icons/react";
import { useNavigate, Link } from "react-router-dom";
import classes from "./Histosy.module.css";
import formatDate from "../../utils/formatDate";

function History() {
  const { history, clearHistory } = useStore();
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
            className={classes.colors}
          >
            <ArrowLeft size={20} weight="bold" />
          </ActionIcon>
          <Text fz={{ base: "h5", sm: "h4" }} fw={500}>
            History
          </Text>
        </Group>
        <Tooltip position="left" label="Clear all history">
          <ActionIcon
            variant="subtle"
            aria-label="Clear all history button"
            onClick={clearHistory}
            className={classes.colors}
          >
            <FolderMinus size={20} weight="bold" />
          </ActionIcon>
        </Tooltip>
      </Group>

      {/* history body */}
      <Box>
        {Object.values(history).map(({ word, date }) => (
          <Card
            key={word}
            shadow="sm"
            py={{ base: "sm", xs: "sm" }}
            px={{ base: "sm", xs: "md" }}
            withBorder
            mt="md"
          >
            <Group
              gap="sm"
              align="center"
              justify="space-between"
              component={Link}
              to={`/search/${word}`}
              td="none"
              className={classes.colors}
            >
              <Text tt="capitalize" flex={1}>
                {word}
              </Text>
              <Text size="xs" c="dimmed">
                {formatDate(date)}
              </Text>
            </Group>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default History;
