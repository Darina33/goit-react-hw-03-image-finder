import React from "react";

export default class Searchbar extends React.Component {
    state = {
        imageName: '',
    };

    handleNameChange = e => {

        this.setState({
            imageName: e.currentTarget.value.toLowerCase()
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.imageName.trim() === '') {
            alert('Введите текст');
            return;
        }
        
        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: '' })
    };

    render() { 
        return (<header className="">
            <form className="SearchForm"
                  onSubmit={this.handleSubmit}>
                <button type="submit"
                        className="SearchForm-button">
                    <span className="SearchForm-button-label">
                        Search
                    </span>
                </button>
                <input 
                    value={this.state.imageName}
                    onChange={this.handleNameChange}
                    name="query"
                    type="text"
                    className="SearchForm-input"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos" />
            </form>
            </header>
        )
    }
}