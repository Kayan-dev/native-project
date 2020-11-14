<View style={{ marginHorizontal: 40, marginVertical: 60 }}>
  <FlatList
    ListHeaderComponent={myHeader}
    data={[0, 1, 2, 3, 4]}
    renderItem={({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => Alert.alert(`You pressed image #${item + 1}`)}
        >
          <Image
            source={{
              uri: `https://picsum.photos/500/300?random=${randomNum + item}`,
            }}
            style={{ width: "100%", height: 160, marginBottom: 30 }}
          />
        </TouchableOpacity>
      );
    }}
    keyExtractor={(item) => String(item)}
    ListFooterComponent={myFooter}
  />
  <View style={{ height: "50%" }}>
    <View style={{ flex: 1, width: "20%", backgroundColor: "rebeccapurple" }} />
    <View style={{ flex: 2, width: "50%", backgroundColor: "crimson" }} />
    <View style={{ flex: 3, width: "80%", backgroundColor: "gold" }} />
  </View>
</View>;
