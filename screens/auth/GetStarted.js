import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'

const GetStarted = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />

            <View>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginText}>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signupButton}>
                    <Text>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    
    logo: {
        width: 250,
        height: 250
    },

    loginButton: {
        backgroundColor: '#a64d79',
        width: Dimensions.get('screen').width / 1.4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom: 7
    },

    signupButton: {
        borderColor: '#a64d79',
        width: Dimensions.get('screen').width / 1.4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },

    loginText: {
        color: '#fff'
    }
})
