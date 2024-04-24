// import packages
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import ui
import { ActionIcon, Box, Card, Group, Text } from "@mantine/core";
// import icons
import { ArrowLeft, BookmarkSimple, Play } from "@phosphor-icons/react";
// import locals
import classes from "./Definition.module.css";
import useStore from "../../store";
// import components
import {
  DefinitionFound,
  NoDefinitionFound,
  AppLoader,
} from "../../components";

// component
function Definition() {
  const { loading, definitions, setLoading, setDefiniions } = useStore();
  const { searchWord } = useParams();
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  // fetch definition from api
  useEffect(() => {
    setLoading(true);
    // console.log("loading 1: ", loading);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
      .then((response) => {
        // console.log("Response: ", response.data);
        setDefiniions(response.data);
      })
      .catch((error) => {
        if (error.response) {
          // if response is not ok
          // console.log("Response error: ", error);
          setError({
            status: error.response.status,
            ...error.response.data,
          });
        } else {
          // Handle other errors
          // console.log("Other error: ", error);
          setError({ message: error.message });
        }
      })
      .finally(() => {
        // console.log("Fetch completed.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <AppLoader />;
  }

  console.log("error: ", error);

  return (
    <Box>
      {/* topbar */}
      <Group align="center" justify="space-between">
        <ActionIcon
          variant="subtle"
          aria-label="back button"
          className={classes.definition_actionIcon}
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20} />
        </ActionIcon>
        <ActionIcon
          variant="subtle"
          aria-label="bookmark button"
          className={classes.definition_actionIcon}
        >
          <BookmarkSimple size={20} />
        </ActionIcon>
      </Group>

      {/* word card */}
      <Card shadow="sm" py="xl" px="lg" radius="sm" withBorder my="md">
        <Group align="center" justify="space-between">
          <Text fw={700} fz={{ base: "h4", xs: "h3" }} tt="capitalize">
            {searchWord}
          </Text>
          <ActionIcon size="md">
            <Play size={16} weight="fill" />
          </ActionIcon>
        </Group>
      </Card>

      {/* definition cards */}
      {error ? (
        <>
          <NoDefinitionFound error={error}/>
        </>
      ) : (
        <>
          <DefinitionFound />
        </>
      )}
    </Box>
  );
}

export default Definition;
