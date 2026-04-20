import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const tugasData = [
  {
    id: "1",
    title: "Latihan Aljabar",
    mapel: "Matematika",
    deadline: "Hari ini",
    status: "pending",
  },
  {
    id: "2",
    title: "Membuat Puisi",
    mapel: "Bahasa Indonesia",
    deadline: "Besok",
    status: "done",
  },
  {
    id: "3",
    title: "Laporan Praktikum",
    mapel: "IPA",
    deadline: "3 hari lagi",
    status: "pending",
  },
];

export default function TugasPage() {
  const [filter, setFilter] = useState("all");

  const filteredData = tugasData.filter((item) => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tugas</Text>

      {/* FILTER */}
      <View style={styles.filterRow}>
        {["all", "pending", "done"].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.filterBtn, filter === item && styles.filterActive]}
            onPress={() => setFilter(item)}
          >
            <Text
              style={
                filter === item ? styles.filterTextActive : styles.filterText
              }
            >
              {item === "all"
                ? "Semua"
                : item === "pending"
                  ? "Pending"
                  : "Selesai"}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* LIST */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.rowBetween}>
              <Text style={styles.title}>{item.title}</Text>

              <View
                style={[
                  styles.badge,
                  item.status === "done" ? styles.done : styles.pending,
                ]}
              >
                <Text style={styles.badgeText}>
                  {item.status === "done" ? "Selesai" : "Pending"}
                </Text>
              </View>
            </View>

            <Text style={styles.mapel}>{item.mapel}</Text>

            <View style={styles.rowBetween}>
              <Text style={styles.deadline}>⏰ {item.deadline}</Text>

              {item.status === "pending" && (
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Kumpulkan</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 15,
    paddingTop: 45,
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  /* FILTER */
  filterRow: {
    flexDirection: "row",
    marginBottom: 15,
  },

  filterBtn: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#e2e8f0",
    marginRight: 10,
  },

  filterActive: {
    backgroundColor: "#2563EB",
  },

  filterText: {
    color: "#475569",
  },

  filterTextActive: {
    color: "#fff",
  },

  /* CARD */
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 2,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
  },

  mapel: {
    color: "#64748b",
    marginVertical: 5,
  },

  deadline: {
    fontSize: 12,
    color: "#ef4444",
  },

  /* BADGE */
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  pending: {
    backgroundColor: "#fee2e2",
  },

  done: {
    backgroundColor: "#dcfce7",
  },

  badgeText: {
    fontSize: 11,
    fontWeight: "600",
  },

  /* BUTTON */
  button: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },

  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});
