import React from 'react';
import { 
  StyleSheet, View, Text, Image, TextInput, 
  TouchableOpacity, FlatList, Dimensions 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { 
  ArrowLeft, Heart, ShoppingCart, Search, 
  SlidersHorizontal, Home, LayoutGrid, BookOpen, PawPrint 
} from 'lucide-react-native';
import { COLORS, FONTS } from '../themes/theme';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 60) / 2; // Exact calculation for 2 columns

const CATEGORIES_DATA = [
  { id: '1', title: 'Chicken & Green Pea Recipe', discount: '10%Free', image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400' },
  { id: '2', title: 'Cat food & Accessories', discount: '30%Free', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400' },
  { id: '3', title: 'Cat Care & Health', discount: null, image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400' },
  { id: '4', title: 'Dog food & Accessories', discount: null, image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400' },
  { id: '5', title: 'Quik Bird', discount: '15%Free', image: 'https://images.unsplash.com/photo-1522926193341-e9fed11104ad?w=400' },
  { id: '6', title: 'Datalife Calcium', discount: '20%Free', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400' },
];

const Categories = ({ navigation }) => {

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: item.image }} style={styles.image} />
        {item.discount && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.discount}</Text>
          </View>
        )}
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.circleBtn} onPress={() => navigation.goBack()}>
          <ArrowLeft size={22} color={COLORS.textDark} />
        </TouchableOpacity>
        
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.circleBtn}onPress={() => navigation.navigate('Cart')} >
            <Heart size={22} color={COLORS.textDark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.circleBtn}>
            <ShoppingCart size={22} color={COLORS.textDark} />
            <View style={styles.cartCount}><Text style={styles.cartCountText}>3</Text></View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Section */}
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Search size={20} color={COLORS.textGrey} />
          <TextInput placeholder="Search" style={styles.searchInput} placeholderTextColor={COLORS.textGrey} />
          <TouchableOpacity><SlidersHorizontal size={20} color={COLORS.textGrey} /></TouchableOpacity>
        </View>
      </View>

      {/* Categories Grid */}
      <FlatList
        data={CATEGORIES_DATA}
        renderItem={renderCard}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridPadding}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />

      {/* Same to Same Floating Bottom Navigation */}
      <View style={styles.navWrapper}>
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}><Home size={22} color={COLORS.textGrey} /></TouchableOpacity>
          
          <View style={styles.activeTab}>
            <LayoutGrid size={20} color="white" />
            <Text style={styles.activeTabText}>Categories</Text>
          </View>
          
          <TouchableOpacity><BookOpen size={22} color={COLORS.textGrey} /></TouchableOpacity>
          <TouchableOpacity><PawPrint size={22} color={COLORS.textGrey} /></TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.backgroundBeige },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15 },
  headerRight: { flexDirection: 'row', gap: 12 },
  circleBtn: { 
    width: 45, height: 45, borderRadius: 23, backgroundColor: 'white', 
    justifyContent: 'center', alignItems: 'center', elevation: 2,
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5
  },
  cartCount: { 
    position: 'absolute', top: -3, right: -3, backgroundColor: COLORS.redBadge, 
    width: 18, height: 18, borderRadius: 9, justifyContent: 'center', alignItems: 'center',
    borderWidth: 2, borderColor: 'white' 
  },
  cartCountText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  
  searchSection: { paddingHorizontal: 20, marginBottom: 15 },
  searchBar: { 
    flexDirection: 'row', backgroundColor: 'white', height: 55, borderRadius: 30, 
    alignItems: 'center', paddingHorizontal: 15, elevation: 1
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16, fontFamily: FONTS.regular },

  gridPadding: { paddingHorizontal: 20, paddingBottom: 120 },
  columnWrapper: { justifyContent: 'space-between' },
  card: { width: CARD_WIDTH, marginBottom: 20 },
  imageWrapper: { width: '100%', height: 160, borderRadius: 20, overflow: 'hidden', position: 'relative' },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },
  badge: { 
    position: 'absolute', top: 0, right: 0, backgroundColor: COLORS.primaryGreen, 
    paddingVertical: 5, paddingHorizontal: 12, borderBottomLeftRadius: 15 
  },
  badgeText: { color: 'white', fontSize: 10, fontFamily: FONTS.bold },
  cardTitle: { marginTop: 10, fontSize: 14, fontFamily: FONTS.bold, color: COLORS.textDark },

  navWrapper: { position: 'absolute', bottom: 30, width: '100%', alignItems: 'center' },
  bottomNav: { 
    flexDirection: 'row', backgroundColor: 'white', width: '92%', height: 75, 
    borderRadius: 40, alignItems: 'center', justifyContent: 'space-around', 
    paddingHorizontal: 10, elevation: 10, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 
  },
  activeTab: { 
    flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.primaryGreen, 
    paddingVertical: 12, paddingHorizontal: 22, borderRadius: 30 
  },
  activeTabText: { color: 'white', marginLeft: 8, fontFamily: FONTS.bold, fontSize: 14 },
});

export default Categories;