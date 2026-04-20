import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ gestureEnabled: false }} />
      <Stack.Screen name="login" options={{ gestureEnabled: false }} />
      <Stack.Screen name="guru" options={{ gestureEnabled: false }} />
      <Stack.Screen name="murid" options={{ gestureEnabled: false }} />
    </Stack>
  );
}
