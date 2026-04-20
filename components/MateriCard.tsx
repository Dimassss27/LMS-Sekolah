import { StyleSheet, Text, View } from "react-native";

export default function MateriCard({ title, kelas }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.kelas}>{kelas}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.footer}>Materi baru ditambahkan</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  kelas: {
    color: "#2563EB",
    fontSize: 12,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e293b",
  },
  footer: {
    marginTop: 10,
    fontSize: 12,
    color: "#64748b",
  },
});
