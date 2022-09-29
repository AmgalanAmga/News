import _ from "lodash";
import { peopleSayArray } from "../utils/usefulArrays";
import { Avatar, Typography, Box, Paper, Stack } from "@mui/material";

export const PeopleSay = () => {
  return (
    <Box
      sx={{
        mb: 5,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography textAlign={"center"} fontSize={48} fontWeight={800}>
        What people say about us
      </Typography>
      <Stack direction={"row"} spacing={4}>
        {_.map(peopleSayArray, ({ name, content, avatar }, id) => (
          <Paper
            elevation={10}
            sx={{
              p: 3,
              width: 250,
              height: 250,
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Stack direction={"row"}>
              {_.map(new Array(5).fill("2"), (el) => (
                <Typography>{el}</Typography>
              ))}
            </Stack>
            <Typography>{content}</Typography>
            <Box
              sx={{
                gap: 3,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar src={avatar} alt={name} />
              <Typography>{name}</Typography>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};
