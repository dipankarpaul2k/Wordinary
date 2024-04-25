import { useNavigate } from "react-router-dom";
import { Box, Center, Flex, Text, Button } from "@mantine/core";

function NoDefinitionFound({ error }) {
  const navigate = useNavigate();

  return (
    <Box mih={"70vh"}>
      <Center h={"50vh"}>
        <Flex
          direction="column"
          ta="center"
          align="center"
          justify="center"
          style={{ textWrap: "balance" }}
        >
          <Text fz={{ base: "h2", xs: "h1" }} fw={700} mb="sm">
            No Definitions Found
          </Text>
          <Text fz="h4" c="dimmed">
            {error.message}
          </Text>
          <Button
            variant="outline"
            size="md"
            my="xs"
            onClick={() => navigate("/", { replace: true })}
          >
            Go back
          </Button>
        </Flex>
      </Center>
    </Box>
  );
}

export default NoDefinitionFound;
