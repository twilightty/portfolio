"use client";

import { Transition, Text, Space, Center, AspectRatio } from "@mantine/core";
import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Typewriter from "typewriter-effect";

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
                <Space h="md"></Space>
                <Center>
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("My projects")
                        .callFunction(() => {
                          console.log("String typed out");
                        })
                        .pauseFor(2500)
                        .start();
                    }}
                    options={{
                      delay: 40,
                      cursor: "",
                    }}
                  ></Typewriter>
                </Center>

                <Center>
                  <div
                    onClick={() => window.open("http://tleoj.edu.vn", "_blank")}
                  >
                    <img
                      src="http://tleoj.edu.vn/static/icons/logo.png"
                      width={100}
                    ></img>
                  </div>
                </Center>
                <div></div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}
