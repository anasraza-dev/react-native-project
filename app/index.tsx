import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="h-full w-full ">
      <ScrollView
        className="h-full w-full px-5 bg-slate-950"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View className="mt-4 flex-row items-center justify-between">
          <View>
            <Text className="text-slate-400 text-sm">Welcome back</Text>
            <Text className="text-white text-2xl font-bold mt-1">
              Muhammad 👋
            </Text>
          </View>

          <View className="h-12 w-12 rounded-full bg-indigo-500 items-center justify-center">
            <Text className="text-white text-lg font-bold">M</Text>
          </View>
        </View>

        {/* Hero Card */}
        <View className="mt-8 rounded-3xl bg-indigo-600 p-6">
          <Text className="text-white text-3xl font-bold leading-9">
            Build your React Native app faster
          </Text>

          <Text className="text-indigo-100 mt-3 text-base leading-6">
            Expo 54 + NativeWind se beautiful UI create karo with Tailwind
            classes.
          </Text>

          <Pressable className="mt-6 bg-white rounded-2xl py-4 items-center">
            <Text className="text-indigo-600 font-bold text-base">
              Get Started
            </Text>
          </Pressable>
        </View>

        {/* Stats */}
        <View className="mt-6 flex-row gap-4">
          <View className="flex-1 rounded-2xl bg-slate-900 p-5 border border-slate-800">
            <Text className="text-white text-2xl font-bold">24</Text>
            <Text className="text-slate-400 mt-1">Projects</Text>
          </View>

          <View className="flex-1 rounded-2xl bg-slate-900 p-5 border border-slate-800">
            <Text className="text-white text-2xl font-bold">12</Text>
            <Text className="text-slate-400 mt-1">Tasks</Text>
          </View>
        </View>

        {/* Section Title */}
        <View className="mt-8 flex-row items-center justify-between">
          <Text className="text-white text-xl font-bold">Recent Activity</Text>
          <Text className="text-indigo-400 font-semibold">See all</Text>
        </View>

        {/* Activity Cards */}
        <View className="mt-4 gap-4">
          <View className="rounded-2xl bg-slate-900 p-5 border border-slate-800">
            <Text className="text-white text-lg font-semibold">
              NativeWind Setup
            </Text>
            <Text className="text-slate-400 mt-2 leading-5">
              Tailwind CSS v4 aur NativeWind v5 preview successfully configure
              ho gaya.
            </Text>
          </View>

          <View className="rounded-2xl bg-slate-900 p-5 border border-slate-800">
            <Text className="text-white text-lg font-semibold">
              Expo App Running
            </Text>
            <Text className="text-slate-400 mt-2 leading-5">
              Metro bundler cache clear karke app start kar diya.
            </Text>
          </View>

          <View className="rounded-2xl bg-slate-900 p-5 border border-slate-800 mb-8">
            <Text className="text-white text-lg font-semibold">
              UI Screen Created
            </Text>
            <Text className="text-slate-400 mt-2 leading-5">
              Ab aap NativeWind classes se React Native UI bana sakte ho.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
