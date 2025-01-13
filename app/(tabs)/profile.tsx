import { View, Text, Button, StyleSheet } from 'react-native';
import React from 'react';
import { useAuth } from '@clerk/clerk-expo';
import { Link } from 'expo-router';

const Profile = () => {
  const { signOut, isSignedIn } = useAuth();

  return (
    <View style={styles.container}>
      {isSignedIn ? (
        <Button title="Log Out" onPress={() => signOut()} />
      ) : (
        <Link href={'/(modals)/login'}>
          <Text style={styles.loginText}>Login</Text>
        </Link>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  loginText: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});