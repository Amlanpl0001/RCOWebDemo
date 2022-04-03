import { Box, Container, Grid, Hidden } from "@material-ui/core";
import React from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/About.jpg";
import { RenderSectionHeading, CardMedia } from "../common/commonComponent";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import PermDeviceInformationIcon from "@material-ui/icons/PermDeviceInformation";
import ToysIcon from "@material-ui/icons/Toys";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutUs() {
  const classes = useStyles();

  const cardMediaData = [
    {
      title: "Civil Law",
      icon: <DashboardIcon />,
    },
    {
      title: "Corporate and M&A",
      icon: <ToysIcon />,
    },
    {
      title: "Real Estate Laws",
      icon: <PermDeviceInformationIcon />,
    },
    {
      title: "Criminal Law",
      icon: <AcUnitIcon />,
    },
    {
      title: "Banking Finance",
      icon: <AcUnitIcon />,
    },
    {
      title: "Consumer Protection Laws",
      icon: <AcUnitIcon />,
    },
    {
      title: "Direct and Indirect Taxes",
      icon: <AcUnitIcon />,
    },
    {
      title: "Patents, Trademarks and Copyrights",
      icon: <AcUnitIcon />,
    },
    {
      title: "Testamentary and Intestate Succession",
      icon: <AcUnitIcon />,
    },
    {
      title: "Admiralty law",
      icon: <AcUnitIcon />,
    }
  ];
  return (
    <Box className={classes.section} id='About'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container>
          <Grid container spacing={1}>
            <Grid>
              {RenderSectionHeading({
                smallText: "ABOUT ME",
                heading: "Hello I'm Rajib Ghosh",
                description:
                  "A self taught developer who loves to codes something that wiil impact majority of the people in good waay !",
              })}
              <br />
              <Grid container>
                {cardMediaData.map((item, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    {CardMedia({
                      label: item.title,
                      Icon: item.icon,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}