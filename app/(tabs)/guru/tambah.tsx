import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function TambahMateri() {
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState("");
  const [resources, setResources] = useState([""]);
  const [tugas, setTugas] = useState([""]);
  const [quiz, setQuiz] = useState([""]);

  // tambah field dinamis
  const addField = (setter: any, data: string[]) => {
    setter([...data, ""]);
  };

  const updateField = (
    setter: any,
    data: string[],
    index: number,
    value: string,
  ) => {
    const updated = [...data];
    updated[index] = value;
    setter(updated);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tambah Materi</Text>

      {/* TITLE */}
      <Text style={styles.label}>Judul Materi</Text>
      <TextInput
        style={styles.input}
        placeholder="Contoh: Aljabar Dasar"
        value={title}
        onChangeText={setTitle}
      />

      {/* VIDEO */}
      <Text style={styles.label}>Link Video</Text>
      <TextInput
        style={styles.input}
        placeholder="https://youtube.com/..."
        value={video}
        onChangeText={setVideo}
      />

      {/* RESOURCES */}
      <Text style={styles.label}>Reading Resources</Text>
      {resources.map((item, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder="Link / nama file"
          value={item}
          onChangeText={(text) =>
            updateField(setResources, resources, index, text)
          }
        />
      ))}

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => addField(setResources, resources)}
      >
        <Text style={styles.addText}>+ Tambah Resource</Text>
      </TouchableOpacity>

      {/* TUGAS */}
      <Text style={styles.label}>Tugas</Text>
      {tugas.map((item, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder="Judul tugas"
          value={item}
          onChangeText={(text) => updateField(setTugas, tugas, index, text)}
        />
      ))}

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => addField(setTugas, tugas)}
      >
        <Text style={styles.addText}>+ Tambah Tugas</Text>
      </TouchableOpacity>

      {/* QUIZ */}
      <Text style={styles.label}>Quiz</Text>
      {quiz.map((item, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder="Pertanyaan quiz"
          value={item}
          onChangeText={(text) => updateField(setQuiz, quiz, index, text)}
        />
      ))}

      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => addField(setQuiz, quiz)}
      >
        <Text style={styles.addText}>+ Tambah Quiz</Text>
      </TouchableOpacity>

      {/* SUBMIT */}
      <TouchableOpacity style={styles.submit}>
        <Text style={styles.submitText}>Simpan Materi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 15,
  },

  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 55,
  },

  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },

  addBtn: {
    marginBottom: 10,
  },

  addText: {
    color: "#2563EB",
    fontWeight: "600",
  },

  submit: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
  },

  submitText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
