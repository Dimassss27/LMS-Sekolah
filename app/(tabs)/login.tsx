import { CameraView, useCameraPermissions } from "expo-camera";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const router = useRouter();
  const [role, setRole] = useState<"guru" | "murid">("guru");
  const [nomorInduk, setNomorInduk] = useState("");
  const [showCamera, setShowCamera] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<any>(null);

  const handleLogin = () => {
    if (nomorInduk.trim() === "") {
      Alert.alert("Peringatan", "Mohon masukkan nomor induk");
      return;
    }
    // Show camera for face verification
    setShowCamera(true);
  };

  const handleCapture = async () => {
    if (cameraRef.current) {
      // Simulate face verification (in real app, you'd send to backend)
      // For demo, we'll just verify the photo was taken
      const photo = await cameraRef.current.takePictureAsync();

      // Simulate verification delay
      setTimeout(() => {
        setShowCamera(false);
        setIsVerified(true);
      }, 1500);
    }
  };

  const handleContinue = () => {
    setIsVerified(false);
    if (role === "guru") {
      router.push("/guru");
    } else {
      router.push("/murid");
    }
  };

  if (!permission || !permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          Kami memerlukan akses kamera untuk verifikasi wajah
        </Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Izinkan Akses Kamera</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
            }}
            style={styles.logo}
          />
        </View>

        <Text style={styles.title}>LMS Sekolah</Text>
        <Text style={styles.subtitle}>Masuk dengan nomor induk</Text>

        {/* Role Selection */}
        <View style={styles.roleContainer}>
          <TouchableOpacity
            style={[
              styles.roleButton,
              role === "guru" && styles.roleButtonActive,
            ]}
            onPress={() => setRole("guru")}
          >
            <Text style={styles.roleIcon}>👨‍🏫</Text>
            <Text
              style={[
                styles.roleText,
                role === "guru" && styles.roleTextActive,
              ]}
            >
              Guru
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roleButton,
              role === "murid" && styles.roleButtonActive,
            ]}
            onPress={() => setRole("murid")}
          >
            <Text style={styles.roleIcon}>🎓</Text>
            <Text
              style={[
                styles.roleText,
                role === "murid" && styles.roleTextActive,
              ]}
            >
              Murid
            </Text>
          </TouchableOpacity>
        </View>

        {/* Input Field */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            {role === "guru"
              ? "Nomer Induk Guru (NIG)"
              : "Nomer Induk Siswa (NIS)"}
          </Text>
          <TextInput
            style={styles.input}
            placeholder={
              role === "guru" ? "Masukkan NIG Anda" : "Masukkan NIS Anda"
            }
            placeholderTextColor="#94A3B8"
            value={nomorInduk}
            onChangeText={setNomorInduk}
            keyboardType="numeric"
            secureTextEntry={false}
          />
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footer}>
          Dengan masuk, Anda setuju dengan{"\n"}
          <Text style={styles.footerLink}>Ketentuan Layanan</Text> dan{" "}
          <Text style={styles.footerLink}>Kebijakan Privasi</Text>
        </Text>
      </ScrollView>

      {/* Camera Modal for Face Verification */}
      <Modal
        visible={showCamera}
        animationType="slide"
        presentationStyle="fullScreen"
      >
        <View style={styles.cameraContainer}>
          <View style={styles.cameraHeader}>
            <Text style={styles.cameraTitle}>Verifikasi Wajah</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setShowCamera(false)}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cameraWrapper}>
            <CameraView ref={cameraRef} style={styles.camera} facing="front">
              {/* Face Guide Overlay */}
              <View style={styles.faceGuide}>
                <View style={styles.faceCircle} />
                <Text style={styles.faceGuideText}>
                  Posisikan wajah Anda di dalam lingkaran
                </Text>
              </View>
            </CameraView>
          </View>

          <View style={styles.cameraFooter}>
            <TouchableOpacity
              style={styles.captureButton}
              onPress={handleCapture}
            >
              <View style={styles.captureButtonInner} />
            </TouchableOpacity>
            <Text style={styles.captureHint}>
              Tekan tombol untuk memindai wajah
            </Text>
          </View>
        </View>
      </Modal>

      {/* Verification Success Modal */}
      <Modal
        visible={isVerified}
        transparent
        animationType="fade"
        onRequestClose={() => setIsVerified(false)}
      >
        <View style={styles.successOverlay}>
          <View style={styles.successModal}>
            <Text style={styles.successIcon}>✓</Text>
            <Text style={styles.successTitle}>Verifikasi Berhasil!</Text>
            <Text style={styles.successText}>
              Wajah Anda telah diverifikasi
            </Text>
            <TouchableOpacity
              style={styles.successButton}
              onPress={handleContinue}
            >
              <Text style={styles.successButtonText}>Lanjutkan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 30,
  },
  roleContainer: {
    flexDirection: "row",
    marginBottom: 24,
  },
  roleButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
    backgroundColor: "#F1F5F9",
    borderWidth: 2,
    borderColor: "transparent",
  },
  roleButtonActive: {
    backgroundColor: "#EFF6FF",
    borderColor: "#2563EB",
  },
  roleIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  roleText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#64748b",
  },
  roleTextActive: {
    color: "#2563EB",
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: "#1e293b",
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 24,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    fontSize: 12,
    color: "#94A3B8",
    textAlign: "center",
    lineHeight: 18,
  },
  footerLink: {
    color: "#2563EB",
  },
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  permissionText: {
    fontSize: 16,
    color: "#374151",
    textAlign: "center",
    marginBottom: 24,
  },
  // Camera styles
  cameraContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  cameraHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
  },
  cameraTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 20,
  },
  cameraWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  faceGuide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  faceCircle: {
    width: 250,
    height: 300,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.7)",
    backgroundColor: "transparent",
  },
  faceGuideText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
    paddingHorizontal: 40,
  },
  cameraFooter: {
    padding: 40,
    alignItems: "center",
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
  },
  captureHint: {
    color: "#fff",
    fontSize: 14,
    marginTop: 16,
  },
  // Success modal
  successOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  successModal: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    width: "80%",
  },
  successIcon: {
    fontSize: 50,
    color: "#16a34a",
    marginBottom: 16,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },
  successText: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
  },
  successButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  successButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
