import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Mycard=({match})=>{
    const navigate = useNavigate();
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
                        <Button onClick={() => navigate('matchresult')} variant="contained">
                            Close Match
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