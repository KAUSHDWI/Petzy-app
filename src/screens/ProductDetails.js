import React, { useState } from 'react';
import { 
  StyleSheet, View, Text, Image, 
  TouchableOpacity, ScrollView, Dimensions 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { 
  X, Heart, ShoppingCart, Star, Minus, Plus 
} from 'lucide-react-native';
import { COLORS, FONTS } from '../themes/theme';

const { width, height } = Dimensions.get('window');

const ProductDetails = ({ navigation }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* --- HERO IMAGE --- */}
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://img.freepik.com/free-photo/red-backpack-with-hello-kitty-it_123827-23424.jpg' }} 
          style={styles.heroImage} 
        />
        
        {/* --- FLOATING HEADER --- */}
        <SafeAreaView style={styles.header}>
          <TouchableOpacity style={styles.headerBtn} onPress={() => navigation.goBack()}>
            <X size={22} color="black" />
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.headerBtn}>
              <Heart size={22} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerBtn}>
              <ShoppingCart size={22} color="black" />
              <View style={styles.badge}><Text style={styles.badgeText}>3</Text></View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>

      {/* --- DETAILS CARD --- */}
      <View style={styles.detailsCard}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
          
          {/* Title & Counter */}
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.title}>Brook</Text>
              <Text style={styles.distance}>1.2km Away</Text>
            </View>
            <View style={styles.counter}>
              <TouchableOpacity onPress={() => quantity > 1 && setQuantity(quantity - 1)}>
                <Minus size={20} color={COLORS.primaryGreen} />
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity < 10 ? `0${quantity}` : quantity}</Text>
              <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                <Plus size={20} color={COLORS.primaryGreen} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Price & Rating */}
          <View style={styles.priceRow}>
            <Text style={styles.price}>$149.99</Text>
            <View style={styles.ratingRow}>
               <Star size={16} color={COLORS.starYellow} fill={COLORS.starYellow} />
               <Star size={16} color={COLORS.starYellow} fill={COLORS.starYellow} />
               <Star size={16} color={COLORS.starYellow} fill={COLORS.starYellow} />
               <Star size={16} color={COLORS.starYellow} fill={COLORS.starYellow} />
               <Star size={16} color="#E0E0E0" fill="#E0E0E0" />
               <Text style={styles.reviewText}>(5) Review</Text>
            </View>
          </View>

          {/* Stats Row */}
          <View style={styles.statsRow}>
            <View style={[styles.statBox, { backgroundColor: COLORS.primaryGreen }]}>
              <Text style={[styles.statVal, { color: 'white' }]}>2.5 Years</Text>
              <Text style={[styles.statLab, { color: 'white', opacity: 0.7 }]}>Age</Text>
            </View>
            <View style={[styles.statBox, { backgroundColor: COLORS.statPeach }]}>
              <Text style={styles.statVal}>Female</Text>
              <Text style={styles.statLab}>Age</Text>
            </View>
            <View style={[styles.statBox, { backgroundColor: COLORS.statGray }]}>
              <Text style={styles.statVal}>10 Kg</Text>
              <Text style={styles.statLab}>Age</Text>
            </View>
          </View>

          {/* About Section */}
          <Text style={styles.aboutTitle}>About Brook</Text>
          <Text style={styles.description}>
            The Pembroke Welsh Corgi is a cattle dog & breed that originated, Wales. It is one of two breeds known as a Welsh Corgi, descends from the Teckel family of dogs. Other is the Cardigan. <Text style={styles.readMore}>Read more..</Text>
          </Text>

        </ScrollView>
      </View>

      {/* --- BOTTOM BUY BAR --- */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.miniCart}>onPress={() => navigation.navigate('Cart')}
           <ShoppingCart size={24} color={COLORS.primaryGreen} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyBtn}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  imageContainer: { width: width, height: height * 0.45 },
  heroImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  header: { position: 'absolute', top: 0, width: '100%', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 },
  headerRight: { flexDirection: 'row', gap: 10 },
  headerBtn: { width: 45, height: 45, borderRadius: 23, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', elevation: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  badge: { position: 'absolute', top: -2, right: -2, backgroundColor: COLORS.red, width: 18, height: 18, borderRadius: 9, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: 'white' },
  badgeText: { color: 'white', fontSize: 10, fontWeight: 'bold' },

  detailsCard: { flex: 1, backgroundColor: 'white', marginTop: -40, borderTopLeftRadius: 40, borderTopRightRadius: 40, paddingHorizontal: 25, paddingTop: 35 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { fontSize: 24, fontFamily: FONTS.bold, color: COLORS.textDark },
  distance: { fontSize: 13, color: COLORS.textGrey, marginTop: 2 },
  counter: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F9F9F9', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 25, borderWidth: 1, borderColor: '#EEE' },
  quantityText: { marginHorizontal: 15, fontSize: 16, fontFamily: FONTS.bold },

  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  price: { fontSize: 26, fontFamily: FONTS.bold, color: COLORS.primaryGreen },
  ratingRow: { flexDirection: 'row', alignItems: 'center' },
  reviewText: { marginLeft: 8, fontSize: 13, color: COLORS.textGrey },

  statsRow: { flexDirection: 'row', gap: 12, marginTop: 25 },
  statBox: { flex: 1, height: 75, borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
  statVal: { fontSize: 16, fontFamily: FONTS.bold },
  statLab: { fontSize: 12, marginTop: 2 },

  aboutTitle: { fontSize: 18, fontFamily: FONTS.bold, marginTop: 30, color: COLORS.textDark },
  description: { fontSize: 14, color: COLORS.textGrey, marginTop: 10, lineHeight: 22 },
  readMore: { fontFamily: FONTS.bold, color: 'black' },

  footer: { position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'white', padding: 20, flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#EEE' },
  miniCart: { width: 55, height: 55, borderRadius: 15, backgroundColor: '#F2F9F7', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  buyBtn: { flex: 1, backgroundColor: COLORS.primaryGreen, height: 55, borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
  buyText: { color: 'white', fontSize: 18, fontFamily: FONTS.bold },
});

export default ProductDetails;