import React from "react";

export default function ImageDisplay (props) {
    const { apodData } = props;

    return (
        <div>
            <h2>{apodData.title}</h2>
            {apodData.media_type === "image" ? (<img src={apodData.url} alt={apodData.title} />) : apodData.media_type === "video" ? (
                <iframe
                 src={apodData.url}
                 title={apodData.title}
                 width={"560"}
                 height="315"
                 allow="autoplay"
                />
                 ) : <p>"Unsupported media type!"</p>}
            <p>{apodData.explanation}</p>
        </div>
    )
}