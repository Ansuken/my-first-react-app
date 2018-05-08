import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class MainForm extends Component {

    constructor(props) {
        super(props);
        this.state = {firstName: ''};
    }
    handleChange = (event) => {
        this.setState({firstName: event.target.value});
    };

    handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.firstName);
        event.preventDefault();
      }

    render() {
        return(
            <React.Fragment>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="firstName">Insert your name: </Label>
                        <Input type="firstName" 
                            name="firstName" 
                            id="firstName" 
                            value={this.state.firstName} 
                            placeholder="Firstname" 
                            onChange={this.handleChange}/>
                    </FormGroup>
                    <Button color="success">Submit</Button>
                </Form>
                <div>Hello {this.state.firstName}</div>
            </React.Fragment>
        );
    }
}

export default MainForm;