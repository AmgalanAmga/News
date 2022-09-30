import _ from "lodash";
import axios from "axios";
import { PostCart } from "../../components/PostCart";
import { Typography, Box, Grid, Stack } from "@mui/material";

export const getServerSideProps = async () => {
  const res = await axios.get("https://dummyapi.io/data/v1/post", {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "app-id": "633533f8f02614e5a07f8857",
    },
  });
  return {
    props: {
      postResponse: res.data.data,
    },
  };
};

export default function Home({ postResponse }) {
  return (
    <Box
      sx={{
        mb: 5,
        px: 3,
        mt: 15,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Stack direction={"column"} spacing={2} mb={8}>
        <Typography
          variant="h2"
          fontSize={48}
          fontWeight={600}
          textAlign={"center"}
        >
          Blog posts
        </Typography>
        <Typography variant="p" sx={{ color: "#6D7D8B", fontSize: 18 }}>
          Our latest updates and blogs about managing your team
        </Typography>
      </Stack>
      <Grid container spacing={3} justifyContent="center">
        {!postResponse ? (
          <Image
            src="https://gifdb.com/images/high/anime-itachi-mangekyou-sharingan-vw1i0cwsucs672zt.webp"
            alt="sharingan"
            height={500}
            width={500}
          />
        ) : (
          _.map(postResponse, (post, id) => (
            <Grid item sm={6} lg={3} key={id}>
              <PostCart post={post} />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}
