import React from "react";

class StartPageButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    styleBtn = {
        color: this.props.color,
        background:  'no-repeat right 10px',
        backgroundImage: this.props.imageUrl? 'url(../img/magnifier.svg)': null,
        backgroundSize: 'auto 80%',
        backgroundColor: this.props.backgroudColor,
        padding: "20px 50px 20px 80px",
        borderRadius: '0 50px 50px 0',
        fontSize: '25px',
        width: this.props.imageUrl ? '50%' : '30%',
        cursor: 'pointer',
        textDecoration: 'none'

    }

    onMouseOver() {
        this.setState({
            // state: {...this.state},
            text: this.props.text1
        })
    }

    onMouseLeave() {
        this.setState({
            // state: {...this.state},
            text: this.props.text
        })
    }

    render() {
        return (
            <div
                style={this.styleBtn}
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
            >
                <div>{this.state.text}</div>
            </div>
        );
    }

}

export default StartPageButton;
