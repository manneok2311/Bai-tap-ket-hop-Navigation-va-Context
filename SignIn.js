import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuth } from './App';
import { Image } from 'react-native';
const CustomTextInput = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      placeholderTextColor="#999"
    />
  );
};
const IconButton = ({ icon, text, onPress, backgroundColor, borderColor, textColor = '#000' }) => {
  return (
    <TouchableOpacity
      style={[
        styles.iconButton,
        {
          backgroundColor,
          borderColor,
          borderWidth: borderColor ? 1 : 0,
        },
      ]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={[styles.iconButtonText, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = () => {
    if (email === 'manhleoknoinhieu@gmail.com' && password === '1234') {
      login({ email, name: 'Manh Le' });
      Alert.alert('Đăng nhập thành công!', 'Chào mừng bạn đến với ứng dụng.');
    } else {
      Alert.alert('Lỗi đăng nhập', 'Email hoặc mật khẩu không đúng.');
    }
  };

  const handleGoogleLogin = () => {
    Alert.alert('Đăng nhập với Google', 'Chức năng này đang phát triển.');
  };

  const handleFacebookLogin = () => {
    Alert.alert('Đăng nhập với Facebook', 'Chức năng này đang phát triển.');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'\n'}{'\n'}
        Sign In</Text>

      <Text style={styles.label}>Email ID</Text>
      <CustomTextInput
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <CustomTextInput
        placeholder="Enter your password here!"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialButtons}>
        <IconButton
          icon={
            <Image
            source={require('./assets/google.png')}
              style={{ width: 20, height: 20 }}
            />
          }
          text="Google"
          backgroundColor="#fff"
          borderColor="#ddd"
          onPress={handleGoogleLogin}
        />  
        <IconButton
          icon={
            <Image
            source={require('./assets/facebook.png')}
              style={{ width: 20, height: 20 }}
            />
          }
          text="Facebook"
          textColor="#fff"
          backgroundColor="#3b5998"
          onPress={handleFacebookLogin}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>
          Not yet a member? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  forgotText: {
    color: '#ff9800',
    textAlign: 'right',
    marginVertical: 10,
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#ff9800',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
    color: '#666',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    justifyContent: 'center',
    width: '48%',
  },
  iconContainer: {
    marginRight: 10,
  },
  iconButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  googleIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4285f4',
  },
  facebookIcon: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  signUpText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 14,
  },
  signUpLink: {
    color: '#ff9800',
    fontWeight: 'bold',
  },
});

export default SignIn;