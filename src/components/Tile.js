import PropTypes from 'prop-types'
import { useState } from 'react';

const Tile = props => {

  const { coordinates } = props;
  const { player, setPlayer } = useState();
  const { onBoard, setOnBoard } = useState(false);
  // const { empire, setEmpire } = useState();

  return (
    <div>

    </div>
  )
}

Tile.propTypes = {

}

export default Tile
