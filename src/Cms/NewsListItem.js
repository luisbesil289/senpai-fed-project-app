import React from 'react';
import AppContext from '../AppContext';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({

  bigAvatar: {
    margin: 10,
    width: 30,
    height: 30,
  },
  menu: {
    width: 200,
  },
  typography: {
    color: 'black',
    height: 30,
    border: 0,
    borderRadius: 3,
  },
});

class NewsListItem extends React.Component {
  static contextType = AppContext;
  editnews = () => {
    this.context.goToEdit('news', this.props.news);
  }

  deletenews = () => {
    this.context.deleteNews(this.props.news.id);
  }

  concatPath = () => {
    var String_1 = this.context.url ;
    var String_2 = this.props.news.foto ;
    var String_3 = String_1 + String_2;
     return String_3;
 }

  render() {
    return (

      <TableRow>
        <TableCell component="th" scope="row">{this.props.news.id}</TableCell>
        <TableCell><Avatar alt="Remy Sharp" src={this.concatPath()} className={this.props.classes.bigAvatar} /></TableCell>
        <TableCell>
          <Typography variant="h6" className={this.props.classes.typography} >
            {this.props.news.titulo}
          </Typography>
        </TableCell>
        <TableCell>{this.props.news.bajada}</TableCell>
        <TableCell>{this.props.news.fecha}</TableCell>
        <TableCell>{this.props.news.nota}</TableCell>
        <TableCell>{this.props.news.publicacion}</TableCell>
        <TableCell align="right">
          <IconButton aria-label="Edit" onClick={this.editnews}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="Delete" onClick={this.deletenews}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>

    );
  }
}

export default withStyles(styles)(NewsListItem);
