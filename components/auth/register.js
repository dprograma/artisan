import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import { TextInput, Button, Portal, Dialog, Paragraph, Provider } from 'react-native-paper'
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

// load local modules
import { createUser } from '../redux/actions/registerAction'

const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirmPass] = useState('')
    const [name, setName] = useState('')
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('Error');
    const [message, setMessage] = useState('');

    const onSignUp = async () => {
        const headers = { "Content-type": "application/json; charset=UTF-8" }
        const data = { email: email, password: password, username: name }
        const jsondata = JSON.stringify(data)
        const payload = { method: 'POST', body: jsondata, headers: headers }
        const res = await props.createUser(payload)
        console.log("DISPATCH: ", res)

        if (res.errCode === 1) {
            setVisible(true);
            setTitle('Error')
            setMessage(res.errMsg)
        } else {
            setVisible(true);
            setTitle('Success')
            setMessage(res.errMsg)
        }
    }

    const clearForm = () => {
        setEmail('')
        setPassword('')
        setConfirmPass('')
        setName('')
        setVisible(false)
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
                            <Button onPress={clearForm}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <View style={styles.registerform}>
                    <TextInput theme={{
                        colors: {
                            placeholder: '#5b5c5d ', text: '#5b5c5d', primary: '#5b5c5d',
                            underlineColor: '#5b5c5d ', background: '#fff'
                        }
                    }} placeholder='Username' onChangeText={(name) => setName(name)} value={name} mode="outlined"
                        label="User Name"
                        right={<TextInput.Icon color="#5b5c5d" name="account" />} />
                    <TextInput theme={{
                        colors: {
                            placeholder: '#5b5c5d ', text: '#5b5c5d', primary: '#5b5c5d',
                            underlineColor: '#5b5c5d ', background: '#fff'
                        }
                    }} mode="outlined" label="User Email" placeholder='Email' onChangeText={(email) => setEmail(email)} value={email} right={<TextInput.Icon color="#5b5c5d" name="email" />} />
                    <TextInput theme={{
                        colors: {
                            placeholder: '#5b5c5d ', text: '#5b5c5d', primary: '#5b5c5d',
                            underlineColor: '#5b5c5d ', background: '#fff'
                        }
                    }} mode="outlined" label="User Password" secureTextEntry={true} placeholder='Password' onChangeText={(password) => setPassword(password)} value={password} right={<TextInput.Icon color="#5b5c5d" name="eye" />} />
                    <TextInput theme={{
                        colors: {
                            placeholder: '#5b5c5d ', text: '#5b5c5d', primary: '#5b5c5d',
                            underlineColor: '#5b5c5d ', background: '#fff'
                        }
                    }} mode="outlined" label="Re-enter Password" secureTextEntry={true} placeholder='Confirm password' onChangeText={(confirm) => setConfirmPass(confirm)} value={confirm} right={<TextInput.Icon color="#5b5c5d" name="eye" />} />

                    <Button style={styles.signup_btn} children="Sign Up" mode="contained" color="#ed13cf" onPress={() => onSignUp()} />
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
    registerform: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '60%',
        width: '80%',
        borderStyle: 'solid',
        borderColor: '#fff',
        borderRadius: 10,
        padding: 5,
        marginTop: '20%',
        alignSelf: 'center',
    },

    signup_btn: {
        paddingVertical: 5,
    }
})

const mapDispatchToProps = (dispatch) => bindActionCreators({createUser}, dispatch)

export default connect(null, mapDispatchToProps)(Register);