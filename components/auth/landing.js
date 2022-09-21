import React from 'react';
import { StyleSheet, View, Button, ImageBackground, StatusBar, SafeAreaView, Image, Platform } from 'react-native';

function Landing({ navigation }) {
    return (
        <SafeAreaView style={styles.ios}>
            <View style={styles.topview}>
                <ImageBackground source={require("../../assets/images/artisan_background.jpg")} resizeMode="cover" style={styles.bg_image}>
                    <View style={styles.outer}>
                        <Image style={styles.logo} source={require("../../assets/images/logo.png")} resizeMode="contain" />
                        <View style={styles.innerview}>
                            <Button title="Register" color="#ed13cf" style={styles.registerbutton} onPress={() => navigation.navigate('Register')} />

                            <Button title="Login" color="#0b498c" style={styles.loginbutton} onPress={() => navigation.navigate('Login')} />
                        </View>
                    </View>

                </ImageBackground>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    bg_image: {
        flex: 1,
        justifyContent: 'center',
    },

    innerview: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '30%',
        width: '80%',
        marginTop: '70%',
        alignSelf: 'center',
    },

    ios: {
        flex: 1,
        backgroundColor: "#fff",
    },

    logo: {
        width: '80%',
        height: '30%',
        alignSelf: 'center',
    },

    outer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '70%',
        width: '80%',
        alignSelf: 'center',
    },

    topview: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    },
});

export default Landing;