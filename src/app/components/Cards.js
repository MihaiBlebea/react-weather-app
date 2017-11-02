const React = require('react');
const Card = require('./Card.js');

class Cards extends React.Component {

    render()
    {
        return (
            <div className="card-container">

                <Card day={this.props.weather.daily}/>
            </div>
        );
    }
}

module.exports = Cards;
