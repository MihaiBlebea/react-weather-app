const React = require('react');
const image = require('./../images.js');
const moment = require('moment');

class Card extends React.Component {
    render()
    {
        return (
            <div className="card" style={{width: 600 + 'px', height: 600 + 'px', margin: 10 + 'px', padding: 0}}>
                <img className="card-img-top" src={image.display(this.props.day.icon)} alt="Card image cap"/>
                <div className="card-block" style={{ padding: 10 + 'px'}}>
                    <div className="row">
                        <div className="col-md-6" style={{borderRight: '1px solid grey'}}>
                            <p className="card-text">{this.props.day.summary}</p>
                        </div>
                        <div className="col-md-6">
                            <ul>
                                <li>{moment.unix(this.props.day.data[0].time).format("DD MMM YYYY hh:mm a")}</li>
                                <li>Max temp. {this.props.day.data[0].temperatureHigh}°C</li>
                                <li>Min temp. {this.props.day.data[0].temperatureLow}°C</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Card;
