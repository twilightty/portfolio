import { Anchor, Group, Menu, Button, NavLink } from "@mantine/core";
import Link from "next/link";
export default function Item() {
  return (
    <Group
    gap="lg"
    >
  
      <Anchor underline="never" href="/">
        Home
      </Anchor>

      <Anchor underline="never" href="https://blog.kirbee.tech">
        Blogs
      </Anchor>

      <Menu
        shadow="md"
        width={200}
        trigger="click-hover"
        transitionProps={{ transition: "slide-down" }}
        loop={false}
        withinPortal={false}
        trapFocus={false}
        menuItemTabIndex={0}
      >
        <Menu.Target>
          <Anchor underline="never">
            Links
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

      <Menu
        shadow="md"
        width={200}
        trigger="click-hover"
        transitionProps={{ transition: "slide-down" }}
        loop={false}
        withinPortal={false}
        trapFocus={false}
        menuItemTabIndex={0}
      >
        <Menu.Target>
          <Anchor underline="never">
             Misc
          </Anchor>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Item>
            <NavLink component={Link} href="/key.txt" label="PGP Key" />
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
