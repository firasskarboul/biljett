import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import LottieView from 'lottie-react-native'

const Signup = ({ navigation }) => {

    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordConfirmation, setPasswordConfirmation] = useState(null)
    const [keyboardIsOpen, setKeyboardIsOpen] = useState(false)

    Keyboard.addListener("keyboardDidShow", () => {
        setKeyboardIsOpen(true);
    });

    Keyboard.addListener("keyboardDidHide", () => {
        setKeyboardIsOpen(false);
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    {
                        !keyboardIsOpen ?
                            <LottieView
                                style={styles.lottieImage}
                                source={require('../../assets/lottie/signup.json')}
                                autoPlay
                                loop
                            />
                            : null
                    }

                    <View style={styles.innerInputs}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setFirstName}
                            value={firstName}
                            placeholder="First Name"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setLastName}
                            value={lastName}
                            placeholder="Last Name"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                            keyboardType={'email-address'}
                            placeholder="Email"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setPassword}
                            value={password}
                            placeholder="Password"
                            secureTextEntry
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setPasswordConfirmation}
                            value={passwordConfirmation}
                            placeholder="Confirm Password"
                            secureTextEntry
                        />
                        <TouchableOpacity style={styles.signupButton}>
                            <Text style={styles.signupText}>Sign up</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row' }}>
                            <Text>
                                Already have an account?
                            </Text>
                            <TouchableOpacity style={styles.loginButton} onPress={() => { navigation.navigate('Login') }}>
                                <Text style={styles.loginText}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    inner: {
        padding: 24,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    innerInputs: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        width: Dimensions.get('screen').width / 1.2,
        height: 50,
        paddingLeft: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 5
    },

    signupButton: {
        backgroundColor: '#a64d79',
        width: Dimensions.get('screen').width / 2,
        height: 40,
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },

    loginButton: {
        marginLeft: 5
    },

    signupText: {
        color: '#fff'
    },

    loginText: {
        color: '#a64d79',
        textDecorationLine: 'underline',
        textDecorationColor: '#a64d79'
    },

    lottieImage: {
        width: Dimensions.get('screen').width / 1.5
    }
})
