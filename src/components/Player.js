import PropTypes from 'prop-types'
import { useState } from 'react';

const Player = props => {
  const { name } = props;
  const [tiles, setTiles] = useState([]);
  const [assets, setAssets] = useState({});
  const [active, setActive] = useState(false);

  return (
    <div>

    </div>
  )
}

Player.propTypes = {

}

export default Player
