
import './Section6.css'
import { Grid, Container } from '@mui/material';
import img1 from "../../img/Rectangle 28.png"
import img2 from "../../img/Rectangle 32.png"
import img3 from "../../img/Rectangle 37.png"
import img4 from "../../img/Rectangle 42.png"
import img5 from "../../img/Rectangle 47.png"
import vector1 from "../../img/Vector.png"
import vector2 from "../../img/cup-star-svgrepo-com (1) 2.png"
import vector3 from "../../img/cup-star-svgrepo-com (1) 3.png"
// import { Verified } from '@mui/icons-material';
import verified from "../../img/Verifiedlogo.png"
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';
import heartemoji from "../../img/chat-1-line 1.png"

function Section6() {



    return (
        <Grid style={{ paddingLeft: 0, paddingRight: 0, marginTop: '5%' }} id="Section6">
             <Grid container sx={{display:'flex',justifyContent:'flex-start'}}>
             <Typography variant="h6" sx={{ fontSize: '32px', fontWeight: '500' }}>TOP 100 AI tools</Typography>
             </Grid>
            <Grid container sx={{ backgroundColor: '#FFFFFF', height: '100px', display: 'flex', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(21, 21, 21, 0.1)', marginTop: '2%'  }}>
                {/* Subcontainer in a row */}


                <Grid item xs={6} sx={{ display: 'flex', width: '600px', height: '100px' }}>

                    <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: '8px' }}>
                            <img src={vector1} style={{ width: '21.5px', height: '21.5px', marginTop: '7px' }}></img>
                            <span style={{ fontSize: '32px', fontWeight: '500', marginLeft: '7px' }}>1.</span>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={img1} style={{ width: '144px', height: '80px', marginTop: '4px' }}></img>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container sx={{ display: 'flex' }}>
                                {/* First Heading */}
                                <span style={{ fontSize: '18px', fontWeight: '700', display: 'block' }}>FutureTools.io</span>

                                {/* Logo */}
                                <img src={verified} style={{ maxWidth: '12px', height: '12px', marginTop: '6px', marginLeft: '4px' }} />
                            </Grid>
                            {/* Second Heading */}
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#585858', display: 'block' }}>
                                General writing platform
                            </span>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={6} sx={{ width: '600px', height: '100px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        Premium
                    </Button>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', marginLeft: '4px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        marginLeft: '10px',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        <img src={heartemoji} alt="Heart Emoji" style={{ width: '24px', height: '24px', marginRight: '4px' }} />
                        221
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderRadius: '100px',
                            borderColor: '#D9D9D9',
                            textTransform: 'none',
                            color: '#FFFFFF', // Set text color to white
                            backgroundColor: '#1E1E1E',
                            marginRight: '20px',
                            marginLeft: '10px'
                        }}
                    >
                        <span style={{ fontSize: '14px', fontWeight: '400', color: '#FFFFFF' }}>View Report</span>
                    </Button>
                </Grid>

            </Grid>
            <Grid container sx={{ backgroundColor: '#FFFFFF',  height: '100px', display: 'flex', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(21, 21, 21, 0.1)', marginTop: '2%' }}>
                {/* Subcontainer in a row */}


                <Grid item xs={6} sx={{ display: 'flex', width: '600px', height: '100px' }}>

                    <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: '8px' }}>
                            <img src={vector2} style={{ width: '21.5px', height: '21.5px', marginTop: '7px' }}></img>
                            <span style={{ fontSize: '32px', fontWeight: '500', marginLeft: '7px' }}>2.</span>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={img2} style={{ width: '144px', height: '80px', marginTop: '4px' }}></img>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container sx={{ display: 'flex' }}>
                                {/* First Heading */}
                                <span style={{ fontSize: '18px', fontWeight: '700', display: 'block' }}>ChatGPT</span>

                                {/* Logo */}
                                <img src={verified} style={{ maxWidth: '12px', height: '12px', marginTop: '6px', marginLeft: '4px' }} />
                            </Grid>
                            {/* Second Heading */}
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#585858', display: 'block' }}>
                                General writing platform
                            </span>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={6} sx={{ width: '600px', height: '100px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        Premium
                    </Button>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        marginLeft: '10px',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        $15/mo.
                    </Button>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', marginLeft: '4px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        marginLeft: '10px',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        <img src={heartemoji} alt="Heart Emoji" style={{ width: '24px', height: '24px', marginRight: '4px' }} />
                        5
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderRadius: '100px',
                            borderColor: '#D9D9D9',
                            textTransform: 'none',
                            color: '#FFFFFF', // Set text color to white
                            backgroundColor: '#1E1E1E',
                            marginRight: '20px',
                            marginLeft: '10px'
                        }}
                    >
                        <span style={{ fontSize: '14px', fontWeight: '400', color: '#FFFFFF' }}>View Report</span>
                    </Button>
                </Grid>

            </Grid>
            <Grid container sx={{ backgroundColor: '#FFFFFF', height: '100px', display: 'flex', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(21, 21, 21, 0.1)', marginTop: '2%' }}>
                {/* Subcontainer in a row */}


                <Grid item xs={6} sx={{ display: 'flex', width: '600px', height: '100px' }}>

                    <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: '8px' }}>
                            <img src={vector3} style={{ width: '21.5px', height: '21.5px', marginTop: '7px' }}></img>
                            <span style={{ fontSize: '32px', fontWeight: '500', marginLeft: '7px' }}>3.</span>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={img3} style={{ width: '144px', height: '80px', marginTop: '4px' }}></img>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container sx={{ display: 'flex' }}>
                                {/* First Heading */}
                                <span style={{ fontSize: '18px', fontWeight: '700', display: 'block' }}>ChatGPT</span>
                            </Grid>
                            {/* Second Heading */}
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#585858', display: 'block' }}>
                            General writing platform
                            </span>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={6} sx={{ width: '600px', height: '100px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        Premium
                    </Button>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        marginLeft: '10px',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        $15/mo.
                    </Button>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', marginLeft: '4px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        marginLeft: '10px',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        <img src={heartemoji} alt="Heart Emoji" style={{ width: '24px', height: '24px', marginRight: '4px' }} />
                        5
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderRadius: '100px',
                            borderColor: '#D9D9D9',
                            textTransform: 'none',
                            color: '#FFFFFF', // Set text color to white
                            backgroundColor: '#1E1E1E',
                            marginRight: '20px',
                            marginLeft: '10px'
                        }}
                    >
                        <span style={{ fontSize: '14px', fontWeight: '400', color: '#FFFFFF' }}>View Report</span>
                    </Button>
                </Grid>

            </Grid>
            <Grid container sx={{ backgroundColor: '#FFFFFF',  height: '100px', display: 'flex', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(21, 21, 21, 0.1)', marginTop: '2%' }}>
                {/* Subcontainer in a row */}


                <Grid item xs={6} sx={{ display: 'flex', width: '600px', height: '100px' }}>

                    <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: '8px' }}>
                            {/* <img src={vector3} style={{ width: '21.5px', height: '21.5px', marginTop: '7px' }}></img> */}
                            <span style={{ fontSize: '32px', fontWeight: '500', marginLeft: '7px' }}>4.</span>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={img4} style={{ width: '144px', height: '80px', marginTop: '4px' }}></img>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container sx={{ display: 'flex' }}>
                                {/* First Heading */}
                                <span style={{ fontSize: '18px', fontWeight: '700', display: 'block' }}>ChatGPT</span>
                            </Grid>
                            {/* Second Heading */}
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#585858', display: 'block' }}>
                            General writing platform
                            </span>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={6} sx={{ width: '600px', height: '100px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        Premium
                    </Button>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', marginLeft: '4px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        marginLeft: '10px',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        <img src={heartemoji} alt="Heart Emoji" style={{ width: '24px', height: '24px', marginRight: '4px' }} />
                        221
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderRadius: '100px',
                            borderColor: '#D9D9D9',
                            textTransform: 'none',
                            color: '#FFFFFF', // Set text color to white
                            backgroundColor: '#1E1E1E',
                            marginRight: '20px',
                            marginLeft: '10px'
                        }}
                    >
                        <span style={{ fontSize: '14px', fontWeight: '400', color: '#FFFFFF' }}>View Report</span>
                    </Button>
                </Grid>

            </Grid>
            <Grid container sx={{ backgroundColor: '#FFFFFF',  height: '100px', display: 'flex', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(21, 21, 21, 0.1)', marginTop: '2%' }}>
                {/* Subcontainer in a row */}


                <Grid item xs={6} sx={{ display: 'flex', width: '600px', height: '100px' }}>

                    <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: '8px' }}>
                            {/* <img src={vector3} style={{ width: '21.5px', height: '21.5px', marginTop: '7px' }}></img> */}
                            <span style={{ fontSize: '32px', fontWeight: '500', marginLeft: '7px' }}>5.</span>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={img5} style={{ width: '144px', height: '80px', marginTop: '4px' }}></img>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container sx={{ display: 'flex' }}>
                                {/* First Heading */}
                                <span style={{ fontSize: '18px', fontWeight: '700', display: 'block' }}>ChatGPT</span>
                            </Grid>
                            {/* Second Heading */}
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#585858', display: 'block' }}>
                            General writing platform
                            </span>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={6} sx={{ width: '600px', height: '100px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        Premium
                    </Button>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', marginLeft: '4px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        marginLeft: '10px',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        <img src={heartemoji} alt="Heart Emoji" style={{ width: '24px', height: '24px', marginRight: '4px' }} />
                        221
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderRadius: '100px',
                            borderColor: '#D9D9D9',
                            textTransform: 'none',
                            color: '#FFFFFF', // Set text color to white
                            backgroundColor: '#1E1E1E',
                            marginRight: '20px',
                            marginLeft: '10px'
                        }}
                    >
                        <span style={{ fontSize: '14px', fontWeight: '400', color: '#FFFFFF' }}>View Report</span>
                    </Button>
                </Grid>

            </Grid>
            <Grid container sx={{ backgroundColor: '#FFFFFF',  height: '100px', display: 'flex', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(21, 21, 21, 0.1)', marginTop: '2%' }}>
                {/* Subcontainer in a row */}


                <Grid item xs={6} sx={{ display: 'flex', width: '600px', height: '100px' }}>

                    <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: '8px' }}>
                            <span style={{ fontSize: '32px', fontWeight: '500', marginLeft: '7px' }}>6.</span>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={img2} style={{ width: '144px', height: '80px', marginTop: '4px' }}></img>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container sx={{ display: 'flex' }}>
                                {/* First Heading */}
                                <span style={{ fontSize: '18px', fontWeight: '700', display: 'block' }}>ChatGPT</span>

                                {/* Logo */}
                               <img src={verified} style={{ maxWidth: '12px', height: '12px', marginTop: '6px', marginLeft: '4px' }} />
                            </Grid>
                            {/* Second Heading */}
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#585858', display: 'block' }}>
                                General writing platform
                            </span>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={6} sx={{ width: '600px', height: '100px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        Premium
                    </Button>
                
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', marginLeft: '4px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        marginLeft: '10px',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        <img src={heartemoji} alt="Heart Emoji" style={{ width: '24px', height: '24px', marginRight: '4px' }} />
                        221
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderRadius: '100px',
                            borderColor: '#D9D9D9',
                            textTransform: 'none',
                            color: '#FFFFFF', // Set text color to white
                            backgroundColor: '#1E1E1E',
                            marginRight: '20px',
                            marginLeft: '10px'
                        }}
                    >
                        <span style={{ fontSize: '14px', fontWeight: '400', color: '#FFFFFF' }}>View Report</span>
                    </Button>
                </Grid>

            </Grid>
            <Grid container sx={{ backgroundColor: '#FFFFFF',  height: '100px', display: 'flex', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(21, 21, 21, 0.1)', marginTop: '2%' }}>
                {/* Subcontainer in a row */}


                <Grid item xs={6} sx={{ display: 'flex', width: '600px', height: '100px' }}>

                    <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: '8px' }}>
                            <span style={{ fontSize: '32px', fontWeight: '500', marginLeft: '7px' }}>7.</span>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={img3} style={{ width: '144px', height: '80px', marginTop: '4px' }}></img>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container sx={{ display: 'flex' }}>
                                {/* First Heading */}
                                <span style={{ fontSize: '18px', fontWeight: '700', display: 'block' }}>ChatGPT</span>
                            </Grid>
                            {/* Second Heading */}
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#585858', display: 'block' }}>
                            General writing platform
                            </span>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={6} sx={{ width: '600px', height: '100px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        Premium
                    </Button>
               
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', marginLeft: '4px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        marginLeft: '10px',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        <img src={heartemoji} alt="Heart Emoji" style={{ width: '24px', height: '24px', marginRight: '4px' }} />
                        221
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderRadius: '100px',
                            borderColor: '#D9D9D9',
                            textTransform: 'none',
                            color: '#FFFFFF', // Set text color to white
                            backgroundColor: '#1E1E1E',
                            marginRight: '20px',
                            marginLeft: '10px'
                        }}
                    >
                        <span style={{ fontSize: '14px', fontWeight: '400', color: '#FFFFFF' }}>View Report</span>
                    </Button>
                </Grid>

            </Grid>
            <Grid container sx={{ backgroundColor: '#FFFFFF',  height: '100px', display: 'flex', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(21, 21, 21, 0.1)', marginTop: '2%' }}>
                {/* Subcontainer in a row */}


                <Grid item xs={6} sx={{ display: 'flex', width: '600px', height: '100px' }}>

                    <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: '8px' }}>
                            <span style={{ fontSize: '32px', fontWeight: '500', marginLeft: '7px' }}>8.</span>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={img3} style={{ width: '144px', height: '80px', marginTop: '4px' }}></img>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container sx={{ display: 'flex' }}>
                                {/* First Heading */}
                                <span style={{ fontSize: '18px', fontWeight: '700', display: 'block' }}>ChatGPT</span>
                            </Grid>
                            {/* Second Heading */}
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#585858', display: 'block' }}>
                            General writing platform
                            </span>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={6} sx={{ width: '600px', height: '100px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        Premium
                    </Button>
               
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', marginLeft: '4px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        marginLeft: '10px',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        <img src={heartemoji} alt="Heart Emoji" style={{ width: '24px', height: '24px', marginRight: '4px' }} />
                        221
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderRadius: '100px',
                            borderColor: '#D9D9D9',
                            textTransform: 'none',
                            color: '#FFFFFF', // Set text color to white
                            backgroundColor: '#1E1E1E',
                            marginRight: '20px',
                            marginLeft: '10px'
                        }}
                    >
                        <span style={{ fontSize: '14px', fontWeight: '400', color: '#FFFFFF' }}>View Report</span>
                    </Button>
                </Grid>

            </Grid>
            <Grid container sx={{ backgroundColor: '#FFFFFF',  height: '100px', display: 'flex', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(21, 21, 21, 0.1)', marginTop: '2%' }}>
                {/* Subcontainer in a row */}


                <Grid item xs={6} sx={{ display: 'flex', width: '600px', height: '100px' }}>

                    <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: '8px' }}>
                            {/* <img src={vector3} style={{ width: '21.5px', height: '21.5px', marginTop: '7px' }}></img> */}
                            <span style={{ fontSize: '32px', fontWeight: '500', marginLeft: '7px' }}>9.</span>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={img5} style={{ width: '144px', height: '80px', marginTop: '4px' }}></img>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container sx={{ display: 'flex' }}>
                                {/* First Heading */}
                                <span style={{ fontSize: '18px', fontWeight: '700', display: 'block' }}>ChatGPT</span>
                            </Grid>
                            {/* Second Heading */}
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#585858', display: 'block' }}>
                            General writing platform
                            </span>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={6} sx={{ width: '600px', height: '100px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        Premium
                    </Button>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', marginLeft: '4px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        marginLeft: '10px',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        <img src={heartemoji} alt="Heart Emoji" style={{ width: '24px', height: '24px', marginRight: '4px' }} />
                        221
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderRadius: '100px',
                            borderColor: '#D9D9D9',
                            textTransform: 'none',
                            color: '#FFFFFF', // Set text color to white
                            backgroundColor: '#1E1E1E',
                            marginRight: '20px',
                            marginLeft: '10px'
                        }}
                    >
                        <span style={{ fontSize: '14px', fontWeight: '400', color: '#FFFFFF' }}>View Report</span>
                    </Button>
                </Grid>

            </Grid>
            <Grid container sx={{ backgroundColor: '#FFFFFF',  height: '100px', display: 'flex', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(21, 21, 21, 0.1)', marginTop: '2%' }}>
                {/* Subcontainer in a row */}


                <Grid item xs={6} sx={{ display: 'flex', width: '600px', height: '100px' }}>

                    <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end', marginRight: '8px' }}>
                            <span style={{ fontSize: '32px', fontWeight: '500', marginLeft: '7px' }}>7.</span>
                        </Grid>
                        <Grid item xs={4}>
                            <img src={img3} style={{ width: '144px', height: '80px', marginTop: '4px' }}></img>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container sx={{ display: 'flex' }}>
                                {/* First Heading */}
                                <span style={{ fontSize: '18px', fontWeight: '700', display: 'block' }}>ChatGPT</span>
                            </Grid>
                            {/* Second Heading */}
                            <span style={{ fontSize: '14px', fontWeight: '500', color: '#585858', display: 'block' }}>
                            General writing platform
                            </span>

                        </Grid>
                    </Grid>
                </Grid>


                <Grid item xs={6} sx={{ width: '600px', height: '100px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        Premium
                    </Button>
               
                    <Button variant="outlined" size="small" sx={{
                        borderRadius: '8px', marginLeft: '4px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                        marginLeft: '10px',
                        '&:hover': {
                            color: '#1E1E1E', // Text color on hover
                            borderColor: '#D9D9D9', // Border color on hover
                            backgroundColor: 'transparent'
                        }
                    }}>
                        <img src={heartemoji} alt="Heart Emoji" style={{ width: '24px', height: '24px', marginRight: '4px' }} />
                        221
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderRadius: '100px',
                            borderColor: '#D9D9D9',
                            textTransform: 'none',
                            color: '#FFFFFF', // Set text color to white
                            backgroundColor: '#1E1E1E',
                            marginRight: '20px',
                            marginLeft: '10px'
                        }}
                    >
                        <span style={{ fontSize: '14px', fontWeight: '400', color: '#FFFFFF' }}>View Report</span>
                    </Button>
                </Grid>

            </Grid>
            <Grid container sx={{ backgroundColor: '#FFFFFF',  height: '100px', display: 'flex', justifyContent:'center',alignItems:'center', marginTop: '2%' }}>
                {/* Subcontainer in a row */}

                <Button
                        variant="outlined"
                        size="large"
                        sx={{
                            borderRadius: '100px',
                            borderColor: '#D9D9D9',
                            textTransform: 'none',
                            color: '#FFFFFF', // Set text color to white
                            backgroundColor: '#1E1E1E',
                            marginRight: '20px',
                            marginLeft: '10px',
                            width:'20%'

                        }}
                    >
                        <span style={{ fontSize: '14px', fontWeight: '400', color: '#FFFFFF' }}>View Report</span>
                    </Button>
                

            </Grid>
        </Grid>
    );
}

export default Section6;
