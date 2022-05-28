import React from 'react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetails';
import './App.css';
import youtube from '../src/apis/youtube';
import useVideos from './hooks/useVideos';

function App() {
  const [selectedVideo,setSelectedVideo] = React.useState(null);
  const {searchRes,onTermSubmit} = useVideos('buildings')

  React.useEffect(()=>{
    setSelectedVideo(searchRes[0])
  },[searchRes]);
  return (
    <div className="ui container">
     <SearchBar onFormSubmit={onTermSubmit}/>
     <div className='ui grid'>
       <div className='ui row'>
         <div className='eleven wide column'>      <VideoDetail video={selectedVideo}/></div>
     
<div className='five wide column'> <VideoList className='five wide column'onVideoSelect={onTermSubmit} videos={searchRes}></VideoList></div>
     </div>
     </div>
     
    </div>
  );
}

export default App;
