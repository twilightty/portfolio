"use client";

import Image from "next/image";
import LDButton from "./Components/LightAndDarkButton";
import LDAbout from "./Components/Main/About";
import { Transition, Text, AppShell, Grid, Flex, Center } from "@mantine/core";
import { useEffect, useState } from "react";
import Item from "@/app/Components/Main/Header/Item";

export default function Home() {
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
              <LDAbout />
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
