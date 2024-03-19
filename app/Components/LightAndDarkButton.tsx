import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Box,
  Flex,
  rem,
  useMantineTheme,
  Switch,
} from "@mantine/core";
import { IconSun, IconMoonStars, IconMoon } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./LightAndDarkButton.module.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

function LDButton() {
  const theme = useMantineTheme();
  const { setColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "light" ? "dark" : "light");
  };
  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Flex
      styles={{
        root: { marginLeft: "auto" },
      }}
    >
      <Box m={3}>
        <Switch
          onChange={toggleColorScheme}
          size="md"
          color="dark.4"
          onLabel={sunIcon}
          offLabel={moonIcon}
        />
      </Box>
    </Flex>
  );
}

export default LDButton;
