import { Anchor, Group, Menu, Button, NavLink } from "@mantine/core";
import Link from "next/link";
export default function Item() {
  return (
    <Group>
      <Menu
        shadow="md"
        width={200}
        trigger="hover"
        openDelay={100}
        closeDelay={400}
        transitionProps={{ transition: "slide-down" }}
      >
        <Menu.Target>
          <Anchor href="/" underline="never">
            About
          </Anchor>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>
            <NavLink component={Link} href="/gear" label="Gear" />
          </Menu.Item>
          <Menu.Item>
            <NavLink
              component={Link}
              href="/selfhosted"
              label="Self-hosted Projects"
            ></NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink component={Link} href="/mirrors" label="Mirrors"></NavLink>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
