import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";
import Image from "../../images/brandBanner.jpg";

export const useStyles = makeStyles((theme) => ({
  HeardeWraper: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    backgroundColor: Theme.colors.primary1,
  },
  Headercontaier: {
    width: "85%",
    minHeight: "90vh",
    height: "auto",
    padding: "20px",
    color: Theme.colors.base2,
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    fontFamily: "roboto",
  },
  headerTitle: {
    fontSize: "3rem",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  headerDesc: {
    fontSize: "2rem",
    margin: theme.spacing(1, 0),
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      margin: theme.spacing(2, 0),
    },
  },
  navbar: {
    backgroundColor: Theme.colors.base1,
    color: Theme.colors.base2,
  },
  ToolBar: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  navlinks: {
    color: Theme.colors.base2,
  },

  //decorator.
  decorator: {
    display: "flex",
    fontWeight: "bolder",
    fontFamily: "roboto",
    position: "relative",
    marginTop: "20px",
    "&:before": {
      width: "40px",
      height: "40px",
      backgroundColor: Theme.colors.primary,
      content: '""',
      borderRadius: "50%",
    },
  },
  decoratorText: {
    lineHeight: "100px",
    position: " absolute",
    left: "20px",
  },

  arrow: {
    lineHeight: " 20px",
    position: " absolute",
    left: "89px",
    animationName: "upDown",
    animationDuration: "1.5s",
    animationIterationCount: "infinite",
  },

  //creating the animations
  "@global": {
    "@keyframes upDown": {
      "0%": {
        transform: "scale(1,1)",
        paddingTop: "0px",
      },
      "100%": {
        transform: "scale(1,1.2)",
        paddingTop: "10px",
      },
    },
  },

  //drewer style
  drawer: {
    width: "250px",
    height: "100vh",
  },
  drawerContainer: {
    width: "250px",
    height: "100vh",
    backgroundColor: Theme.colors.primary1,
  },
  listItem: {
    color: Theme.colors.base2,
  },
}));