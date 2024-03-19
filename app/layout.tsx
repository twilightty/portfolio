"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";

import {
  AppShell,
  ColorSchemeScript,
  MantineProvider,
  Flex,
} from "@mantine/core";
import Item from "@/app/Components/Main/Header/Item";
import LDButton from "./Components/LightAndDarkButton";
import LDAbout from "./Components/Main/About";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AppShell>
            <AppShell.Header>
              <div
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                  marginTop: 10,
                  marginBottom: 10,
                }}
              >
                <Flex>
                  <Item />
                  <LDButton />
                </Flex>
              </div>
            </AppShell.Header>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
