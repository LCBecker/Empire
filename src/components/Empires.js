import { Grid, Typography } from '@material-ui/core';

import Empire from './Empire';
import PropTypes from 'prop-types'

const Empires = props => {

  return (
    <Grid container item xs={3} alignItems={'flex-start'} alignContent={'flex-start'} justify={'center'} spacing={3}>
      <Grid item xs={12}><hr /><Typography variant={'h5'} align={'center'}>Empires</Typography></Grid>
      <Grid container item xs={12} justify={'center'}>
        <Empire name='Wingspan' />
        <Empire name='Totem' />
      </Grid>
      <Grid container item xs={12} justify={'center'}>
        <Empire name='Global' />
        <Empire name='Paladin' />
        <Empire name='Jubilee' />
      </Grid>
      <Grid container item xs={12} justify={'center'}>
        <Empire name='Royal' />
        <Empire name='Citadel' />
      </Grid>



    </Grid>
  )
}

Empires.propTypes = {

}

export default Empires
