import React, { useState } from 'react';
import { createStyles, Theme, makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import ButtonBase from '@material-ui/core/ButtonBase';
import cardImage from '../../static/images/cards/data_engineering.jpg'
import assetManagement from '../../static/images/cards/asset_management.jpg'
import UxDesign from '../../static/images/cards/ux_design.png'


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
      }
    }
  },
});

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

export default function dashboard() {
  const classes = useStyles();

  const [fixedClasses, setFixedClasses] = useState('dropdown ');
  const [mobileOpen, setMobileOpen] = useState(false);
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
      <main className={classes.content}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={4}>
              <Grid key={0} item>
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                    <ButtonBase
                      className={classes.cardAction}
                      onClick={
                        () => {
                          window.location.pathname = '/dbLearningAI/view-course'
                        }
                      }
                    >
                      <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        image={cardImage}
                        title="Data Engineering"
                      />
                      <br/>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Data Engineering
                      </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          The ultimate goal of data engineering is to provide organized,
                          consistent data flow. Doing exploratory data analysis ...
                      </Typography>
                      </CardContent>
                    </ButtonBase>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid key={1} item>
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image={assetManagement}
                      title="Understand Asset Management"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Asset Management
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Investments, Pooled funds from clients, capital to work through
                        stocks, bonds, real estate, master limited partnerships and ...
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid key={2} item>
                <Card className={classes.cardRoot}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image={UxDesign}
                      title="UX Design"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        UX Design
                        </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Process of designing (digital or physical) products that are useful,
                        easy to use, and delightful to interact with ...
                        </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>

     </ThemeProvider>
  );
}
