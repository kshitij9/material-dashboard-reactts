import React, { useEffect, useState } from 'react';
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
import de_video from '../static/videos/de_video.mp4';
import FixedPlugin from '../components/FixedPlugin/FixedPlugin';


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

export default function coursesView(){
    const classes = useStyles();
    const [fixedClasses, setFixedClasses] = useState('dropdown ');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState('normal');
    const [currentTextSize, setCurrentTextSize] = useState('normalTextSize');
    const [currentTextSpacing, setCurrentTextSpacing] = useState('normalTextSpacing');
    const [currentCursor, setCurrentCursor] = useState('normalCursor');
    const [currentThemeTitleIndex, setCurrentThemeTitleIndex] = useState(0);
    const [currentTextSizeTitleIndex, setCurrentTextSizeTitleIndex] = useState(0);
    const [currentTextSpacingTitleIndex, setCurrentTextSpacingTitleIndex] = useState(0);
    const [currentCursorTitleIndex, setCurrentCursorTitleIndex] = useState(0);
    const [currentFont, setCurrentFont] = useState('normalFont');
    const [currentFontTitleIndex, setCurrentFontTitleIndex] = useState(0);
    const [settingsLoaded, setSettingsLoaded] = useState(false);
    useEffect(() => {
      const answers = JSON.parse(localStorage.getItem('answers') || '');
      if(answers) {
        switch(answers[1]){
          case 0:
            setCurrentTheme('normal');
            setCurrentTextSize('mediumTextSize');
            setCurrentTextSpacing('mediumTextSpacing');
            setCurrentCursor('largerCursor');
            setCurrentFont('normalFont'),
            setCurrentThemeTitleIndex(0);
            setCurrentTextSizeTitleIndex(1);
            setCurrentTextSpacingTitleIndex(1);
            setCurrentCursorTitleIndex(1);
            setCurrentFontTitleIndex(0);
            break;
          case 1:
            setCurrentTheme('desaturate');
            setCurrentTextSize('normalTextSize');
            setCurrentTextSpacing('normalTextSpacing');
            setCurrentCursor('normalCursor');
            setCurrentFont('normalFont'),  
            setCurrentThemeTitleIndex(2);
            setCurrentTextSizeTitleIndex(1);
            setCurrentTextSpacingTitleIndex(1);
            setCurrentCursorTitleIndex(1);
            setCurrentFontTitleIndex(0);
            break;
          case 2:
            setCurrentTheme('desaturate');
            setCurrentTextSize('normalTextSize');
            setCurrentTextSpacing('normalTextSpacing');
            setCurrentCursor('normalCursor');
            setCurrentFont('dyslexicFont')
            setCurrentThemeTitleIndex(2);
            setCurrentTextSizeTitleIndex(1);
            setCurrentTextSpacingTitleIndex(1);
            setCurrentCursorTitleIndex(1);
            setCurrentFontTitleIndex(1);
            break;
          // case 3: 
          //   setCurrentTheme('normal');
          //   setCurrentTextSize('normalTextSize');
          //   setCurrentTextSpacing('normalTextSpacing');
          //   setCurrentCursor('normalCursor');
          //   setCurrentThemeTitleIndex(2);
          //   setCurrentTextSizeTitleIndex(1);
          //   setCurrentTextSpacingTitleIndex(1);
          //   setCurrentCursorTitleIndex(1);
          //   break;
          default:
            setCurrentTheme('normal');
            setCurrentTextSize('normalTextSize');
            setCurrentTextSpacing('normalTextSpacing');
            setCurrentCursor('normalCursor');
            setCurrentFont('normalFont');
            setCurrentFontTitleIndex(0);
            setCurrentThemeTitleIndex(0);
            setCurrentTextSizeTitleIndex(0);
            setCurrentTextSpacingTitleIndex(0);
            setCurrentCursorTitleIndex(0);
        }
        setSettingsLoaded(true);
      }
    }, []);

    const handleFixedClick = () => {
      if (fixedClasses === 'dropdown') {
        setFixedClasses('dropdown show');
      } else {
        setFixedClasses('dropdown');
      }
    }

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="body1" noWrap>
              DBLearningAI
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <ListItem button key={"profile"}>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary={"Profile"} />
              </ListItem>
              <ListItem button key={"settings"}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={"Settings"} />
              </ListItem>
            </List>
            <Divider />
            <List>
              {['Logout'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Typography paragraph>
            Be Inclusive
          </Typography>
          <Typography paragraph>
            Make learning more accessible
          </Typography>

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
        {settingsLoaded && <FixedPlugin
        currentTheme={currentTheme}
        currentTextSize={currentTextSize}
        currentTextSpacing={currentTextSpacing}
        currentCursorSize={currentCursor}
        currentThemeTitleIndex={currentThemeTitleIndex}
        currentTextSizeTitleIndex={currentTextSizeTitleIndex}
        currentTextSpacingTitleIndex={currentTextSpacingTitleIndex}
        currentCursorTitleIndex={currentCursorTitleIndex}
        currentFont={currentFont}
        currentFontTitleIndex={currentFontTitleIndex}
        handleFixedClick={handleFixedClick}
        fixedClasses={fixedClasses}
      />}
      </div>
    )
}