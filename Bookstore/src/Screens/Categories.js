import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Categories = (props) => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <LinearGradient
                colors={['#FF8C00', '#FF8C00']}
                style={{ height: "20%" }}
            >
                <View style={{ flexDirection: 'row', marginTop: 70, marginBottom: 20 }}>
                    <View style={styles.divider} />
                    <View style={styles.title}>
                        <Text style={{ fontSize: 38, color: "#2D3436" }}> Book <Text style={{ fontWeight: "300", color: "white" }}>Categories</Text></Text>
                    </View>
                    <View style={styles.divider} />
                </View>
            </LinearGradient>



            <ScrollView>

                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/funny.jpg')}
                        style={styles.Imagee}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../assets/drama.jpg')}
                        resizeMode="contain"
                        style={styles.Imagee}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 30, fontStyle: 'italic', marginLeft: 50 }}>Funny</Text>
                    <Text style={{ fontSize: 30, fontStyle: 'italic', marginLeft: 150 }}>Drama</Text>
                </View>


                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/romantic.jpg')}
                        style={styles.Imagee}
                        resizeMode="contain"
                    />
                    <Image
                        source={require('../assets/horror.jpg')}
                        resizeMode="contain"
                        style={styles.Imagee}
                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 30, fontStyle: 'italic', marginLeft: 50 }}>Romantic</Text>
                    <Text style={{ fontSize: 30, fontStyle: 'italic', marginLeft: 100 }}>Horror</Text>
                </View>


                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../assets/action.jpg')}
                        style={styles.Imagee}
                        resizeMode="contain"
                    />

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 30, fontStyle: 'italic', marginLeft: 50 }}>Action</Text>
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
    Imagee: {
        height: 250,
        width: 210,
        marginTop: 20,
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
