import React, { Fragment, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Button, Container, Grid, Typography } from "@material-ui/core";


const Top = (props: any) => {
  const [currentUser, setCurrentUser] = useState<null | object>(null);

  useEffect(() => {
    // if not logged in, redirect to login page
    const auth=getAuth();
    onAuthStateChanged(auth,(user) => {
      user ? setCurrentUser(user) : props.history.push("/login");
    });
  }, []);

  return (
    <Fragment>
      <Container>
        <Grid container style={{ marginTop: "1em" }}>
          <Grid item md={4}></Grid>
          <Grid item md={4}>
            <Typography>Here is the user's information</Typography>
            <Typography
              variant="caption"
              style={{
                paddingTop: "2em",
                paddingBottom: "2em",
                whiteSpace: "pre"
              }}
            >
              {currentUser && JSON.stringify(currentUser, null, 4)}
            </Typography>
            <Button
              fullWidth
              onClick={async event => {
                try {
                  props.history.push("/login");
                } catch (error) {
                  alert(onmessage);
                }
              }}
              style={{ marginTop: "0.5em", marginBottom: "0.5em" }}
            >
              Logout
            </Button>
          </Grid>
          <Grid item md={4}></Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default Top;