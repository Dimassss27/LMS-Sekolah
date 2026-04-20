import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const questions = [
  {
    question: "Apa itu Aljabar?",
    options: [
      "Cabang matematika",
      "Bahasa pemrograman",
      "Ilmu fisika",
      "Jenis olahraga",
    ],
    answer: 0,
  },
  {
    question: "Variabel biasanya dilambangkan dengan?",
    options: ["Angka", "Huruf", "Simbol", "Warna"],
    answer: 1,
  },
  {
    question: "Pencetak gol terbanyak sepanjang sejarah sepak bola?",
    options: ["Pelé", "Diego Maradona", "Lionel Messi", "Cristiano Ronaldo"],
    answer: 0,
  },
  {
    question: "Peraih posisi kedua terbanyak di liga inggris?",
    options: ["Liverpoll", "Chelsea", "Arsenal", "Persija"],
    answer: 2,
  },
];

export default function QuizPage() {
  const router = useRouter();

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // 🎬 Animasi
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  // HANDLE JAWABAN
  const handleAnswer = (index: number) => {
    if (selected !== null) return;

    setSelected(index);

    if (index === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent((prev) => prev + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 800);
  };

  // EXIT QUIZ
  const handleExit = () => {
    Alert.alert("Keluar Quiz", "Apakah kamu yakin ingin meninggalkan kuis?", [
      { text: "Batal", style: "cancel" },
      {
        text: "Keluar",
        style: "destructive",
        onPress: () => router.back(),
      },
    ]);
  };

  // 🎬 Trigger Animasi
  useEffect(() => {
    if (showResult) {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 6,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [showResult]);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleExit}>
          <Ionicons name="close" size={26} color="#000" />
        </TouchableOpacity>
      </View>

      {/* PROGRESS */}
      <Text style={styles.progress}>
        Soal {current + 1} / {questions.length}
      </Text>

      {/* QUESTION */}
      <Text style={styles.question}>{questions[current].question}</Text>

      {/* OPTIONS */}
      {questions[current].options.map((item, index) => {
        const isCorrect = index === questions[current].answer;
        const isSelected = index === selected;

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              isSelected && (isCorrect ? styles.correct : styles.wrong),
            ]}
            onPress={() => handleAnswer(index)}
            disabled={selected !== null}
          >
            <Text style={styles.optionText}>{item}</Text>
          </TouchableOpacity>
        );
      })}

      {/* RESULT OVERLAY */}
      {showResult && (
        <View style={styles.overlay}>
          <BlurView intensity={80} style={styles.blur} />

          <Animated.View
            style={[
              styles.resultCard,
              {
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
              },
            ]}
          >
            <Text style={styles.resultTitle}>🎉 Quiz Selesai!</Text>

            <Text style={styles.score}>
              {score} / {questions.length}
            </Text>

            <Text style={styles.percentage}>
              {Math.round((score / questions.length) * 100)}%
            </Text>

            <Text style={styles.feedback}>
              {score === questions.length
                ? "Perfect! 🔥"
                : score >= questions.length / 2
                  ? "Bagus, terus belajar 💪"
                  : "Ayo belajar lagi 🔥"}
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setCurrent(0);
                setScore(0);
                setShowResult(false);
                setSelected(null);

                // reset animasi
                scaleAnim.setValue(0.8);
                opacityAnim.setValue(0);
              }}
            >
              <Text style={styles.buttonText}>Ulangi Quiz</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8fafc",
    paddingTop: 55,
  },

  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 10,
  },

  progress: {
    fontSize: 14,
    color: "#64748b",
    marginBottom: 10,
  },

  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },

  option: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  optionText: {
    fontSize: 14,
  },

  correct: {
    backgroundColor: "#dcfce7",
    borderColor: "#22c55e",
  },

  wrong: {
    backgroundColor: "#fee2e2",
    borderColor: "#ef4444",
  },

  /* OVERLAY */
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  blur: {
    ...StyleSheet.absoluteFillObject,
  },

  resultCard: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    elevation: 10,
  },

  resultTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  score: {
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 10,
  },

  percentage: {
    fontSize: 24,
    color: "#2563EB",
    fontWeight: "bold",
  },

  feedback: {
    marginTop: 10,
    color: "#64748b",
    textAlign: "center",
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
