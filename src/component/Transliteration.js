import React from 'react'
import TextBox from './TextBox/TextBox'
import ActionButton from './ActionButton/ActionButton'
import TranslitModel from './../model/TranslitModel'

class Transliteration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Value:     "",
            result:    " ",
        }
        this.onPress = this.onPress.bind(this)

    }

    onPress = (label) => {
        const text = String(document.getElementById("text").value)
        this.setState({
            result:     TranslitModel(text)
        })
    }

    render() {
        return (
            <div className="Transliteration">
                <TextBox label="Text: " id="text" value={this.state.Value}></TextBox>
                <ActionButton label="Transliterate" action={this.onPress}></ActionButton>
                <h1>Transliteration: {this.state.result}</h1>
            </div>
        )
    }
}

export default Transliteration;
