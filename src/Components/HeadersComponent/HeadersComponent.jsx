import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import Navbar from "./Navbar";
import DrawerComponent from "./DrawerComponent";
import Carousel from "./../HomePage/Carousel";

export default function HeadersComponent() {
  const classes = useStyles();

  const [initialState, setInitialState] = useState(false);
  const handleDrawerToogler = () => {
    setInitialState(!initialState);
  };

  const navlinks = [
    { label: "About", Id: "About" },
    { label: "Portfolio", Id: "Portfolio" },
    { label: "Team", Id: "Team" },
    { label: "Contact", Id: "Contact" },
  ];

  return (
    <Box className={classes.HeardeWraper} id="Headder">
      <Navbar navlinks={navlinks} handleDrawerToogler={handleDrawerToogler} />
      <DrawerComponent
        initialState={initialState}
        navlinks={navlinks}
        handleDrawerToogler={handleDrawerToogler}
      />
      <Box>
      <Carousel />

      </Box>
    </Box>
  );
}
