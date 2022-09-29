import _ from "lodash";
import Image from "next/image";
import { aboutArray } from "../utils/usefulArrays";
import { TrendingFlat } from "@mui/icons-material";
import { Typography, Box, Button, Stack } from "@mui/material";

export const Services = () => {
  return (
    <Stack
      direction={"column"}
      spacing={{ sm: 15, lg: 5 }}
      sx={{ mt: { sm: "35px", xl: "30px" } }}
    >
      {_.map(aboutArray, ({ title, content, image }, idx) => (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: idx % 2 ? "row-reverse" : "row",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "48px",
                width: { sm: "400px", xl: "600px" },
                fontWeight: "800px",
                mb: 4,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                width: { sm: "465px", xl: "800px" },
                mb: 4,
              }}
              width={465}
              fontSize={18}
            >
              {content}
            </Typography>
            <Button
              variant="standard"
              sx={{ textDecoration: "underline" }}
              endIcon={<TrendingFlat />}
            >
              See more
            </Button>
          </Box>
          <Image
            src={image}
            alt="image"
            width={500}
            height={500}
            objectFit="contain"
          />
        </Box>
      ))}
    </Stack>
  );
};
