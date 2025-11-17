import React, { Component } from 'react'

export default class Example2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        fetch('../data-ex3.json')
            .then((response) => response.json())
            .then((jsonData) => {
                this.setState({ data: jsonData });
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const headerText = 'Skills';
        const { data } = this.state;
        const foundObject = data ? data[headerText] : null;

        return (
            <div>
                <h1 id="header">{headerText}</h1>
                {Array.isArray(foundObject) ? (
                    <div>
                        {foundObject.map((section, index) => (
                            <div key={index}>
                                <h2>{section.Area}</h2>
                                <ul>
                                    {section.SkillSet.map((skill, i) => (
                                        <li key={i}>
                                            <span style={{ color: skill.Hot ? 'red' : 'black' }}>
                                                {skill.Name}
                                            </span>

                                        </li>
                                    ))}
                                </ul>
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