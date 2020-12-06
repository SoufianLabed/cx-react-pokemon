import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import './TablePokemon.css'


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      
    },
    body: {
      fontSize: 18,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 0,
    },
  });

  
  

  function TablePokemon(props) {
    
    const classes = useStyles();
   
      return (
        

    
          <TableContainer  component={Paper} style={{borderRadius:"4px",marginLeft:"30px"}} >
            <Table className={classes.table} aria-label="customized table">
              <TableBody >

                  <StyledTableRow style={{backgroundColor:"#706C6C"}} >
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">{props.champs1}</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.rep1}</StyledTableCell>
                  </StyledTableRow>

                
                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">{props.champs2}</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.rep2}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">{props.champs3}</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.rep3}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#222222"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">{props.champs4}</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.rep4}</StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C",color:"white"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">{props.champs5}</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.rep5} </StyledTableCell>
                  </StyledTableRow>


                  <StyledTableRow style={{backgroundColor:"#222222",color:"white"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">{props.champs6}</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.rep6} </StyledTableCell>
                  </StyledTableRow>

                  <StyledTableRow style={{backgroundColor:"#706C6C",color:"white"}}>
                    <StyledTableCell style={{color:"white",borderColor:"#222222",fontWeight:"bold"}} align="left">{props.champs7}</StyledTableCell>
                    <StyledTableCell style={{color:"white",borderColor:"#222222"}} align="left">{props.rep7}</StyledTableCell>
                  </StyledTableRow>

             
              </TableBody>
            </Table>
          </TableContainer>
      
      )
  }
  
  export default TablePokemon