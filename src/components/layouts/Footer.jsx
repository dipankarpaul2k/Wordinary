import { Flex, Text, Box, Anchor, ActionIcon } from "@mantine/core";
// import icons
import { GithubLogo, LinkedinLogo, DevToLogo } from "@phosphor-icons/react";

// anchor link component
function AnchorLink({ href, text }) {
  return (
    <Anchor
      href={href}
      target="_blank"
      underline="hover"
      mx="3px"
      c="var(--text-color)"
      fz={{ base: "h6", sm: "h5" }}
    >
      {text}
    </Anchor>
  );
}

// action icon component
function SocialIcon({ link, ariaLabel, children }) {
  return (
    <ActionIcon
      size="lg"
      color="gray"
      variant="subtle"
      component="a"
      target="_blank"
      href={link}
      aria-label={ariaLabel}
      mx="xs"
    >
      {children}
    </ActionIcon>
  );
}

function Footer() {
  return (
    <Box mt="sm">
      <Flex direction="column" align="center" justify="center" gap="xs" my="sm">
        <Flex
          direction="column"
          gap="5px"
          justify="center"
          ta="center"
          style={{ textWrap: "balance" }}
        >
          <Text fz={{ base: "h5", sm: "h4" }}>
            Made by Dipankar Paul with ReactJs.
          </Text>
          <Text fz={{ base: "h6", sm: "h5" }}>
            My other projects are
            <AnchorLink
              href="https://reapi-client.vercel.app/"
              text="ReAPI Client,"
            />
            <AnchorLink href="https://retube-nine.vercel.app/" text="ReTube," />
            <AnchorLink
              href="https://homebudget-react.vercel.app/"
              text="HomeBudget."
            />
          </Text>
        </Flex>

        <ActionIcon.Group>
          <SocialIcon
            link={"https://dev.to/dipankarpaul"}
            ariaLabel={"Open dev.to in a new tab"}
            children={<DevToLogo size={24} color="#504c97" />}
          />
          <SocialIcon
            link={"https://www.linkedin.com/in/iamdipankarpaul/"}
            ariaLabel={"Open linkedin in a new tab"}
            children={<LinkedinLogo size={24} color="#504c97" />}
          />
          <SocialIcon
            link={"https://github.com/dipankarpaul2k"}
            ariaLabel={"Open github in a new tab"}
            children={<GithubLogo size={24} color="#504c97" />}
          />
        </ActionIcon.Group>
      </Flex>
    </Box>
  );
}

export default Footer;
