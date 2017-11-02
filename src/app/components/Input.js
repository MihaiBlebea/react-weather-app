const React = require('react');

class Input extends React.Component {
    constructor()
    {
        super();
        this.state = {
            message: null,
            style: {
                input: {
                    placeholder: 'Type here',
                },
                button: {
                    cta: 'Send'
                }
            }
        }
    }

    onHandleChange(e)
    {
        this.setState({
            message: e.target.value
        });
    }

    onButtonPress(e)
    {
        console.log('Pressed the button', this.state.message);
        this.clearInput();
        this.focusInput();
    }

    onKeyPress(e)
    {
        if(e.which === 13)
        {
            e.preventDefault();
            console.log('Pressed ENTER', this.state.message);
            this.clearInput();
        }
    }

    focusInput()
    {
        this.refs.inputRef.focus();
    }

    clearInput()
    {
        this.refs.inputRef.value = '';
    }

    render() {
        return (
            <div className="input-group">
                <input id="user-message" onChange={(event)=> this.onHandleChange(event)}
                                         onKeyPress={(event)=> this.onKeyPress(event)}
                                         tabIndex="0"
                                         type="text"
                                         className="form-control"
                                         placeholder={this.state.style.input.placeholder}
                                         ref='inputRef'/>
                <span className="input-group-btn">
                    <button id="send-button" onClick={(event)=> this.onButtonPress(event)}
                                             className="btn btn-primary"
                                             type="button">{this.state.style.button.cta}</button>
                </span>
            </div>
        );
    }
}

module.exports = Input;
