import { Transition, Text, Grid, Center } from "@mantine/core";
import IFrame from "react-iframe";
import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandGolang,
  TbBrandPython,
  TbBrandValorant,
  TbBrandMinecraft,
} from "react-icons/tb";

function Techstack() {
  return <Text>My techstack</Text>;
}

function animate({ opened }: { opened: boolean }) {
  return (
    <Transition
      mounted={opened}
      transition="pop"
      duration={800}
      timingFunction="ease"
    >
      {(styles) => (
        <div style={styles}>
          <Center>
            <Text>My techstack: </Text>
          </Center>
          <Center>
            <Grid>
              <Grid.Col span={2}>
                <TbBrandNextjs />
              </Grid.Col>
              <Grid.Col span={2}>
                <TbBrandReact />
              </Grid.Col>
              <Grid.Col span={2}>
                <TbBrandGolang />
              </Grid.Col>
              <Grid.Col span={2}>
                <TbBrandPython />
              </Grid.Col>
              <Grid.Col span={2}>
                <TbBrandValorant />
              </Grid.Col>
              <Grid.Col span={2}>
                <TbBrandMinecraft />
              </Grid.Col>
            </Grid>
          </Center>
        </div>
      )}
    </Transition>
  );
}

export default animate;
