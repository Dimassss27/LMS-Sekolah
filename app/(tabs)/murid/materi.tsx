import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const data = [
  {
    id: "1",
    title: "Aljabar Dasar",
    guru: "Pak Budi",
    image: "https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
  },
  {
    id: "2",
    title: "Puisi Modern",
    guru: "Bu Sari",
    image: "https://img.youtube.com/vi/tgbNymZ7vqY/maxresdefault.jpg",
  },
];

export default function MateriList() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Materi Tersedia</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/materi-detail",
                params: { title: item.title, guru: item.guru },
              })
            }
          >
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.guru}>👨‍🏫 {item.guru}</Text>
            </View>
          </TouchableOpacity>
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
    paddingTop: 55,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 35,
  },
  card: {
    backgroundColor: "#2563EB",
    borderRadius: 12,
    marginBottom: 15,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  guru: {
    fontSize: 12,
    color: "#fff",
    marginTop: 5,
  },
});
