import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import { sliderData, CategoryData } from '../dummyData/data';
import BannerSlider from '../components/home/BannerSlider';
import CustomSwitch from '../components/home/CustomSwitch';

const Home = () => {

    const [eventsTab, setEventsTab] = useState(1)

    const renderBanner = ({ item, index }) => {
        return <BannerSlider data={item} />
    }

    const onSelectSwitch = (value) => {
        setEventsTab(value)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.screenStyle}>
                <View style={styles.headerStyle}>
                    <Text style={styles.headerText}>Hello Firas</Text>
                    <Image
                        source={require('../assets/projet-photos/user-profile.jpg')}
                        style={styles.userProfile}
                    />
                </View>

                <View style={styles.searchStyle}>
                    <Feather name="search" size={20} color="#C6C6C6" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder={'Search'}
                    />
                </View>

                <View style={styles.upComingStyle}>
                    <Text style={styles.headerText}>
                        Upcoming Events
                    </Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={styles.seeAllStyle}>See all</Text>
                    </TouchableOpacity>
                </View>

                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={sliderData}
                    renderItem={renderBanner}
                    sliderWidth={Dimensions.get('window').width - 40}
                    itemWidth={300}
                    loop
                    autoplay
                    autoplayDelay={5000}
                />

                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <Ionicons name={CategoryData[0].icon} size={35} color="#a64d79" />
                        </View>
                        <Text style={styles.caregoryBtnText}>{CategoryData[0].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <Ionicons name={CategoryData[1].icon} size={35} color="#a64d79" />
                        </View>
                        <Text style={styles.caregoryBtnText}>{CategoryData[1].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <MaterialCommunityIcons name={CategoryData[2].icon} size={35} color="#a64d79" />
                        </View>
                        <Text style={styles.caregoryBtnText}>{CategoryData[2].title}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.categoryContainer}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <MaterialIcons name={CategoryData[3].icon} size={35} color="#a64d79" />
                        </View>
                        <Text style={styles.caregoryBtnText}>{CategoryData[3].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <MaterialIcons name={CategoryData[4].icon} size={35} color="#a64d79" />
                        </View>
                        <Text style={styles.caregoryBtnText}>{CategoryData[4].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <MaterialIcons name="expand-more" size={35} color="#a64d79" />
                        </View>
                        <Text style={styles.caregoryBtnText}>More</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.customSwitchStyle}>
                    <CustomSwitch
                        selectionMode={1}
                        option1="For you"
                        option2="Today"
                        option3="This week-end"
                        onSelectSwitch={onSelectSwitch}
                    />
                </View>

                <View style={styles.cardsWrapper}>
                    
                {eventsTab == 1 && 
                    <TouchableOpacity style={styles.card}>
                        <View style={styles.cardImgWrapper}>
                            <Image
                                source={require('../assets/projet-photos/event_flyer.jpg')}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View>

                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>Leadership conference 2021 Edition</Text>
                            <Text style={styles.cardDetails}>Leadership conference 2021 Edition for every 
                            one who wants learn how to manage companies and developers with scum methodology.</Text>
                        </View>
                    </TouchableOpacity>
                }
                    {eventsTab == 2 && <Text style={styles.headerText}>Today</Text>}
                    {eventsTab == 3 && <Text style={styles.headerText}>This week-end</Text>}
                    
                </View>

                
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1'
    },
    screenStyle: {
        padding: 20
    },

    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 26,
        fontFamily: 'Roboto_500Medium'
    },
    userProfile: {
        width: 60,
        height: 60,
        borderRadius: 60
    },

    searchStyle: {
        flexDirection: 'row',
        borderColor: '#C6C6C6',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    searchIcon: {
        marginRight: 5
    },
    searchInput: {

    },

    upComingStyle: {
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    seeAllStyle: {
        color: '#a64d79'
    },

    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: 'rgba(166, 77, 121, 0.1)',
        borderRadius: 70
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center'
    },
    caregoryBtnText: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#a64d79'
    },

    customSwitchStyle: {
        marginVertical: 20
    },


    cardsWrapper: {
        width: '100%',
        alignSelf: 'center',
        marginBottom: 20
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#bdc3c7',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#ecf0f1',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
})
