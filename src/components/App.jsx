import React from "react";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
import Button from "./Button";

export class App extends React.Component {
  state = {
    imageName: '',
  };

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
    <ImageGallery/>
    <Loader/>
    <Button/>
    {/* <Modal/> */}
      </div>)
    }

  }
