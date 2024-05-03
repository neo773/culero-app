import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScree = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white items-center justify-center p-4">
      <Text className="text-3xl font-bold text-blue-800">CULERO</Text>
      <Text className="text-2xl font-semibold mt-2">Welcome back</Text>
      <Text className="text-center text-lg mt-1">Embark on a Journey of Professional Growth and Collaboration!</Text>

      <TouchableOpacity className="mt-4 bg-blue-500 p-3 rounded-lg w-full" onPress={() => {}}>
        <Text className="text-white text-center">Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-2 bg-gray-200 p-3 rounded-lg w-full" onPress={() => {}}>
        <Text className="text-center">See other options</Text>
      </TouchableOpacity>

      <View className="flex-row items-center my-4">
        <View className="flex-1 h-px bg-gray-300" />
        <Text className="px-4 text-gray-500">OR</Text>
        <View className="flex-1 h-px bg-gray-300" />
      </View>

      <TextInput
        className="mt-2 bg-gray-100 p-3 rounded-lg w-full"
        placeholder="Enter your email address"
        keyboardType="email-address"
      />

      <TouchableOpacity className="mt-4 bg-blue-600 p-3 rounded-lg w-full" onPress={() => {}}>
        <Text className="text-white text-center">Sign In</Text>
      </TouchableOpacity>

      <Text className="text-sm text-gray-600 mt-4">
        By continuing, you agree to Culero <Text className="text-blue-600 underline">Terms of Service</Text> and <Text className="text-blue-600 underline">Privacy Policy</Text>.
      </Text>

      <TouchableOpacity className="mt-2" onPress={() => navigation.navigate('ForgotPassword')}>
        <Text className="text-blue-600 underline">Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-2" onPress={() => navigation.navigate('SignUp')}>
        <Text className="text-blue-600 underline">Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScree;