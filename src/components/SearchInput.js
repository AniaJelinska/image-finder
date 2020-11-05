import React, { Component } from 'react';
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
    accessKey: "PUc2mcO-lkccQgrnP0cU25N6Gu-QP6q5mB4QrQF8GFo",
});

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

    handleSearchImages = async (e) => {
        e.preventDefault();
        unsplash.search
            .photos(this.state.keyword)
            .then(toJson)
            .then((json) => {
                console.log(json);
            });
    }

    render() {
        return (
            <div className="formContainer">
                <form className="form" onSubmit={this.handleSearchImages}>
                    <input
                        className="input"
                        type="text"
                        placeholder={"Search free high-resolution photos"}
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