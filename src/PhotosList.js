import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import PhotoItem from './PhotoItem';

class PhotosList extends Component {
    constructor(props){
        super(props);
            this.state = {
                photos:[]
            }
    }

    componentDidMount() {
        this._fetchPhotos();
    }

    _fetchPhotos = async () => {
        try {
          let response = await fetch(
            'https://picsum.photos/v2/list'
          );
          let responseJson = await response.json();
            data = responseJson.map(photo => {
                return photo;
        })
        return this.setState({photos: data})
        } catch (error) {
          console.error(error);
        }
    }

    _renderItem = ({item}) => (
      <PhotoItem
        photoUrl={item}
      />
    );

    render() {
      return (
        <FlatList
          data={this.state.photos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this._renderItem}
        />
      );
    }
  }

  PhotosList.propTypes = {
    photos: PropTypes.array,
    _fetchPhotos:PropTypes.func,
    _renderItem: PropTypes.func
  };

  export default PhotosList;
