import React from 'react';
import AppContext from '../AppContext';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(2, 0),
    width: '100%'
  },
  textField: {
    marginRight: theme.spacing(4),
    width: 300,
  },
  textArea: {
  },
  dense: {
    marginTop: 19,
  },
  button: {
    margin: theme.spacing(1),
  },
  avatar: {
    margin: 10,
  },
  menu: {
    width: 200,
  }
});

class NewsForm extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
    console.log("aca?: " + this.props.news);
    if (this.props.news) {
      // It is an Animal EDIT.
      // The form starts with the values of the animal to edit.
      this.state = {
        id: this.props.news.id,
        active: this.props.news.active,
        tipo: this.props.news.tipo,
        foto: this.props.news.foto,
        video: this.props.news.video,
        titulo: this.props.news.titulo,
        bajada: this.props.news.bajada,
        fecha: this.props.news.fecha,
        nota: this.props.news.nota,
        publicacion: this.props.news.publicacion
      };
    } else {
      // It is a NEW Animal.
      // The form starts with empty values.
      this.state = {
        id: '',
        active: '',
        tipo: '',
        foto: '',
        video: '',
        titulo: '',
        bajada: '',
        fecha: '',
        nota: '',
        publicacion: ''
      };
    }
  }

  handleChange = xxx => event => {
    this.setState({ [xxx]: event.target.value });
  };

  cancelForm = () => {
    this.context.goToMenu(661);
  };

  handleSubmit = () => {
    if (this.props.news) {
      this.context.editNews(this.state.id, {
        id: this.state.id,
        active: this.state.active,
        tipo: this.state.tipo,
        foto: this.state.foto,
        video: this.state.video,
        titulo: this.state.titulo,
        bajada: this.state.bajada,
        fecha: this.state.fecha,
        nota: this.state.nota,
        publicacion: this.state.publicacion
      });
    } else {
      this.context.addNews({
        active: this.state.active,
        tipo: this.state.tipo,
        foto: this.state.foto,
        video: this.state.video,
        titulo: this.state.titulo,
        bajada: this.state.bajada,
        fecha: this.state.fecha,
        nota: this.state.nota,
        publicacion: this.state.publicacion
      });
    }
    this.props.goToMenu(661);
  }

  render() {
    return (
      <form className={this.props.classes.container} noValidate autoComplete="off">
        <Paper className={this.props.classes.paper}>
          <Typography variant="h5">
            Noticia
          </Typography>

          <TextField
            id="titulo"
            label="titulo"
            className={this.props.classes.textField}
            value={this.state.titulo}
            onChange={this.handleChange('titulo')}
            margin="normal"
          />

          <TextField
            id="foto"
            label="foto"
            className={this.props.classes.textField}
            value={this.state.foto}
            onChange={this.handleChange('foto')}
            margin="normal"
          />

          <TextField
            id="bajada"
            label="bajada"
            className={this.props.classes.textField}
            value={this.state.bajada}
            onChange={this.handleChange('bajada')}
            margin="normal"
            placeholder="YYYY-MM-DD"
            helperText="Format: YYYY-MM-DD - Example: 2018-07-06"
          />

          <TextField
            id="fecha"
            label="fecha"
            className={this.props.classes.textField}
            value={this.state.fecha}
            onChange={this.handleChange('fecha')}
            margin="normal"
          />

          <TextField
            id="nota"
            label="nota"
            className={this.props.classes.textField}
            value={this.state.nota}
            onChange={this.handleChange('nota')}
            margin="normal"
          />

          <TextField
            id="publicacion"
            label="publicacion"
            className={this.props.classes.textArea}
            placeholder="Very cute, funny and playful"
            helperText="Please add an animal description, appereance, behaviour, mood..."
            fullWidth
            margin="normal"
            value={this.state.publicacion}
            onChange={this.handleChange('publicacion')}
          />
        </Paper>
        <div>
          <Button variant="contained" className={this.props.classes.button} onClick={this.cancelForm}>
            Cancel
        </Button>
          <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.handleSubmit}>
            {this.props.news ? 'Save' : 'Create'}
          </Button>
        </div>
      </form>
    );
  }
}
export default withStyles(styles)(NewsForm);
