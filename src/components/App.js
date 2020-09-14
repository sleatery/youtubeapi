import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyALcbENPfO_8uOvNtklwjQkI5iua28beF0';

export default class App extends Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            type: 'video',
            maxResults: 10,
            key: KEY
          }
        });
         this.setState({
           videos: response.data.items,
           selectedVideo: response.data.items[0]
        });        
      };
 
    onVideoSelect = video =>{
this.setState({selectedVideo: video});
console.log(video);
    }
      render() {
        return (
          <div className="ui container">
            <SearchBar onFormTerm={this.onTermSubmit} />
             <div  className="ui grid">
               <div className="ui row">
                 <div className="eleven wide column">
             <VideoDetail video={this.state.selectedVideo}/>
             </div>
             <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} listvideone={this.state.videos} />
            </div>
            </div>
          </div>
          </div>
        );
      }
    }
