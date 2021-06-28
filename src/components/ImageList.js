import React from 'react';


const ImageList = props => {
    // console.log(props);
    const images = props.images.map(({id, urls, alt_description }) => {
        return <img key={id} src={urls.regular} alt={alt_description}  />
    });

    return <div>{images}</div>
}

export default ImageList;