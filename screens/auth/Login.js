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
import { useDispatch } from 'react-redux'
import { LoginAction } from '../../store/actions'

const Login = ({ navigation }) => {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const dispatch = useDispatch()

    const submit = () => {
        dispatch(LoginAction(email, password))
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <LottieView
                        style={styles.lottieImage}
                        source={require('../../assets/lottie/login.json')}
                        autoPlay
                        loop
                    />

                    <View style={styles.innerInputs}>
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
                        <TouchableOpacity style={styles.loginButton} onPress={submit}>
                            <Text style={styles.loginText}>Login</Text>
                        </TouchableOpacity>
                        <Text>
                            Don't have an account?
                        </Text>
                        <TouchableOpacity style={styles.signupButton} onPress={() => { navigation.navigate('Signup') }}>
                            <Text style={styles.signupText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

    )
}

export default Login

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
        justifyContent: 'space-around',
    },

    innerInputs: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        width: Dimensions.get('screen').width / 1.2,
        height: 50,
        paddingLeft: 10,
        marginBottom: 15,
        borderWidth: 1,
        // borderColor: '#a64d79',
        borderRadius: 5
    },

    loginButton: {
        backgroundColor: '#a64d79',
        width: Dimensions.get('screen').width / 2,
        height: 40,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },

    signupButton: {
        marginTop: 10
    },

    loginText: {
        color: '#fff'
    },

    signupText: {
        color: '#a64d79',
        textDecorationLine: 'underline',
        textDecorationColor: '#a64d79'
    },

    lottieImage: {
        width: Dimensions.get('screen').width / 1.5
    }
})
