import React, { Component, PropTypes } from 'react';
import { bylineToString, getLocalLink } from 'utils/NewsUtils';
import { COLOR_STYLE } from 'constants/FRNBaseStyles';
import Video from 'components/media/Video';
import AdvertisementUnit from 'components/AdvertisementUnit';
class RandomTest extends Component {
  static PropTypes = {
    h1: PropTypes.string,
    h2: PropTypes.string,
  }
  render(){
    let {
      h2 = 'heba is testing here',
    } = this.props;

    let {
      flux, config
    } = this.context;

    return (
      <div>
        <h2>{h2}</h2>
      </div>
    );
  }
}

export default RandomTest;