import React, { Component } from 'react';
import Search from './AppComponents/Search';
import YTSearch from 'youtube-api-search';
import VideoList from './AppComponents/VideoList';
import VideoDetails from './AppComponents/VideoDetails';

const Api_Key = 'AIzaSyBeF0_QKzDqcQQ04Hv7qctM-h8eem3AVxQ';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("youtube");
  }

  videoSearch(searchTerm) {
    YTSearch({key: Api_Key, term: searchTerm}, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }
 render() {
  return (
      <div>
        <Search onSearchTermChange={searchTerm => this.videoSearch(searchTerm)} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
          videos = {this.state.videos} />
      </div>
  );
 }
}
export default App;
