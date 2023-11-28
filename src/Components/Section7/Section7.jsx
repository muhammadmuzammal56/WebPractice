import React from "react";
import './Section7.css'
import { Grid, Container, Paper } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import cardimg1 from "../../img/Rectangle 14.png"
import cardimg2 from "../../img/Rectangle 14(1).png"
import cardimg3 from "../../img/Rectangle 14(2).png"
import heartemoji from "../../img/chat-1-line 1.png"
import verified from "../../img/Verifiedlogo.png"
import { styled } from '@mui/material/styles';
import { themeContext } from '../../Context';
import { useContext } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { Component } from 'react';
function Section7() {
   
    return (
        <div className="portfoliosss" id='Section4'>
            <div className="typoContainer">
                <Typography variant="h6" sx={{ fontSize: '32px', fontWeight: '500' }}>Trending Tools (351)</Typography>
                <Typography variant="h6" sx={{ fontSize: '16px', color: '#406BDA', fontWeight: '500' }}>See all</Typography>

            </div>

            <div className="E-cards" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '1rem', marginBottom: '2rem', width: '100%' }}>
                <Card       className='Section3Card' sx={{
                    maxWidth: '419px', 
                    borderRadius: '20px'
                }}>
                    <Box position="relative">
                        <CardMedia
                            component="img"
                            image={cardimg1}
                            alt="green iguana"
                        />
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                margin: '8px',
                                backgroundColor: 'grey',
                                color: '#FF7C7C',
                                borderColor: '#FF7C7C',
                                '&:hover': {
                                    backgroundColor: 'grey',
                                },
                            }}
                        >
                            <span style={{
                                fontSize: '10px', fontWeight: '400', textTransform: 'none',
                                color: '#FF7C7C'
                            }}>Featured</span>
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                margin: '8px',
                                backgroundColor: 'white', // Set background color to white
                                color: 'black', // Set text color to black
                                '&:hover': {
                                    backgroundColor: 'white', // Set background color to white on hover (effectively removing hover effect)
                                },
                            }}
                        >
                            <span style={{ fontSize: '10px', fontWeight: '400', textTransform: 'none' }}>$12.29 per/mo.</span>
                        </Button>
                    </Box>
                    <CardContent>
                        <div className="card-btn">
                            <div className="carddiv1">
                                <Button variant="outlined" size="small" sx={{
                                    borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                                    '&:hover': {
                                        color: '#1E1E1E', // Text color on hover
                                        borderColor: '#D9D9D9', // Border color on hover
                                        backgroundColor: 'transparent',
                                    }
                                }}>
                                    Premium
                                </Button>
                            </div>
                            <div className="carddiv2">
                                <Button variant="outlined" size="small" sx={{
                                    borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                                    '&:hover': {
                                        color: '#1E1E1E', // Text color on hover
                                        borderColor: '#D9D9D9', // Border color on hover
                                        backgroundColor: 'transparent',
                                        width: '10px', // Adjust the width as needed
                                    }
                                }}>
                                    <BookmarkBorderIcon />
                                </Button>
                                <Button variant="outlined" size="small" sx={{
                                    borderRadius: '8px', marginLeft: '4px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                                    '&:hover': {
                                        color: '#1E1E1E', // Text color on hover
                                        borderColor: '#D9D9D9', // Border color on hover
                                        backgroundColor: 'transparent',
                                    }
                                }}>
                                    <img src={heartemoji} alt="Heart Emoji" style={{ width: '24px', height: '24px', marginRight: '4px' }} />
                                    221
                                </Button>
                            </div>
                        </div>
                        <div className="mainheading">
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.2rem', marginTop: '2%' }}>
                                TheToolBus
                            </Typography>
                            <img src={verified} style={{ width: '19px', height: '19px', marginTop: '14px', marginLeft: '4px' }}></img>
                        </div>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', fontSize: '0.8rem' }}>
                            AssetsAI is an AI-powered tool that offers bespoke game assets in a variety...
                        </Typography>
                    </CardContent>
                    <div className="cardbuttontags" style={{marginBottom:'20px'}}>
                        <Button
                        className='cardBtn-1'
                            variant="outlined"
                            size="small"
                            sx={{
                                borderRadius: '100px',
                                borderColor: '#D9D9D9',
                                textTransform: 'none',
                                color: '#FFFFFF', // Set text color to white
                                backgroundColor: '#1E1E1E',
                            }}
                        >
                            <span className="cardBtn-1Typo" style={{ fontSize: '14px', fontWeight: '400', color: '#FFFFFF' }}>#Website</span>
                        </Button>
                        <Button 
                         className='cardBtn-1'
                         variant="outlined" size="small" sx={{
                            borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',

                        }}>

                            <span className="cardBtn-1Typo" style={{ fontSize: '14px', fontWeight: '400' }}>#AIAssistant</span>

                        </Button>
                        <Button 
                        className='cardBtn-1'
                        variant="outlined" size="small" sx={{
                            borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',

                        }}>

                            <span className="cardBtn-1Typo" style={{ fontSize: '14px', fontWeight: '400' }}>#Develioment</span>
                        </Button>
                        <Button 
                        className='cardBtn-1'
                        variant="outlined" size="small" sx={{
                            borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',

                        }}>
                            <span className="cardBtn-1Typo" style={{ fontSize: '14px', fontWeight: '400' }}>#Chatbot</span>
                        </Button>
                    </div>

                </Card>
                <Card  className='Section3Card' sx={{
                    maxWidth: '419px', marginLeft: '3%', height:'auto',
                    borderRadius: '20px'
                }}>

                    <Box position="relative">
                        <CardMedia
                            component="img"
                            image={cardimg2}
                            alt="green iguana"
                        />

                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                margin: '8px',
                                backgroundColor: 'white', // Set background color to white
                                color: 'black', // Set text color to black
                                '&:hover': {
                                    backgroundColor: 'white', // Set background color to white on hover (effectively removing hover effect)
                                },
                            }}
                        >
                            <span style={{ fontSize: '10px', fontWeight: '400', textTransform: 'none' }}>Free</span>
                        </Button>
                    </Box>
                    <CardContent >
                        <div className="card-btn">
                            <div className="carddiv1">
                                <Button variant="outlined" size="small" sx={{
                                    borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                                    '&:hover': {
                                        color: '#1E1E1E', // Text color on hover
                                        borderColor: '#D9D9D9', // Border color on hover
                                        backgroundColor: 'transparent',
                                    }
                                }}>
                                    Premium
                                </Button>
                            </div>
                            <div className="carddiv2">
                                <Button variant="outlined" size="small" sx={{
                                    borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                                    '&:hover': {
                                        color: '#1E1E1E', // Text color on hover
                                        borderColor: '#D9D9D9', // Border color on hover
                                        backgroundColor: 'transparent',
                                        width: '10px', // Adjust the width as needed
                                    }
                                }}>
                                    <BookmarkBorderIcon />
                                </Button>
                                <Button variant="outlined" size="small" sx={{
                                    borderRadius: '8px', marginLeft: '4px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                                    '&:hover': {
                                        color: '#1E1E1E', // Text color on hover
                                        borderColor: '#D9D9D9', // Border color on hover
                                        backgroundColor: 'transparent',
                                    }
                                }}>
                                    <img src={heartemoji} alt="Heart Emoji" style={{ width: '24px', height: '24px', marginRight: '4px' }} />
                                    211
                                </Button>
                            </div>
                        </div>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.2rem', marginTop: '2%' }}>
                            AssetsAI
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', fontSize: '0.8rem' }}>
                            AssetsAI is an AI-powered tool that offers bespoke game assets in a variety...
                        </Typography>
                    </CardContent>

                    <div className="cardbuttontags"  style={{marginBottom:'20px'}}>
                        <Button  className='cardBtn-1' variant="outlined" size="small" sx={{
                            borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                            '&:hover': {
                                color: '#1E1E1E', // Text color on hover
                                borderColor: '#D9D9D9', // Border color on hover
                                backgroundColor: 'transparent',
                            }
                        }}>

                            <span className="cardBtn-1Typo" style={{ fontSize: '14px', fontWeight: '400' }}>#Website</span>

                        </Button>
                        <Button  className='cardBtn-1' variant="outlined" size="small" sx={{
                            borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                            '&:hover': {
                                color: '#1E1E1E', // Text color on hover
                                borderColor: '#D9D9D9', // Border color on hover
                                backgroundColor: 'transparent',
                            }
                        }}>

                            <span className="cardBtn-1Typo" style={{ fontSize: '14px', fontWeight: '400' }}>#AIAssistant</span>

                        </Button>
                        <Button  className='cardBtn-1' variant="outlined" size="small" sx={{
                            borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                            '&:hover': {
                                color: '#1E1E1E', // Text color on hover
                                borderColor: '#D9D9D9', // Border color on hover
                                backgroundColor: 'transparent',
                            }
                        }}>

                            <span className="cardBtn-1Typo" style={{ fontSize: '14px', fontWeight: '400' }}>#Develioment</span>
                        </Button>
                        <Button  className='cardBtn-1' variant="outlined" size="small" sx={{
                            borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                            '&:hover': {
                                color: '#1E1E1E', // Text color on hover
                                borderColor: '#D9D9D9', // Border color on hover
                                backgroundColor: 'transparent',
                            }
                        }}>
                            <span className="cardBtn-1Typo" style={{ fontSize: '14px', fontWeight: '400' }}>#Chatbot</span>
                        </Button>
                    </div>
                </Card>
                <Card   className='Section3Card' sx={{
                    maxWidth: '419px', marginLeft: '3%', 
                    borderRadius: '20px'
                }}>
                    <Box position="relative">
                        <CardMedia
                            component="img"
                            image={cardimg3}
                            alt="green iguana"
                        />

                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                right: 0,

                                margin: '8px',
                                backgroundColor: 'white', // Set background color to white
                                color: 'black', // Set text color to black
                                '&:hover': {
                                    backgroundColor: 'white', // Set background color to white on hover (effectively removing hover effect)
                                },
                            }}
                        >
                            <span style={{ fontSize: '10px', fontWeight: '400', textTransform: 'none' }}>Free</span>
                        </Button>
                    </Box>
                    <CardContent>
                        <div className="card-btn">
                            <div className="carddiv1">
                                <Button variant="outlined" size="small" sx={{
                                    borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                                    '&:hover': {
                                        color: '#1E1E1E', // Text color on hover
                                        borderColor: '#D9D9D9', // Border color on hover
                                        backgroundColor: 'transparent',
                                    }
                                }}>
                                    Premium
                                </Button>
                            </div>
                            <div className="carddiv2">
                                <Button variant="outlined" size="small" sx={{
                                    borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                                    '&:hover': {
                                        color: '#1E1E1E', // Text color on hover
                                        borderColor: '#D9D9D9', // Border color on hover
                                        backgroundColor: 'transparent',
                                        width: '10px', // Adjust the width as needed
                                    }
                                }}>
                                    <BookmarkBorderIcon />
                                </Button>
                                <Button variant="outlined" size="small" sx={{
                                    borderRadius: '8px', marginLeft: '4px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                                    '&:hover': {
                                        color: '#1E1E1E', // Text color on hover
                                        borderColor: '#D9D9D9', // Border color on hover
                                        backgroundColor: 'transparent',
                                    }
                                }}>
                                    <img src={heartemoji} alt="Heart Emoji" style={{ width: '24px', height: '24px', marginRight: '4px' }} />
                                    11
                                </Button>
                            </div>
                        </div>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.2rem', marginTop: '2%' }}>
                            Chatbase
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', fontSize: '0.8rem' }}>
                            Are you looking to explore the world of artificial intelligence...
                        </Typography>
                    </CardContent>

                    <div className="cardbuttontags card3buttontags" style={{marginBottom:'20px'}}>
                        <Button  className='cardBtn-1' variant="outlined" size="small" sx={{
                            borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                            '&:hover': {
                                color: '#1E1E1E', // Text color on hover
                                borderColor: '#D9D9D9', // Border color on hover
                                backgroundColor: 'transparent',
                            }
                        }}>

                            <span className="cardBtn-1Typo" style={{ fontSize: '14px', fontWeight: '400' }}>#Website</span>

                        </Button>
                        <Button  className='cardBtn-1'
                        variant="outlined" size="small" sx={{
                            borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                            '&:hover': {
                                color: '#1E1E1E', // Text color on hover
                                borderColor: '#D9D9D9', // Border color on hover
                                backgroundColor: 'transparent',
                            }
                        }}>

                            <span className="cardBtn-1Typo" style={{ fontSize: '14px', fontWeight: '400' }}>#AIAssistant</span>

                        </Button>
                        <Button  className='cardBtn-1' variant="outlined" size="small" sx={{
                            borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                            '&:hover': {
                                color: '#1E1E1E', // Text color on hover
                                borderColor: '#D9D9D9', // Border color on hover
                                backgroundColor: 'transparent',
                            }
                        }}>

                            <span className="cardBtn-1Typo" style={{ fontSize: '14px', fontWeight: '400' }}>#Develioment</span>
                        </Button>
                        <Button  className='cardBtn-1' variant="outlined" size="small" sx={{
                            borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E',
                            '&:hover': {
                                color: '#1E1E1E', // Text color on hover
                                borderColor: '#D9D9D9', // Border color on hover
                                backgroundColor: 'transparent',
                            }
                        }}>
                            <span className="cardBtn-1Typo" style={{ fontSize: '14px', fontWeight: '400' }}>#Chatbot</span>
                        </Button>
                    </div>

                </Card>
            </div>


        </div>
    );
}

export default Section7;