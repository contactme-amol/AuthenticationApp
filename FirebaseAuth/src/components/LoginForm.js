import React, { Component } from 'react';
import { View } from 'react-native';
import { 
    CustomButton, 
    Card, 
    CardSection 
} from './common';

class LoginForm extends Component {

    render() {
        return (
            <Card>
                <CardSection />
                <CardSection />
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