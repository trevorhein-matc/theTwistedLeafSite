import React from 'react';
import { Link } from 'gatsby';
import { ViewQuilt, ZoomIn, Book } from "styled-icons/material";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      color: theme.palette.text.secondary,
      margin: 25,
    },
    details: {
      textAlign: 'left',
    },
    cardIcon: {
      marginVertical: 'auto',
      alignItems: 'center',
      paddingVertical: 'auto',
      color: theme.palette.text.secondary,
    },
    buttonBox: {
      padding: 0,
    },
    cardEffects: {
    },
  });

function IndexCard(props) {
const { classes } = props;

return (
  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Button className={classes.buttonBox} component={ Link } to='/stories'>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="h3" className={classes.details}>
                  Stories
                </Typography>
                <Typography variant="h6" className={classes.details}>
                  The Context
                </Typography>
                <Typography variant="body1" className={classes.details}>
                  A good story has plenty of context, foreshadowing, and depth. A news story should be no different. Put a story in context and understand the situation from more than one perspective. 
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Book className={classes.cardIcon}/>
              </Grid>
            </Grid>
          </Paper>
        </Button>

        <Button className={classes.buttonBox} component={ Link } to='/pieces'>
          <Paper className={classes.paper}>
            <Grid container spacing={24} className={classes.cardEffects}>
              <Grid item xs={4}>
                <ViewQuilt />
              </Grid>
              <Grid item xs={8}>
              <Typography variant="h3" className={classes.details}>
                  Pieces
                </Typography>
                <Typography variant="h6" className={classes.details}>
                  In Action
                </Typography>
                <Typography variant="body1" className={classes.details}>
                  Events along the way that paint the whole picture. These are short pieces that come together to paint a more complete picture. 
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Button>

        <Button className={classes.buttonBox} component={ Link } to='/bits'>
          <Paper className={classes.paper}>
            <Grid container spacing={24} className={classes.cardEffects}>
              <Grid item xs={8}>
                <Typography variant="h3" className={classes.details}>
                  Bits
                </Typography>
                <Typography variant="h6" className={classes.details}>
                  The Details
                </Typography>
                <Typography variant="body1" className={classes.details}>
                  The supporting details that give it details and depth. 
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <ZoomIn className={classes.cardIcon}/>
              </Grid>
            </Grid>
          </Paper>
        </Button>

      </Grid>
    </Grid>
  </div>
);
}

IndexCard.propTypes = {
classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexCard);