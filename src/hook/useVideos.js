import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {

    const [videos, setVideos] = useState([]);
  

    useEffect(() => {
        onTermSubmit(defaultSearchTerm);
   }, []);
  
   const onTermSubmit = async (term) => {
    const KEY = 'AIzaSyALcbENPfO_8uOvNtklwjQkI5iua28beF0';

    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        type: 'video',
        maxResults: 10,
        key: KEY
      },
    });
  
      setVideos(response.data.items);
   };

//-----------------------------------------------------
return [videos, onTermSubmit];

};

export default useVideos;