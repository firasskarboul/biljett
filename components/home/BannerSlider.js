import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const BannerSlider = ({ data }) => {
    return (
        <View>
            <Image
                source={data.image}
                style={styles.banner}
            />
        </View>
    )
}

export default BannerSlider

const styles = StyleSheet.create({
    banner: {
        width: 300,
        height: 150,
        borderRadius: 10
    }
})
