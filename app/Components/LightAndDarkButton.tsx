import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Box,
  Flex,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import cx from "clsx";
import classes from "./LDButton.module.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

function LDButton() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Flex
      styles={{
        root: { marginLeft: "auto" },
      }}
    >
      <Box m={3}>
        <ActionIcon
          onClick={() =>
            setColorScheme(computedColorScheme === "light" ? "dark" : "light")
          }
          variant="transparent"
          size="xl"
          aria-label="Toggle color scheme"
        >
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        </ActionIcon>
      </Box>
    </Flex>
  );
}

export default LDButton;
