import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const dataMateri = [
  {
    id: "1",
    title: "Aljabar Dasar",
    mapel: "Matematika",
    guru: "Pak Budi",
    progress: 75,
  },
  {
    id: "2",
    title: "Puisi Modern",
    mapel: "Bahasa Indonesia",
    guru: "Bu Sari",
    progress: 100,
  },
  {
    id: "3",
    title: "Gerak Lurus",
    mapel: "Fisika",
    guru: "Pak Anwar",
    progress: 30,
  },
];

const dataTugas = [
  {
    id: "1",
    title: "Latihan Aljabar",
    mapel: "Matematika",
    deadline: "20 Apr",
    status: "Belum Selesai",
  },
  {
    id: "2",
    title: "Analisis Puisi",
    mapel: "Bahasa Indonesia",
    deadline: "22 Apr",
    status: "Selesai",
  },
];

export default function DashboardMurid() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* HEADER - Blue with Wave */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.greeting}>Halo, Murid 👋</Text>
            <Text style={styles.sub}>Semangat belajar hari ini!</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/murid/profile")}
            activeOpacity={0.7}
            style={{ padding: 5 }}
          >
            <Image
              source={{ uri: "https://i.pravatar.cc/100" }}
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
          </TouchableOpacity>
        </View>
        {/* Wave Effect */}
        <View style={styles.waveContainer}>
          <View style={styles.wave} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* SECTION WELCOME CARD */}
        <View style={styles.welcomeCard}>
          <View style={styles.welcomeContent}>
            <Text style={styles.welcomeTitle}>📖 Belajar Yuk!</Text>
            <Text style={styles.welcomeText}>
              Kamu sudah menyelesaikan 2 materi hari ini
            </Text>
          </View>
          <View style={styles.welcomeIcon}>
            <Text style={{ fontSize: 40 }}>🎯</Text>
          </View>
        </View>

        {/* SECTION MATERI BERLANJUT */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionIcon}>📚</Text>
            <Text style={styles.sectionTitle}>Materi Berlangsung</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/murid/materi")}>
            <Text style={styles.seeAll}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.materiScroll}
        >
          {dataMateri.map((item) => (
            <TouchableOpacity key={item.id} style={styles.materiCard}>
              <View style={styles.materiHeader}>
                <View style={styles.mapelBadge}>
                  <Text style={styles.mapelText}>{item.mapel}</Text>
                </View>
              </View>
              <Text style={styles.materiTitle}>{item.title}</Text>
              <Text style={styles.guruText}>👨‍🏫 {item.guru}</Text>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${item.progress}%` },
                    ]}
                  />
                </View>
                <Text style={styles.progressText}>{item.progress}%</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* SECTION TUGAS */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionIcon}>📝</Text>
            <Text style={styles.sectionTitle}>Tugas Terbaru</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/murid/tugas")}>
            <Text style={styles.seeAll}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tugasContainer}>
          {dataTugas.map((item) => (
            <TouchableOpacity key={item.id} style={styles.tugasCard}>
              <View style={styles.tugasLeft}>
                <View
                  style={[
                    styles.tugasIcon,
                    {
                      backgroundColor:
                        item.status === "Selesai" ? "#DCFCE7" : "#FEF3C7",
                    },
                  ]}
                >
                  <Text style={{ fontSize: 20 }}>
                    {item.status === "Selesai" ? "✅" : "📝"}
                  </Text>
                </View>
              </View>
              <View style={styles.tugasContent}>
                <Text style={styles.tugasTitle}>{item.title}</Text>
                <Text style={styles.tugasMapel}>{item.mapel}</Text>
                <View style={styles.tugasFooter}>
                  <Text style={styles.deadline}>📅 {item.deadline}</Text>
                  <Text
                    style={[
                      styles.status,
                      item.status === "Selesai"
                        ? styles.statusDone
                        : styles.statusPending,
                    ]}
                  >
                    {item.status}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* SECTION JADWAL */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionIcon}>🗓️</Text>
            <Text style={styles.sectionTitle}>Jadwal Hari Ini</Text>
          </View>
        </View>

        <View style={styles.jadwalContainer}>
          <View style={styles.jadwalItem}>
            <Text style={styles.jadwalTime}>08:00</Text>
            <View style={styles.jadwalLine} />
            <View style={styles.jadwalContent}>
              <Text style={styles.jadwalMapel}>Matematika</Text>
              <Text style={styles.jadwalRuang}>Ruang 101</Text>
            </View>
          </View>
          <View style={styles.jadwalItem}>
            <Text style={styles.jadwalTime}>10:00</Text>
            <View style={styles.jadwalLine} />
            <View style={styles.jadwalContent}>
              <Text style={styles.jadwalMapel}>Bahasa Indonesia</Text>
              <Text style={styles.jadwalRuang}>Ruang 102</Text>
            </View>
          </View>
          <View style={styles.jadwalItem}>
            <Text style={styles.jadwalTime}>13:00</Text>
            <View style={styles.jadwalLine} />
            <View style={styles.jadwalContent}>
              <Text style={styles.jadwalMapel}>Fisika</Text>
              <Text style={styles.jadwalRuang}>Lab Fisika</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  // Header Container - Blue Background
  headerContainer: {
    backgroundColor: "#2563EB",
    paddingTop: 65,
    paddingBottom: 40,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "relative",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerContent: {
    flex: 1,
  },

  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  sub: {
    color: "#BFDBFE",
    fontSize: 14,
    marginTop: 4,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
  },

  // Wave - Inside header container
  waveContainer: {
    position: "absolute",
    bottom: -15,
    left: 0,
    right: 0,
    height: 30,
  },

  wave: {
    width: "100%",
    height: 30,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },

  welcomeCard: {
    backgroundColor: "#2563EB",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  welcomeContent: {
    flex: 1,
  },

  welcomeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },

  welcomeText: {
    fontSize: 14,
    color: "#BFDBFE",
  },

  welcomeIcon: {
    marginLeft: 10,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 10,
  },

  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  sectionIcon: {
    fontSize: 18,
    marginRight: 8,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e293b",
  },

  seeAll: {
    fontSize: 14,
    color: "#2563EB",
    fontWeight: "600",
  },

  materiScroll: {
    marginBottom: 10,
  },

  materiCard: {
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  materiHeader: {
    marginBottom: 10,
  },

  mapelBadge: {
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: "flex-start",
  },

  mapelText: {
    fontSize: 12,
    color: "#2563EB",
    fontWeight: "600",
  },

  materiTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: 6,
  },

  guruText: {
    fontSize: 12,
    color: "#64748b",
    marginBottom: 12,
  },

  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: "#E2E8F0",
    borderRadius: 3,
    marginRight: 8,
  },

  progressFill: {
    height: 6,
    backgroundColor: "#2563EB",
    borderRadius: 3,
  },

  progressText: {
    fontSize: 12,
    color: "#2563EB",
    fontWeight: "600",
  },

  tugasContainer: {
    marginBottom: 10,
  },

  tugasCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  tugasLeft: {
    marginRight: 12,
  },

  tugasIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  tugasContent: {
    flex: 1,
  },

  tugasTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: 4,
  },

  tugasMapel: {
    fontSize: 13,
    color: "#64748b",
    marginBottom: 8,
  },

  tugasFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  deadline: {
    fontSize: 12,
    color: "#94A3B8",
  },

  status: {
    fontSize: 12,
    fontWeight: "600",
  },

  statusDone: {
    color: "#16A34A",
  },

  statusPending: {
    color: "#DC2626",
  },

  jadwalContainer: {
    backgroundColor: "#2563EB",
    borderRadius: 16,
    padding: 16,
    paddingTop: 25,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  jadwalItem: {
    flexDirection: "row",
    marginBottom: 16,
  },

  jadwalTime: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    width: 55,
  },

  jadwalLine: {
    width: 2,
    backgroundColor: "#E2E8F0",
    marginRight: 12,
  },

  jadwalContent: {
    flex: 1,
  },

  jadwalMapel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
  },

  jadwalRuang: {
    fontSize: 12,
    color: "#fff",
    marginTop: 2,
  },
});
