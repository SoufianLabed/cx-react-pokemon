import React from "react"
import './CardAttaque.css';
import { makeStyles } from '@material-ui/core/styles';

import { Card,ListGroup } from 'react-bootstrap';
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
  




function CardAttaque(props) {

  const classes = useStyles();
 
    return (  
     
      <div className="card_attaque">
      
      <Card style={{ width: '14rem',backgroundColor:"#706C6C" }}>
      <ListGroup variant="flush" style={{ borderRadius:"0%" }} >
        <ListGroup.Item  style={{backgroundColor:"#706C6C" }}>{props.nom}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#706C6C" }}>{props.niveau}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#706C6C" }}>{props.puissance}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#706C6C" }}>{props.precision}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#706C6C" }}>{props.pp}</ListGroup.Item>
      </ListGroup>
    </Card>
  
    
      </div>
     
    )
}

export default CardAttaque