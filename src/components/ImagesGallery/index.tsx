import * as React from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import slides from "./images.tsx";
const ImagesGallery: React.FC = () => {
    const [index, setIndex] = React.useState(-1);

    return (
        <>
            <PhotoAlbum
                // layout="rows"
                layout="masonry"
                photos={slides}
                targetRowHeight={150}
                onClick={({ index: current }) => setIndex(current)}
            />

            <Lightbox
                index={index}
                slides={slides}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </>
    );
}

export default ImagesGallery;
