import React from "react"


export default function Content(props) {
    return (
        <main>
            <div className="place-container">
                <img 
                    className="place-img"
                    src={props.item.imageUrl}
                />
                <div className="place-details">
                    <img className="place-icon" src="./images/location-icon.png" />
                    <span className="place-location">{props.item.location}</span>
                    <a className="place-link" href={props.item.googleMapsUrl}>View on Google Maps</a> 
                    <h2 className="place-title">{props.item.title}</h2>
                    <div className="place-details-bottom">
                        <span className="place-date-visited">{props.item.startDate} - {props.item.endDate}</span>
                        <span className="place-description">{props.item.description}</span>
                    </div>
                </div>
            </div>
            <hr /> 
        </main>
    )
}


