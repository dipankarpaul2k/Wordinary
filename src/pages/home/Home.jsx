import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import mantine
import { Box, Button, Center, Flex, TextInput, Text, Stack } from "@mantine/core";
import { useEventListener } from "@mantine/hooks";
// import icons
import { MagnifyingGlass } from "@phosphor-icons/react";
// import locals
import ReadingBookImg from "../../assets/reading-book.svg";
import useStore from "../../store";
import classes from "./Home.module.css";

function Home() {
  const [error, setError] = useState(null);

  const { currentWord, setCurrentWord } = useStore();
  const navigate = useNavigate();

  const validateWord = (word) => {
    return word.length > 0 && /^[a-zA-Z]+$/.test(word);
  };

  const handleSubmit = () => {
    const trimedWord = currentWord.trim();

    if (!validateWord(trimedWord)) {
      setError("Invalid word!");
      return;
    }

    navigate(`/search/${trimedWord}`);
    setCurrentWord("");
  };

  const inputRef = useEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  });

  return (
    <Box>
      <Center className={classes.home_container}>
        <Flex direction="column" gap="xs" align="center" w="100%" h="100%">
          <img
            src={ReadingBookImg}
            className={classes.img}
            alt="reading book image"
          />

          <Stack gap={0} align="center" ta="center">
            <Text fw={500} fz="h3">
              Wordinary
            </Text>
            <Text c="dimmed">
              Expand your vocabulary and explore the world of language.
            </Text>
          </Stack>

          <Flex
            direction={{ base: "column", xs: "row" }}
            align={{ base: "center", xs: "start" }}
            justify="center"
            gap={{ base: "5px", xs: 0 }}
            w="100%"
            maw="400px"
            h="100px"
          >
            <TextInput
              value={currentWord}
              onChange={(event) => setCurrentWord(event.target.value)}
              placeholder="Enter word"
              leftSection={<MagnifyingGlass size={20} />}
              radius="xs"
              flex={1}
              w="100%"
              maw="350px"
              className={classes.home_input}
              error={error}
              ref={inputRef}
            />
            <Button
              radius="xs"
              w="100%"
              maw="100px"
              className={classes.home_submit_btn}
              onClick={handleSubmit}
            >
              Find
            </Button>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
}

export default Home;
