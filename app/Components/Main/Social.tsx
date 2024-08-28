import { DiGithubBadge } from "react-icons/di";
import { FaFacebook, FaGithub, FaTwitter, FaEgg } from "react-icons/fa";
import { Text, Box, Grid } from "@mantine/core";

export default function Social() {
  const openInNewTab = (url: any) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <Grid>
      <Grid.Col span={3}>
        <FaGithub
          onClick={() => openInNewTab("https://github.com/twilightty")}
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <FaFacebook
          onClick={() => openInNewTab("https://facebook.com/nghia.tran.1903")}
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <FaTwitter
          onClick={() => openInNewTab("https://twitter.com/emladevops")}
        />
      </Grid.Col>
      <Grid.Col span={3}>
        <FaEgg onClick={() => openInNewTab("https://tleoj.edu.vn")} />
      </Grid.Col>
    </Grid>
  );
}
