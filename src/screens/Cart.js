import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  Dimensions 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { 
  ArrowLeft, 
  Minus, 
  Plus, 
  Trash2 
} from 'lucide-react-native';
import { COLORS, FONTS } from '../themes/theme';

const { width } = Dimensions.get('window');

const Cart = ({ navigation }) => {
  // Sample Data for Cart Items
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Royal Canin Cat Food', weight: '2 Kg', price: 20.95, qty: 1, image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=200' },
    { id: '2', name: '2 Pieces Long Sleeve', weight: 'Sky Blue', price: 20.95, qty: 1, image: 'https://images.unsplash.com/photo-1548946526-f69e2424cf45?w=200', showDelete: true },
    { id: '3', name: 'Royal Canin Cat Food', weight: 'Random', price: 20.95, qty: 1, image: 'https://images.unsplash.com/photo-1591768793355-74d7ca73a045?w=200' },
  ]);

  const updateQty = (id, type) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, qty: type === 'add' ? item.qty + 1 : Math.max(1, item.qty - 1) };
      }
      return item;
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* --- HEADER --- */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <ArrowLeft size={22} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Cart</Text>
        <View style={{ width: 45 }} /> {/* Spacer to center title */}
      </View>

      {/* --- TABS SECTION --- */}
      <View style={styles.tabsContainer}>
        <View style={styles.tab}>
          <Text style={[styles.tabText, styles.activeTabText]}>Shopping Cart</Text>
          <View style={styles.activeUnderline} />
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Shopping</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>Payment</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollBody}>
        
        {/* --- CART ITEMS LIST --- */}
        {cartItems.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            {/* Conditional Delete Icon (Swipe-to-delete visual) */}
            {item.showDelete && (
              <View style={styles.deleteOverlay}>
                <Trash2 size={20} color="#FF4B4B" />
              </View>
            )}

            <View style={[styles.card, item.showDelete && { marginLeft: 20 }]}>
              <Image source={{ uri: item.image }} style={styles.productImg} />
              
              <View style={styles.details}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productWeight}>
                  {item.id === '2' ? 'Colour: ' : 'Weight: '}{item.weight}
                </Text>
                
                <View style={styles.priceCounterRow}>
                  <Text style={styles.price}>${item.price}</Text>
                  
                  <View style={styles.counter}>
                    <TouchableOpacity onPress={() => updateQty(item.id, 'sub')}>
                      <Minus size={18} color={COLORS.textDark} />
                    </TouchableOpacity>
                    <Text style={styles.qtyText}>{item.qty < 10 ? `0${item.qty}` : item.qty}</Text>
                    <TouchableOpacity onPress={() => updateQty(item.id, 'add')}>
                      <Plus size={18} color={COLORS.primaryGreen} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ))}

        {/* --- ADD MORE BUTTON --- */}
        <TouchableOpacity style={styles.addMoreBtn} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.addMoreText}>Add More products</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* --- BOTTOM SECTION --- */}
      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total Amount</Text>
          <Text style={styles.totalValue}>$73.80</Text>
        </View>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.backgroundBeige },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 10 },
  backBtn: { width: 45, height: 45, backgroundColor: 'white', borderRadius: 23, justifyContent: 'center', alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5 },
  headerTitle: { fontSize: 18, fontFamily: FONTS.bold, color: COLORS.textDark },
  
  tabsContainer: { flexDirection: 'row', paddingHorizontal: 20, marginTop: 25, borderBottomWidth: 1, borderBottomColor: '#E0E0E0' },
  tab: { flex: 1, alignItems: 'center', paddingBottom: 15 },
  tabText: { fontSize: 14, color: COLORS.textGrey, fontFamily: FONTS.regular },
  activeTabText: { color: COLORS.textDark, fontFamily: FONTS.bold },
  activeUnderline: { position: 'absolute', bottom: 0, width: '100%', height: 3, backgroundColor: COLORS.primaryGreen, borderTopLeftRadius: 5, borderTopRightRadius: 5 },

  scrollBody: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 120 },
  itemRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  deleteOverlay: { width: 45, height: 45, backgroundColor: '#FFEBEB', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginRight: -10, zIndex: 1 },
  
  card: { flex: 1, backgroundColor: 'white', borderRadius: 25, padding: 12, flexDirection: 'row', alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10 },
  productImg: { width: 85, height: 85, borderRadius: 20 },
  details: { flex: 1, marginLeft: 15 },
  productName: { fontSize: 15, fontFamily: FONTS.bold, color: COLORS.textDark },
  productWeight: { fontSize: 12, color: COLORS.textGrey, marginTop: 4 },
  
  priceCounterRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 },
  price: { fontSize: 16, fontFamily: FONTS.bold, color: COLORS.textDark },
  counter: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F6F6F6', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20 },
  qtyText: { marginHorizontal: 12, fontSize: 14, fontFamily: FONTS.bold },

  addMoreBtn: { width: '100%', height: 55, borderRadius: 15, borderWidth: 1, borderColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center', marginTop: 10 },
  addMoreText: { fontSize: 14, color: COLORS.textGrey, fontFamily: FONTS.regular },

  footer: { position: 'absolute', bottom: 0, width: '100%', backgroundColor: COLORS.backgroundBeige, paddingHorizontal: 20, paddingBottom: 30, paddingTop: 10 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  totalLabel: { fontSize: 18, fontFamily: FONTS.bold, color: COLORS.textDark },
  totalValue: { fontSize: 18, fontFamily: FONTS.bold, color: COLORS.textDark },
  checkoutBtn: { backgroundColor: COLORS.primaryGreen, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
  checkoutText: { color: 'white', fontSize: 16, fontFamily: FONTS.bold },
});

export default Cart;