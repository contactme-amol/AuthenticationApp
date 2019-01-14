import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, CustomButton, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component {
    state  = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyAZBuPzCdrG_P_nqEo9DA1j1XUzKFVKPPo",
            authDomain: "authentication-cb49f.firebaseapp.com",
            databaseURL: "https://authentication-cb49f.firebaseio.com",
            projectId: "authentication-cb49f",
            storageBucket: "authentication-cb49f.appspot.com",
            messagingSenderId: "738381380185"
        });
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false});
            }
        });

        //this.checkLoginStatusOfUser();
    }

    checkLoginStatusOfUser() {
        
    }

    renderContentOnLoggedInStatus() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View>
                        <CustomButton
                            onPress={this.onClickLogOutButton.bind(this)}
                            title={'Logout'}
                        />
                    </View>

                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size = {'large'} />;

        }
    } 

    onClickLogOutButton() {
        firebase.auth().signOut();
    }

    render () {
        return (
            <View>
                <Header headerText="Firebase Auth App" />
                {this.renderContentOnLoggedInStatus()}
            </View>
        );
    }   

}

export default App;