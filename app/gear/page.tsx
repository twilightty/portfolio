"use client";

import { Transition, Text, Space } from "@mantine/core";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Gear() {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    setOpened(true);
  });
  return (
    <div className="App">
      <Transition
        mounted={opened}
        transition="pop"
        duration={300}
        timingFunction="ease"
      >
        {(styles) => (
          <div style={styles}>
            <div
              className="flex h-[128px] w-[128px]"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <div>
                <Text>💻 MacBook Pro 2023 (M3 Pro/18)</Text>

                <Space h="xs"></Space>
                <Text>⌨️ Lily58</Text>

                <Space h="xs"></Space>
                <Text>🖥️ Custom one</Text>

                <Space h="xs"></Space>
                <Text>⚙️ macOS / NixOS</Text>
                <Space h="xs"></Space>
                <Text>🎹 Arturia Minilab 3</Text>
                <Space h="xs"></Space>
                <Text>🎹 Nektar GX61</Text>
                <Space h="xs"></Space>
                <Text>🎛️ Launchpad Mini MK3</Text>
              </div>

              <div></div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
