import React from "react"
import './CardPokemon.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  




function CardPokemon(props) {

  const classes = useStyles();
  const test = `/pokemon/${props.ide}`
 
    return (
      <div className="card_pokemon">
      <Link to={test} style={{textDecoration:"none"}} >
      <Card className={"list_card"} style={{borderRadius:"3%",backgroundColor:'#444444'}}>
      <CardActionArea className="carte">
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="190"
          image= {props.url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color:'white'}}>
           {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:'white'}}>
            #{props.num}
          </Typography>
        </CardContent>
        
      </CardActionArea>
      </Card>
      </Link>
    
      
      </div>
    )
}

export default CardPokemon