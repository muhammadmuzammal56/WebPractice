import './Section4.css'
import upwork from '../../img/Upwork.png'
import { Grid, Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import cardimg1 from "../../img/Rectangle 73.png"
import cardimg2 from "../../img/Rectangle 14(1).png"
import share from "../../img/share.png"
import shareicon from "../../img/shareicon.png"
import save from "../../img/heart-3-line 1.png"
import heartemoji from "../../img/chat-1-line 1.png"
import verified from "../../img/Verifiedlogo.png"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Section4() {
    // const CustomArrow = ({ onClick, direction }) => (
    //     <button
    //         onClick={onClick}
    //         style={{
    //             position: 'absolute',
    //             top: '50%',
    //             transform: `translateY(-50%) ${direction === 'left' ? 'left' : 'right'}: -30px`, // Adjust the value to move the arrows outside
    //             zIndex: 1,
    //             backgroundColor: 'black',
    //             borderRadius: '50%',
    //             width: '40px',
    //             height: '40px',
    //             color: 'white',
    //             border: 'none',
    //             cursor: 'pointer',
    //             display: 'flex',
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //         }}
    //     >
    //         {direction === 'left' ? '<' : '>'}
    //     </button>
    // );

    return (
        <div style={{ marginTop: '10%' }} id="Section5">
            <div className="typoContainer">
                <Typography variant="h6" sx={{ fontSize: '32px', fontWeight: '500' }}>Latest AI News</Typography>
                <Typography variant="h6" sx={{ fontSize: '16px', color: '#406BDA', fontWeight: '500' }}>Explore More</Typography>
            </div>

            {/* <Carousel
                showStatus={false} 
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && <CustomArrow onClick={onClickHandler} direction="left" />
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && <CustomArrow onClick={onClickHandler} direction="right" />
                }
            > */}
                <div className="E-cards" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '1rem', marginBottom: '2rem', width: '100%' }}>
                    <Card sx={{
                        maxWidth: '420px', height: '430px',
                        borderRadius: '20px'

                    }}>
                        <CardMedia
                            component="img"
                            image={cardimg1}
                            alt="green iguana"

                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '20px', marginTop: '4px', fontWeight: '500' }}>
                                US military needs AI vehicles, weapon systems to be 'superior' global force: experts
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', fontSize: '16px', fontWeight: '4s00' }}>
                                Are you looking to explore the world of artificial intelligence...Are you looking to explore the world of...
                            </Typography>
                            <div className="card-btn">
                                <div className="carddiv1">
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E', width: '95px', height: '42px', backgroundColor: '#1E1E1E'

                                    }}>
                                        <img src={share} style={{ width: '18px', height: '18px' }}></img>
                                    </Button>
                                </div>
                                <div className="carddiv2">
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '42px', height: '42px', color: '#1E1E1E',
                                        '&:hover': {
                                            color: '#1E1E1E', // Text color on hover
                                            borderColor: '#D9D9D9', // Border color on hover
                                            backgroundColor: 'transparent',
                                            width: '10px', // Adjust the width as needed
                                        }
                                    }}>
                                        <img src={shareicon} style={{ width: '15.83px', height: '16.67px' }}></img>
                                    </Button>
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '42px', height: '42px', color: '#1E1E1E',
                                        marginLeft: '4px',
                                        '&:hover': {
                                            color: '#1E1E1E', // Text color on hover
                                            borderColor: '#D9D9D9', // Border color on hover
                                            backgroundColor: 'transparent',
                                            width: '10px'// Adjust the width as needed
                                        }
                                    }}>
                                        <img src={save} style={{ width: '15.83px', height: '16.67px' }}></img>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card sx={{
                        maxWidth: '420px', height: '430px',
                        borderRadius: '20px', marginLeft: '3%'

                    }}>
                        <CardMedia
                            component="img"
                            image={cardimg1}
                            alt="green iguana"

                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '20px', marginTop: '4px', fontWeight: '500' }}>
                                US military needs AI vehicles, weapon systems to be 'superior' global force: experts
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', fontSize: '16px', fontWeight: '4s00' }}>
                                Are you looking to explore the world of artificial intelligence...Are you looking to explore the world of...
                            </Typography>
                            <div className="card-btn">
                                <div className="carddiv1">
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E', width: '95px', height: '42px', backgroundColor: '#1E1E1E'

                                    }}>
                                        <img src={share} style={{ width: '18px', height: '18px' }}></img>
                                    </Button>
                                </div>
                                <div className="carddiv2">
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '42px', height: '42px', color: '#1E1E1E',
                                        '&:hover': {
                                            color: '#1E1E1E', // Text color on hover
                                            borderColor: '#D9D9D9', // Border color on hover
                                            backgroundColor: 'transparent',
                                            width: '10px', // Adjust the width as needed
                                        }
                                    }}>
                                        <img src={shareicon} style={{ width: '15.83px', height: '16.67px' }}></img>
                                    </Button>
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '42px', height: '42px', color: '#1E1E1E',
                                        marginLeft: '4px',
                                        '&:hover': {
                                            color: '#1E1E1E', // Text color on hover
                                            borderColor: '#D9D9D9', // Border color on hover
                                            backgroundColor: 'transparent',
                                            width: '10px'// Adjust the width as needed
                                        }
                                    }}>
                                        <img src={save} style={{ width: '15.83px', height: '16.67px' }}></img>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>


                    </Card>
                    <Card sx={{
                        maxWidth: '420px', height: '430px',
                        borderRadius: '20px', marginLeft: '3%'

                    }}>
                        <CardMedia
                            component="img"
                            image={cardimg1}
                            alt="green iguana"

                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '20px', marginTop: '4px', fontWeight: '500' }}>
                                US military needs AI vehicles, weapon systems to be 'superior' global force: experts
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', fontSize: '16px', fontWeight: '4s00' }}>
                                Are you looking to explore the world of artificial intelligence...Are you looking to explore the world of...
                            </Typography>
                            <div className="card-btn">
                                <div className="carddiv1">
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E', width: '95px', height: '42px', backgroundColor: '#1E1E1E'

                                    }}>
                                        <img src={share} style={{ width: '18px', height: '18px' }}></img>
                                    </Button>
                                </div>
                                <div className="carddiv2">
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '42px', height: '42px', color: '#1E1E1E',
                                        '&:hover': {
                                            color: '#1E1E1E', // Text color on hover
                                            borderColor: '#D9D9D9', // Border color on hover
                                            backgroundColor: 'transparent',
                                            width: '10px', // Adjust the width as needed
                                        }
                                    }}>
                                        <img src={shareicon} style={{ width: '15.83px', height: '16.67px' }}></img>
                                    </Button>
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '42px', height: '42px', color: '#1E1E1E',
                                        marginLeft: '4px',
                                        '&:hover': {
                                            color: '#1E1E1E', // Text color on hover
                                            borderColor: '#D9D9D9', // Border color on hover
                                            backgroundColor: 'transparent',
                                            width: '10px'// Adjust the width as needed
                                        }
                                    }}>
                                        <img src={save} style={{ width: '15.83px', height: '16.67px' }}></img>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>


                    </Card>
                </div>
                <div className="E-cards" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '1rem', marginBottom: '2rem', width: '100%' }}>
                    <Card sx={{
                        maxWidth: '420px', height: '430px',
                        borderRadius: '20px'

                    }}>
                        <CardMedia
                            component="img"
                            image={cardimg1}
                            alt="green iguana"

                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '20px', marginTop: '4px', fontWeight: '500' }}>
                                US military needs AI vehicles, weapon systems to be 'superior' global force: experts
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', fontSize: '16px', fontWeight: '4s00' }}>
                                Are you looking to explore the world of artificial intelligence...Are you looking to explore the world of...
                            </Typography>
                            <div className="card-btn">
                                <div className="carddiv1">
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E', width: '95px', height: '42px', backgroundColor: '#1E1E1E'

                                    }}>
                                        <img src={share} style={{ width: '18px', height: '18px' }}></img>
                                    </Button>
                                </div>
                                <div className="carddiv2">
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '42px', height: '42px', color: '#1E1E1E',
                                        '&:hover': {
                                            color: '#1E1E1E', // Text color on hover
                                            borderColor: '#D9D9D9', // Border color on hover
                                            backgroundColor: 'transparent',
                                            width: '10px', // Adjust the width as needed
                                        }
                                    }}>
                                        <img src={shareicon} style={{ width: '15.83px', height: '16.67px' }}></img>
                                    </Button>
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '42px', height: '42px', color: '#1E1E1E',
                                        marginLeft: '4px',
                                        '&:hover': {
                                            color: '#1E1E1E', // Text color on hover
                                            borderColor: '#D9D9D9', // Border color on hover
                                            backgroundColor: 'transparent',
                                            width: '10px'// Adjust the width as needed
                                        }
                                    }}>
                                        <img src={save} style={{ width: '15.83px', height: '16.67px' }}></img>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card sx={{
                        maxWidth: '420px', height: '430px',
                        borderRadius: '20px', marginLeft: '3%'

                    }}>
                        <CardMedia
                            component="img"
                            image={cardimg1}
                            alt="green iguana"

                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '20px', marginTop: '4px', fontWeight: '500' }}>
                                US military needs AI vehicles, weapon systems to be 'superior' global force: experts
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', fontSize: '16px', fontWeight: '4s00' }}>
                                Are you looking to explore the world of artificial intelligence...Are you looking to explore the world of...
                            </Typography>
                            <div className="card-btn">
                                <div className="carddiv1">
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E', width: '95px', height: '42px', backgroundColor: '#1E1E1E'

                                    }}>
                                        <img src={share} style={{ width: '18px', height: '18px' }}></img>
                                    </Button>
                                </div>
                                <div className="carddiv2">
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '42px', height: '42px', color: '#1E1E1E',
                                        '&:hover': {
                                            color: '#1E1E1E', // Text color on hover
                                            borderColor: '#D9D9D9', // Border color on hover
                                            backgroundColor: 'transparent',
                                            width: '10px', // Adjust the width as needed
                                        }
                                    }}>
                                        <img src={shareicon} style={{ width: '15.83px', height: '16.67px' }}></img>
                                    </Button>
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '42px', height: '42px', color: '#1E1E1E',
                                        marginLeft: '4px',
                                        '&:hover': {
                                            color: '#1E1E1E', // Text color on hover
                                            borderColor: '#D9D9D9', // Border color on hover
                                            backgroundColor: 'transparent',
                                            width: '10px'// Adjust the width as needed
                                        }
                                    }}>
                                        <img src={save} style={{ width: '15.83px', height: '16.67px' }}></img>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>


                    </Card>
                    <Card sx={{
                        maxWidth: '420px', height: '430px',
                        borderRadius: '20px', marginLeft: '3%'

                    }}>
                        <CardMedia
                            component="img"
                            image={cardimg1}
                            alt="green iguana"

                        />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '20px', marginTop: '4px', fontWeight: '500' }}>
                                US military needs AI vehicles, weapon systems to be 'superior' global force: experts
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', fontSize: '16px', fontWeight: '4s00' }}>
                                Are you looking to explore the world of artificial intelligence...Are you looking to explore the world of...
                            </Typography>
                            <div className="card-btn">
                                <div className="carddiv1">
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '100px', borderColor: '#D9D9D9', textTransform: 'none', color: '#1E1E1E', width: '95px', height: '42px', backgroundColor: '#1E1E1E'

                                    }}>
                                        <img src={share} style={{ width: '18px', height: '18px' }}></img>
                                    </Button>
                                </div>
                                <div className="carddiv2">
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '42px', height: '42px', color: '#1E1E1E',
                                        '&:hover': {
                                            color: '#1E1E1E', // Text color on hover
                                            borderColor: '#D9D9D9', // Border color on hover
                                            backgroundColor: 'transparent',
                                            width: '10px', // Adjust the width as needed
                                        }
                                    }}>
                                        <img src={shareicon} style={{ width: '15.83px', height: '16.67px' }}></img>
                                    </Button>
                                    <Button variant="outlined" size="small" sx={{
                                        borderRadius: '8px', borderColor: '#D9D9D9', textTransform: 'none', width: '42px', height: '42px', color: '#1E1E1E',
                                        marginLeft: '4px',
                                        '&:hover': {
                                            color: '#1E1E1E', // Text color on hover
                                            borderColor: '#D9D9D9', // Border color on hover
                                            backgroundColor: 'transparent',
                                            width: '10px'// Adjust the width as needed
                                        }
                                    }}>
                                        <img src={save} style={{ width: '15.83px', height: '16.67px' }}></img>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>


                    </Card>
                </div>
            {/* </Carousel> */}
        </div>
    );
}

export default Section4;
