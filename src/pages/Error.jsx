import { useRouteError } from "react-router-dom";

import { Box, Center, Text } from "@mantine/core";

function Error() {
  const error = useRouteError();

  return (
    <Box mih="100dvh">
      <Center mih="100dvh">
        <Text fw={700} fz="h2">
          {error.message}
        </Text>
      </Center>
    </Box>
  );
}

export default Error;
