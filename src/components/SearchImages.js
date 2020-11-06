
import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
    accessKey: "PUc2mcO-lkccQgrnP0cU25N6Gu-QP6q5mB4QrQF8GFo",
});

function SearchImages() {
    const [keyword, setKeyword] = useState("");
    const [images, setImages] = useState([]);


    const handleSearchImages = async (e) => {
        e.preventDefault();
        unsplash.search
            .photos(keyword)
            .then(toJson)
            .then((json) => {
                setImages(json.results);
            });
    }
    return (
        <>
            <div className="formContainer">
                <form className="form" onSubmit={handleSearchImages}>
                    <input
                        className="input"
                        type="text"
                        placeholder={"Search free high-resolution photos"}
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    >
                    </input>
                </form>
                <div className="imgList">
                    {images.map((image) => <div className="card" key={image.id}>
                        <img
                            className="cardImage"
                            alt={image.alt_description}
                            src={image.urls.full}
                            width="50%"
                            height="50%"
                        ></img>
                    </div>)
                    }
                </div>
            </div>
        </>
    )
}

export default SearchImages;