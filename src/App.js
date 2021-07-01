//import './App.css';
import React, {Component} from "react";
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
        characters: []
    }

    render() {
        const characters = this.state.characters;
        return (
            <div className="App">
                <Table charactersData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }

    removeCharacter = (index) => {
        this.setState({
            characters: this.state.characters.filter((c, i) => {
                return i !== index;
            })
        })
    }

    handleSubmit = (character) => {
        this.setState({
            characters: [...this.state.characters, character]
        })
    }

}

export default App;
