import _ from "lodash";
import {
  Tab,
  Tabs,
  Stack,
  AppBar,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { tabArray } from "../utils/usefulArrays";

export const Navbar = ({ children }) => {
  const router = useRouter();
  const [indicatorId, setIndicatorId] = useState(0);
  const indicatorChange = (e, id) => setIndicatorId(id);

  return (
    <>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ background: "transparent", py: 1, px: 4 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction={"row"} alignItems="baseline">
            <Typography variant="h6">team</Typography>
            <Typography variant="h4" sx={{ color: "#0BBEF2" }}>
              .
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Tabs value={indicatorId} onChange={indicatorChange}>
              {_.map(tabArray, (tabItem) => (
                <Tab
                  onClick={() => router.push(tabItem.pathName)}
                  key={tabItem.tabName}
                  label={tabItem.tabName}
                  sx={{ color: "#fff", fontSize: 14 }}
                />
              ))}
            </Tabs>
            <Button variant={"outlined"} sx={{ whiteSpace: "nowrap" }}>
              Get Access
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};
