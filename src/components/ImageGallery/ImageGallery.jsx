import React from "react"
import ImageGalleryItem from "components/ImageGalleryItem"

const ImageGallery = ({ images }) => {
    console.log(images);
    return (<ul className="ImageGallery">
        {images.map(image => {
            return (
                <ImageGalleryItem
                    key={image.id}
                    image={image}
                     />
            )
        })}
</ul>)
}

export default ImageGallery