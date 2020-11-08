
import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import { Card } from "react-bootstrap";
import MyModal from "./MyModal";

const unsplash = new Unsplash({
    accessKey: "PUc2mcO-lkccQgrnP0cU25N6Gu-QP6q5mB4QrQF8GFo",
});


function SearchInput() {
    const [query, setQuery] = useState("");
    const [images, setImages] = useState([]);
    const [modalShow, setModalShow] = useState(0);


    const handleSearchImages = async (e) => {
        e.preventDefault();
        unsplash.search.photos(query, 1, 20)
            .then(toJson)
            .then((json) => {
                setImages(json.results);
                console.log(json.results)
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
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    >
                    </input>
                </form>
                <div className="imgList">
                    {images.map((image) => {
                        return <Card key={image.id}>
                            <Card.Img onClick={() => setModalShow(image.id)} src={image.urls.small} alt={image.alt_description} />
                            {/* <p>{image.tags.title}</p> */}
                            < MyModal
                                show={modalShow === image.id}
                                onHide={() => setModalShow(false)}
                                data={image.urls.small}
                                name={image.user.name}
                                username={image.user.username}
                                location={image.user.location}
                                profileImage={image.user.profile_image.small}
                            />
                        </Card>
                    }
                    )}
                </div>
            </div>
        </>
    )
}

export default SearchInput;