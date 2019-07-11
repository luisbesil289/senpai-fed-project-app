import React from 'react';
import AppContext from '../AppContext';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


class PilotListItem extends React.Component {
  static contextType = AppContext;
  editPiloto = () => {
    this.context.goToEdit(this.props.piloto);
  }

  deletePiloto = () => {
    this.context.deletePilot(this.props.piloto.id);
  }

  render() {
    return (

      <TableRow>
        <TableCell component="th" scope="row">
          {this.props.piloto.id}
        </TableCell>
        <TableCell>{this.props.piloto.nombre}</TableCell>
        <TableCell>{this.props.piloto.nick}</TableCell>
        <TableCell>{this.props.piloto.fecha}</TableCell>
        <TableCell>{this.props.piloto.pais}</TableCell>
        <TableCell align="right">
          <IconButton aria-label="Edit" onClick={this.editPiloto}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="Delete" onClick={this.deletePiloto}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>

    );
  }
}

export default PilotListItem;
