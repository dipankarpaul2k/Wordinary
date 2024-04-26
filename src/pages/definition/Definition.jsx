// import packages
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
// import ui
import { ActionIcon, Box, Card, Group, Text, Tooltip } from "@mantine/core";
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
  const {
    loading,
    definitions,
    bookmarks,
    setLoading,
    setDefiniions,
    addBookmark,
    removeBookmark,
    addToHistory,
  } = useStore();

  const { searchWord } = useParams();
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [audio, setAudio] = useState(null);

  const isBookmarked = Object.keys(bookmarks).includes(
    searchWord.toLowerCase()
  );

  // update the states
  const updateState = (data) => {
    setDefiniions(data);
    if (!data[0].phonetics.length) return;
    let audioUrl = null;
    for (const phonetic of data[0].phonetics) {
      if (phonetic.audio) {
        audioUrl = phonetic.audio.replace("//ssl", "https://ssl");
        break; // exit the loop once audio URL is found
      }
    }
    setAudio(new Audio(audioUrl));
    addToHistory(searchWord);
  };

  // fetch definition from API
  useEffect(() => {
    const fetchDefinitions = async () => {
      setLoading(true);
      console.log("loading 1: ", loading);
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
        .then((response) => {
          // console.log("Response: ", response.data);
          updateState(response.data);
          setLoading(false);
          console.log("loading 2: ", loading);
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
          setLoading(false);
          console.log("loading 2: ", loading);
        });
    };

    if (!isBookmarked) {
      fetchDefinitions();
    } else {
      const lowerCasedWord = searchWord.toLowerCase();
      updateState(bookmarks[lowerCasedWord].definitions);
    }
  }, []);

  if (loading) {
    return <AppLoader />;
  }

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
        <Tooltip label="Bookmark" position="left">
          <ActionIcon
            variant="subtle"
            aria-label="bookmark button"
            className={classes.definition_actionIcon}
            onClick={() =>
              isBookmarked
                ? removeBookmark(searchWord)
                : addBookmark(searchWord, definitions)
            }
          >
            {isBookmarked ? (
              <BookmarkSimple size={20} weight="fill" />
            ) : (
              <BookmarkSimple size={20} />
            )}
          </ActionIcon>
        </Tooltip>
      </Group>

      {/* word card */}
      <Card shadow="sm" padding="lg" radius="sm" withBorder my="md">
        <Group align="center" justify="space-between">
          <Text fw={700} fz={{ base: "h4", xs: "h3" }} tt="capitalize">
            {searchWord}
          </Text>
          {audio && (
            <Tooltip label="Play audio if any" position="left">
              <ActionIcon size="md" onClick={() => audio.play()}>
                <Play size={14} weight="fill" />
              </ActionIcon>
            </Tooltip>
          )}
        </Group>
      </Card>

      {/* definition cards */}
      {error ? (
        <>
          <NoDefinitionFound error={error} />
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
