import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { SharedElement } from 'react-navigation-shared-element'

const EventDetails = ({ route }) => {
    const { id, title, image } = route.params
    return (
        <View style={styles.container}>
            <View style={styles.cardImgWrapper}>
                <SharedElement id={`item.${image}.image`}>
                    <Image
                        source={image}
                        resizeMode="cover"
                        style={styles.cardImg}
                    />
                </SharedElement>
            </View>

            <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardDetails}>Leadership conference 2021 Edition for every
                    one who wants learn how to manage companies and developers with scum methodology.</Text>
                <View style={styles.priceTag}>
                    <Text style={styles.price}>Virage: 50 TND</Text>
                </View>
                <View style={styles.priceTag}>
                    <Text style={styles.price}>Pelouse: 120 TND</Text>
                </View>

            </View>
        </View>
    )
}

EventDetails.sharedElements = (route) => {
    const { image } = route.params
    return [
        {
            id: `item.${image}.image`,
            animation: 'move',
            resize: 'clip'
        }
    ]
}

export default EventDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#ecf0f1',
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: 230,
        width: '100%',
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    cardInfo: {
        flex: 2,
        paddingHorizontal: 10
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 28,
        alignSelf: 'center',
        marginBottom: 20
    },
    cardDetails: {
        fontSize: 17,
        marginBottom: 20,
        color: '#444',
    },
    priceTag: {
        borderWidth: 1,
        borderColor: '#6c5ce7',
        borderStyle: 'dashed',
        borderRadius: 50,
        backgroundColor: '#a29bfe',
        marginVertical: 15,
        width: Dimensions.get('screen').width / 1.1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    price: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '600',
        fontFamily: 'Roboto_500Medium'
    }
})
