import React from 'react';
import { Text, Alert, Button, View, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';
import { TextInput } from 'react-native-paper';
import Home from './Home';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            username: '',
            password: '',

        }
    }



    onLogin() {
        const { username, password } = this.state;
        let formIsValid = true;
        let errors = {};

        if (username == "") {
            formIsValid = false;
            errors[username] = "Please enter email";

        } else if (password == "") {
            formIsValid = false;
            errors[password] = "Please enter pswrd";

        } else {
            this.props.navigation.navigate('Welcome');
        }

        if (typeof (username) !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.username)) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";

            }
        }
        else if (typeof (password) !== "undefined") {
            var exp = new RegExp('(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$');
            if (!exp.test(this.state.password)) {
                formIsValid = false;
                errors["password"] = "*Please enter valid password.";

            }
        }
        else {
            alert('Please enter correct pattern');

        }

    }



    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.inputext}>Sample Login Form</Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    label='Email'
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    label='Password'
                    secureTextEntry={true}
                    style={styles.input}
                />

                <Button
                    title='Login'
                    style={styles.input}
                    onPress={this.onLogin.bind(this)}


                />

            </View>
        );

    }
}

export default Login;





const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00FFFF',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    inputext: {
        width: 200,
        height: 44,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});
