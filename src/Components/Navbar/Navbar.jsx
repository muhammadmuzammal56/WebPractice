import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import Logo from "../../img/futurrlogo2 1.svg";
import Moon from "../../img/moon.png";
import GoogleLogo from "../../img/image 29.png";
import Button from "@mui/material/Button";
import { Grid, Container, Paper, IconButton, Typography } from "@mui/material";

const Navbar = () => {
  return (
    // < Grid Container style={{ paddingLeft: 0, paddingRight: 0, marginTop: '8px' }}>
    //     <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
    //         {/* First Container */}
    //         <Grid item xs={6.5}>
    //             <Grid container >
    //                 <Grid item xs={2}>
    //                     <img src={Logo} />
    //                 </Grid>
    //                 <Grid className="navbar" item xs={10} >
    //                     <Grid item className="n-items">
    //                         <Link spy={true} to="Section1" smooth={true} >
    //                             <li >Rankings</li>
    //                         </Link>
    //                         <Link spy={true} to="Section2" smooth={true} >
    //                         <li>Bookmarks</li>
    //                         </Link>

    //                         <Link spy={true} to="Section1" smooth={true} >
    //                         <li>Catagories</li>
    //                         </Link>
    //                         <Link spy={true} to="Section4" smooth={true} >
    //                         <li >GPT Plugins</li>
    //                         </Link>
    //                         <Link spy={true} to="Section5" smooth={true} >
    //                         <li>Resources</li>
    //                         </Link>
    //                         <Link spy={true} to="Section6" smooth={true} >
    //                         <li>Subscribe</li>
    //                         </Link>
    //                     </Grid>
    //                 </Grid>
    //             </Grid>
    //         </Grid>
    //         {/* Second Container */}
    //         <Grid item xs={5.5} >
    //             <Grid container sx={{
    //                 display: 'flex', justifyContent: 'flex-end',
    //                 gap: '10px',
    //             }}>

    //                 <Button
    //                     variant="contained"
    //                     size="small"
    //                     sx={{
    //                         display: 'flex',
    //                         alignItems: 'center',
    //                         fontSize: '12px',
    //                         backgroundColor: "white",
    //                         color: "black",
    //                         borderRadius: "50px",
    //                         borderColor: '#D9D9D9',
    //                         width: '180px',
    //                         height: "30px",
    //                         '&:hover': {
    //                             backgroundColor: 'white',
    //                             color: "black",

    //                         },

    //                     }}
    //                 >
    //                     <img
    //                         src={GoogleLogo}
    //                         alt="Google Logo"
    //                         style={{ width: '18px', height: '18px', marginRight: '4px' }} // Adjust the image size and margin
    //                     />
    //                     <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 500 }}>
    //                         Sign In with Google
    //                     </Typography>
    //                 </Button>
    //                 <Button
    //                     variant="contained"
    //                     size="small"
    //                     sx={{
    //                         fontSize: '12px',
    //                         backgroundColor: '#1E1E1E',
    //                         color: '#FFFFFF',
    //                         borderRadius: "50px",
    //                         width: '150px',
    //                         height: "30px",
    //                         '&:hover': {
    //                             backgroundColor: '#1E1E1E',
    //                             color: '#FFFFFF',
    //                         },
    //                     }}
    //                 >

    //                     <Typography variant="body2" sx={{ fontSize: '12px', fontWeight: 500 }}>
    //                         Submit Resources
    //                     </Typography>
    //                 </Button>

    //                 <div style={{
    //                     backgroundColor: 'white',
    //                     color: '#D9D9D9', // Border color
    //                     borderRadius: '50%', // Full round button
    //                     width: '30px',
    //                     height: '30px',
    //                     border: '1px solid #D9D9D9', // Border color
    //                     display: 'flex',
    //                     alignItems: 'center',
    //                     justifyContent: 'center',
    //                     '&:hover': {
    //                         backgroundColor: 'white',
    //                         color: '#D9D9D9',
    //                     },
    //                 }}>
    //                     <img
    //                         src={Moon}
    //                         alt="Moon Icon"
    //                         style={{ width: '20px', height: '20px' }}
    //                     />
    //                 </div>
    //                 <div style={{
    //                     backgroundColor: 'white',
    //                     color: '#1E1E1E', // Border color
    //                     borderRadius: '50%', // Full round button
    //                     width: '30px',
    //                     height: '30px',
    //                     border: '1px solid #D9D9D9', // Border color
    //                     display: 'flex',
    //                     alignItems: 'center',
    //                     justifyContent: 'center',
    //                     '&:hover': {
    //                         backgroundColor: 'white',
    //                         color: '#D9D9D9',
    //                     },
    //                 }}>
    //                     <Typography variant="body2" sx={{ fontSize: '14px', fontWeight: 500 }}>
    //                         EN
    //                     </Typography>
    //                 </div>

    //             </Grid>
    //         </Grid>
    //     </Grid>
    // </Grid>

    <Grid container spacing={4} sx={{ padding: "10px 0" }}>
      <Grid item sm={6} md={2} lg={1}>
        <img src={Logo} />
      </Grid>
      
      <Grid
        item
        md={8}
        lg={6}
        className="list-item"
        sx={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link spy={true} to="Section1" smooth={true}>
          <li>Rankings</li>
        </Link>
        <Link spy={true} to="Section2" smooth={true}>
          <li>Bookmarks</li>
        </Link>
        <Link spy={true} to="Section1" smooth={true}>
          <li>Catagories</li>
        </Link>
        <Link spy={true} to="Section4" smooth={true}>
          <li>GPT Plugins</li>
        </Link>
        <Link spy={true} to="Section5" smooth={true}>
          <li>Resources</li>
        </Link>
        <Link spy={true} to="Section6" smooth={true}>
          <li>Subscribe</li>
        </Link>
      </Grid>
      
      
      <Grid item sm={6} md={2} lg={5}>
        <div
          className="btn"
          style={{ display: "flex", justifyContent: "flex-end", gap: "5px" }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "12px",
              backgroundColor: "white",
              color: "black",
              borderRadius: "50px",
              borderColor: "#D9D9D9",
              width: "180px",
              height: "30px",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
          >
            <img
              src={GoogleLogo}
              alt="Google Logo"
              style={{ width: "18px", height: "18px", marginRight: "4px" }} // Adjust the image size and margin
            />
            <Typography
              variant="body2"
              sx={{ fontSize: "12px", fontWeight: 500 }}
            >
              Sign In with Google
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              fontSize: "12px",
              backgroundColor: "#1E1E1E",
              color: "#FFFFFF",
              borderRadius: "50px",
              width: "150px",
              height: "30px",
              "&:hover": {
                backgroundColor: "#1E1E1E",
                color: "#FFFFFF",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: "12px", fontWeight: 500 }}
            >
              Submit Resources
            </Typography>
          </Button>

          <div
            style={{
              backgroundColor: "white",
              color: "#D9D9D9", // Border color
              borderRadius: "50%", // Full round button
              width: "30px",
              height: "30px",
              border: "1px solid #D9D9D9", // Border color
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "white",
                color: "#D9D9D9",
              },
            }}
          >
            <img
              src={Moon}
              alt="Moon Icon"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div
            style={{
              backgroundColor: "white",
              color: "#1E1E1E", // Border color
              borderRadius: "50%", // Full round button
              width: "30px",
              height: "30px",
              border: "1px solid #D9D9D9", // Border color
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "white",
                color: "#D9D9D9",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontSize: "14px", fontWeight: 500 }}
            >
              EN
            </Typography>
          </div>
        </div>
        <div
          className="menu-icon"
          style={{
            display: "none",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{ width: "8vh", height: "5vh" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </Grid>
    </Grid>
  );
};
export default Navbar;
