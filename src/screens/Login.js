import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  KeyboardAvoidingView, 
  Platform,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { 
  ArrowLeft, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  CheckSquare, 
  Square 
} from 'lucide-react-native';
import { COLORS, FONTS } from '../themes/theme';

const Login = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContainer} 
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          
          {/* 1. Back Button */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <ArrowLeft color="black" size={22} />
            </TouchableOpacity>
          </View>

          {/* 2. Logo Section */}
          <View style={styles.logoSection}>
            <View style={styles.logoBox}>
              {/* This is the moon/paw logo box */}
              <Text style={{ fontSize: 40 }}>🌙</Text> 
            </View>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>
              Adopting a pet from a local animal shelter will be your best option.
            </Text>
          </View>

          {/* 3. Input Fields */}
          <View style={styles.formSection}>
            <View style={styles.inputWrapper}>
              <Mail color={COLORS.textGrey} size={20} style={styles.icon} />
              <TextInput 
                placeholder="Enter your gmail" 
                style={styles.input} 
                placeholderTextColor={COLORS.textGrey}
                autoCapitalize="none"
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

            {/* Remember Me & Forget Password Row */}
            <View style={styles.row}>
              <TouchableOpacity 
                style={styles.checkboxContainer} 
                onPress={() => setRememberMe(!rememberMe)}
              >
                {rememberMe ? 
                  <CheckSquare size={20} color={COLORS.primaryGreen} fill={COLORS.primaryGreen} /> : 
                  <Square size={20} color={COLORS.textGrey} />
                }
                <Text style={styles.rememberText}>Remember me</Text>
              </TouchableOpacity>
              
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forget Password</Text>
              </TouchableOpacity>
            </View>

            {/* Login Button */}
            <TouchableOpacity 
              style={styles.loginBtn} 
              activeOpacity={0.8}
              onPress={() => navigation.replace('MainApp')}
            >
              <Text style={styles.loginBtnText}>Login</Text>
            </TouchableOpacity>
          </View>

          {/* 4. Divider */}
          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.line} />
          </View>

          {/* 5. Social Login Buttons */}
          <View style={styles.socialSection}>
            <TouchableOpacity style={styles.socialBtn}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2991/2991148.png' }} style={styles.socialIconImg} />
              <Text style={styles.socialText}>Log in with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/0/747.png' }} style={styles.socialIconImg} />
              <Text style={styles.socialText}>Log in with Apple</Text>
            </TouchableOpacity>
          </View>

          {/* 6. Footer (Sign Up Link) */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signUpLink}>Sign up</Text>
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
    backgroundColor: '#F8F4E9' // The exact cream background color
  },
  scrollContainer: { 
    paddingHorizontal: 25, 
    paddingBottom: 40,
    flexGrow: 1,
  },
  header: {
    paddingTop: 10,
    height: 60,
    justifyContent: 'center',
  },
  backButton: { 
    width: 45, 
    height: 45, 
    borderRadius: 22.5, 
    backgroundColor: 'white', 
    justifyContent: 'center', 
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  logoSection: { 
    alignItems: 'center', 
    marginTop: 10 
  },
  logoBox: { 
    width: 85, 
    height: 85, 
    backgroundColor: '#3A7D6A', 
    borderRadius: 22, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 20 
  },
  title: { 
    fontSize: 32, 
    fontFamily: FONTS.bold, 
    color: '#1A1A1A' 
  },
  subtitle: { 
    fontSize: 14, 
    fontFamily: FONTS.regular, 
    color: '#7D7D7D', 
    textAlign: 'center', 
    marginTop: 10, 
    paddingHorizontal: 30,
    lineHeight: 20
  },
  formSection: { 
    marginTop: 35 
  },
  inputWrapper: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    height: 60, 
    borderRadius: 15, 
    paddingHorizontal: 15, 
    marginBottom: 15, 
    borderWidth: 1, 
    borderColor: '#EFEFEF' 
  },
  icon: { 
    marginRight: 12 
  },
  input: { 
    flex: 1, 
    fontSize: 16, 
    color: '#1A1A1A', 
    fontFamily: FONTS.regular 
  },
  row: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginTop: 5
  },
  checkboxContainer: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  rememberText: { 
    marginLeft: 8, 
    color: '#1A1A1A', 
    fontSize: 14,
    fontFamily: FONTS.regular 
  },
  forgotText: { 
    color: '#3A7D6A', 
    fontFamily: FONTS.bold,
    fontSize: 14
  },
  loginBtn: { 
    backgroundColor: '#3A7D6A', 
    height: 60, 
    borderRadius: 30, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 30 
  },
  loginBtnText: { 
    color: 'white', 
    fontSize: 18, 
    fontFamily: FONTS.bold 
  },
  divider: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 30 
  },
  line: { 
    flex: 1, 
    height: 1, 
    backgroundColor: '#E0E0E0' 
  },
  dividerText: { 
    marginHorizontal: 15, 
    color: '#7D7D7D', 
    fontSize: 14 
  },
  socialSection: { 
    gap: 15 
  },
  socialBtn: { 
    flexDirection: 'row',
    backgroundColor: 'white', 
    height: 60, 
    borderRadius: 15, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderWidth: 1, 
    borderColor: '#EFEFEF' 
  },
  socialIconImg: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  socialText: { 
    fontSize: 16, 
    color: '#1A1A1A', 
    fontFamily: FONTS.regular 
  },
  footer: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 'auto', 
    paddingTop: 30 
  },
  footerText: { 
    color: '#7D7D7D', 
    fontFamily: FONTS.regular 
  },
  signUpLink: { 
    color: '#3A7D6A', 
    fontFamily: FONTS.bold 
  },
});

export default Login;