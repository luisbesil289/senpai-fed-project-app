import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppContext from '../AppContext';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const styles = theme => ({
  card: {
    maxWidth: 300,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
    width: '100%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});



class RaceCard extends React.Component {
  static contextType = AppContext;
  render() {

    return (
      <div>
        <React.Fragment>
         <Card className={this.props.classes.card}>
            <CardHeader avatar={<Avatar aria-label="Recipe" className={this.props.classes.avatar}>x</Avatar>}
              action={<IconButton aria-label="Settings"><MoreVertIcon /></IconButton>}
              title={this.props.pilot.nombre}
              subheader={this.props.pilot.nick}
            />
            <CardMedia
              className={this.props.classes.media}
              image={this.props.pilot.foto}
              title="Piloto"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
               {this.props.pilot.descripcion} 
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="Add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="Share">
                <ShareIcon />
              </IconButton>
            </CardActions>

          </Card>
        </React.Fragment>
      </div >

    )
  };
}
/* export default Race; */
export default withStyles(styles)(RaceCard);





