import { Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WrapperContext } from "../context/wrappercontext";

const Mycard=({team1,team2,contract})=>{
const navigate = useNavigate();
const {onselectmatch} = useContext(WrapperContext);
const onsubmit = (e) => {
    onselectmatch({team1:team1,team2:team2,contract:contract});
    navigate('matchresult');
}
return (
    <Card>
        <CardContent>
            <Grid container justifyContent={"center"} alignItems="center" spacing={4}>
                <Grid item>
                    <Typography variant="h5">
                        {team1}
                    </Typography>
                </Grid>
                <Grid item>
                    <img style={{width: 85}} src={require("../image/vs1.png")} alt=""/>
                </Grid>
                <Grid item>
                    <Typography variant="h5">
                        {team2}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
        <CardActions>
            <Grid container justifyContent={"center"}>
                <Button onClick={onsubmit} variant="contained">
                    Close Match
                </Button>
            </Grid>
        </CardActions>
    </Card>
);
};
export default Mycard