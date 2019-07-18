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
    if (this.props.contenido) {
      // It is an Animal EDIT.
      // The form starts with the values of the animal to edit.
      this.state = {
        id: this.props.contenido.id,
        nombre: this.props.contenido.nombre,
        tipo: this.props.contenido.tipo,
        url: this.props.contenido.url,        
        seccion: this.props.contenido.seccion,
        fecha: this.props.contenido.fecha,        
        descripcion: this.props.contenido.descripcion
      };
    } else {
      // It is a NEW Animal.
      // The form starts with empty values.
      this.state = {
        id: '',
        nombre: '',
        tipo: '',
        url: '',
        seccion: '',
        fecha: '',
        descripcion: ''
      };
    }
  }

  handleChange = xxx => event => {
    this.setState({ [xxx]: event.target.value });
  };

  cancelForm = () => {
    this.context.goToMenu(663);
  };

  handleSubmit = () => {
    if (this.props.contenido) {     
    this.context.editContenido(this.state.id, {
        id:this.state.id,
        nombre: this.state.nombre,
        tipo: this.state.tipo,
        url: this.state.url,        
        seccion: this.state.seccion,
        fecha: this.state.fecha,
        descripcion: this.state.descripcion        
      });     
    } else {
      this.context.addContenido({
        nombre: this.state.nombre,
        tipo: this.state.tipo,
        url: this.state.url,        
        seccion: this.state.seccion,
        fecha: this.state.fecha,
        descripcion: this.state.descripcion        
      });
    }

    this.props.goToMenu(663);
  }

  render() {
    return (
      <form className={this.props.classes.container} noValidate autoComplete="off">
        <Paper className={this.props.classes.paper}>
          <Typography variant="h5">
            Contenido
          </Typography>          
         
          <TextField
            id="nombre"
            label="Nombre"
            className={this.props.classes.textField}
            value={this.state.nombre}
            onChange={this.handleChange('nombre')}
            margin="normal"
          />

          <TextField
            id="tipo"
            label="tipo"
            className={this.props.classes.textField}
            value={this.state.tipo}
            onChange={this.handleChange('tipo')}
            margin="normal"
          />

          <TextField
            id="fecha"
            label="Fecha de Nacimiento"
            className={this.props.classes.textField}
            value={this.state.fecha}
            onChange={this.handleChange('fecha')}
            margin="normal"
            placeholder="YYYY-MM-DD"
            helperText="Format: YYYY-MM-DD - Example: 2018-07-06"
          />

          <TextField
            id="url"
            label="url"
            className={this.props.classes.textField}
            value={this.state.url}
            onChange={this.handleChange('url')}
            margin="normal"
          />

          <TextField
            id="seccion"
            label="seccion"
            className={this.props.classes.textField}
            value={this.state.seccion}
            onChange={this.handleChange('seccion')}
            margin="normal"
          />

          <TextField
            id="descripcion"
            label="Descripción"
            className={this.props.classes.textArea}
            placeholder="Very cute, funny and playful"
            helperText="Please add an animal description, appereance, behaviour, mood..."
            fullWidth
            margin="normal"
            value={this.state.descripcion}
            onChange={this.handleChange('descripcion')}
          />
        </Paper>
        <div>
          <Button variant="contained" className={this.props.classes.button} onClick={this.cancelForm}>
            Cancel
        </Button>
          <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.handleSubmit}>
            {this.props.contenido ? 'Save' : 'Create'}
          </Button>
        </div>
      </form>
    );
  }
}
export default withStyles(styles)(NewsForm);
