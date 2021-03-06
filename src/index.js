import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    // constructor(props) {
    //     super(props);

    //     //this mean at the beg. we dont know number value of latitude
    //     this.state = { lat: null, errorMessage: "" };
    // }

    //this line of code replaces entire constructor function AND this.state statement
    state = { lat: null, errorMessage: ""};


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message  })
        );        
    }


    //helper function (instead of having conditional login inside render)
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
 
        return<Spinner message="Please accept location request" />;
    }


    render () {
        return (
            <div className= "border red">
                {this.renderContent()}
            </div>
        );  
    }
}


ReactDOM.render(
<App />,
document.getElementById("root")
);