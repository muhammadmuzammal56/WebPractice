import React from "react";
import './Section1.css'
import { Grid, Typography, Container } from '@mui/material';
import image1 from '../../img/Frame 31.png'
import image2 from '../../img/Frame 271.png'
import image3 from '../../img/Frame 35.png'
import image4 from '../../img/Frame 33.png'

// const Transittion = {duration:2,type:'spring'}
const Section1 = () => {



    return (
        <Grid container  sx={{ backgroundColor: '#0938AF',  alignItems: 'center', justifyContent: 'center', borderRadius: '30px', marginTop:'15px' }}>
            {/* <Grid container className="HeadingsContainer" lg={12}  md={12} sm={12}>
            <div className="Mainheadingdiv1">
                <Typography className="mainheading1" sx={{ fontSize: '48px', fontWeight: '700' }} variant="h4" align="center" color="white" >
                    Discover the latest and most
                </Typography>
                </div>
                <div className="Mainheadingdiv1">
                <Typography className="mainheading1" sx={{ fontSize: '48px', fontWeight: '700' }} variant="h5" align="center" color="white">
                    powerful AI resources in one place.
                </Typography>
                </div>
                <div className="Mainheadingdiv2  Mainheadingdiv1">
                <Typography className="mainheading2" sx={{ fontSize: '24px', fontWeight: '400' }} variant="h5" align="center" color="white">
                    We curate, review, and AI resources, making your
                </Typography>
                <Typography className="mainheading2" sx={{ fontSize: '24px', fontWeight: '400' }} variant="h5" align="center" color="white">
                    selection process effortless.
                </Typography>
                </div>
            </Grid> */}
            <Grid  sx={{marginTop:'3%'}}>
            <div >
                <Typography sx={{ fontSize: '48px', fontWeight: '700' }} variant="h4" align="center" color="white" >
                    Discover the latest and most
                </Typography>
                </div>
                <div >
                <Typography  sx={{ fontSize: '48px', fontWeight: '700' }} variant="h5" align="center" color="white">
                    powerful AI resources in one place.
                </Typography>
                </div>
                <div >
                <Typography  sx={{ fontSize: '24px', fontWeight: '400' }} variant="h5" align="center" color="white">
                    We curate, review, and AI resources, making your
                </Typography>
                <Typography  sx={{ fontSize: '24px', fontWeight: '400' }} variant="h5" align="center" color="white">
                    selection process effortless.
                </Typography>
                </div>
            </Grid>

            {/* Second Container with 4 Boxes */}
            <Grid className="Desc-Container" container spacing={2} sx={{ marginTop: 0, width: '90%',marginBottom:'3%' }}>
                <Grid item md={6} lg={6}>
                    <Grid
                        container
                        className="Desc-1"
                        sx={{
                            height: '100%',
                            // backgroundColor: '#fff',
                            borderRadius: '10px',
                            padding: '20px',
                            textAlign: 'start',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                         
                        }}
                    >
                        <Grid item  md={3} xs={3} sx={{ width: '20%' }} className="Desc-imgSec">
                            <img  className="Desc-img" src={image1} alt="Image" width="80%" s />
                        </Grid>
                        <Grid item className="DesCard-HeadingContainer"  md={9} xs={9} sx={{ width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'starts', alignItems: 'starts' }}>
                            <Typography className="DesCard-Heading1" sx={{ fontSize: '24px', fontWeight: '700' }} variant="h5" align="starts" color="#FFFFFF">
                                Explore the Universe of AI                            </Typography>
                            <Typography className="DesCard-Heading2" sx={{ fontSize: '16px', fontWeight: '400' }} variant="h5" align="starts" color="#FFFFFF">
                                Dive into our comprehensive hub and navigate through a curated collection of AI tools, products, and resources tailored for developers, businesses, and AI enthusiasts.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
               
                  <Grid item md={6} lg={6}>
                    <Grid
                        container
                        className="Desc-1"
                        sx={{
                            height: '100%',
                            // backgroundColor: '#fff',
                            borderRadius: '10px',
                            padding: '20px',
                            textAlign: 'start',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                         
                        }}
                    >
                        <Grid item  md={3} xs={3} sx={{ width: '20%' }} className="Desc-imgSec">
                            <img  className="Desc-img" src={image2} alt="Image" width="80%" s />
                        </Grid>
                        <Grid item className="DesCard-HeadingContainer"  md={9} xs={9} sx={{ width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'starts', alignItems: 'starts' }}>
                            <Typography className="DesCard-Heading1" sx={{ fontSize: '24px', fontWeight: '700' }} variant="h5" align="starts" color="#FFFFFF">
                            Shape the Future of AI                           </Typography>
                            <Typography className="DesCard-Heading2" sx={{ fontSize: '16px', fontWeight: '400' }} variant="h5" align="starts" color="#FFFFFF">
                            Join the movement! Contribute to and leverage community-driven insights, trends, and future directions in AI, derived from vast data sources.                           
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} lg={6}>
                    <Grid
                        container
                        className="Desc-1"
                        sx={{
                            height: '100%',
                            // backgroundColor: '#fff',
                            borderRadius: '10px',
                            padding: '20px',
                            textAlign: 'start',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                         
                        }}
                    >
                        <Grid item  md={3} xs={3} sx={{ width: '20%' }} className="Desc-imgSec">
                            <img  className="Desc-img" src={image3} alt="Image" width="80%" s />
                        </Grid>
                        <Grid item className="DesCard-HeadingContainer"  md={9} xs={9} sx={{ width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'starts', alignItems: 'starts' }}>
                            <Typography className="DesCard-Heading1" sx={{ fontSize: '24px', fontWeight: '700' }} variant="h5" align="starts" color="#FFFFFF">
                            Engage in Community Threads                          </Typography>
                            <Typography className="DesCard-Heading2" sx={{ fontSize: '16px', fontWeight: '400' }} variant="h5" align="starts" color="#FFFFFF">
                            Engage in product threads where you can ask questions and receive answers from ai experts and enthusiasts in the community.                        
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} lg={6}>
                    <Grid
                        container
                        className="Desc-1"
                        sx={{
                            height: '100%',
                            // backgroundColor: '#fff',
                            borderRadius: '10px',
                            padding: '20px',
                            textAlign: 'start',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                         
                        }}
                    >
                        <Grid item  md={3} xs={3} sx={{ width: '20%' }} className="Desc-imgSec">
                            <img  className="Desc-img" src={image4} alt="Image" width="80%" s />
                        </Grid>
                        <Grid item className="DesCard-HeadingContainer"  md={9} xs={9} sx={{ width: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'starts', alignItems: 'starts' }}>
                            <Typography className="DesCard-Heading1" sx={{ fontSize: '24px', fontWeight: '700' }} variant="h5" align="starts" color="#FFFFFF">
                            Find and Compare AI resources                      </Typography>
                            <Typography className="DesCard-Heading2" sx={{ fontSize: '16px', fontWeight: '400' }} variant="h5" align="starts" color="#FFFFFF">
                            Easily discover and bookmark the perfect resources for your tasks using our advanced search, ranking tool and top picks .                   
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
             
            </Grid>
        </Grid>
    )
}
export default Section1;