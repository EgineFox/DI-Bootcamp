import React, { Component } from 'react'

export default class Example3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        fetch('../data.json')
            .then((response) => response.json())
            .then((jsonData) => {
                this.setState({ data: jsonData });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    }
    render() {
        const headerText = 'Experiences';
        const { data } = this.state;
        const foundObject = data ? data[headerText] : null;

        return (
            <div>
                <h1>{headerText}</h1>
                {Array.isArray(foundObject) ? (
                    <div>
                        {foundObject.map((section, index) => (
                            <div key={index} style={{display: 'flex', flexDirection:'column'}}>
                                <img src={section.logo} alt="" />
                                <a href={section.url} target="_blank" rel="noopener noreferrer">
                                    {section.companyName}
                                </a>
                                <div>
                                    {section.roles.map((role, index) => (
                                        <div key={index}>
                                            <h3>{role.title}</h3>
                                            <p>{role.startDate} {role.location}</p>
                                            <p>{role.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Object not found</p>
                )}
            </div>
        );
    }
}