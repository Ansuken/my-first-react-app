import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './form.css';

class MainForm extends Component {

    constructor(props) {
        super(props);
        this.state = {firstName: '', lastName: ''};
    }
    handleFirstNameChange = (event) => {
        this.setState({firstName: event.target.value});
    };
    handleLastNameChange = (event) => {
        this.setState({lastName: event.target.value});
    };

    handleSubmit = (event) => {
        if ( this.state.firstName && this.state.lastName ) {
            alert('A name was submitted: ' + this.state.firstName + ' ' + this.state.lastName);
        } else {
            alert('You are a piece of shit. You forget some fields!');
        }
        event.preventDefault();
    }

    resetForm = () => {
        this.setState({lastName: '', firstName: ''});
    }

    render() {
        return(
            <React.Fragment>
                <div className="result">
                    Hello {
                        this.state.firstName || this.state.lastName 
                            ? this.state.firstName + ' ' + this.state.lastName 
                            : '...'
                        }
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="firstName">Insert your name: </Label>
                        <Input type="firstName" 
                            name="firstName" 
                            id="firstName" 
                            value={this.state.firstName}
                            onChange={this.handleFirstNameChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Insert your last name: </Label>
                        <Input type="lastName" 
                            name="lastName" 
                            id="lastName" 
                            value={this.state.lastName}
                            onChange={this.handleLastNameChange}/>
                    </FormGroup>
                    <div className="row">
                        <div className="col-6">
                            <Button 
                                disabled={!this.state.firstName || !this.state.lastName} 
                                color="success">
                                    Submit
                            </Button>
                        </div>
                        <div className="col-6 text-right">
                            <Button 
                                outline 
                                color="danger" 
                                onClick={this.resetForm}>
                                    Reset
                            </Button>
                        </div>
                    </div>
                </Form>
            </React.Fragment>
        );
    }
}

export default MainForm;