import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    card:{
      width: '100%',
      marginTop: theme.spacing(1),
      marginBottom: '15px',
      marginRight: '20px',
      background: '#eee8aa',
      paddingTop: '10%',
      paddingBottom: '10%',
      borderRadius: '8px',
      fontFamily: 'Poppins',
      fontWeight: 'bold'
    }
  }));
const Result = (props) => {
    const classes = useStyles();
    const data = props.data;
  
    return(
  
      <Card className={classes.card}>
      <CardContent>
      <Typography variant="h5" className={classes.cardTitle}>{data.city}, {data.country}</Typography>
      <Typography variant="h5" component="h2">Current Condition: {data.condition}, {data.description}</Typography> 
      <Typography variant="h5" component="h2">Today's Temperature: {data.temperature }&#8457;</Typography> 
      
      
      </CardContent>
    </Card> 
    )
}
export default Result;