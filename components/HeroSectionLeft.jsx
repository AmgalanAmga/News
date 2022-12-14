import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

export const HeroSectionLeft = () => {
  return (
    <Box
      sx={{
        top: "50%",
        width: 515,
        color: "white",
        position: "absolute",
        left: { sm: "30%", xl: "20%" },
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography variant="h3" sx={{ fontSize: 48, mb: 4 }}>
        Instant collaborations for remote teams
      </Typography>
      <Typography variant="p" sx={{ fontSize: 17 }}>
        All in one for your remote team chats, collaboration and track projects
      </Typography>
      <Box sx={{ mt: 5 }}>
        <TextField
          type={"text"}
          label="Email"
          sx={{
            borderRadius: 1,
            background: "white",
            "&& fieldset": { border: "none" },
          }}
          size="small"
        />
        <Button variant="contained" sx={{ fontSize: 14, py: "7.5px" }}>
          Get early access
        </Button>
      </Box>
    </Box>
  );
};
