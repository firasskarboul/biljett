import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

const EventDetails = () => {
    return (
        <View style={styles.container}>
            <Text>HELLO</Text>
        </View>
    )
}

export default EventDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#ecf0f1',
    },
})
