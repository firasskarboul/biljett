import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CustomSwitch = ({
    selectionMode,
    option1,
    option2,
    option3,
    onSelectSwitch
}) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode)

    const updateSwitchData = (value) => {
        setSelectionMode(value)
        onSelectSwitch(value)
    }

    return (
        <View style={styles.switchStyle}>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => updateSwitchData(1)}
                style={{
                    ...styles.switchButtonStyle,
                    backgroundColor: getSelectionMode == 1 ? '#a64d79' : '#dfe6e9'
                }}
            >
                <Text style={{
                    ...styles.switchTextButton,
                    color: getSelectionMode == 1 ? '#ecf0f1' : '#a64d79'
                }}>{option1}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={2}
                onPress={() => updateSwitchData(2)}
                style={{
                    ...styles.switchButtonStyle,
                    backgroundColor: getSelectionMode == 2 ? '#a64d79' : '#dfe6e9'
                }}
            >
                <Text style={{
                    ...styles.switchTextButton,
                    color: getSelectionMode == 2 ? '#ecf0f1' : '#a64d79'
                }}>{option2}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={3}
                onPress={() => updateSwitchData(3)}
                style={{
                    ...styles.switchButtonStyle,
                    backgroundColor: getSelectionMode == 3 ? '#a64d79' : '#dfe6e9'
                }}
            >
                <Text style={{
                    ...styles.switchTextButton,
                    color: getSelectionMode == 3 ? '#ecf0f1' : '#a64d79'
                }}>{option3}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomSwitch

const styles = StyleSheet.create({
    switchStyle: {
        width: '100%',
        height: 44,
        backgroundColor: '#dfe6e9',
        borderRadius: 10,
        borderColor: '#AD40AF',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    switchButtonStyle: {
        flex: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    switchTextButton: {
        fontSize: 14,
        fontFamily: 'Roboto_500Medium'
    }
})
