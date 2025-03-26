import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuth } from './App';

// Màn hình Profile
const Profile = () => {
  const { user, logout } = useAuth();
  const handleSignOut = () => {
    Alert.alert(
      'Xác nhận đăng xuất',
      'Bạn có chắc chắn muốn đăng xuất?',
      [
        { text: 'Hủy', style: 'cancel' },
        { text: 'Đăng xuất', onPress: () => logout() },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      {}
      <View style={styles.header}>
        <Image
         source={require('./assets/anh4.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.name}>{user?.name}</Text>
      </View>

      {}
      <View style={styles.info}>
        <Text style={styles.infoText}>
          I have 5 years of experience in native mobile apps development, now I am learning React Native
        </Text>
        <Text style={styles.infoText}>Email: {user?.email || 'test@example.com'}</Text>
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#2196f3',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  info: {
    padding: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  signOutButton: {
    backgroundColor: '#ff9800',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '50%',
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;