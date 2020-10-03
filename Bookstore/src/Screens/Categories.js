import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;

const Categories = (props) => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <LinearGradient
                colors={['#FF8C00', '#FF8C00']}
                style={{ height: "10%" }}
            >
                <View style={{ flexDirection: 'row', marginTop: "4%", marginBottom: 20 }}>
                    <View style={styles.divider} />
                    <View style={styles.title}>
                        <Text style={{ fontSize: 25, color: "#2D3436", fontWeight: 'bold' }}> Book <Text style={{ fontWeight: 'bold', color: "white" }}>Categories</Text></Text>
                    </View>
                    <View style={styles.divider} />
                </View>
            </LinearGradient>



            <ScrollView>

                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../Screens/Images/funny.jpg')}
                        style={styles.Imagee_left}
                        resizeMode="stretch"
                    />
                    <Image
                        source={require('../Screens/Images/drama.jpg')}
                        resizeMode="stretch"
                        style={styles.Imagee_right}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 30, marginLeft:screen_width/8 }}>Funny</Text>
                    <Text style={{ fontSize: 30, marginLeft: screen_width/3 }}>Drama</Text>
                </View>


                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../Screens/Images/romantic.jpg')}
                        style={styles.Imagee_left}
                        resizeMode="stretch"
                    />
                    <Image
                        source={require('../Screens/Images/horror.jpg')}
                        resizeMode="stretch"
                        style={styles.Imagee_right}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 30, marginLeft: screen_width/10 }}>Romantic</Text>
                    <Text style={{ fontSize: 30, marginLeft: screen_width/4.5  }}>Horror</Text>
                </View>


                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../Screens/Images/action.jpg')}
                        style={styles.Imagee_left}
                        resizeMode="stretch"
                    />

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 30, marginLeft: screen_width/8 }}>Action</Text>
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: 50
    }, slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    Imagee_left: {
        height: screen_height/3,
        width: screen_width/2,
        marginTop: 5,
        borderRadius: 8,
    },
    Imagee_right: {
        marginLeft: 5,
        height: screen_height/3,
        width: screen_width/2,
        marginTop: 5,
        borderRadius: 8,
    },
    divider: {
        backgroundColor: "#2D3436",
        height: 1,
        flex: 1,
        alignSelf: 'center'
    },
    title: {
        flexDirection: "row",
        fontWeight: "800",
        color: "#2D3436",
        paddingHorizontal: 30
    },
    mycard: {
        margin: 3,
        marginTop: 10
    }
})
export default Categories;
