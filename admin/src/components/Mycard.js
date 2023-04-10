import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Mycard=({match})=>{

    const getMatchCard=()=>{
        return (
            <Card>
                <CardContent>
                    <Grid container justifyContent={"center"} alignItems="center" spacing={4}>
                        <Grid item>
                            <Typography variant="h5">
                                First Team
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img style={{width: 85}} src={require("../image/vs1.png")} alt=""/>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">
                                Second Team
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent={"center"}>
                        <Button variant="contained">
                            Show Details
                        </Button>
                        <Button variant="contained">
                            {new Date().toString()}
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        );
    };

    return (
        getMatchCard()
    );
};

export default Mycard