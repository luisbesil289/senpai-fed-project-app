import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
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
  menu: {
    width: 200,
  }
});

class AnimalForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.piloto) {
      // It is an Animal EDIT.
      // The form starts with the values of the animal to edit.
      this.state = {
        id: this.props.piloto.id,
        nombre: this.props.piloto.nombre,
        nick: this.props.piloto.gender,
        fecha: this.props.piloto.fecha,
        pais: this.props.piloto.pais,
        equipo: this.props.piloto.equipo,
        podios: this.props.piloto.podios,
        puntos: this.props.piloto.puntos,
        descripcion: this.props.piloto.descripcion
      };
    } else {
      // It is a NEW Animal.
      // The form starts with empty values.
      this.state = {
        id: '',
        nombre: '',
        nick: '',
        fecha: '',
        pais: '',
        equipo: '',
        podios: '',
        puntos: '',
        descripcion: ''
      };
    }
  }

  handleChange = nombre => event => {
    this.setState({ [nombre]: event.target.value });
  };

  handleContactChange = name => event => {
    this.setState({
      contact: {
        ...this.state.contact,
        [name]: event.target.value
      }
    });
  };

  handleSubmit = () => {
    if (this.props.animal) {
      // It is an Animal EDIT.
      // Use editAnimal method.
      this.props.editPiloto(this.props.id, {
        id: this.props.id,
        nombre: this.props.nombre,
        nick: this.props.gender,
        fecha: this.props.fecha,
        pais: this.props.pais,
        equipo: this.props.equipo,
        podios: this.props.podios,
        puntos: this.props.puntos,
        descripcion: this.props.descripcion
      });
    } else {
      // It is a NEW Animal.
      // Use addAnimal method.
      this.props.addPiloto({
        nombre: this.props.nombre,
        nick: this.props.gender,
        fecha: this.props.fecha,
        pais: this.props.pais,
        equipo: this.props.equipo,
        podios: this.props.podios,
        puntos: this.props.puntos,
        descripcion: this.props.descripcion
      });
    }

    this.props.goToList();
  }

  render() {
    return (
      <form className={this.props.classes.container} noValidate autoComplete="off">
        <Paper className={this.props.classes.paper}>
          <Typography variant="h5">
            Pilot information
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
            id="nick"
            label="Nick"
            className={this.props.classes.textField}
            value={this.state.eyesColor}
            onChange={this.handleChange('nick')}
            margin="normal"
          />

          <TextField
            id="fecha"
            label="Fecha de Nacimiento"
            className={this.props.classes.textField}
            value={this.state.birthdate}
            onChange={this.handleChange('fecha')}
            margin="normal"
            placeholder="YYYY-MM-DD"
            helperText="Format: YYYY-MM-DD - Example: 2018-07-06"
          />

          <TextField
            id="pais"
            label="Pais"
            className={this.props.classes.textField}
            value={this.state.breed}
            onChange={this.handleChange('pais')}
            margin="normal"
          />

          <TextField
            id="equipo"
            label="Equipo"
            className={this.props.classes.textField}
            value={this.state.breed}
            onChange={this.handleChange('equipo')}
            margin="normal"
          />

          <TextField
            id="podios"
            label="Podios"
            className={this.props.classes.textField}
            value={this.state.zone}
            onChange={this.handleChange('podios')}
            margin="normal"
          />

          <TextField
            id="puntos"
            label="Puntos"
            className={this.props.classes.textField}
            value={this.state.peltColor}
            onChange={this.handleChange('puntos')}
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
            value={this.state.description}
            onChange={this.handleChange('descripcion')}
          />
        </Paper>
        

        <div>
          <Button variant="contained" className={this.props.classes.button} onClick={this.props.goToList}>
            Cancel
        </Button>
          <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.handleSubmit}>
            {this.props.animal ? 'Save' : 'Create'}
          </Button>
        </div>
      </form>
    );
  }
}
export default withStyles(styles)(AnimalForm);
