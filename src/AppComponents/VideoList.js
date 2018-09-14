import React from 'react';
import ListItem from './ListItem';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <ListItem
                onUserSelected={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );    
    });

    return (
        <ul className = "col-md4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;