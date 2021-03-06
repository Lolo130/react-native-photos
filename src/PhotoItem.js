import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { Image, View, Dimensions } from 'react-native';

class PhotoItem extends Component {
  render() {
    return (
      <View>
      <Image
        style={{ height:120, width: Dimensions.get('window').width }}
        source={{uri: this.props.photoUrl.download_url}}
        resizeMode='cover' />
    </View>
    )};
  }

  PhotoItem.propTypes = {
    photoUrl : PropTypes.any,
  }

  export default PhotoItem;
