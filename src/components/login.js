import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import history from './history';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredUser: '',
            enteredPassword: '',
            errorMsg: ''
        }
    }

    validateCredentials = () => {
        if (this.state.enteredUser == 'ihfic-admin' && this.state.enteredPassword == 'ihficdev') {
            history.push('/home');
            this.setState({
                errorMsg: ''
            });
        } else {
            this.setState({
                errorMsg: 'Invalid credentials. Please try again!'
            });
        }
    }

    handleUserChange = (event) => {
        this.setState({
            enteredUser: event.target.value
        });
    }

    handlePWChange = (event) => {
        this.setState({
            enteredPassword: event.target.value
        });
    }

    render() {
        return(
            <div className='login-form'>
                {/*
                Heads up! The styles below are necessary for the correct render of this example.
                You can do same with CSS, the main idea is that all the elements up to the `Grid`
                below must have a height of 100%.
                */}
                <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                    height: 100%;
                }
                `}</style>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                    Log-in to IHFIC
                    </Header>
                    <Form size='large'>
                    <Segment stacked>
                        <Form.Input onChange={this.handleUserChange} fluid icon='user' iconPosition='left' placeholder='User Name' />
                        <Form.Input onChange={this.handlePWChange} fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
                        <Button onClick={this.validateCredentials} style={{backgroundColor: 'rgba(139, 204, 79)'}} fluid size='large'>
                        Login
                        </Button>
                        <p style={{fontSize: '1.33em'}}>{this.state.errorMsg}</p>
                    </Segment>
                    </Form>
                </Grid.Column>
                </Grid>
            </div>
        )
    }
  
}

export default LoginForm;