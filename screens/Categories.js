import React from 'react'
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native'
import { CategoryData } from '../dummyData/data';

const Item = ({ title, image }) => (
    <TouchableOpacity style={styles.card}>
        <View style={styles.cardImgWrapper}>
            <Image
                source={image}
                resizeMode="cover"
                style={styles.cardImg}
            />
            <View style={{
                backgroundColor: 'rgba(0,0,0,0.3)',
                width: '100%',
                height: '100%',
                position: 'absolute',
                borderRadius: 10
            }}>

            </View>
            <View style={styles.categoryTitle}>
                <Text style={{ color: 'white', fontSize: 25 }}>{title}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

const Categories = () => {

    const renderItem = ({ item }) => <Item title={item.title} image={item.image} />;

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={CategoryData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.cardsWrapper}
            />
        </SafeAreaView>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoryTitle: {
        flexDirection: 'row',
        position: 'absolute'
    },
    cardImg: {
        height: 100,
        width: '100%',
        resizeMode: 'cover',
        alignSelf: 'center',
        borderRadius: 10,
    }
})
