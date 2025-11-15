import React from "react";

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: 'red',
            show: true
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: 'yellow' });
        }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('after update');

    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("in getSnapshotBeforeUpdate");
        return null;
    }

    changeColor = () => {
        this.setState({ favoriteColor: "blue" });
    };
    deleteChild = () => {
    alert("click");
    this.setState({ show: false });
  };


    render() {
        return (
            <>
                <h1>{this.state.favoriteColor}</h1>
                <button onClick={this.changeColor}>Change Color</button>
                {this.state.show && <Child onDelete={this.deleteChild} />}
            </>


        )
    }

};

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phrase: "Hello World!"
        }
    }
    componentWillUnmount() {
      alert('unmounted');  
    }
    
    render() {
        return (
            <>
                <h1>{this.state.phrase}</h1>
                <button onClick={this.props.onDelete}>Delete Header</button>
            </>
    
    
        );
    }
}

export default Color;
