import React, { Component } from 'react';

class SearchInput extends Component {
    state = {
        keyword: "",
    }
    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        });
    };

    handleSubmit = (e) => {
        alert("dziala")
    }

    render() {
        return (
            <div className="input">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Search free high-resolution photos"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                    </input>
                </form>
            </div>
        )
    }
}

export default SearchInput;