import React, { Component } from 'react'

export default class Example1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            };
        }

        componentDidMount() {
            fetch('../data.json')
                .then((response) => response.json())
                .then((jsonData) => {
                    this.setState({ data: jsonData });
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
            }
               
    render() {
        const headerText = 'SocialMedias';
        const { data } = this.state;
        const foundObject = data ? data[headerText] : null;
        return (
            <div>
                <h1 id='header'>{headerText}</h1>
                {foundObject ? (
                    <pre> {Array.isArray(foundObject) && (
                        <ul>
                            {foundObject.map((url, index) => (
                                <li key={index}>
                                    <a href={url} target='#' >{url}</a> </li>
                            ))}
                        </ul>
                    )}</pre>
                ) : (<p> Object not found </p>)

                }
            </div>
        );
    }
}
