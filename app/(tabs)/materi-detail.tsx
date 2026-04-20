import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MateriDetail() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* HEADER SIMPLE */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#2563EB" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Cognitive Psychology</Text>
      </View>

      {/* VIDEO */}
      <View style={styles.videoCard}>
        <Image
          source={{
            uri: "https://img.youtube.com/vi/Ke90Tje7VS0/maxresdefault.jpg",
          }}
          style={styles.video}
        />

        <View style={styles.play}>
          <Ionicons name="play" size={26} color="#fff" />
        </View>
      </View>

      {/* READING */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Reading Resources</Text>
          <Text style={styles.link}>3 FILES</Text>
        </View>

        <View style={styles.file}>
          <Text style={styles.fileText}>📄 Introduction_to_ANN.pdf</Text>
        </View>

        <View style={styles.file}>
          <Text style={styles.fileText}>🔗 Biological_Analogies.web</Text>
        </View>
      </View>

      {/* QUIZ */}
      <TouchableOpacity
        style={styles.quiz}
        onPress={() => router.push("/quiz")}
      >
        <Text style={styles.quizSmall}>KNOWLEDGE CHECK</Text>
        <Text style={styles.quizTitle}>Take Quiz</Text>
      </TouchableOpacity>

      {/* TUTOR */}
      <TouchableOpacity style={styles.tutor}>
        <Text style={styles.tutorSmall}>NEED HELP?</Text>
        <Text style={styles.tutorTitle}>Ask Tutor</Text>
      </TouchableOpacity>

      {/* COURSE CONTENT */}
      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Course Content</Text>
          <Text style={styles.progress}>45% COMPLETE</Text>
        </View>

        {/* ACTIVE CHAPTER */}
        <View style={styles.chapterActive}>
          <Text style={styles.chapterSmall}>CHAPTER 2</Text>
          <Text style={styles.chapterTitle}>The Biological Basis</Text>
        </View>

        {/* LESSON */}
        <View style={styles.lessonActive}>
          <Text style={styles.lessonActiveText}>
            ▶ Basics of Neural Networks
          </Text>
        </View>

        <View style={styles.lesson}>
          <Text style={styles.lessonText}>○ Synaptic Plasticity</Text>
        </View>

        {/* LOCKED */}
        <View style={styles.locked}>
          <Text style={styles.lockedText}>🔒 Visual Perception</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f5f9",
    padding: 15,
    paddingTop: 55,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 10,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  /* VIDEO */
  videoCard: {
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 15,
    marginBottom: 15,
  },

  video: {
    width: "100%",
    height: 180,
  },

  play: {
    position: "absolute",
    top: "40%",
    left: "45%",
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 50,
  },

  /* CARD */
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  sectionTitle: {
    fontWeight: "600",
    fontSize: 15,
  },

  link: {
    color: "#2563EB",
    fontSize: 12,
  },

  file: {
    backgroundColor: "#f8fafc",
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },

  fileText: {
    fontSize: 13,
  },

  /* QUIZ */
  quiz: {
    backgroundColor: "#2563EB",
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
  },

  quizSmall: {
    color: "#c7d2fe",
    fontSize: 12,
  },

  quizTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  /* TUTOR */
  tutor: {
    backgroundColor: "#e2e8f0",
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
  },

  tutorSmall: {
    fontSize: 12,
    color: "#475569",
  },

  tutorTitle: {
    fontSize: 16,
    fontWeight: "600",
  },

  /* COURSE */
  progress: {
    fontSize: 12,
    color: "#2563EB",
  },

  chapterActive: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 14,
    marginBottom: 10,
  },

  chapterSmall: {
    color: "#c7d2fe",
    fontSize: 12,
  },

  chapterTitle: {
    color: "#fff",
    fontWeight: "bold",
  },

  lessonActive: {
    backgroundColor: "#e0edff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },

  lessonActiveText: {
    color: "#2563EB",
  },

  lesson: {
    padding: 10,
  },

  lessonText: {
    color: "#64748b",
  },

  locked: {
    padding: 10,
  },

  lockedText: {
    color: "#94a3b8",
  },
});
