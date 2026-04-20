import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function KelasCard({ title, guru, color, onPress }: any) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, { backgroundColor: color }]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.guru}>{guru}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  guru: {
    color: "#e0e7ff",
    marginTop: 5,
  },
});
