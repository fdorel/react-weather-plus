import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Title from '@material-ui/core/DialogTitle'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography'
import Alert from '@material-ui/lab/Alert';

import './style.css';
import Result from './Result';

const useStyles = makeStyles((theme) => ({
  container:{
    width: '100%',
    
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  
  form: {
    width: '100%',
    marginTop: theme.spacing(10),
    marginBottom: '15px',
    marginRight: '20px',
    background: '#eee8aa',
    paddingTop: '10%',
    paddingBottom: '10%',
    borderRadius: '8px',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  title:{
    width: '100%',
    color: 'secondary'
  },
  textfield:{
      
    marginLeft: '5%'
  },
  submit: {
    margin: theme.spacing(3, 5, 2),
    color: "secondary"
  },
  card:{
    width: '100%'
  },
}));
function App() {
  
  const classes = useStyles();
  const[data, setData] = useState({})
  const[city, setCity] = useState('')
  const[error, setError] = useState('')
  const[country, setCountry] = useState('')
  const[flagErrors, setFlag] = useState(false)
  const handleCity = (event)=>{
      setCity(event.target.value)
     
  }
  const handleCountry = (event)=>{
    setCountry(event.target.value)
  
  }
    const handleSubmit = async(event)=>{
      event.preventDefault();
      console.log(city, country)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&cnt=3&appid=b8b4919cd73a03ffb89e495ab7bcf834`);
        if(res.ok){
        res.json()
          .then(res => setData({
            data: data,
            city: city,
            country: country.toUpperCase(),
            condition: res.weather[0].main,
            description: res.weather[0].description,
            temperature: Math.round(res.main.temp)
          }),
          setFlag(true))
          setError('')
        } 
        
      
      else{
        setData({
          data: "",
            city:"",
            country: "",
            condition: "",
            description: "",
            temperature: "",
        })
        setError(
          "Invalid City or Country"
        )
        setFlag(false)
      }
      
    }

    console.log(flagErrors)
  return (
    
      <Container className={classes.container} maxWidth="sm">
         
        <div className={classes.paper}>
     
     <form className={classes.form} onSubmit={handleSubmit} ><Typography variant="h3">
     <Title className={classes.title}><Typography>
      React Weather
    </Typography></Title>
      <TextField
      className={classes.textfield}
      id="standard-required"
      label="Enter city"
      value={city}
      onChange={handleCity}
      inputProps={{
        maxLength: 30
      }}
       required>
         </TextField>
      <TextField
      className={classes.textfield}
      id="standard-required"
      label="Enter country"
      value={country}
      onChange={handleCountry}
      inputProps={{
        maxLength: 30
      }}
      required>

      </TextField>
     
      
     <br></br>
     <Button
        className={classes.submit}
        variant="outlined"
        color="primary"
        type="submit" 
        size="large"
      >Submit</Button>
      </Typography>
      </form>
      
    {flagErrors ? <Result className={classes.card} data={data}/> : null }
    {error===''? null:  <Alert variant="filled" severity="error">{error}</Alert>}
   
      </div>
    </Container>      
   
  );
}

export default App;
