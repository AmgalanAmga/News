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
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { tabArray } from "../utils/usefulArrays";

export const Navbar = ({ children }) => {
  const router = useRouter();
  const pathname = router.pathname
  console.log(router.pathname)
  const [indicatorId, setIndicatorId] = useState(0);
  const indicatorChange = (e, id) => setIndicatorId(id);
  // useEffect(() => {
  //   tabArray.forEach((el, index) => {
  //     if (el.pathName === router.pathname) return setIndicatorId(index);
  //   });
  // },[]);
  return (
    <>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ background: "transparent", py: 1, px: 4 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction={"row"} alignItems="baseline" onClick={()=> router.push('/')} sx={{cursor:"pointer"}}>
            <Typography variant="h6">team</Typography>
            <Typography variant="h4" sx={{ color: pathname === "/" ? "#0BBEF2" : "#ffff33" }}>
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
