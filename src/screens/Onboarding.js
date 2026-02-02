// import React from 'react';
// import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { StatusBar } from 'expo-status-bar';

// // CORRECTED IMPORT LINE BELOW:
// import { COLORS, FONTS } from '../themes/theme'; 

// const { width } = Dimensions.get('window');

// const Onboarding = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar style="light" />
//       <View style={styles.content}>
//         <View style={styles.imageContainer}>
//           <View style={styles.pandaWrapper}>
//             <View style={styles.pandaBlob}>
//               <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/235/235359.png' }} style={styles.pandaImage} />
//             </View>
//           </View>
//           <View style={styles.catWrapper}>
//             <Image source={{ uri: 'https://img.freepik.com/free-photo/cute-domestic-kitten-sits-indoor-staring-playfully-generated-by-ai_188544-42918.jpg' }} style={styles.catImage} />
//           </View>
//           <View style={styles.mainCircle}>
//             <Image source={{ uri: 'https://img.freepik.com/free-photo/smiling-young-woman-holding-dog_23-2148865714.jpg' }} style={styles.mainImage} />
//           </View>
//         </View>

//         <View style={styles.textSection}>
//           <Text style={styles.title}>Find a new <Text style={{ color: COLORS.accentYellow }}>pet for you</Text> 👋</Text>
//           <Text style={styles.subtitle}>Find your perfect companion with us! We have some adorable and charming pets waiting for you to meet them.</Text>
//         </View>

//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
//             <Text style={styles.loginButtonText}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: COLORS.primaryGreen },
//   content: { flex: 1, justifyContent: 'space-between', paddingVertical: 30 },
//   imageContainer: { height: width * 1.1, width: '100%', position: 'relative', marginTop: 20 },
//   pandaWrapper: { position: 'absolute', top: 20, left: 30, zIndex: 2 },
//   pandaBlob: { width: 120, height: 120, backgroundColor: COLORS.white, borderRadius: 40, justifyContent: 'center', alignItems: 'center', transform: [{ rotate: '-10deg' }] },
//   pandaImage: { width: 90, height: 90, resizeMode: 'contain' },
//   catWrapper: { position: 'absolute', top: 50, right: -20, zIndex: 1 },
//   catImage: { width: 160, height: 160, borderRadius: 80 },
//   mainCircle: { position: 'absolute', bottom: 20, alignSelf: 'center', width: 280, height: 280, borderRadius: 140, backgroundColor: COLORS.accentYellow, overflow: 'hidden', justifyContent: 'flex-end', zIndex: 3 },
//   mainImage: { width: '100%', height: '110%', resizeMode: 'cover' },
//   textSection: { paddingHorizontal: 40, alignItems: 'center' },
//   title: { fontSize: 32, color: COLORS.white, textAlign: 'center', fontFamily: FONTS.bold, lineHeight: 40 },
//   subtitle: { fontSize: 16, color: COLORS.textLight, textAlign: 'center', marginTop: 15, fontFamily: FONTS.regular, lineHeight: 24 },
//   buttonContainer: { paddingHorizontal: 30, marginBottom: 10 },
//   loginButton: { backgroundColor: COLORS.white, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', width: '100%' },
//   loginButtonText: { color: COLORS.primaryGreen, fontSize: 18, fontFamily: FONTS.bold },
// });

// export default Onboarding;
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS } from '../themes/theme';

const { width } = Dimensions.get('window');

const Onboarding = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primaryGreen }}>
    <View style={styles.content}>
      <View style={styles.imageContainer}>
        <View style={styles.pandaBlob}><Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/235/235359.png' }} style={{ width: 80, height: 80 }} /></View>
        <Image source={{ uri: 'https://img.freepik.com/free-photo/cute-kitten_188544-42918.jpg' }} style={styles.catImage} />
        <View style={styles.mainCircle}><Image source={{ uri: 'https://img.freepik.com/free-photo/smiling-woman-holding-dog_23-2148865714.jpg' }} style={{ width: '100%', height: '100%' }} /></View>
      </View>
      <View style={{ alignItems: 'center', paddingHorizontal: 30 }}>
        <Text style={styles.title}>Find a new <Text style={{ color: COLORS.accentYellow }}>pet for you</Text> 👋</Text>
        <Text style={styles.subtitle}>Find your perfect companion with us! We have some adorable pets waiting for you.</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}><Text style={styles.btnText}>Login</Text></TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  content: { flex: 1, justifyContent: 'space-between', paddingVertical: 40, paddingHorizontal: 20 },
  imageContainer: { height: width, width: '100%' },
  pandaBlob: { position: 'absolute', top: 0, left: 10, width: 110, height: 110, backgroundColor: 'white', borderRadius: 35, transform: [{ rotate: '-10deg' }], justifyContent: 'center', alignItems: 'center' },
  catImage: { position: 'absolute', top: 30, right: -10, width: 140, height: 140, borderRadius: 70 },
  mainCircle: { position: 'absolute', bottom: 0, alignSelf: 'center', width: 260, height: 260, borderRadius: 130, backgroundColor: COLORS.accentYellow, overflow: 'hidden' },
  title: { fontSize: 32, color: 'white', textAlign: 'center', fontFamily: FONTS.bold },
  subtitle: { fontSize: 14, color: '#E0E0E0', textAlign: 'center', marginTop: 15, fontFamily: FONTS.regular },
  btn: { backgroundColor: 'white', height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 },
  btnText: { color: COLORS.primaryGreen, fontSize: 18, fontFamily: FONTS.bold },
});

export default Onboarding;