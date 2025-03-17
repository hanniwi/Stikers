import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="tab1"
        options={{
          title: 'Galería',
          tabBarIcon: ({ color }) => <FontAwesome name="photo" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="tab2"
        options={{
          title: 'Pegatinas',
          tabBarIcon: ({ color }) => <FontAwesome name="sticky-note" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}