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
        <ListGroup.Item  style={{backgroundColor:"#706C6C",textAlign:"center" }}>{props.nom}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#706C6C" }}><div style={{display:"flex"}}><div style={{textAlign:"left",fontWeight:"bold"}}>Niveau </div><div style={{marginLeft:"10%"}}>{props.niveau}</div></div></ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#706C6C" }}><div style={{display:"flex"}}><div style={{textAlign:"left",fontWeight:"bold"}}>Puissance </div><div style={{marginLeft:"10%"}}>{props.puissance}</div></div></ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#706C6C" }}><div style={{display:"flex"}}><div style={{textAlign:"left",fontWeight:"bold"}}>Precision </div><div style={{marginLeft:"10%"}}>{props.precision}</div></div></ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#706C6C" }}><div style={{display:"flex"}}><div style={{textAlign:"left",fontWeight:"bold"}}>PP </div><div style={{marginLeft:"10%"}}>{props.pp}</div></div></ListGroup.Item>
      </ListGroup>
    </Card>
  
    
      </div>
     
    )
}

export default CardAttaque