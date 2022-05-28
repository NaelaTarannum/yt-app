import React from "react";
import "./VideoItem.css"

const VideoItem = (props)=>{
const {onVideoSelect}= props;
    return(
        <div onClick={()=>{
            onVideoSelect(props.video)
        }}className="item video-item">
            <img className="ui image"src={props.video.snippet.thumbnails.medium.url}></img>
            <div className="content">
                <div className="header"> {props.video.snippet.title}</div>
            </div>
           
        </div>
    )
}

export default VideoItem;