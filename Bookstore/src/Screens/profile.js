import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Title, Card, Button } from 'react-native-paper';
import { MaterialIcons, Entypo, FontAwesome5 } from '@expo/vector-icons';


const profile = (props) => {
    // const { name,  email, phone } = props.route.params.Item
    const OpenDial = () => {
        if (Platform.OS === 'android') {
            Linking.openURL("tel:01025478993")
        }
        else {
            Linking.openURL("telprompt:01025478993")
        }

    }
    return (
        <View style={styles.root}>
            <LinearGradient
                colors={['#FF8C00', '#FF8C00']}
                style={{ height: "20%" }}
            >
                <View style={{ flexDirection: 'row', marginTop: "10%" }}>
                    <View style={styles.divider} />
                    <View style={styles.title}>
                        <Text style={{ fontSize: 38, color: "#2D3436" }}> Personal <Text style={{ fontWeight: "300", color: "white" }}>Profile</Text></Text>
                    </View>
                    <View style={styles.divider} />
                </View>
            </LinearGradient>


            <View style={styles.imagestyle}>
                <Image
                    style={{ width: 140, height: 140, borderRadius: 140 / 2, margin: -50 }}
                    source={{ uri: "https://images.unsplash.com/photo-1563235453-a57d94b5a552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" }}
                />
            </View>

            <View style={{ alignItems: "center", marginTop: 55, margin: 15 }}>
                <Title>Abanoub</Title>

            </View>

            <Card style={styles.mycard} onPress={() => { Linking.openURL("mailto:OmarAli@gmail.com") }}>
                <View style={styles.cardconent}>
                    <MaterialIcons style={{ margin: 4 }} name="email" size={32} color='#FF8C00' />
                    <Text style={{ marginTop: 12, fontSize: 15 }}>abanob18170001@cis.asu.edu.eg</Text>

                </View>
            </Card>


            <Card style={styles.mycard} onPress={() => { OpenDial() }}>
                <View style={styles.cardconent}>
                    <Entypo style={{ margin: 4 }} name="phone" size={32} color='#FF8C00' />
                    <Text style={{ marginTop: 12, fontSize: 15 }}>01212836883</Text>
                </View>
            </Card>

            <Card style={styles.mycard} >
                <View style={styles.cardconent}>
                    <FontAwesome5 style={{ margin: 4 }} name="home" size={24} color='#FF8C00' />
                    <Text style={{ marginTop: 12, fontSize: 15 }}> 129 El-Merghany Street,Heliopolis</Text>
                </View>
            </Card>



            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, color: '#FF8C00' }}>
                <Button icon="account-edit" color="#FF8C00" mode="contained" >
                    Edit
             </Button>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white'
    },
    imagestyle: {
        alignItems: 'center',
        marginTop: 30
    },
    mycard: {
        margin: 3,
        marginTop: 10
    },
    cardconent: {
        flexDirection: 'row',
        padding: 5
    },
    divider: {
        backgroundColor: "#FF8C00",
        height: 1,
        flex: 1,
        alignSelf: 'center'
    }
})
export default profile;
