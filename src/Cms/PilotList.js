import React from 'react';
import AppContext from '../AppContext';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PilotListItem from './PilotListItem';
import ManagerNavBar from './ManagerNavBar';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  }
});

class PilotList extends React.Component {
  static contextType = AppContext;
  render() {
    console.log(this.context.pilotos);
    return (
      <div><ManagerNavBar goToMenu={this.props.goToMenu} />
        <Paper className={this.props.classes.root}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Nick</TableCell>
                <TableCell>Fecha</TableCell>
                <TableCell>Pais</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.context.pilotos.map(item => (<PilotListItem piloto={item} key={item.id} 
                goToEdit={this.props.goToEdit}
                deleteAnimal={this.props.deleteAnimal}/>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(PilotList);
