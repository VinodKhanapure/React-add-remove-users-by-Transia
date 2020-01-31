import React, { Component } from "react";

class Form extends Component {

    constructor(props) {

        super(props)

        this.initialState = {
            name: '',
            job: ''
        }

        this.state = this.initialState;

    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    // handleSubmit(e) {
    //     e.preventDefault()

    //     console.log(e.target.name.value)

    // }

    submitForm = (e) => {
        e.preventDefault();
        console.log("state", this.state)
        this.props.handleSubmit(this.state);
        this.setState(this.initialState)

    }

    render() {
        const { name, job } = this.state
        return (
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input type="text" id="job" name="job" value={job} onChange={this.handleChange} />
                <input type="submit" value="submit" onClick={this.submitForm}></input>
            </form>
        )
    }





}

export default Form