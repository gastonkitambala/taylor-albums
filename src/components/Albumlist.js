import React, { Component } from "react";
import Row from "react-bootstrap/Row";

import axios from "axios";

import Loader from "./loader";
import AlbumDetail from "./albumDetail";

const apiEndpoint = "https://rallycoding.herokuapp.com/api/music_albums";

class AlbumList extends Component {
  state = {
    albums: null,
    loading: true
  };

  componentDidMount() {
    axios
      .get(apiEndpoint)
      .then(res => {
        console.log(res.data);
        this.setState({ albums: res.data, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderAlbums() {
    const { albums } = this.state;

    return albums.map(album => (
      <AlbumDetail
        key={album.title}
        title={album.title}
        image={album.image}
        url={album.url}
      />
    ));
  }

  render() {
    const { loading, albums } = this.state;
    return (
      <Row style={{ marginTop: 60 }}>
        {loading ? <Loader /> : null}

        {albums && this.renderAlbums()}
      </Row>
    );
  }
}

export default AlbumList;