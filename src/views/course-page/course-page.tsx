import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SettingsIcon from '@material-ui/icons/Settings';
import { Person } from '@material-ui/icons';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import de_video from '../../static/videos/de_video.mp4';


const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    //   maxWidth: '100%'
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    cardRoot: {
      maxWidth: 1000,
    },
    cardMedia: {
      height: 440,
    },
  }),
);

export default function coursesPage(){
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <main className={classes.content}>

          <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12} justify="center">
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                      <CardMedia
                        className={classes.cardMedia}
                        component="iframe"
                        image={de_video}
                        title="Data Engineering"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Data Engineering
                      </Typography>
                      </CardContent>
                  </CardActionArea>
                </Card>
          </Grid>
        </Grid>
        </main>
      </div>
    )
}