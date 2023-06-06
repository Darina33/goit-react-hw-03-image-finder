import { Component } from 'react';
import imageApi from './Image-api';

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
        const nextName = this.props.ImageName;

        if (prevName !== nextName) {
            this.setState({ status: Status.PENDING });
        }

        imageApi.fetchImage(nextName).then(image => this.setState({ image, status:Status.RESOLVED})).catch(error => this.setState({ image, status:Status.REJECTED}))
    }

    render() { 
        const { image, error, status } = this.state;
        const { imageName } = this.props;

        if (status === 'idle') {
            return <div>Enter text</div>
        }

        if (status === 'pending') {
            return <ImagePendingView imageName={imageName} />
        }

        if (status === 'rejected') { 
            return <ErrorView message={error.message} />
        }

        if (status === 'resolved') {
            return <DataView image={image}/>
        }
    }
}