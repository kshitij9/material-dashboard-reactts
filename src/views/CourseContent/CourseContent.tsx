import React from 'react';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';
import { createStyles, MenuItem, withStyles } from '@material-ui/core';
import Select from '@material-ui/core/Select';

const style = createStyles({
    typo: {
      paddingLeft: '25%',
      marginBottom: '40px',
      position: 'relative'
    },
    note: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      bottom: '10px',
      color: '#c0c1c2',
      display: 'block',
      fontWeight: 400,
      fontSize: '13px',
      lineHeight: '13px',
      left: '0',
      marginLeft: '20px',
      position: 'absolute',
      width: '260px'
    },
    cardCategoryWhite: {
      color: 'rgba(255,255,255,.62)',
      margin: '0',
      fontSize: '14px',
      marginTop: '0',
      marginBottom: '0'
    },
    cardTitleWhite: {
      color: '#FFFFFF',
      marginTop: '0px',
      minHeight: 'auto',
      fontWeight: 300,
      fontFamily: '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif',
      marginBottom: '3px',
      textDecoration: 'none'
    }
  });

function CourseContent(props: any) {
    const { classes } = props;
    const [module, setModule] = React.useState('');

    const handleChange = (event: any) => {
        setModule(event.target.value);
    };
    return (
        <Card>
            <CardHeader>
                <h4 className={classes.cardTitleWhite}>Artificial Intelligence course</h4>
                <p className={classes.cardCategoryWhite}>
                    Created using DB for dummies
                </p>
            </CardHeader>
            <CardBody>
                <div className={classes.typo}>
                    <div className={classes.note}>Paragraph</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <section>
                    <Select
                        id="demo-simple-select"
                        value={module}
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                    </Select>
                </section>
            </CardBody>
        </Card>
    )
}

export default withStyles(style)(CourseContent);