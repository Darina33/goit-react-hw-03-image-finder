import React from "react";

export default class Searchbar extends React.Component {
    state = {
        imageName: '',
    };

    handleNameChange = e => {
        this.setState({ imageName: e.currentTarget.value.toLowerCase() });
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.imageName.trim() === '') {
            alert('Введите имя покемона.');
            return;
        }
        
        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: '' })
    };

    render() { 
        return (<header className="searchbar">
            <form className="form"
                onSubmit={this.handleSubmit}>
                <button type="submit" className="button">
                    <span className="button-label">
                        Search
                    </span>
                </button>
                <input 
                    value={this.state.imageName}
                    onChange={this.handleNameChange}
                    type="text"
                    className="input"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos" />
            </form>
            </header>
        )
    }
}