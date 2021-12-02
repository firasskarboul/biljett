import React from 'react'
import { FlatList, StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native'
import { sliderData } from '../dummyData/data';

const Item = ({ title, image }) => (
    <TouchableOpacity style={styles.card}>
        <View style={styles.cardImgWrapper}>
            <Image
                source={image}
                resizeMode="cover"
                style={styles.cardImg}
            />
        </View>

        <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDetails}>Leadership conference 2021 Edition for every
                one who wants learn how to manage companies and developers with scum methodology.</Text>
            <Text>Price : Starts from 50$</Text>
        </View>
    </TouchableOpacity>
);

const CategoryEvents = () => {

    const renderItem = ({ item }) => <Item title={item.title} image={item.image} />;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={sliderData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.cardsWrapper}
            />
        </SafeAreaView>
    )
}

export default CategoryEvents

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#ecf0f1',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 32,
    },
    card: {
        marginVertical: 10,
        paddingHorizontal: 10,
        shadowColor: '#bdc3c7',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    cardsWrapper: {
        width: '100%',
        alignSelf: 'center',
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: 200,
        width: '100%',
        resizeMode: 'cover',
        alignSelf: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        justifyContent: 'space-between',
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#ecf0f1',
        height: 130,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 19
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
})
