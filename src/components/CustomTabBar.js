// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Home, LayoutGrid, BookOpen, PawPrint } from 'lucide-react-native';
// import { COLORS, FONTS } from '../themes/theme';

// const CustomTabBar = ({ state, descriptors, navigation }) => {
//   return (
//     <View style={styles.navWrapper}>
//       <View style={styles.container}>
//         {state.routes.map((route, index) => {
//           const { options } = descriptors[route.key];
//           const isFocused = state.index === index;

//           const onPress = () => {
//             const event = navigation.emit({
//               type: 'tabPress',
//               target: route.key,
//               canPreventDefault: true,
//             });

//             if (!isFocused && !event.defaultPrevented) {
//               navigation.navigate(route.name);
//             }
//           };

//           // Map icons to route names
//           const Icon = () => {
//             if (route.name === 'Home') return <Home size={20} color={isFocused ? 'white' : 'grey'} />;
//             if (route.name === 'Categories') return <LayoutGrid size={20} color={isFocused ? 'white' : 'grey'} />;
//             if (route.name === 'Lifestyle') return <BookOpen size={20} color={isFocused ? 'white' : 'grey'} />;
//             if (route.name === 'Pet') return <PawPrint size={20} color={isFocused ? 'white' : 'grey'} />;
//             return null;
//           };

//           return (
//             <TouchableOpacity
//               key={index}
//               onPress={onPress}
//               style={[styles.tab, isFocused && styles.activeTab]}
//             >
//               <Icon />
//               {isFocused && (
//                 <Text style={styles.activeTabText}>{route.name}</Text>
//               )}
//             </TouchableOpacity>
//           );
//         })}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   navWrapper: {
//     position: 'absolute',
//     bottom: 30,
//     width: '100%',
//     alignItems: 'center',
//   },
//   container: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     width: '92%',
//     height: 75,
//     borderRadius: 40,
//     alignItems: 'center',
//     justifyContent: 'space-around',
//     paddingHorizontal: 10,
//     elevation: 15,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//   },
//   tab: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderRadius: 30,
//   },
//   activeTab: {
//     backgroundColor: COLORS.primaryGreen,
//     paddingHorizontal: 18,
//   },
//   activeTabText: {
//     color: 'white',
//     marginLeft: 8,
//     fontFamily: FONTS.bold,
//     fontSize: 13,
//   },
// });

// export default CustomTabBar;
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Home, LayoutGrid, BookOpen, PawPrint } from 'lucide-react-native';
import { COLORS, FONTS } from '../themes/theme';

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.navWrapper}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          // Render icon based on route name
          const renderIcon = (name, color) => {
            switch (name) {
              case 'Home': return <Home size={22} color={color} />;
              case 'Categories': return <LayoutGrid size={22} color={color} />;
              case 'Lifestyle': return <BookOpen size={22} color={color} />;
              case 'Pet': return <PawPrint size={22} color={color} />;
              default: return null;
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              activeOpacity={0.8}
              style={[styles.tab, isFocused && styles.activeTab]}
            >
              {renderIcon(route.name, isFocused ? COLORS.white : COLORS.textGrey)}
              {isFocused && (
                <Text style={styles.activeTabText}>{route.name}</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navWrapper: { position: 'absolute', bottom: 30, width: '100%', alignItems: 'center' },
  container: { 
    flexDirection: 'row', 
    backgroundColor: COLORS.white, 
    width: '92%', 
    height: 70, 
    borderRadius: 35, 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    paddingHorizontal: 10, 
    elevation: 10, 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 10 
  },
  tab: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 12, borderRadius: 25 },
  activeTab: { backgroundColor: COLORS.primaryGreen, paddingHorizontal: 20 },
  activeTabText: { color: COLORS.white, marginLeft: 8, fontFamily: FONTS.bold, fontSize: 13 },
});

export default CustomTabBar;