import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppContext from '../AppContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';



const styles = theme => ({
  card: {
    maxWidth: 345,
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
          <CssBaseline />
          <Card className={this.props.classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={this.props.classes.avatar}>
                  x
          </Avatar>
              }
              action={
                <IconButton aria-label="Settings">
                  <MoreVertIcon />
                </IconButton>
              }
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
            <Collapse in={this.Counter} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
          </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                  again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
          </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </React.Fragment>
      </div >

    )
  };
}
/* export default Race; */
export default withStyles(styles)(RaceCard);





