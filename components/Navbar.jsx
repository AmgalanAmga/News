import _ from "lodash";
import {
  Tab,
  Tabs,
  Stack,
  AppBar,
  Button,
  Toolbar,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { tabArray } from "../utils/usefulArrays";
import { DarkMode, LightMode } from "@mui/icons-material";

export const Navbar = ({ children }) => {
  const router = useRouter();
  const pathname = router.pathname;
  const [scrollValue, setScrollValue] = useState(0);
  const [indicatorId, setIndicatorId] = useState(0);
  const indicatorChange = (e, id) => setIndicatorId(id);
  useEffect(() => {
    switch (pathname) {
      case "/[blog]":
        return setIndicatorId(1);
      case "/contact":
        return setIndicatorId(2);
      case "/login":
        return setIndicatorId(3);
      default:
        return setIndicatorId(0);
    }
  }, [pathname]);
  useEffect(() => {
    window.onscroll = function (event) {
      setScrollValue(window.pageYOffset);
    };
  });
  return (
    <>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          background: pathname === "/" ? "transparent" : "#77ccff",
          backdropFilter: scrollValue === 0 ? "blur(0)" : "blur(10px)",
          py: 1,
          px: 4,
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack
            direction={"row"}
            alignItems="baseline"
            onClick={() => router.push("/")}
            sx={{ cursor: "pointer" }}
          >
            <Typography variant="h6">team</Typography>
            <Typography
              variant="h4"
              sx={{ color: pathname === "/" ? "#0BBEF2" : "#ffff33" }}
            >
              .
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <FormControlLabel
              color="secondary"
              control={
                <Checkbox
                  icon={<LightMode />}
                  checkedIcon={<DarkMode />}
                  id="email"
                />
              }
            />
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
