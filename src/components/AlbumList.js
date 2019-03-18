// react and native
import React, { Component } from 'react';
import { ScrollView } from 'react-native';

// external libs
import axios from 'axios';

// components
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    const url = 'https://rallycoding.herokuapp.com/api/music_albums';
    axios.get(url)
      .then((response) => { this.setState({ albums: response.data }); });
  }

  renderAlbums() {
    const { albums } = this.state;

    return albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
