import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const Bookmark = () => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <LinearGradient
        colors={['#FF8C00', '#FF8C00']}
        style={{ height: "20%" }}
      >
        <View style={{ flexDirection: 'row', marginTop: '13%', marginBottom: 20 }}>
          <View style={styles.divider} />
          <View style={styles.title}>
            <Text style={{ fontSize: 38, color: "#2D3436" }}> Book <Text style={{ fontWeight: "300", color: "white" }}>Quotes</Text></Text>
          </View>
          <View style={styles.divider} />
        </View>
      </LinearGradient>

      <ScrollView>
        <View style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardDetails}>
              “If you don’t like to read, you haven’t found the right book.”
            </Text>
            <Text style={styles.cardTitle}> J.K. Rowling</Text>
          </View>
        </View>


        <View style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardDetails}>
              “When I have a little money, I buy books; and if I have any left, I buy food and clothes.”
            </Text>
            <Text style={styles.cardTitle}>Erasmus</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardDetails}>
              “Fill your house with stacks of books, in all the crannies and all the nooks.”
            </Text>
            <Text style={styles.cardTitle}> Dr Seuss</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardDetails}>
              “That’s the thing about books. They let you travel without moving your feet.”
            </Text>
            <Text style={styles.cardTitle}>Jhumpa Lahiri</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardDetails}>
              “A book is a version of the world. If you do not like it, ignore it; or offer your own version in return.”
            </Text>
            <Text style={styles.cardTitle}>Salman Rushdie</Text>
          </View>
        </View>
        
      </ScrollView>


    </View>
  );
};
const styles = StyleSheet.create({
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
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
marginTop:15
  },
  cardDetails: {
    fontSize: 16,
    color: '#444',
  }
})
export default Bookmark;
