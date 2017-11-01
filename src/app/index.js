const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

class App extends React.Component {
    constructor()
    {
        super();

        axios.get('/api').then((response)=> {
            console.log("Got response");
            this.setState({
                weather: response.data
            });
        }).catch((err)=> {
            console.log(err);
        })

        this.state = {
            weather: null
        }
    }

    render()
    {
        return (
            <div>
                App
            </div>
        );
    }
}

ReactDOM.render(<App/>, window.document.getElementById('app'));
