import React from 'react';
import AppContext from '../AppContext';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MultimediaListItem from './MultimediaListItem';
import ManagerNavBar from './ManagerNavBar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(0),
    overflowX: 'auto',
  },
  fab: {
    flex: '100px 0 356px',
    align: 'right',
    margin: '10px',
    size: 'small'
  },
  breadCrumb: {
    flex: 1,
    alignSelf: 'center'
  }
});


class MultimediaList extends React.Component {
  static contextType = AppContext;

  goToNewContenido = () => {
    this.context.goToMenu(662);
  }

  addNewContenidoButton() {
    if (this.props.section !== 'newContenido') {
      return (
        <Fab color="secondary" aria-label="Add" className={this.props.classes.fab} onClick={this.goToNewContenido}>
          <AddIcon />
        </Fab>
      );
    } else {
      return null;
    }
  }


  render() {
    
    return (
      <div>
        <ManagerNavBar goToMenu={this.props.goToMenu} />
        <Link color="inherit" href="#/" onClick={this.goToNewContenido}> <Typography variant="h6">Agregar Contenido</Typography></Link>
        {/*  {this.additionalSection()} */}
        {this.addNewContenidoButton()}
        <Paper className={this.props.classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Avatar</TableCell>
                <TableCell>Titulo</TableCell>
                <TableCell>Seccion</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>URL</TableCell>
                
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.context.multimedia.map(item => (<MultimediaListItem contenido={item} key={item.id} />))}
            </TableBody>
          </Table>
        </Paper>


      </div>
    );
  }
}

export default withStyles(styles)(MultimediaList);
