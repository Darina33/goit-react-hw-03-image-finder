import { Component } from 'react';
import API from '../../services/image-api';
import ImageGallery from '../ImageGallery'

const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
}

export default class ImageInfo extends Component {
    state = {
        image: null,
        error: null,
        status: Status.IDLE
    }

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.imageName;
        const nextName = this.props.imageName;

        if (prevName !== nextName) {

            this.setState({ status: Status.PENDING });

            fetch(`https://pixabay.com/api/?q=${nextName}&page=1&key=35592946-b30e38cecc5f402f2c111ab69&image_type=photo&orientation=horizontal&per_page=12`).then(res => res.json())
                .then(image => this.setState({ image: image.hits, status: Status.RESOLVED }))
        }
    }

    render() { 
        const { image, error, status } = this.state;
        const { imageName } = this.props

        if (status === 'idle') {
            return <div>Enter text</div>
        }

        if (status === 'pending') {
            return <div>pending</div>
        }

        if (status === 'rejected') { 
            return alert(error)
        }

        if (status === 'resolved') {
            return <ImageGallery images={image} />
        }
    }
}