import { Grid, Typography } from "@material-ui/core";
import { faChessRook, faCrown, faDragon, faGlobe, faJedi, faMedal, faUniversity } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react'

const useStyles = makeStyles({
  container: {
    border: '1px solid gray',
    padding: '10px',
    textAlign: 'center',
    margin: '2px',
    backgroundColor: ' #ebf5fb'
  },
  Wingspan: {
    color: '#df3e3e',
  },
  Global: {
    color: 'brown'
  },
  Royal: {
    color: 'magenta',
  },
  Jubilee: {
    color: 'green'
  },
  Totem: {
    color: '#f1c40f'
  },
  Citadel: {
    color: '#0fc9cb'
  },
  Paladin: {
    color: 'navy'
  }
})

/**
 * Defines an empire
 * @param {*} props 
 */
const Empire = props => {
  const { name } = props;
  const classes = useStyles();
  const [onBoard, setOnBoard] = useState(false);
  const [size, setSize] = useState(0);

  let icon = faDragon;
  switch (name) {
    case 'Wingspan': icon = faDragon; break;
    case 'Global': icon = faGlobe; break;
    case 'Royal': icon = faCrown; break;
    case 'Jubilee': icon = faJedi; break;
    case 'Totem': icon = faChessRook; break;
    case 'Citadel': icon = faUniversity; break;
    case 'Paladin': icon = faMedal; break;
    default: icon = faDragon;
  }

  return (
    <Grid item xs={3} className={classes.container}>
      <FontAwesomeIcon icon={icon} size={'2x'} className={classes[name]} />
      <Typography>{name}</Typography>
    </Grid>
  )
}

Empire.propTypes = {

}

export default Empire
