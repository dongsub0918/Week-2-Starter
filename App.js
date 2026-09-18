import { useState } from "react";
import { Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sendEmailCopy, setSendEmailCopy] = useState(false);
  const isSubmitEnabled = name.trim().length > 0 && email.trim().length > 0;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: "padding", default: "height" })}
          style={styles.keyboardAvoidingView}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Attendance Form</Text>
            <View style={styles.formCard}>
              <View style={styles.formGroup}>
                <View style={styles.fieldGroup}>
                  <Text style={styles.label}>Name</Text>
                  <TextInput
                    autoCapitalize="words"
                    autoComplete="name"
                    onChangeText={setName}
                    placeholder="Enter your name"
                    placeholderTextColor="#6B7280"
                    style={styles.textInput}
                    value={name}
                  />
                </View>

                <View style={styles.fieldGroup}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    autoCapitalize="none"
                    autoComplete="email"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    placeholderTextColor="#6B7280"
                    style={styles.textInput}
                    value={email}
                  />
                </View>
              </View>

              <View style={styles.switchRow}>
                <Switch
                  onValueChange={setSendEmailCopy}
                  thumbColor="#FFFFFF"
                  trackColor={{ false: "#C9C9C9", true: "#24CEF9" }}
                  value={sendEmailCopy}
                />
                <Text style={styles.switchLabel}>Send a copy to my email</Text>
              </View>

              <Pressable
                accessibilityRole="button"
                accessibilityState={{ disabled: !isSubmitEnabled }}
                disabled={!isSubmitEnabled}
                style={({ pressed }) => [
                  styles.submitButton,
                  !isSubmitEnabled && styles.submitButtonDisabled,
                  pressed && isSubmitEnabled && styles.submitButtonPressed,
                ]}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#171717",
    fontFamily: "Inter_700Bold",
    fontSize: 40,
    lineHeight: 48,
    textAlign: "center",
    marginBottom: 64,
  },
  formCard: {
    backgroundColor: "#FFFFFF",
    borderColor: "#CFCFCF",
    borderRadius: 8,
    borderWidth: 2,
    // gap: 24,
    padding: 12,
    width: "90%",
  },
  formGroup: {
    gap: 24,
  },
  fieldGroup: {
    gap: 8,
  },
  label: {
    color: "#171717",
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    lineHeight: 24,
  },
  textInput: {
    borderColor: "#CFCFCF",
    borderRadius: 8,
    borderWidth: 2,
    color: "#171717",
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    lineHeight: 24,
    minHeight: 56,
    paddingHorizontal: 16,
  },
  switchRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 40,
    marginBottom: 16,
  },
  switchLabel: {
    color: "#171717",
    flex: 1,
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    lineHeight: 24,
    marginRight: 16,
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "#171717",
    borderRadius: 8,
    minHeight: 56,
    justifyContent: "center",
  },
  submitButtonDisabled: {
    backgroundColor: "#CFCFCF",
  },
  submitButtonPressed: {
    opacity: 0.85,
  },
  submitButtonText: {
    color: "#FFFFFF",
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    lineHeight: 24,
  },
});
