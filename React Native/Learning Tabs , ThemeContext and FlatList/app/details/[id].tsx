// import { ThemedText } from '@/components/ThemedText';
// import { useLocalSearchParams } from 'expo-router';
// import { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// export default function DetailsScreen() {
//   const { id } = useLocalSearchParams();
//   const [singleItem , setSingleItem] = useState(null)
 
// useEffect(()=>{
//     async function getSingleProduct(){
//         let singleItems = await fetch(`https://dummyjson.com/products/${id}`)
//         singleItems = await singleItems.json()
//         console.log("check=>",singleItems)
//         setSingleItem(singleItems)
//       }  
//       getSingleProduct()
// },[id])

// if (!singleItem) {
//     return <Text>Loading...</Text>; // Show loading state while data is being fetched
//   }
//   return (
//     <View style={styles.container}>
//       <Image style={{height : 200, width : 100}} source={{uri : singleItem.thumbnail}} />
//       <ThemedText>{singleItem.title}</ThemedText>
//       <ThemedText>{singleItem.description}</ThemedText>
//       <ThemedText>{singleItem.brand}</ThemedText>
//       <ThemedText>{singleItem.category}</ThemedText>
//       <ThemedText>{singleItem.price}</ThemedText>
//       <ThemedText>{singleItem.returnPolicy}</ThemedText>
//      <TouchableOpacity>Add To Cart</TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
import { ThemedText } from '@/components/ThemedText';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const [singleItem, setSingleItem] = useState(null);

  useEffect(() => {
    async function getSingleProduct() {
      let singleItems = await fetch(`https://dummyjson.com/products/${id}`);
      singleItems = await singleItems.json();
      console.log("Fetched Product =>", singleItems);
      setSingleItem(singleItems);
    }
    getSingleProduct();
  }, [id]);

  if (!singleItem) {
    return <Text style={styles.loadingText}>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}
    showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {/* Product Image */}
        <Image style={styles.image} source={{ uri: singleItem.thumbnail }} />

        {/* Product Title */}
        <ThemedText style={styles.title}>{singleItem.title}</ThemedText>

        {/* Product Details */}
        <View style={styles.detailsContainer}>
          <ThemedText style={styles.detailText}><Text style={styles.label}>Brand:</Text> {singleItem.brand}</ThemedText>
          <ThemedText style={styles.detailText}><Text style={styles.label}>Category:</Text> {singleItem.category}</ThemedText>
          <ThemedText style={styles.detailText}><Text style={styles.label}>Price:</Text> ${singleItem.price}</ThemedText>
          <ThemedText style={styles.detailText}><Text style={styles.label}>Return Policy:</Text> {singleItem.returnPolicy}</ThemedText>
          <ThemedText style={styles.description}>{singleItem.description}</ThemedText>
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  detailsContainer: {
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  detailText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#777',
    marginTop: 20,
    textAlign: 'justify',
  },
  label: {
    fontWeight: 'bold',
    color: '#2D9CDB', // Blue label color for clarity
  },
  button: {
    backgroundColor: '#FF6347', // Tomato color for button
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginTop: 30,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#FF6347',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
});
