import React from "react";
import './Section5.css'
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import cardimg1 from "../../img/img1.png"
import cardimg2 from "../../img/cardimg2.png"
import cardimg3 from "../../img/cardimg3.png"
import calender from "../../img/calender.png"
import location from "../../img/location.png"
import shareicon from "../../img/shareicon.png"
import save from "../../img/heart-3-line 1.png"
import share from "../../img/share.png"


function Section5() {

  return (
    <Grid container sx={{marginTop:'4%'}} >
      <Grid container sx={{display:'flex',justifyContent:'space-between'}} >
        <Typography variant="h6" sx={{ fontSize: '32px', fontWeight: '500' }}>Upcoming AI Events</Typography>
        <Typography variant="h6" sx={{ fontSize: '16px', color: '#406BDA', fontWeight: '500' }}>Explore More</Typography>
      </Grid>
      <Grid container spacing={5} sx={{ marginTop: '0%'}}>
        <Grid item xs={4}>
          <Card sx={{ width: '380px', height: '157px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(21, 21, 21, 0.1)' }}>
            <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
              <Grid container spacing={1}>
                <Grid item xs={5} sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {/* Image */}
                  <img src={cardimg1} alt='' style={{ width: '150px', height: '120px' }} />

                  {/* Button in top-right corner */}
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      width: '8%',
                      position: 'absolute',
                      top: 6,
                      right: 0,
                      margin: '8px',
                      backgroundColor: 'white', // Set background color to white
                      color: 'black', // Set text color to black
                      '&:hover': {
                        backgroundColor: 'white', // Set background color to white on hover (effectively removing hover effect)
                      },
                    }}
                  >
                    <span style={{ fontSize: '6px', fontWeight: '500', textTransform: 'none' }}>From $1957</span>
                  </Button>
                </Grid>

                <Grid item xs={7}>
                  <Typography sx={{ fontSize: '15px', fontWeight: 500 }} variant="h6" component="div">
                    The Software Architecture Gathering - Digital 2023
                  </Typography>
                  <Grid container sx={{ display: 'flex' }}>
                    <img src={calender} style={{ width: '13.44px', height: '12px', marginTop: '3px' }} />
                    <Typography color="textSecondary" sx={{ fontSize: '13px', fontWeight: 400, marginLeft: '4px' }}>November 27-30, 2023</Typography>

                  </Grid>
                  <Grid container sx={{ display: 'flex' }}>
                    <img src={location} style={{ width: '13.44px', height: '12px', marginTop: '3px' }} />
                    <Typography color="textSecondary" sx={{ fontSize: '12px', fontWeight: 400, marginLeft: '0px', marginLeft: '3px' }}>Boston, Massachussettes, USA</Typography>
                  </Grid>
                  <Grid container>
                    <Grid item xs={4}>
                      <Button variant="outlined" size="medium" sx={{
                        borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E', width: '59.36', height: '25.47', backgroundColor: '#1E1E1E'

                      }}>
                        <img src={share} style={{ width: '11.76px', height: '10.8px' }}></img>
                      </Button>
                    </Grid>
                    <Grid item xs={8}>
                      <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '10px', height: '20px', color: '#1E1E1E',
                        '&:hover': {
                          color: '#1E1E1E',
                          borderColor: '#D9D9D9',
                          backgroundColor: 'transparent',
                          width: '10px',
                        }
                      }}>
                        <img src={shareicon} alt="Share Icon" style={{ width: '8px', height: '8px' }} />
                      </Button>
                      <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '10px', height: '20px', color: '#1E1E1E',
                        '&:hover': {
                          color: '#1E1E1E',
                          borderColor: '#D9D9D9',
                          backgroundColor: 'transparent',
                          width: '10px',
                        }
                      }}>
                        <img src={save} alt="Share Icon" style={{ width: '8px', height: '8px' }} />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ width: '380px', height: '157px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(21, 21, 21, 0.1)' }}>
            <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
              <Grid container spacing={1}>
                <Grid item xs={5} sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {/* Image */}
                  <img src={cardimg2} alt='' style={{ width: '150px', height: '120px' }} />

                  {/* Button in top-right corner */}
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      width: '8%',
                      position: 'absolute',
                      top: 6,
                      right: 0,
                      margin: '8px',
                      backgroundColor: 'white', // Set background color to white
                      color: 'black', // Set text color to black
                      '&:hover': {
                        backgroundColor: 'white', // Set background color to white on hover (effectively removing hover effect)
                      },
                    }}
                  >
                    <span style={{ fontSize: '6px', fontWeight: '500', textTransform: 'none' }}>From $1957</span>
                  </Button>
                </Grid>
                <Grid item xs={7}>
                  <Typography sx={{ fontSize: '15px', fontWeight: 500 }} variant="h6" component="div">
                    The Software Architecture Gathering - Digital 2023
                  </Typography>
                  <Grid container sx={{ display: 'flex' }}>
                    <img src={calender} style={{ width: '13.44px', height: '12px', marginTop: '3px' }} />
                    <Typography color="textSecondary" sx={{ fontSize: '13px', fontWeight: 400, marginLeft: '4px' }}>November 27-30, 2023</Typography>

                  </Grid>
                  <Grid container sx={{ display: 'flex' }}>
                    <img src={location} style={{ width: '13.44px', height: '12px', marginTop: '3px' }} />
                    <Typography color="textSecondary" sx={{ fontSize: '12px', fontWeight: 400, marginLeft: '0px', marginLeft: '3px' }}>Boston, Massachussettes, USA</Typography>
                  </Grid>
                  <Grid container>
                    <Grid item xs={4}>
                      <Button variant="outlined" size="medium" sx={{
                        borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E', width: '59.36', height: '25.47', backgroundColor: '#1E1E1E'

                      }}>
                        <img src={share} style={{ width: '11.76px', height: '10.8px' }}></img>
                      </Button>
                    </Grid>
                    <Grid item xs={8}>
                      <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '10px', height: '20px', color: '#1E1E1E',
                        '&:hover': {
                          color: '#1E1E1E',
                          borderColor: '#D9D9D9',
                          backgroundColor: 'transparent',
                          width: '10px',
                        }
                      }}>
                        <img src={shareicon} alt="Share Icon" style={{ width: '8px', height: '8px' }} />
                      </Button>
                      <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '10px', height: '20px', color: '#1E1E1E',
                        '&:hover': {
                          color: '#1E1E1E',
                          borderColor: '#D9D9D9',
                          backgroundColor: 'transparent',
                          width: '10px',
                        }
                      }}>
                        <img src={save} alt="Share Icon" style={{ width: '8px', height: '8px' }} />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ width: '380px', height: '157px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(21, 21, 21, 0.1)' }}>
            <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
              <Grid container spacing={1}>
                <Grid item xs={5} sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  {/* Image */}
                  <img src={cardimg3} alt='' style={{ width: '150px', height: '120px' }} />

                  {/* Button in top-right corner */}
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      width: '8%',
                      position: 'absolute',
                      top: 6,
                      right: 0,
                      margin: '8px',
                      backgroundColor: 'white', // Set background color to white
                      color: 'black', // Set text color to black
                      '&:hover': {
                        backgroundColor: 'white', // Set background color to white on hover (effectively removing hover effect)
                      },
                    }}
                  >
                    <span style={{ fontSize: '6px', fontWeight: '500', textTransform: 'none' }}>From $1957</span>
                  </Button>
                </Grid>
                <Grid item xs={7}>
                  <Typography sx={{ fontSize: '15px', fontWeight: 500 }} variant="h6" component="div">
                    The Software Architecture Gathering - Digital 2023
                  </Typography>
                  <Grid container sx={{ display: 'flex' }}>
                    <img src={calender} style={{ width: '13.44px', height: '12px', marginTop: '3px' }} />
                    <Typography color="textSecondary" sx={{ fontSize: '13px', fontWeight: 400, marginLeft: '4px' }}>November 27-30, 2023</Typography>

                  </Grid>
                  <Grid container sx={{ display: 'flex' }}>
                    <img src={location} style={{ width: '13.44px', height: '12px', marginTop: '3px' }} />
                    <Typography color="textSecondary" sx={{ fontSize: '12px', fontWeight: 400, marginLeft: '0px', marginLeft: '3px' }}>Boston, Massachussettes, USA</Typography>
                  </Grid>
                  <Grid container>
                    <Grid item xs={4}>
                      <Button variant="outlined" size="medium" sx={{
                        borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E', width: '59.36', height: '25.47', backgroundColor: '#1E1E1E'

                      }}>
                        <img src={share} style={{ width: '11.76px', height: '10.8px' }}></img>
                      </Button>
                    </Grid>
                    <Grid item xs={8}>
                      <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '10px', height: '20px', color: '#1E1E1E',
                        '&:hover': {
                          color: '#1E1E1E',
                          borderColor: '#D9D9D9',
                          backgroundColor: 'transparent',
                          width: '10px',
                        }
                      }}>
                        <img src={shareicon} alt="Share Icon" style={{ width: '8px', height: '8px' }} />
                      </Button>
                      <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '10px', height: '20px', color: '#1E1E1E',
                        '&:hover': {
                          color: '#1E1E1E',
                          borderColor: '#D9D9D9',
                          backgroundColor: 'transparent',
                          width: '10px',
                        }
                      }}>
                        <img src={save} alt="Share Icon" style={{ width: '8px', height: '8px' }} />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>

  );
}

export default Section5;
