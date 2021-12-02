import AsyncStorage from "@react-native-async-storage/async-storage"

export const Init = () => {
    return async dispatch => {
        let token = await AsyncStorage.getItem('token')

        if (token !== null) {
            dispatch({
                type: 'LOGIN',
                authToken: token
            })
        }
    }
}

export const LoginAction = (email, password) => {
    return async dispatch => {
        let token = null

        if (email === 'firas' && password === '123456') {
            token = email + password
            await AsyncStorage.setItem('token', token)
        }
        else
            alert('Wrong creds')

        dispatch({
            type: 'LOGIN',
            authToken: token
        })
    }
}

export const LogoutAction = () => {
    return async dispatch => {
        await AsyncStorage.clear()
        dispatch ({
            type: 'LOGOUT'
        })
    }
}