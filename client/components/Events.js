import React from "react";
import { Box, Grid } from "@mui/material";

const Events = () => {
  return (
    <Box sx={[{ m: 1 }, { display: "flex" }]}>
      <Grid
        container
        direction="column"
        justifyContent="left"
        alignItems="left"
        // rowSpacing={2}
        columnSpacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "left",
          width: "25%",
          gap: "10px"
        }}
      >
        <Grid item xs={4}>
          <Box
            style={{ padding: "50px" }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: "url(https://hosting.photobucket.com/images/i158/thorny_roses/eventsPic.jpg)",
              minHeight: "400px",
              minWidth: "210px",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></Box>
        </Grid>

        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="eventP">
              <h1>Leslie Olmos and Dante Alvarez</h1>
              <h2>
                <i> invites you to join them in celebrating their union</i>
              </h2>
              <hr className="eventLine" />
            </div>

            <div className="eventP">
              <h5 className="date"> Friday, May 20, 10:30am</h5>
              <h3 className="eventDetail">Exchanging the Vows </h3>
              <p className="eventDetail">Find us in the gazebo at Bastrop County Courthouse</p>
              <p className="address"> 804 Pecan Street, Bastrop, TX 78602</p>
              <p className="eventDetail">Following the ceremony, there will be a small lunch held at our home in Bastrop. </p>
              <hr className="eventLine" />
            </div>

            <div className="eventP">
              <h5 className="date">Saturday, May 21, 5:30pm</h5>
              <h3 className="eventDetail">Reception</h3>
              <p className="eventDetail">Enjoy an elegant meal with us in a historical restaurant in downtown Bastrop.</p>
              <p className="address">Main Street, Bastrop, TX 78602</p>
              <hr className="eventLine" />
            </div>

            <div className="eventP">
              <h5 className="date">Sunday, May 22, 10:00am</h5>
              <h3 className="eventDetail">Recalentado/Brunch</h3>
              <p className="eventDetail">Partake in a marital Mexican tradition, "the reheating," at our family home</p>
              <p className="address">Austin, TX 78744</p>
              <hr className="eventLine" />
            </div>

            <div className="eventP">
              <h3 className="eventDetail">Thank You</h3>
              <p className="eventDetail">We would like to thank our family and friends for joining us in our celebration. For many of you the journey was long, and we feel blessed that you made the trip. </p>

              <div className="eventCross">
                <img className="eventCross" width="75px" src="https://hosting.photobucket.com/images/i158/thorny_roses/crossHearts.gif" />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Events;
