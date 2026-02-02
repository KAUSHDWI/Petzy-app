import React, { useEffect, useRef } from 'react';
import { 
  StyleSheet, View, Text, Image, TextInput, 
  TouchableOpacity, ScrollView, Dimensions, Animated 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { 
  Search, SlidersHorizontal, Heart, ShoppingCart, 
  Star, Plus 
} from 'lucide-react-native';
import { COLORS, FONTS } from '../themes/theme';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  // Animation References
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const listAnim = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(listAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const categories = [
    { id: '1', title: 'Dry Cat Food', icon: '🍲', bg: COLORS.catPeach || '#FDECEC' },
    { id: '2', title: 'Bird Food', icon: '🐦', bg: COLORS.catMint || '#E6F0EE' },
    { id: '3', title: 'Cat toys', icon: '🧶', bg: COLORS.catAzure || '#E3F2FD' },
  ];

  // --- FULL 16 PETS DATA ---
  const pets = [
    { id: '1', name: 'Beagle Pup', rating: '4.9', reviews: '120', price: '$200.00', image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400'  },
    { id: '2', name: 'Blue Skin', rating: '5.0', reviews: '305', price: '$15.00', image: 'https://images.unsplash.com/photo-1591768793355-74d7ca73a045?w=400' },
    { id: '3', name: 'Persian White', rating: '4.9', reviews: '1.5K', price: '$85.00', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400' },
    { id: '4', name: 'Golden Retriever', rating: '4.7', reviews: '890', price: '$450.00', image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400' },
    { id: '5', name: 'British Shorthair', rating: '4.6', reviews: '420', price: '$120.00', image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400' },
    { id: '6', name: 'German Shepherd', rating: '5.0', reviews: '2.1K', price: '$550.00', image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400' },
    { id: '7', name: 'Siamese Cat', rating: '4.8', reviews: '310', price: '$95.00', image: 'https://images.unsplash.com/photo-1513245535761-398a67ca7031?w=400' },
    { id: '8', name: 'Chicken & Green', rating: '4.8', reviews: '2.2K', price: '$28.99', image: 'https://images.unsplash.com/photo-1548946526-f69e2424cf45?w=400'},
    { id: '9', name: 'Labrador Friendly', rating: '4.8', reviews: '3.1K', price: '$400.00', image: 'https://images.unsplash.com/photo-1591160674255-58bf7f5bf077?w=400' },
    { id: '10', name: 'Maine Coon', rating: '5.0', reviews: '1.2K', price: '$150.00', image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400' },
    { id: '11', name: 'Poodle Smart', rating: '4.9', reviews: '540', price: '$320.00', image: 'https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?w=400' },
    { id: '12', name: 'Scottish Fold', rating: '5.0', reviews: '410', price: '$160.00', image: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400' },
    { id: '13', name: 'Ragdoll Soft', rating: '4.7', reviews: '210', price: '$110.00', image: 'https://images.unsplash.com/photo-1513360309081-38f07627399e?w=400' },
    { id: '14', name: 'Corgi Short', rating: '4.9', reviews: '980', price: '$280.00', image: 'https://images.unsplash.com/photo-1519098901909-b1553a1190af?w=400' },
    { id: '15', name: 'Sphynx Unique', rating: '4.5', reviews: '85', price: '$300.00', image: 'https://images.unsplash.com/photo-1520315342629-6ea920342047?w=400' },
    { id: '16', name: 'Grey Parrot', rating: '4.6', reviews: '95', price: '$75.00', image: 'https://images.unsplash.com/photo-1552728089-57bdde30fc3b?w=400' },
  ];

  // Component for Pet Card with scale animation on press
  const PetCard = ({ item }) => {
    const scale = useRef(new Animated.Value(1)).current;

    const onPressIn = () => {
      Animated.spring(scale, { toValue: 0.95, useNativeDriver: true }).start();
    };
    const onPressOut = () => {
      Animated.spring(scale, { toValue: 1, friction: 3, tension: 40, useNativeDriver: true }).start();
    };

    return (
      <Animated.View style={{
        width: '47%',
        opacity: listAnim,
        transform: [
          { scale: scale },
          { translateY: listAnim.interpolate({ inputRange: [0, 1], outputRange: [50, 0] }) }
        ]
      }}>
        {/* AS REQUESTED: TouchableOpacity navigating to ProductDetails */}
        <TouchableOpacity 
          activeOpacity={1}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onPress={() => navigation.navigate('ProductDetails')}
          style={styles.petCard}
        >
          <View style={styles.petImageWrapper}>
            <Image source={{ uri: item.image }} style={styles.petImg} />
            <TouchableOpacity style={styles.favBtn}><Heart size={14} color="red" fill="red" /></TouchableOpacity>
          </View>
          <Text style={styles.petTitle} numberOfLines={1}>{item.name}</Text>
          <View style={styles.ratingRow}>
            <Star size={14} color={COLORS.accentYellow || '#FFB800'} fill={COLORS.accentYellow || '#FFB800'} />
            <Text style={styles.ratingText}>{item.rating}</Text>
            <Text style={styles.reviewText}>({item.reviews})</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceText}>{item.price}</Text>
            <TouchableOpacity style={styles.plusBtn}>
              <Plus size={18} color="white" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Animated Header & Search */}
        <Animated.View style={{ opacity: fadeAnim }}>
          <View style={styles.header}>
            <View style={styles.userInfo}>
              <Image source={{ uri: 'https://avatar.iran.liara.run/public/30' }} style={styles.avatar} />
              <View>
                <Text style={styles.welcomeText}>Welcome Back!</Text>
                <Text style={styles.userName}>Leslie Alexander</Text>
              </View>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity 
                style={styles.iconCircle} 
                onPress={() => navigation.navigate('Cart')}
              >
                <Heart size={20} color={COLORS.textDark} />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.iconCircle} 
                onPress={() => navigation.navigate('Cart')}
              >
                  <ShoppingCart size={20} color={COLORS.textDark} />
                  <View style={styles.badge}><Text style={styles.badgeText}>3</Text></View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.searchSection}>
            <View style={styles.searchBar}>
              <Search size={20} color={COLORS.textGrey} />
              <TextInput placeholder="Search pets..." style={styles.searchInput} placeholderTextColor={COLORS.textGrey} />
              <TouchableOpacity><SlidersHorizontal size={20} color={COLORS.textGrey} /></TouchableOpacity>
            </View>
          </View>

          {/* Banner */}
          <View style={styles.banner}>
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTag}>New year</Text>
              <Text style={styles.bannerTitle}>40% Off</Text>
              <Text style={styles.bannerSubtitle}>Bold Looks. Clean Lines.</Text>
              <TouchableOpacity style={styles.shopBtn}>
                <Text style={styles.shopBtnText}>Shop Now</Text>
              </TouchableOpacity>
            </View>
            <Image source={{ uri: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400' }} style={styles.bannerImage} />
          </View>
        </Animated.View>

        {/* Categories Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
          {categories.map(item => (
            <TouchableOpacity 
              key={item.id} 
              style={[styles.categoryPill, { backgroundColor: item.bg }]}
              onPress={() => navigation.navigate('Categories')}
            >
              <View style={styles.pillIconBg}><Text style={styles.pillIcon}>{item.icon}</Text></View>
              <Text style={styles.pillText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Animated Pet Grid */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nearby Pets</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Categories')}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.petGrid}>
          {pets.map((item) => (
            <PetCard key={item.id} item={item} />
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.backgroundBeige || '#F8F4E9' },
  scrollContent: { paddingBottom: 130 },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 15, alignItems: 'center' },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 45, height: 45, borderRadius: 23, marginRight: 12 },
  welcomeText: { fontSize: 12, color: COLORS.textGrey, fontFamily: FONTS.regular },
  userName: { fontSize: 16, color: COLORS.textDark, fontFamily: FONTS.bold },
  headerIcons: { flexDirection: 'row', gap: 10 },
  iconCircle: { width: 42, height: 42, borderRadius: 21, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', elevation: 3, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 3 },
  badge: { position: 'absolute', top: -3, right: -3, backgroundColor: '#FF4B4B', width: 18, height: 18, borderRadius: 9, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'white' },
  badgeText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  searchSection: { paddingHorizontal: 20, marginTop: 10 },
  searchBar: { flexDirection: 'row', backgroundColor: 'white', height: 55, borderRadius: 30, alignItems: 'center', paddingHorizontal: 15, elevation: 2 },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 15, fontFamily: FONTS.regular },
  banner: { marginHorizontal: 20, marginTop: 20, height: 160, backgroundColor: COLORS.primaryGreen, borderRadius: 25, flexDirection: 'row', overflow: 'hidden' },
  bannerContent: { flex: 1, padding: 20, justifyContent: 'center' },
  bannerTag: { color: 'white', fontSize: 12, opacity: 0.8 },
  bannerTitle: { color: 'white', fontSize: 26, fontFamily: FONTS.bold, marginVertical: 4 },
  bannerSubtitle: { color: 'white', fontSize: 12, marginBottom: 12 },
  shopBtn: { backgroundColor: 'white', paddingVertical: 8, paddingHorizontal: 18, borderRadius: 20, alignSelf: 'flex-start' },
  shopBtnText: { color: COLORS.primaryGreen, fontSize: 13, fontFamily: FONTS.bold },
  bannerImage: { width: 130, height: '100%', resizeMode: 'cover' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginTop: 25, alignItems: 'center' },
  sectionTitle: { fontSize: 18, fontFamily: FONTS.bold, color: COLORS.textDark },
  viewAllText: { fontSize: 12, color: COLORS.textGrey },
  categoryScroll: { paddingLeft: 20, marginTop: 15 },
  categoryPill: { flexDirection: 'row', alignItems: 'center', padding: 8, borderRadius: 30, marginRight: 15 },
  pillIconBg: { backgroundColor: 'white', width: 35, height: 35, borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  pillIcon: { fontSize: 16 },
  pillText: { marginLeft: 10, marginRight: 15, fontSize: 14, fontFamily: FONTS.bold, color: COLORS.textDark },
  petGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    paddingHorizontal: 20, 
    marginTop: 15, 
    justifyContent: 'space-between' 
  },
  petCard: { 
    width: '100%', 
    backgroundColor: 'white', 
    borderRadius: 25, 
    padding: 12, 
    marginBottom: 20, 
    elevation: 4, 
    shadowColor: '#000', 
    shadowOpacity: 0.08, 
    shadowRadius: 10 
  },
  petImageWrapper: { position: 'relative' },
  petImg: { width: '100%', height: 130, borderRadius: 18 },
  favBtn: { position: 'absolute', top: 10, right: 10, backgroundColor: 'white', padding: 5, borderRadius: 10 },
  petTitle: { fontSize: 14, fontFamily: FONTS.bold, marginTop: 12, color: COLORS.textDark },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  ratingText: { fontSize: 12, fontFamily: FONTS.bold, marginLeft: 4 },
  reviewText: { fontSize: 11, color: COLORS.textGrey, marginLeft: 2 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 },
  priceText: { fontSize: 17, fontFamily: FONTS.bold, color: COLORS.textDark },
  plusBtn: { backgroundColor: COLORS.primaryGreen, width: 32, height: 32, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
});

export default HomeScreen;
