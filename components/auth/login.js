import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { TextInput, Button, Portal, Dialog, Paragraph, Provider } from 'react-native-paper'


const Login = (props) => {
    console.log("PROPS: ", props)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('Error');
    const [message, setMessage] = useState('');
    const [loggedin, setLoggedIn] = useState(false);

    const onSignIn = async () => {
        const headers = { "Content-type": "application/json; charset=UTF-8" }
        const data = { email: email, password: password }
        const jsondata = JSON.stringify(data)
        const response = await fetch('http://127.0.0.1:8000/api/login/', { method: 'POST', body: jsondata, headers: headers })
        const res = await response.json()
        console.log(res)

        if (res.errCode === 1) {
            setVisible(true);
            setTitle('Error')
            setMessage(res.errMsg)
        } else {
            setVisible(true);
            setTitle('Success')
            setMessage(res.errMsg)
            setLoggedIn(true)
        }
    }

    const redirectUser = () => {
        setEmail('')
        setPassword('')
        setVisible(false)
        if (loggedin) {
            props.navigation.navigate('Dashboard')
        }
    }

    return (
        <Provider>
            <View style={styles.container}>
                <Portal>
                    <Dialog visible={visible}>
                        <Dialog.Title>{title}</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>{message}</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={redirectUser}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <View style={styles.loginform}>
                    <TextInput theme={{
                        colors: {
                            placeholder: '#5b5c5d', text: '#5b5c5d', primary: '#5b5c5d',
                            underlineColor: '#5b5c5d ', background: '#fff'
                        }
                    }} mode="outlined" label="User Email" placeholder='Email' onChangeText={(email) => setEmail(email)} value={email} right={<TextInput.Icon color="#5b5c5d" name="email" />} />
                    <TextInput theme={{
                        colors: {
                            placeholder: '#5b5c5d', text: '#5b5c5d', primary: '#5b5c5d',
                            underlineColor: '#5b5c5d ', background: '#fff'
                        }
                    }} mode="outlined" label="User Password" secureTextEntry={true} placeholder='Password' onChangeText={(password) => setPassword(password)} value={password} right={<TextInput.Icon color="#5b5c5d" name="eye" />} />

                    <Button style={styles.signin_btn} children="Sign In" mode="contained" color="#ed13cf" onPress={() => onSignIn()} />
                </View>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: '#fce6f9',
    },
    loginform: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '40%',
        width: '80%',
        borderStyle: 'solid',
        borderColor: '#fff',
        borderRadius: 10,
        padding: 5,
        marginTop: '20%',
        alignSelf: 'center',
    },

    signin_btn: {
        paddingVertical: 5,
    }
})

export default Login;