import React from 'react'

export default function BootstrapCard(props) {
    const { person } = props;
    const {name, description, imageUrl, buttonUrl ,buttonLabel} = person;
    return (
        <div className="card m-5" style={{ width: '30rem' }}>
            <img className="card-img-top" src={imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href={buttonUrl} class="btn btn-primary">{buttonLabel}</a>
            </div>
        </div>
    )
}
