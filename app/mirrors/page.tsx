"use client";

import { Transition, Text, Space } from "@mantine/core";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

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
                <Text>Mirrors</Text>
                <ul>
                  <li>
                    <Link href="https://mirror.kirbee.tech/archlinux">
                      Arch Linux
                    </Link>
                  </li>
                  <li>
                    <Link href="https://mirror.kirbee.tech/debiancd">
                      Debian CD
                    </Link>
                  </li>
                  <li>
                    <Link href="https://mirror.kirbee.tech/gentoo">Gentoo</Link>
                  </li>
                </ul>
              </div>

              <div></div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
