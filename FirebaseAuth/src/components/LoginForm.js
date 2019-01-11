import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Input from './common/Input';
import firebase from 'firebase';
import { 
    CustomButton, 
    Card, 
    CardSection,
    Spinner 
} from './common';

class LoginForm extends Component {
state = {email: '', password: '', error: '', loading: false};

    onLoginButtonPress() {
        console.log('Login button has been pressed');
        const { email, password } = this.state;
        this.setState({error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginSuccess() {
        //alert("Login has been successfully done");
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }
    onLoginFail() {
        this.setState({error: 'Authentication Failed', loading: false});
    }

    renderLoginButton() {
        if (this.state.loading) {
            return <Spinner size = "small" />;
        }

        return (
            <CustomButton 
                onPress = {this.onLoginButtonPress.bind(this)}
                title = {'Log In'} 
            />
        );
    }

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
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderLoginButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
export default LoginForm;