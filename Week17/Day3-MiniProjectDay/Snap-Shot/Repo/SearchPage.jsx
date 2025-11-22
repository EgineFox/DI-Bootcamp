import { useState } from 'react';
import { useParams } from "react-router-dom";
import Pictures from "../components/Pictures";

export default function SearchPage({ defaultQuery }) {
    const { query } = useParams();
    const searchKey = query || defaultQuery || "mountains";
    const [images, setImages] = useState([]);


    return (
        <Pictures
            setImages={setImages}
            images={images}
            query={searchKey}
            collectionName={searchKey}
        />

    );
}