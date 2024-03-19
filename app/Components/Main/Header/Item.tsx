import { Anchor, Group, Menu } from "@mantine/core";
export default function Item() {
  return (
    <Group>
      <Menu
        shadow="md"
        width={200}
        trigger="hover"
        openDelay={100}
        closeDelay={400}
      >
        <Menu.Target>
          <Anchor href="/" underline="never">
            About
          </Anchor>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Ily</Menu.Label>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
