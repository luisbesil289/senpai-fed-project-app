import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class MadeWithLove extends React.Component {
    render() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
            {'Built with love by the '}
            <Link color="inherit" href="https://material-ui.com/">
              Material-UI
            </Link>
            {' team.'}
          </Typography>
        )
    }
}
export default MadeWithLove;