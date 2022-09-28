import _ from "lodash";
import { Box, Grid, Typography } from "@mui/material";
import { Instagram, Facebook, Twitter } from "@mui/icons-material";

export const Footer = () => {
  const footerArray = {
    useCases: ["UI design", "UX design", "prototyping"],
    explore: ["figma", "customers", "why i love figma"],
    resources: ["community resources hub", "support", "education"],
  };
  return (
    <Box sx={{ background: "#252B3B", py: 5, px: 7, color: "white" }}>
      <div></div>
      <Grid container>
        {Object.entries(footerArray).map(([name, item]) => (
          <Grid item key={name}>
            {_.map(item, (el, i) => (
              <Typography>{el}</Typography>
            ))}
          </Grid>
        ))}
        <Grid item></Grid>
      </Grid>
    </Box>
  );
};
