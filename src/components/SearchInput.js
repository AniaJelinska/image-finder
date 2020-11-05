import React, { Component } from 'react';

class SearchInput extends Component {
    state = {
        keyword: "",
    }
    handleChange = (e) => {
        const value = e.target.value
        this.setState({
            keyword: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("dziala")
    }

    render() {
        return (
            <div className="input">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search free high-resolution photos"
                        value={this.state.keyword}
                        onChange={this.handleChange}
                    >
                    </input>
                </form>
            </div>
        )
    }
}

export default SearchInput;