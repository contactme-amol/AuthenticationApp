import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Input from './common/Input';
import { 
    CustomButton, 
    Card, 
    CardSection 
} from './common';

class LoginForm extends Component {
state = {email: '', password: ''};

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    placeholder = "user@example.com"
                    label = "Email"
                    value = {this.state.email}
                    onChangeText = {email => this.setState({ email })}
                     />
                </CardSection>
                <CardSection>
                <Input 
                    secureTextEntry
                    placeholder = "Password"
                    label = "Password"
                    value = {this.state.password}
                    onChangeText = {password => this.setState({ password })}
                     />
                </CardSection>
                <CardSection>
                    <CustomButton>
                        Log In
                    </CustomButton>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;