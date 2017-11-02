const React = require('react');
const Card = require('./Card.js');

class Cards extends React.Component {

    render()
    {
        return (
            <div className="card-container">
                {this.props.weather.daily.data.map((day, index)=> {
                    return <Card key={index} day={day}/>
                })}
            </div>
        );
    }
}

module.exports = Cards;
