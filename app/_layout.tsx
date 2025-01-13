import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import 'react-native-reanimated';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}
export default function RootLayout() {
  const router = useRouter();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="(modals)/login"
      options={{
        title: "Login or Signup",
        headerTitleStyle: {
          fontFamily: "Poppins_600SemiBold",
        },
        presentation: 'modal',
        headerLeft:()=>{
          return <TouchableOpacity onPress={()=>router.back()}>
            <Ionicons name="close-outline" size={28}  />
          </TouchableOpacity>
        }
      }}
    />
    <Stack.Screen name="listing/[id]" options={{headerTitle:""}}/>
    <Stack.Screen name="(modals)/booking"options={{headerTitle:"",
      presentation:"transparentModal",
      animation:'fade'
    }}/>
  </Stack>
  );
}
