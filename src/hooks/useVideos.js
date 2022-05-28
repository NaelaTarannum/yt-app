import { useState,useEffect } from "react";
import youtube from '../apis/youtube';

const useVideos=(defaultSearchTerm)=>{
  const [searchRes,setSearchRes] = useState([]);
  const onTermSubmit = async (term)=>{
    const response = await youtube.get('/search',{
      params:{
        q:term
      }
    })
    setSearchRes(response.data.items)


  }
useEffect(()=>{
    onTermSubmit(defaultSearchTerm)
},[]);
    return{searchRes,onTermSubmit};
}

export default useVideos