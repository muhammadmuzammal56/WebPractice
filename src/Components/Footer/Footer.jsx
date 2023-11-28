
import './Footer.css'
import Logo from '../../img/footerlogo.png'
import footersharelogo from '../../img/footershareicon.png'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { Grid, Container, Button, TextField, Typography } from '@mui/material';
function Footer() {


    return (
        <Grid container sx={{ width: '100%', height: '225.78px', margin: '0 auto', backgroundColor: '#000215' }}>

            <Grid container justifyContent="space-between" sx={{ width: '100%', height: '170px' }}>
                {/* First Part */}
                <Grid item xs={4} container direction="column" alignItems="center" justifyContent="center">
                    <img src={Logo} alt="Logo" style={{ width: '147px', height: '35.81px', marginBottom: '10px' }} />
                    <Typography sx={{ fontSize: '12px', fontWeight: 400 }} variant="h6" align="center" color="white">Copyright © 2023 - Futurr™</Typography>
                </Grid>

                {/* Second Part */}
                <Grid item xs={4} container alignItems="center" justifyContent="center">
                    <Typography sx={{ fontSize: '14px', fontWeight: 400, textAlign: 'inherit' }} variant="body1" align="center" color="white">Advertiser Disclosure: Futurr is committed to rigorous editorial standards to provide our users with accurate and helpful content. To keep our site free, we may receive compensation when you click some links on our site.</Typography>
                </Grid>

                {/* Third Part */}
                <Grid item xs={4} container direction="column" alignItems="center" justifyContent="center">
                    <Typography variant="body1" align="center" color="white" sx={{ fontSize: '16px', fontWeight: 400 }}>Don't miss out on the latest AI trends and </Typography>
                    <Typography variant="body1" align="center" color="white" sx={{ fontSize: '16px', fontWeight: 400, alignItems: 'start' }}>news</Typography>

                    <FormControl sx={{ m: 1, width: '295px' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Typography variant="body1" sx={{ color: 'white' }}>Your email</Typography>
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment position="end" sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Button variant="contained" endIcon={<SendIcon />} sx={{
                                        marginLeft: 'auto',
                                        borderRadius: '10px',
                                        height: '40.77px',
                                        width: '42px'
                                    }} >

                                    </Button>
                                </InputAdornment>
                            }
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                            sx={{
                                width: '295px',
                                color: 'white',
                                height: '42.77px',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#FFFFFF',
                                },
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#FFFFFF',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#FFFFFF',
                                },
                                borderRadius: '10px',
                                padding: '0 0 0 14px',
                            }}
                        />
                    </FormControl>
                </Grid>


            </Grid>
            <hr style={{ width: '100%', margin: '10px auto', color: '#000' }} />
            <Grid container j sx={{ width: '100%' ,display:'flex',justifyContent:"space-between"}}>

                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>

                    <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 500, color: '#FFFFFF' }}>Submit Tool</Typography>
                    <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 500, color: '#FFFFFF' , marginLeft:'15px'}}>Request a Feature</Typography>
                    <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 500, color: '#FFFFFF' , marginLeft:'15px'}}>Update Tool Request</Typography>
                </Grid>

                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>

                    <Typography variant="h6" align="right" sx={{ fontSize: '18px', fontWeight: 500, color: '#FFFFFF' }}>Privacy Policy</Typography>
                    <Typography variant="h6" align="right" sx={{ fontSize: '18px', fontWeight: 500, color: '#FFFFFF' , marginLeft:'15px'}}>Term of Services</Typography>
                    <Typography variant="h6" align="right" sx={{ fontSize: '18px', fontWeight: 500, color: '#FFFFFF' , marginLeft:'15px'}}>About US</Typography>
                </Grid>
            </Grid>
        </Grid>

    );
}

export default Footer;
