import React from "react";
import "./Section8.css";
import { Grid, Container, Paper } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import card1img1 from "../../img/card1img1.png";
import card1img2 from "../../img/card1img2.png";
import card1img3 from "../../img/card1img3.png";
import card1img4 from "../../img/card1img4.png";
import heartemoji from "../../img/chat-1-line 1.png";
import ProfilePic1 from "../../img/ProfilePic1.png";
import messageImg from "../../img/messageimg.png";
import { styled } from "@mui/material/styles";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import { Component } from "react";
function Section8() {
  const images = [card1img1, card1img2, card1img3, card1img4];
  return (
    <div className="portfolio" id="Section2">
      <div className="typoContainer">
        <Typography variant="h6" sx={{ fontSize: "32px", fontWeight: "500" }}>
          Top Picks by Futurrists (17)
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontSize: "16px", color: "#406BDA", fontWeight: "500" }}
        >
          See all
        </Typography>
      </div>

      <div
        className="E-cards"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "1rem",
          marginBottom: "2rem",
          width: "100%",
          gap: 30,
        }}
      >
        <Card
          sx={{
            maxWidth: "419px",
            height: "max-content",
            borderRadius: "20px",
          }}
        >
          <Grid container>
            {images.map((image, index) => (
              <Grid item xs={6} key={index}>
                <Card>
                  <CardMedia
                    className="ImagesContainer"
                    component="img"
                    image={image}
                    alt={`Image ${index + 1}`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid container sx={{ marginTop: "18px" }}>
            {/* First 6 */}
            <Grid
              item
              xs={7}
              className="ImgandDetailContainer"
              sx={{ padding: "9px" }}
            >
              <Grid
                container
                sx={{ display: "flex" }}
                className="ImgandDetailSubContainer"
              >
                <Grid
                  item
                  className="ImgageContainer"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "1px",
                  }}
                >
                  <img
                    className="ImgageContainerImage"
                    src={ProfilePic1}
                    width="40px"
                  />
                </Grid>
                <Grid
                  item
                  className="DetailContainer"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                  }}
                >
                  <Typography
                    className="DetailContainerTypo1"
                    variant="body1"
                    style={{
                      marginLeft: "8px",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Robert A.
                  </Typography>
                  <Typography
                    className="DetailContainerTypo2"
                    variant="body1"
                    style={{
                      marginLeft: "8px",
                      fontSize: "12px",
                      fontWeight: 400,
                    }}
                  >
                    10 Frequently used Tools
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            {/* Second 6 */}
            <Grid item xs={5} className="ButtonsMainContainer">
              <Grid
                container
                className="ButtonsSubContainer"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {/* First Button */}
                <div
                  class="custom-button"
                  onmouseover="hoverButton(this)"
                  onmouseout="unhoverButton(this)"
                >
                  <img src={messageImg} class="button-img" alt="Heart Emoji" />
                  <span class="button-text" style={{ fontSize: "20px" }}>
                    221
                  </span>
                </div>
                <div
                  class="custom-button"
                  style={{ marginLeft: "3px" }}
                  onmouseover="hoverButton(this)"
                  onmouseout="unhoverButton(this)"
                >
                  <img src={heartemoji} class="button-img" alt="Heart Emoji" />
                  <span class="button-text" style={{ fontSize: "20px" }}>
                    221
                  </span>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid className="cardbuttontags" sx={{ marginTop: "15px",marginBottom:'12px' }}>
            <Button
              className="cardBtn-1"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "100px",
                borderColor: "#D9D9D9",
                textTransform: "none",
                color: "#FFFFFF", // Set text color to white
                backgroundColor: "#1E1E1E",
              }}
            >
              <span
                className="cardBtn-1Typo"
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#FFFFFF",
                }}
              >
                #Website
              </span>
            </Button>
            <Button
              className="cardBtn-1"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "100px",
                borderColor: "#D9D9D9",
                textTransform: "none",
                color: "#1E1E1E",
              }}
            >
              <span
                className="cardBtn-1Typo"
                style={{ fontSize: "14px", fontWeight: "400" }}
              >
                #AIAssistant
              </span>
            </Button>
            <Button
              className="cardBtn-1"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "100px",
                borderColor: "#D9D9D9",
                textTransform: "none",
                color: "#1E1E1E",
              }}
            >
              <span
                className="cardBtn-1Typo"
                style={{ fontSize: "14px", fontWeight: "400" }}
              >
                #Develioment
              </span>
            </Button>
            <Button
              className="cardBtn-1"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "100px",
                borderColor: "#D9D9D9",
                textTransform: "none",
                color: "#1E1E1E",
              }}
            >
              <span
                className="cardBtn-1Typo"
                style={{ fontSize: "14px", fontWeight: "400" }}
              >
                #Chatbot
              </span>
            </Button>
          </Grid>
        </Card>
        <Card
          sx={{
            maxWidth: "419px",
            height: "max-content",
            borderRadius: "20px",
            marginLeft: "3px",
          }}
        >
          <Grid container>
            {images.map((image, index) => (
              <Grid item xs={6} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={image}
                    alt={`Image ${index + 1}`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid container sx={{ marginTop: "18px" }}>
            {/* First 6 */}
            <Grid
              item
              xs={7}
              className="ImgandDetailContainer"
              sx={{ padding: "9px" }}
            >
              <Grid
                container
                sx={{ display: "flex" }}
                className="ImgandDetailSubContainer"
              >
                <Grid
                  item
                  className="ImgageContainer"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "1px",
                  }}
                >
                  <img
                    className="ImgageContainerImage"
                    src={ProfilePic1}
                    width="40px"
                  />
                </Grid>
                <Grid
                  item
                  className="DetailContainer"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                  }}
                >
                  <Typography
                    className="DetailContainerTypo1"
                    variant="body1"
                    style={{
                      marginLeft: "8px",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Robert A.
                  </Typography>
                  <Typography
                    className="DetailContainerTypo2"
                    variant="body1"
                    style={{
                      marginLeft: "8px",
                      fontSize: "12px",
                      fontWeight: 400,
                    }}
                  >
                    10 Frequently used Tools
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            {/* Second 6 */}
            <Grid item xs={5} className="ButtonsMainContainer">
              <Grid
                container
                className="ButtonsSubContainer"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {/* First Button */}
                <div
                  class="custom-button"
                  onmouseover="hoverButton(this)"
                  onmouseout="unhoverButton(this)"
                >
                  <img src={messageImg} class="button-img" alt="Heart Emoji" />
                  <span class="button-text" style={{ fontSize: "20px" }}>
                    221
                  </span>
                </div>
                <div
                  class="custom-button"
                  style={{ marginLeft: "3px" }}
                  onmouseover="hoverButton(this)"
                  onmouseout="unhoverButton(this)"
                >
                  <img src={heartemoji} class="button-img" alt="Heart Emoji" />
                  <span class="button-text" style={{ fontSize: "20px" }}>
                    221
                  </span>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid className="cardbuttontags" sx={{ marginTop: "15px",marginBottom:'12px' }}>
            <Button
              className="cardBtn-1"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "100px",
                borderColor: "#D9D9D9",
                textTransform: "none",
                color: "#FFFFFF", // Set text color to white
                backgroundColor: "#1E1E1E",
              }}
            >
              <span
                className="cardBtn-1Typo"
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#FFFFFF",
                }}
              >
                #Website
              </span>
            </Button>
            <Button
              className="cardBtn-1"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "100px",
                borderColor: "#D9D9D9",
                textTransform: "none",
                color: "#1E1E1E",
              }}
            >
              <span
                className="cardBtn-1Typo"
                style={{ fontSize: "14px", fontWeight: "400" }}
              >
                #AIAssistant
              </span>
            </Button>
            <Button
              className="cardBtn-1"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "100px",
                borderColor: "#D9D9D9",
                textTransform: "none",
                color: "#1E1E1E",
              }}
            >
              <span
                className="cardBtn-1Typo"
                style={{ fontSize: "14px", fontWeight: "400" }}
              >
                #Develioment
              </span>
            </Button>
            <Button
              className="cardBtn-1"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "100px",
                borderColor: "#D9D9D9",
                textTransform: "none",
                color: "#1E1E1E",
              }}
            >
              <span
                className="cardBtn-1Typo"
                style={{ fontSize: "14px", fontWeight: "400" }}
              >
                #Chatbot
              </span>
            </Button>
          </Grid>
        </Card>
        <Card
          sx={{
            maxWidth: "419px",
            height: "max-content",
            borderRadius: "20px",
            marginLeft: "3px",
          }}
        >
          <Grid container>
            {images.map((image, index) => (
              <Grid item xs={6} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={image}
                    alt={`Image ${index + 1}`}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid container sx={{ marginTop: "18px" }}>
            {/* First 6 */}
            <Grid
              item
              xs={7}
              className="ImgandDetailContainer"
              sx={{ padding: "9px" }}
            >
              <Grid
                container
                sx={{ display: "flex" }}
                className="ImgandDetailSubContainer"
              >
                <Grid
                  item
                  className="ImgageContainer"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "1px",
                  }}
                >
                  <img
                    className="ImgageContainerImage"
                    src={ProfilePic1}
                    width="40px"
                  />
                </Grid>
                <Grid
                  item
                  className="DetailContainer"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                  }}
                >
                  <Typography
                    className="DetailContainerTypo1"
                    variant="body1"
                    style={{
                      marginLeft: "8px",
                      fontSize: "18px",
                      fontWeight: 600,
                    }}
                  >
                    Robert A.
                  </Typography>
                  <Typography
                    className="DetailContainerTypo2"
                    variant="body1"
                    style={{
                      marginLeft: "8px",
                      fontSize: "12px",
                      fontWeight: 400,
                    }}
                  >
                    10 Frequently used Tools
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            {/* Second 6 */}
            <Grid item xs={5} className="ButtonsMainContainer">
              <Grid
                container
                className="ButtonsSubContainer"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {/* First Button */}
                <div
                  class="custom-button"
                  onmouseover="hoverButton(this)"
                  onmouseout="unhoverButton(this)"
                >
                  <img src={messageImg} class="button-img" alt="Heart Emoji" />
                  <span class="button-text" style={{ fontSize: "20px" }}>
                    221
                  </span>
                </div>
                <div
                  class="custom-button"
                  style={{ marginLeft: "3px" }}
                  onmouseover="hoverButton(this)"
                  onmouseout="unhoverButton(this)"
                >
                  <img src={heartemoji} class="button-img" alt="Heart Emoji" />
                  <span class="button-text" style={{ fontSize: "20px" }}>
                    221
                  </span>
                </div>
              </Grid>
            </Grid>
          </Grid>

          <Grid className="cardbuttontags" sx={{ marginTop: "15px",marginBottom:'12px' }}>
            <Button
              className="cardBtn-1"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "100px",
                borderColor: "#D9D9D9",
                textTransform: "none",
                color: "#FFFFFF", // Set text color to white
                backgroundColor: "#1E1E1E",
              }}
            >
              <span
                className="cardBtn-1Typo"
                style={{
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "#FFFFFF",
                }}
              >
                #Website
              </span>
            </Button>
            <Button
              className="cardBtn-1"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "100px",
                borderColor: "#D9D9D9",
                textTransform: "none",
                color: "#1E1E1E",
              }}
            >
              <span
                className="cardBtn-1Typo"
                style={{ fontSize: "14px", fontWeight: "400" }}
              >
                #AIAssistant
              </span>
            </Button>
            <Button
              className="cardBtn-1"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "100px",
                borderColor: "#D9D9D9",
                textTransform: "none",
                color: "#1E1E1E",
              }}
            >
              <span
                className="cardBtn-1Typo"
                style={{ fontSize: "14px", fontWeight: "400" }}
              >
                #Develioment
              </span>
            </Button>
            <Button
              className="cardBtn-1"
              variant="outlined"
              size="small"
              sx={{
                borderRadius: "100px",
                borderColor: "#D9D9D9",
                textTransform: "none",
                color: "#1E1E1E",
              }}
            >
              <span
                className="cardBtn-1Typo"
                style={{ fontSize: "14px", fontWeight: "400" }}
              >
                #Chatbot
              </span>
            </Button>
          </Grid>
        </Card>
      </div>
    </div>
  );
}

export default Section8;
