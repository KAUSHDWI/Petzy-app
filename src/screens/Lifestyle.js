import React from 'react';
import { 
  StyleSheet, View, Text, Image, 
  TouchableOpacity, ScrollView, Dimensions 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { 
  ArrowLeft, Search, Heart, ChevronRight 
} from 'lucide-react-native';
import { COLORS, FONTS } from '../themes/theme';
import BottomNav from '../components/BottomNav';

const { width } = Dimensions.get('window');

const Lifestyle = ({ navigation }) => {
  const chips = ['All', 'Reviews', 'Aquarium', 'Dog Food'];

  const winterCareData = [
    {
      id: '1',
      title: 'Winter Care for Cats',
      desc: 'Ensure your cat feels safe, loved, and well-cared for.',
      date: '7 Jan 2025',
      image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=200',
    },
    {
      id: '2',
      title: 'Home made for Cats',
      desc: 'Home made food is very important for cats in winter time.',
      date: '7 Jan 2025',
      image: 'https://images.unsplash.com/photo-1573865668131-973a77e3f4de?w=200',
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* --- HEADER --- */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.circleBtn} onPress={() => navigation.goBack()}>
          <ArrowLeft size={22} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lifestyle</Text>
        <TouchableOpacity style={styles.circleBtn}>
          <Search size={22} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* --- CATEGORY CHIPS --- */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.chipScroll}
          contentContainerStyle={{ paddingRight: 40 }}
        >
          {chips.map((chip, index) => (
            <TouchableOpacity 
              key={index} 
              style={[styles.chip, index === 0 && styles.activeChip]}
            >
              <Text style={[styles.chipText, index === 0 && styles.activeChipText]}>{chip}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* --- MAIN HERO CARD --- */}
        <View style={styles.heroCard}>
          <View style={styles.imageWrapper}>
            <Image 
              source={{ uri: 'https://img.freepik.com/free-vector/cute-cat-dog-cartoon-characters_1308-133981.jpg' }} 
              style={styles.heroImage} 
            />
            <TouchableOpacity style={styles.heartBtn}>
              <Heart size={18} color={COLORS.redHeart} fill={COLORS.redHeart} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>How to keep Cats and Dogs together.</Text>
            <View style={styles.heroFooter}>
              <Text style={styles.dateText}>8 Jan 2025</Text>
              <TouchableOpacity style={styles.readMoreBtn}>
                <Text style={styles.readMoreText}>Read More</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* --- WINTER CARE SECTION --- */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Winter Care for Pets</Text>
          <TouchableOpacity><Text style={styles.viewAll}>View All</Text></TouchableOpacity>
        </View>

        {winterCareData.map((item) => (
          <View key={item.id} style={styles.listItem}>
            <Image source={{ uri: item.image }} style={styles.listImage} />
            <View style={styles.listDetails}>
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text style={styles.listDesc} numberOfLines={2}>{item.desc}</Text>
              <Text style={styles.dateTextSmall}>{item.date}</Text>
            </View>
            <TouchableOpacity style={styles.arrowBtn}>
              <ChevronRight size={18} color={COLORS.primaryGreen} />
            </TouchableOpacity>
          </View>
        ))}

      </ScrollView>

      {/* --- DYNAMIC NAVIGATION BAR --- */}
      <BottomNav />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.backgroundBeige },
  scrollContent: { paddingBottom: 120 },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 15 
  },
  headerTitle: { fontSize: 22, fontFamily: FONTS.bold, color: COLORS.textDark },
  circleBtn: { 
    width: 45, height: 45, borderRadius: 23, backgroundColor: 'white', 
    justifyContent: 'center', alignItems: 'center', elevation: 2,
    shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5
  },

  chipScroll: { paddingLeft: 20, marginVertical: 10 },
  chip: { 
    paddingHorizontal: 25, paddingVertical: 12, borderRadius: 25, 
    backgroundColor: 'white', marginRight: 10, borderWidth: 1, borderColor: '#EEE' 
  },
  activeChip: { backgroundColor: COLORS.primaryGreen, borderColor: COLORS.primaryGreen },
  chipText: { fontSize: 14, color: COLORS.textGrey, fontFamily: FONTS.regular },
  activeChipText: { color: 'white', fontFamily: FONTS.bold },

  heroCard: { 
    margin: 20, backgroundColor: 'white', borderRadius: 30, 
    overflow: 'hidden', elevation: 4, shadowColor: '#000', 
    shadowOpacity: 0.1, shadowRadius: 10 
  },
  imageWrapper: { position: 'relative', width: '100%', height: 200 },
  heroImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  heartBtn: { 
    position: 'absolute', bottom: 20, right: 20, 
    backgroundColor: 'white', padding: 8, borderRadius: 15 
  },
  heroContent: { padding: 20 },
  heroTitle: { fontSize: 18, fontFamily: FONTS.bold, color: COLORS.textDark, lineHeight: 24 },
  heroFooter: { 
    flexDirection: 'row', justifyContent: 'space-between', 
    alignItems: 'center', marginTop: 15 
  },
  dateText: { fontSize: 13, color: COLORS.textGrey, fontFamily: FONTS.regular },
  readMoreBtn: { 
    backgroundColor: COLORS.primaryGreen, 
    paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20 
  },
  readMoreText: { color: 'white', fontSize: 13, fontFamily: FONTS.bold },

  sectionHeader: { 
    flexDirection: 'row', justifyContent: 'space-between', 
    alignItems: 'center', paddingHorizontal: 20, marginTop: 10 
  },
  sectionTitle: { fontSize: 20, fontFamily: FONTS.bold, color: COLORS.textDark },
  viewAll: { fontSize: 13, color: COLORS.textGrey },

  listItem: { 
    flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', 
    marginHorizontal: 20, marginTop: 15, padding: 12, borderRadius: 25, 
    elevation: 2, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 5 
  },
  listImage: { width: 80, height: 80, borderRadius: 20 },
  listDetails: { flex: 1, marginLeft: 15, justifyContent: 'center' },
  listTitle: { fontSize: 15, fontFamily: FONTS.bold, color: COLORS.textDark },
  listDesc: { fontSize: 12, color: COLORS.textGrey, marginTop: 4, lineHeight: 18 },
  dateTextSmall: { fontSize: 11, color: COLORS.textGrey, marginTop: 8 },
  arrowBtn: { 
    width: 32, height: 32, borderRadius: 16, 
    backgroundColor: '#F2F9F7', justifyContent: 'center', alignItems: 'center' 
  },
});

export default Lifestyle;