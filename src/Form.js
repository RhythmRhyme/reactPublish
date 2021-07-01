import React, {Component} from "react";

class Form extends Component {
    initialState = {
        name: '',
        job: ''
    }
    state = this.initialState;

    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input name='name' value={this.state.name} onChange={this.handleChange}/>
                <label htmlFor="job">Job</label>
                <input name='job' value={this.state.job} onChange={this.handleChange}/>
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }

}

export default Form;