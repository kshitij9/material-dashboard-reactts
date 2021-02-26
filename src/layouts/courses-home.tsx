import { Switch, Route, Redirect } from 'react-router-dom';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { createStyles, Theme, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
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
import ButtonBase from '@material-ui/core/ButtonBase';
import cardImage from '../static/images/cards/data_engineering.jpg'
import assetManagement from '../static/images/cards/asset_management.jpg'
import UxDesign from '../static/images/cards/ux_design.png'
import FixedPlugin from '../components/FixedPlugin/FixedPlugin';
import routes from '../routes';


const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        fontSize: 'inherit !important',
        letterSpacing: 'inherit !important'
      },
      button: {
        fontSize: 'inherit !important',
        letterSpacing: 'inherit !important'
      },
      h5: {
        fontSize: '1.1em !important'
      }
    }
  },
});

// const theme = {
//   fontSize: 'inherit'
// }

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      fontSize: 'inherit',
      textSpacing: 'inherit'
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
      fontSize: 'inherit !important'
    },
    cardRoot: {
      maxWidth: 280,
      fontSize: 'inherit !important',
      letterSpacing: 'inherit !important'
    },
    cardMedia: {
      height: 140,
    },
    cardAction: {
      display: 'block',
      textAlign: 'initial'
    },
    body1Text: {
      fontSize: "inherit"
    },
    bodyFont: {
      fontSize: 'inherit'
    }
  }),
);

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === '/dbLearningAI') {
        console.log(prop)
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
    })}
  </Switch>
);

export default function coursesHome() {
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
          setCurrentThemeTitleIndex(0);
          setCurrentTextSizeTitleIndex(1);
          setCurrentTextSpacingTitleIndex(1);
          setCurrentCursorTitleIndex(1);
          break;
        case 1:
          setCurrentTheme('desaturate');
          setCurrentTextSize('normalTextSize');
          setCurrentTextSpacing('normalTextSpacing');
          setCurrentCursor('normalCursor');  
          setCurrentThemeTitleIndex(2);
          setCurrentTextSizeTitleIndex(1);
          setCurrentTextSpacingTitleIndex(1);
          setCurrentCursorTitleIndex(1);
          break;
        case 2:
          setCurrentTheme('desaturate');
          setCurrentTextSize('normalTextSize');
          setCurrentTextSpacing('normalTextSpacing');
          setCurrentCursor('normalCursor');
          setCurrentThemeTitleIndex(2);
          setCurrentTextSizeTitleIndex(1);
          setCurrentTextSpacingTitleIndex(1);
          setCurrentCursorTitleIndex(1);
          break;
        default:
          setCurrentTheme('normal');
          setCurrentTextSize('normalTextSize');
          setCurrentTextSpacing('normalTextSpacing');
          setCurrentCursor('normalCursor');
          setCurrentThemeTitleIndex(0);
          setCurrentTextSizeTitleIndex(0);
          setCurrentTextSpacingTitleIndex(0);
          setCurrentCursorTitleIndex(0);
      }
      setSettingsLoaded(true);
    }
  }, []);
  // const handleImageClick = (i: string) => {
  //   this.setState({ image: i });
  // }

  // const handleColorClick = (c: string) => {
  //   this.setState({ color: c });
  // }

  const handleFixedClick = () => {
    if (fixedClasses === 'dropdown') {
      setFixedClasses('dropdown show');
    } else {
      setFixedClasses('dropdown');
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen );
  }

  return (
    <ThemeProvider theme={theme}>
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
          <List className={ classes.bodyFont}>
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

        {switchRoutes}
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
        handleFixedClick={handleFixedClick}
        fixedClasses={fixedClasses}
      />}
    </div>

     </ThemeProvider>
  );
}
