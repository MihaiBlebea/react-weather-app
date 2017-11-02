const React = require('react');

class Card extends React.Component {
    render()
    {
        return (
            <div className="card" style={{width: 400 + 'px', height: 400 + 'px'}}>
                <img className="card-img-top" src="http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg" alt="Card image cap"/>
                <div className="card-block">
                    <h4 className="card-title">Card title</h4>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

module.exports = Card;
