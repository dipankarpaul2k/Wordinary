import { Box, Center, Loader } from "@mantine/core";

function AppLoader() {
  return (
    <Box mih={"calc(90vh - 60px)"}>
      <Center mih={"calc(90vh - 60px)"}>
        <Loader size={{ base: "md", xs: "lg" }} type="bars" />
      </Center>
    </Box>
  );
}

export default AppLoader;
