import {
  Badge,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  ButtonGroup,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./BodyStyles";
import image from "../../images/contactus.jpg";
import { RenderSectionHeading } from "../common/commonComponent";
import { RenderInputText } from "../common/FormComponent";
import ScrollAnimation from "react-animate-on-scroll";
import "./Contact2.css";
import { Theme } from "../Theme";
import BusinessIcon from "@mui/icons-material/Business";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
  const classes = useStyles();
  return (
    <Box className={classes.section} id="Contact">
      <ScrollAnimation animateIn="fadeIn">
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
            <Grid item xs={12} sm={8}>
                {RenderSectionHeading({
                smallText: "Contact",
                heading: "Let's Work Together",
                alignCenter: true,
                })}
            </Grid>
        </Grid>
            <Grid container className="contact-container">
                <Box className="contact-section">
                    <Grid container>
                        <Grid item xs={12} md={6}>  
                            <Box className="Contact-info">
                                <ButtonGroup
                                orientation="vertical"
                                aria-label="vertical text button group"
                                variant="text"
                                fullWidth
                                
                                >
                                    <Button style={{color: Theme.colors.base2}} startIcon={<BusinessIcon />}>Address</Button>
                                    <Button style={{color: Theme.colors.base2}} startIcon={<AlternateEmailIcon />}>
                                        abcd@gmail.com
                                    </Button>
                                    <Button style={{color: Theme.colors.base2}} startIcon={<WhatsAppIcon />}>(+91) 9876543210</Button>
                                    <Button style={{color: Theme.colors.base2}} startIcon={<MoreTimeIcon />}>
                                    Mon-Fri: 6:30 to 10:30
                                    </Button>
                                </ButtonGroup>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box className="contact-form" style={{color: Theme.colors.base2}}>
                                <form className="contact">
                                    <div> 
                                        <TextField
                                        style={{ width: "200px", margin: "5px" }}
                                        type="text"
                                        label="Full Name"
                                        variant="outlined"
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                        style={{ width: "400px", margin: "5px" }}
                                        type="text"
                                        label="Your Mail Address"
                                        variant="outlined"
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                        style={{ width: "400px", margin: "5px" }}
                                        type="text"
                                        label="Your Full Message"
                                        variant="outlined"
                                        multiline
                                        rows={10}
                                        />
                                    </div>
                                    <div>
                                        <Button variant="contained" color="primary" endIcon={<SendIcon />}>
                                        Send Mail to Us
                                        </Button>
                                    </div>
                                </form>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
      </ScrollAnimation>
    </Box>
  );
}
