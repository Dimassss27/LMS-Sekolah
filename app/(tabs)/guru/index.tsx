import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const data = [
  {
    id: "1",
    title: "Aljabar Dasar",
    kelas: "Kelas 10",
    siswa: 30,
    status: "Aktif",
  },
  {
    id: "2",
    title: "Puisi Modern",
    kelas: "Kelas 11",
    siswa: 25,
    status: "Aktif",
  },
  {
    id: "3",
    title: "Fisika - Gerak Lurus",
    kelas: "Kelas 10",
    siswa: 28,
    status: "Aktif",
  },
];

export default function DashboardGuru() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* HEADER - Blue with Wave */}
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.greeting}>Halo, Guru 👋</Text>
            <Text style={styles.sub}>Selamat mengajar hari ini</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/guru/profile")}
            activeOpacity={0.7}
            style={{ padding: 5 }}
          >
            <Image
              source={{ uri: "https://i.pravatar.cc/100" }}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
        {/* Wave Effect */}
        <View style={styles.waveContainer}>
          <View style={styles.wave} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {/* SECTION MATERI */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionIcon}>📚</Text>
            <Text style={styles.sectionTitle}>Materi Anda</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.seeAll}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>

        {/* MATERI CARDS */}
        <View style={styles.materiGrid}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.materiCard}
              onPress={() => {}}
            >
              <View style={styles.cardHeader}>
                <View style={styles.kelasBadge}>
                  <Text style={styles.kelasText}>{item.kelas}</Text>
                </View>
                <View
                  style={[
                    styles.statusBadge,
                    item.status === "Aktif" && styles.statusAktif,
                  ]}
                >
                  <Text style={styles.statusText}>{item.status}</Text>
                </View>
              </View>
              <Text style={styles.materiTitle}>{item.title}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.siswaText}>👥 {item.siswa} Siswa</Text>
                <Text style={styles.arrow}>→</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* SECTION STATISTIK */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionIcon}>📊</Text>
            <Text style={styles.sectionTitle}>Statistik</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Materi Aktif</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>83</Text>
            <Text style={styles.statLabel}>Total Siswa</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Tugas Diberikan</Text>
          </View>
        </View>

        {/* SECTION AKTIVITAS TERAKHIR */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <Text style={styles.sectionIcon}>🕐</Text>
            <Text style={styles.sectionTitle}>Aktivitas Terakhir</Text>
          </View>
        </View>

        <View style={styles.aktivitasCard}>
          <View style={styles.aktivitasItem}>
            <View style={[styles.aktivitasDot, { backgroundColor: "#fff" }]} />
            <View style={styles.aktivitasContent}>
              <Text style={styles.aktivitasTitle}>
                Menambahkan materi Aljabar Dasar
              </Text>
              <Text style={styles.aktivitasTime}>2 jam yang lalu</Text>
            </View>
          </View>
          <View style={styles.aktivitasItem}>
            <View style={[styles.aktivitasDot, { backgroundColor: "#fff" }]} />
            <View style={styles.aktivitasContent}>
              <Text style={styles.aktivitasTitle}>
                Mengumpulkan nilai tugas
              </Text>
              <Text style={styles.aktivitasTime}>5 jam yang lalu</Text>
            </View>
          </View>
          <View style={styles.aktivitasItem}>
            <View style={[styles.aktivitasDot, { backgroundColor: "#fff" }]} />
            <View style={styles.aktivitasContent}>
              <Text style={styles.aktivitasTitle}>Membuat quiz baru</Text>
              <Text style={styles.aktivitasTime}>Kemarin</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* FLOAT BUTTON */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/guru/tambah")}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
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

  materiGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  materiCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  kelasBadge: {
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },

  kelasText: {
    fontSize: 12,
    color: "#2563EB",
    fontWeight: "600",
  },

  statusBadge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },

  statusAktif: {
    backgroundColor: "#DCFCE7",
  },

  statusText: {
    fontSize: 12,
    color: "#16A34A",
    fontWeight: "600",
  },

  materiTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1e293b",
    marginBottom: 12,
  },

  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  siswaText: {
    fontSize: 12,
    color: "#64748b",
  },

  arrow: {
    fontSize: 16,
    color: "#2563EB",
    fontWeight: "bold",
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  statCard: {
    width: "31%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2563EB",
  },

  statLabel: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 4,
    textAlign: "center",
  },

  aktivitasCard: {
    backgroundColor: "#2563EB",
    borderRadius: 16,
    padding: 16,
    paddingTop: 25,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },

  aktivitasItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },

  aktivitasDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 12,
  },

  aktivitasContent: {
    flex: 1,
  },

  aktivitasTitle: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },

  aktivitasTime: {
    fontSize: 12,
    color: "#fff",
    marginTop: 2,
  },

  fab: {
    position: "absolute",
    bottom: 25,
    right: 20,
    backgroundColor: "#2563EB",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#2563EB",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },

  fabText: {
    color: "#fff",
    fontSize: 26,
  },
});
