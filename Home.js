import React, { useState } from 'react';
import { View, TextInput, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
const Header = ({ title, onViewAll }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
      {onViewAll && (
        <TouchableOpacity onPress={onViewAll}>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
const Home = () => {
  const categories = [
    { id: '1', title: 'Pizza', image: 'https://media.istockphoto.com/id/1442417585/vi/anh/ng%C6%B0%E1%BB%9Di-nh%E1%BA%ADn-%C4%91%C6%B0%E1%BB%A3c-m%E1%BB%99t-mi%E1%BA%BFng-pizza-pepperoni-ph%C3%B4-mai.jpg?s=612x612&w=0&k=20&c=5e9ycu8KvpKcIVIwNmEGaxr8yh9x8IMdpeIJ3HdtSxU='},
    { id: '2', title: 'Burgers', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1KghKR2lbbRkZgpOcIhMqIOFq-s82DOwPwA&s' },
    { id: '3', title: 'Steak', image: 'https://channel.mediacdn.vn/2019/2/28/photo-1-1551329366241380704117.jpg' },
  ];

  const popularItems = [
    { id: '1', title: 'Phở', chef: 'By Viet Nam', price: 15, image: 'https://chefjob.vn/wp-content/uploads/2018/01/pho-mon-an-truyen-thong-viet-nam-noi-tieng-the-gioi.jpg' },
    { id: '2', title: 'Bánh mì', chef: 'By Viet Nam', price: 35, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66lntW3EQ7d8j7THdDSkohfVh2FRSpVB8Fw&s' },
  ];

  const saleItems = [
    { id: '1', title: 'Gỏi cuốn', discount: '10% OFF', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_H_2yii53taBzBMSGN9_4vzWpSHGfU0Ejow&s' },
    { id: '2', title: 'Bún đậu', discount: '15% OFF', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4lZKW2WTg4pzlARO_dsg3ZRP8bcCWjtAcQ&s' },
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    alert(`Tìm kiếm: ${searchQuery}`);
  };

  const handleFilter = () => {
    alert('Mở bộ lọc');
  };

  const renderCategory = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.title}</Text>
    </View>
  );

  const renderPopularItem = ({ item }) => (
    <View style={styles.popularItem}>
      <Image source={{ uri: item.image }} style={styles.popularImage} />
      <Text style={styles.popularTitle}>{item.title}</Text>
      <Text style={styles.popularChef}>{item.chef}</Text>
      <Text style={styles.popularPrice}>${item.price}</Text>
    </View>
  );

  const renderSaleItem = ({ item }) => (
    <View style={styles.saleItem}>
      <Image source={{ uri: item.image }} style={styles.saleImage} />
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>{item.discount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for meals or area"
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.filterButton} onPress={handleFilter}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {}
      <Header title="Top Categories" />
      <FlatList
      data={categories}
      renderItem={renderCategory}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatList}
    />

    {/* Popular Items */}
    <Header title="Popular Items" onViewAll={() => alert('Xem tất cả Popular Items')} />
    <FlatList
      data={popularItems}
      renderItem={renderPopularItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatList}
    />

    {}
    <Header title="Sale-off Items" onViewAll={() => alert('Xem tất cả Sale-off Items')} />
    <FlatList
      data={saleItems}
      renderItem={renderSaleItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatList}
    />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
},
searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 15,
  marginVertical: 10,
},
searchBar: {
  flex: 1,
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 20,
  padding: 10,
  marginRight: 10,
  backgroundColor: '#f9f9f9',
},
filterButton: {
  padding: 10,
},
filterText: {
  color: '#ff9800',
  fontSize: 14,
},
headerContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 10,
  paddingHorizontal: 15,
},
headerTitle: {
  fontSize: 18,
  fontWeight: 'bold',
},
viewAll: {
  color: '#ff9800',
  fontSize: 14,
},
flatList: {
  paddingHorizontal: 15,
},
categoryItem: {
  alignItems: 'center',
  marginRight: 15,
},
categoryImage: {
  width: 80,
  height: 80,
  borderRadius: 10,
},
categoryText: {
  marginTop: 5,
  fontSize: 14,
},
popularItem: {
  marginRight: 15,
  backgroundColor: '#fff',
  borderRadius: 10,
  elevation: 2,
  padding: 10,
  width: 150,
},
popularImage: {
  width: '100%',
  height: 100,
  borderRadius: 10,
},
popularTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  marginTop: 5,
},
popularChef: {
  fontSize: 12,
  color: '#666',
},
popularPrice: {
  fontSize: 14,
  fontWeight: 'bold',
  color: '#000',
  marginTop: 5,
},
saleItem: {
  marginRight: 15,
  position: 'relative',
},
saleImage: {
  width: 150,
  height: 150,
  borderRadius: 10,
},
discountBadge: {
  position: 'absolute',
  top: 10,
  left: 10,
  backgroundColor: '#ff4444',
  padding: 5,
  borderRadius: 5,
},
discountText: {
  color: '#fff',
  fontSize: 12,
  fontWeight: 'bold',
},
});

export default Home;