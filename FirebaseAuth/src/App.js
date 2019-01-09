import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAZBuPzCdrG_P_nqEo9DA1j1XUzKFVKPPo",
            authDomain: "authentication-cb49f.firebaseapp.com",
            databaseURL: "https://authentication-cb49f.firebaseio.com",
            projectId: "authentication-cb49f",
            storageBucket: "authentication-cb49f.appspot.com",
            messagingSenderId: "738381380185"
        });
    }

    render () {
        return (
            <View>
                <Header headerText="Firebase Auth App" />
                <LoginForm />
            </View>
        );
    }   

}

export default App;