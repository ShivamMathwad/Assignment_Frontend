import React, { Component } from 'react';
import axios from 'axios';
import classes from './Form.module.css';

class Form extends Component {
    state = {
        name: "",
        date: "",
        email: "",
        phone: "",
        validationNote: null
    };


    validateAge(dateString) {
        if (dateString !== "") {
            const today = new Date();
            const birthDate = new Date(dateString);
            const age = today.getFullYear() - birthDate.getFullYear();

            if (age < 18 || age > 100) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }

    nameChangedHandler = (event) => {
        let name = event.target.value;
        this.setState({ name: name });
    }

    dateChangedHandler = (event) => {
        let date = event.target.value;
        this.setState({ date: date });
    }

    emailChangedHandler = (event) => {
        let email = event.target.value;
        this.setState({ email: email });
    }

    phoneChangedHandler = (event) => {
        let phone = event.target.value;
        this.setState({ phone: phone });
    }

    submitForm = async () => {
        const name = this.state.name;
        const dob = this.state.date;
        const email = this.state.email;
        const phone = this.state.phone;
        let flag = true;

        if (name === null || name === "" || name.length < 2) {
            flag = false;
        }
        if (email === null || email === "" || email.length < 11 || !email.includes('.') || !email.includes('@')) {
            flag = false;
        }
        if (!this.validateAge(dob)) {
            flag = false;
        }

        if (flag) {
            const data = {
                name: name,
                dob: dob,
                email: email,
                phone: phone
            };

            let response = (await axios.post('http://localhost:8080/', data)).data

            if (response.Result === "Fail")
                this.setState({ validationNote: response.Error })
            else
                this.props.history.push("/posts");

        } else {
            this.setState({ validationNote: "Invalid credentials!" });
        }
    }

    render() {

        return (

            <div className={classes.Form}>
                <h1>Add Details</h1>
                <input type="text" placeholder="Name" onChange={this.nameChangedHandler} value={this.state.name} />
                <input type="date" onChange={this.dateChangedHandler} value={this.state.date} />
                <input type="email" placeholder="Email" onChange={this.emailChangedHandler} value={this.state.email} />
                <input type="number" placeholder="Phone Number" onChange={this.phoneChangedHandler} value={this.state.phone} />
                <button onClick={this.submitForm}>Submit</button>
                <p style={{ color: 'red', backgroundColor: '#3e3d3d' }}>{this.state.validationNote}</p>
            </div>

        );
    }
}

export default Form;