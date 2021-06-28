import React from 'react';
import './ImageList.css';


class ImageCard extends React.Component {
    render() {
        const {alt_description, urls} = this.props.image;
        return(
            <div>
                <img alt={alt_description} src={urls.regular} />
            </div>
        )
    }
}


export default ImageCard;
