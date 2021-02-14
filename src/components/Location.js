import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react'

const useStyles = makeStyles({
  default: {
    textAlign: 'center',
    border: '6px inset lightgray',
    backgroundColor: '#F3F3F3'
  }
})

const Location = props => {
  const { coordinates } = props;
  const classes = useStyles();
  const [tile, setTile] = useState(false);
  const [empire, setEmpire] = useState();

  return (
    <Grid item xs={1} className={classes.default}><p>{coordinates}</p></Grid>
  )
}

Location.propTypes = {

}

export default Location
