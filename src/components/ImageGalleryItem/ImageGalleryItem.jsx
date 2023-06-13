import React from "react"

const ImageGalleryItem = ({ image, onImageClick }) => {
  const fullImage = () => onImageClick(image.largeImageURL)
  return (<li className="ImageGalleryItem">
  <img className="ImageGalleryItem-image" src={image.webformatURL} alt={image.tags}  />
</li>) 
}

export default ImageGalleryItem