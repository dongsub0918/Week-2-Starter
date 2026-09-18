import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sendEmailCopy, setSendEmailCopy] = useState(false);
  const isSubmitEnabled = name.trim().length > 0 && email.trim().length > 0;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.select({ ios: 'padding', default: 'height' })}
          style={styles.keyboardAvoidingView}
        >
          <View style={styles.content}>
            <View style={styles.formCard}>
              <Text style={styles.title}>Attendance Form</Text>

              <View style={styles.fieldGroup}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  autoCapitalize="words"
                  autoComplete="name"
                  onChangeText={setName}
                  placeholder="Enter your name"
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
                  style={styles.textInput}
                  value={email}
                />
              </View>

              <View style={styles.switchRow}>
                <Text style={styles.switchLabel}>Send a copy to my email</Text>
                <Switch onValueChange={setSendEmailCopy} value={sendEmailCopy} />
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
    backgroundColor: '#fff',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  formCard: {
    width: '100%',
    maxWidth: 520,
    gap: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
  },
  fieldGroup: {
    gap: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  textInput: {
    borderColor: '#A3A3A3',
    borderRadius: 6,
    borderWidth: 1,
    fontSize: 16,
    minHeight: 48,
    paddingHorizontal: 12,
  },
  switchRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  switchLabel: {
    flex: 1,
    fontSize: 16,
    marginRight: 16,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#111827',
    borderRadius: 6,
    minHeight: 48,
    justifyContent: 'center',
  },
  submitButtonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  submitButtonPressed: {
    opacity: 0.85,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
