// import { Image, StyleSheet, View, FlatList,RefreshControl } from 'react-native';
// import { useCallback, useEffect, useState } from 'react';
// import { Category, Product } from '@/constants/Interface';
// import { ThemedButtonProps } from '@/components/ThemedButton';
// import { ThemedText } from '@/components/ThemedText';
// import { Link } from 'expo-router';

// export default function HomeScreen() {
//   const [product, setProduct] = useState<Product[]>([]);
//   const [catigoies, setCatigoies] = useState<Category[]>([]);
//   const [chosenCategory, setChosenCategory] = useState<string>("all");
//   const [total, setTotal] = useState<number>(0);
//   const [limit, setLimit] = useState<number>(6);
//   const [refresh,setRefresh] = useState<boolean>(false)
//   const [loading, setloading] = useState<string | null>(null)

//   useEffect(() => {
//     getProduct();
//   }, [chosenCategory, limit]);

//   useEffect(() => {
//     getCatigory();
//   }, []);

//   async function getProduct() {
//     setloading(true)
//     let url = chosenCategory && chosenCategory !== "all" 
//               ? `https://dummyjson.com/products/category/${chosenCategory}` 
//               : `https://dummyjson.com/products`;
//     let productResponse = await fetch(`${url}?limit=${limit}`);
//     let productData = await productResponse.json();
//     setProduct(productData.products);
//     setTotal(productData.total);
//     setRefresh(false)
//     setloading(false)
//   }
//    if(loading){
//     return <h1>Loading.....</h1>
//    }

//   async function getCatigory() {
//     let categoriesResponse = await fetch(`https://dummyjson.com/products/categories`);
//     let categoriesData = await categoriesResponse.json();
//     setCatigoies(categoriesData);
//   }

//   const onRefresh = useCallback(() => {
//     setRefresh(true);
//     getProduct()
//   }, []);

//   return (
//     <View style={{ flex: 1 , backgroundColor : "#C5FCE1"}}>
//       {/* Category Selection FlatList */}
//       {/* Product List FlatList */}
//       <FlatList
//         stickyHeaderIndices={[0]}
//         data={product}
//         numColumns={2}
//         onEndReachedThreshold={0.9}
//         onEndReached={()=> {
//           if (limit < total) {
//             setLimit(limit + 20)
//           }
//         }}
//         refreshControl={
//           <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
//         }
//         keyExtractor={(data) => data.id.toString()}
//         ListHeaderComponent={
//           <FlatList style={{backgroundColor : "#C5FCE1",}}
//           showsHorizontalScrollIndicator={false}
//           horizontal={true}
//           data={[{ slug: "all", name: "All" }, ...catigoies]}
//           keyExtractor={(data) => data.slug}
//           // Space above buttons
//           renderItem={({ item }) => {
//             const isChosen = item.slug === chosenCategory;
//             return (
//               <View style={{ marginHorizontal: 2, }}>
//                 <ThemedButtonProps
//                   onPress={() => setChosenCategory(item.slug)}
//                   style={{ marginTop: 2,
//                     borderColor: isChosen ? "white" : "#C5FCE1", // Manually set border color
//                     borderWidth: 1, // Ensure the border is visible
                 
//                    }}
//                   bgColor={isChosen ? "#4EAB7C" : "white"}
//                   txtColor={isChosen ? "white" : "black"}
//                   txt={item.name}
//                 />
//               </View>
//             );
//           }}
//         />
  
//         }
//         renderItem={({ item }) => {
//           return (
//             <Link
//             href={{
//               pathname: '/details/[id]',
//               params: { id: item.id },
//             }}>
//  <View
//               style={{
//                 backgroundColor : "#E3FFF1",
//                 flexDirection: "column",
//                 flex: 1,
//                 // padding : 5,
//                 borderColor: "#E3FFF1",
//                 borderRadius: 10,
//                 overflow: "hidden",
//                 borderWidth: 1,
//                 marginTop: 20,
//                 marginBottom: 2, // Margin between items
//                 margin : 15
//               }}
//             >
//               <Image
//                 style={{ height: 120, resizeMode: "contain" }}
//                 source={{ uri: item.thumbnail }}
//               />
//               <View style={{ padding: 12, paddingHorizontal : 15 }}>
//                 <ThemedText style={{fontWeight : "bold"}}>{item.title}</ThemedText>
//                 <ThemedText numberOfLines={2}>{item.description}</ThemedText>

