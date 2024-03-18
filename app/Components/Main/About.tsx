import { Box, Text, Center, Divider } from "@mantine/core";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import Social from "./Social";
import { useEffect, useRef, useState } from "react";
import Techstack from "./Techstack";

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

function LDAbout() {
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    setOpened(true);
  });

  return (
    <Box c="dimmed">
      <Center>
        <Image
          src="/profile.jpg"
          width={128}
          height={128}
          alt="My pfp"
          style={{
            objectFit: "cover",
            borderRadius: "100px",
          }}
        ></Image>
      </Center>
      <Center>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi, I'm Nghia 👋")
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
        />
      </Center>

      <Center>
        <Text>I&apos;m a&nbsp;</Text>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(" Software Developer")
              .pauseFor(500)
              .deleteChars(18)
              .typeString(" Music Producer")
              .pauseFor(500)
              .deleteChars(14)
              .start();
          }}
          options={{
            loop: true,
          }}
        ></Typewriter>
      </Center>

      <Divider my="md" />

      <Center>
        <Techstack opened={opened} />
      </Center>

      <Divider my="md" />

      <Center>
        <Social />
      </Center>

      <Center></Center>
    </Box>
  );
}

export default LDAbout;
