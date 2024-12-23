import { Image, StyleSheet, Platform, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  const [catigory, setcatigory] = useState([]);
  const [chosen, setchosen] = useState(false);
  const [product, setProduct] = useState([]);
  const [limit, setlimit] = useState(6);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getCatigory();
  }, []);

  useEffect(() => {
    getProduct();
  }, [chosen, limit]);


  async function getProduct() {
    let url = chosen && chosen !== "all" 
    ? `https://dummyjson.com/products/category/${chosen}` 
    : `https://dummyjson.com/products`;
    let productResponse = await fetch(`${url}?limit=${limit}`);
    let productData = await productResponse.json();
    setProduct(productData.products);
    setTotal(productData.total);
  }

  async function getCatigory() {
    let catigory = await fetch(`https://dummyjson.com/products/categories`);
    catigory = await catigory.json();
    setcatigory(catigory); 
  }

  return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={product}
        onEndReachedThreshold={0.8}
         onEndReached={()=>{
          if(limit < total){
            setlimit(limit + 4); // Use prevLimit to ensure we are updating correctly
          
          }
        }}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                backgroundColor: "white",
                flexDirection: "column",
                flex: 1,
                padding: 5,
                borderColor: "#ccc",
                borderRadius: 4,
                overflow: "hidden",
                borderWidth: 1,
                marginTop: 20,
                marginBottom: 2,
                marginHorizontal: 5,
              }}
            >
              <Image
                style={{ height: 120, resizeMode: "contain" }}
                source={{ uri: item.thumbnail }}
              />
              <View style={{ padding: 12 }}>
                <ThemedText style={{ fontWeight: "bold" }}>{item.title}</ThemedText>
                <ThemedText numberOfLines={2}>{item.description}</ThemedText>
              </View>
            </View>
          );
        }}
        ListHeaderComponent={
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[{ slug: "all", name: "All" }, ...catigory]}
            keyExtractor={(data) => data.slug}
            renderItem={({ item }) => {
              const chosencat = item.slug == chosen;
              return (
                <View style={{ marginHorizontal: 2 }}>
                  <TouchableOpacity
                    onPress={() => setchosen(item.slug)}
                    style={{
                      marginTop: 2,
                      borderWidth: 1, 
                    }}
                  >
                    {item.name}
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        }
      />
  );
}