//               </View>
//             </View>
//              </Link>
//           );
//         }}
//       />
//     </View>
//   );
// }
           
import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, FlatList, RefreshControl, Text, TouchableOpacity, Image, Animated, ScrollView } from 'react-native';
import { ThemedButtonProps } from '@/components/ThemedButton';
import { ThemedText } from '@/components/ThemedText';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [product, setProduct] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [chosenCategory, setChosenCategory] = useState<string>('all');
  const [total, setTotal] = useState<number>(0);
  const [limit, setLimit] = useState<number>(6);
  const [refresh, setRefresh] = useState<boolean>(false);

  const fadeAnim = useState(new Animated.Value(0))[0];  // Fade animation for products

  useEffect(() => {
    getProduct();
  }, [chosenCategory, limit]);

  useEffect(() => {
    getCategory();
  }, []);

  async function getProduct() {
    let url = chosenCategory && chosenCategory !== 'all'
      ? `https://dummyjson.com/products/category/${chosenCategory}`
      : `https://dummyjson.com/products`;
    try {
      let productResponse = await fetch(`${url}?limit=${limit}`);
      let productData = await productResponse.json();
      setProduct(productData.products);
      setTotal(productData.total);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
    setRefresh(false);
    fadeIn(); // Trigger fade-in animation once products are loaded
  }

  async function getCategory() {
    try {
      let categoriesResponse = await fetch('https://dummyjson.com/products/categories');
      let categoriesData = await categoriesResponse.json();
      setCategories(categoriesData);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  }

  const onRefresh = useCallback(() => {
    setRefresh(true);
    getProduct().finally(() => setRefresh(false));
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
          <View style={{ flex: 1 , backgroundColor : "#C5FCE1"}}>
            {/* Category Selection FlatList */}
            {/* Product List FlatList */}
            <FlatList
              stickyHeaderIndices={[0]}
              data={product}
              numColumns={2}
              onEndReachedThreshold={0.9}
              onEndReached={()=> {
                if (limit < total) {
                  setLimit(limit + 20)
                }
              }}
              refreshControl={
                <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
              }
              keyExtractor={(data) => data.id.toString()}
              ListHeaderComponent={
                <FlatList style={{backgroundColor : "#C5FCE1",}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={[{ slug: "all", name: "All" }, ...categories]}
                keyExtractor={(data) => data.slug}
                // Space above buttons
                renderItem={({ item }) => {
                  const isChosen = item.slug === chosenCategory;
                  return (
                    <View style={{ marginHorizontal: 2, }}>
                      <ThemedButtonProps
                        onPress={() => setChosenCategory(item.slug)}
                        style={{ marginTop: 2,
                          borderColor: isChosen ? "white" : "#C5FCE1", // Manually set border color
                          borderWidth: 1, // Ensure the border is visible
                       
                         }}
                        bgColor={isChosen ? "#4EAB7C" : "white"}
                        txtColor={isChosen ? "white" : "black"}
                        txt={item.name}
                      />
                    </View>
                  );
                }}
              />
        
              }
              renderItem={({ item }) => {
                return (
                  <Link
                  href={{
                    pathname: '/details/[id]',
                    params: { id: item.id },
                  }}>
       <View
                    style={{
                      backgroundColor : "#E3FFF1",
                      flexDirection: "column",
                      flex: 1,
                      // padding : 5,
                      borderColor: "#E3FFF1",
                      borderRadius: 10,
                      overflow: "hidden",
                      borderWidth: 1,
                      marginTop: 20,
                      marginBottom: 2, // Margin between items
                      margin : 15
                    }}
                  >
                    <Image
                      style={{ height: 120, resizeMode: "contain" }}
                      source={{ uri: item.thumbnail }}
                    />
                    <View style={{ padding: 12, paddingHorizontal : 15 }}>
                      <ThemedText style={{fontWeight : "bold"}}>{item.title}</ThemedText>
                      <ThemedText numberOfLines={2}>{item.description}</ThemedText>
      
                    </View>
                  </View>
                   </Link>
                );
              }}
            />
          </View>
  );
}
