import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Home, LayoutGrid, BookOpen, PawPrint } from 'lucide-react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { COLORS, FONTS } from '../themes/theme';

const BottomNav = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const NavItem = ({ screenName, label, IconComponent }) => {
    const isActive = route.name === screenName;
    return (
      <TouchableOpacity
        style={[styles.tab, isActive && styles.activeTab]}
        onPress={() => navigation.navigate(screenName)}
      >
        <IconComponent size={20} color={isActive ? COLORS.white : COLORS.textGrey} />
        {isActive && <Text style={styles.activeTabText}>{label}</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.navWrapper}>
      <View style={styles.container}>
        <NavItem screenName="Home" label="Home" IconComponent={Home} />
        <NavItem screenName="Categories" label="Categories" IconComponent={LayoutGrid} />
        <NavItem screenName="Lifestyle" label="Lifestyle" IconComponent={BookOpen} />
        <NavItem screenName="Pet" label="Pet" IconComponent={PawPrint} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navWrapper: { position: 'absolute', bottom: 30, width: '100%', alignItems: 'center' },
  container: { flexDirection: 'row', backgroundColor: COLORS.white, width: '92%', height: 70, borderRadius: 35, alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 10, elevation: 15, shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 10, shadowOffset: { width: 0, height: 5 } },
  tab: { padding: 12, borderRadius: 30, flexDirection: 'row', alignItems: 'center' },
  activeTab: { backgroundColor: COLORS.primaryGreen, paddingHorizontal: 20 },
  activeTabText: { color: COLORS.white, marginLeft: 8, fontFamily: FONTS.bold, fontSize: 13 },
});

export default BottomNav;