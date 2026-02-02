import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react-native';
import { COLORS, FONTS } from '../themes/theme';

const SignUp = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      {/* KeyboardAvoidingView prevents the layout from squishing when typing */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContainer} 
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          
          {/* Header */}
          <View style={styles.topSection}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <ArrowLeft color={COLORS.textDark} size={22} />
            </TouchableOpacity>
          </View>

          {/* Logo & Welcome */}
          <View style={styles.logoSection}>
            <View style={styles.logoBox}>
               {/* This is the moon icon. For pixel perfect, use an Image asset if available */}
               <Text style={{fontSize: 40}}>🌙</Text>
            </View>
            <Text style={styles.title}>Pets loving families</Text>
            <Text style={styles.subtitle}>
              Create your account to explore adoptable pets, save your favorites, and connect directly with trusted shelters.
            </Text>
          </View>

          {/* Form Fields */}
          <View style={styles.formSection}>
            <View style={styles.inputWrapper}>
              <Mail color={COLORS.textGrey} size={20} style={styles.icon} />
              <TextInput 
                placeholder="Enter your gmail" 
                style={styles.input} 
                placeholderTextColor={COLORS.textGrey}
                keyboardType="email-address"
              />
            </View>

            <View style={styles.inputWrapper}>
              <Lock color={COLORS.textGrey} size={20} style={styles.icon} />
              <TextInput 
                placeholder="Password" 
                style={styles.input} 
                secureTextEntry={!passwordVisible} 
                placeholderTextColor={COLORS.textGrey}
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                {passwordVisible ? <EyeOff color={COLORS.textGrey} size={20} /> : <Eye color={COLORS.textGrey} size={20} />}
              </TouchableOpacity>
            </View>

            <View style={styles.inputWrapper}>
              <Lock color={COLORS.textGrey} size={20} style={styles.icon} />
              <TextInput 
                placeholder="Confirm Password" 
                style={styles.input} 
                secureTextEntry={!confirmVisible} 
                placeholderTextColor={COLORS.textGrey}
              />
              <TouchableOpacity onPress={() => setConfirmVisible(!confirmVisible)}>
                {confirmVisible ? <EyeOff color={COLORS.textGrey} size={20} /> : <Eye color={COLORS.textGrey} size={20} />}
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.primaryBtn} activeOpacity={0.8}>
              <Text style={styles.primaryBtnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.line} />
          </View>

          {/* Social Buttons */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn} activeOpacity={0.7}>
               <Text style={styles.socialText}>G  Log in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialBtn} activeOpacity={0.7}>
               <Text style={styles.socialText}>  Log in with Apple</Text>
            </TouchableOpacity>
          </View>

          {/* Footer - Moved inside ScrollView to ensure it's always visible */}
          <View style={styles.footer}>
             <Text style={styles.footerText}>Already have an account? </Text>
             <TouchableOpacity onPress={() => navigation.navigate('Login')}>
               <Text style={styles.linkText}>Login</Text>
             </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.backgroundBeige 
  },
  scrollContainer: { 
    paddingHorizontal: 25, 
    paddingBottom: 50, // Added more padding for the bottom
    flexGrow: 1,
  },
  topSection: {
    paddingTop: 10,
    marginBottom: 10,
  },
  backButton: { 
    width: 45, 
    height: 45, 
    borderRadius: 25, 
    backgroundColor: COLORS.white, 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 4, // Higher elevation for Android shadow
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  logoSection: { 
    alignItems: 'center', 
    marginTop: 5 
  },
  logoBox: { 
    width: 80, 
    height: 80, 
    backgroundColor: COLORS.primaryGreen, 
    borderRadius: 22, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 15 
  },
  title: { 
    fontSize: 26, 
    fontFamily: FONTS.bold, 
    color: COLORS.textDark, 
    textAlign: 'center' 
  },
  subtitle: { 
    fontSize: 13, 
    fontFamily: FONTS.regular, 
    color: COLORS.textGrey, 
    textAlign: 'center', 
    marginTop: 8, 
    paddingHorizontal: 20, 
    lineHeight: 18 
  },
  formSection: { 
    marginTop: 25 
  },
  inputWrapper: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: COLORS.white, 
    height: 58, 
    borderRadius: 15, 
    paddingHorizontal: 15, 
    marginBottom: 12, 
    borderWidth: 1, 
    borderColor: COLORS.borderLight 
  },
  icon: { 
    marginRight: 10 
  },
  input: { 
    flex: 1, 
    fontSize: 15, 
    color: COLORS.textDark, 
    fontFamily: FONTS.regular 
  },
  primaryBtn: { 
    backgroundColor: COLORS.primaryGreen, 
    height: 58, 
    borderRadius: 30, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 10 
  },
  primaryBtnText: { 
    color: COLORS.white, 
    fontSize: 18, 
    fontFamily: FONTS.bold 
  },
  divider: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 20 
  },
  line: { 
    flex: 1, 
    height: 1, 
    backgroundColor: '#E0E0E0' 
  },
  dividerText: { 
    marginHorizontal: 15, 
    color: COLORS.textGrey,
    fontSize: 12
  },
  socialRow: { 
    gap: 12 
  },
  socialBtn: { 
    backgroundColor: COLORS.white, 
    height: 58, 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: COLORS.borderLight 
  },
  socialText: { 
    fontSize: 15, 
    color: COLORS.textDark, 
    fontFamily: FONTS.regular 
  },
  footer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 25,
    paddingBottom: 20
  },
  footerText: { 
    color: COLORS.textGrey, 
    fontFamily: FONTS.regular 
  },
  linkText: { 
    color: COLORS.primaryGreen, 
    fontFamily: FONTS.bold 
  },
});

export default SignUp;