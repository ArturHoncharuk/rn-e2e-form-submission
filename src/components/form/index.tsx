import type { FormData } from "@/src/types";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

interface FormProps {
  onSubmit: () => void;
  formData: FormData;
  onChangeFormData: (key: keyof FormData, value: string) => void;
}

export function Form({ onSubmit, formData, onChangeFormData }: FormProps) {
  return (
    <View style={styles.form}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        testID="name_input"
        value={formData.name}
        onChangeText={(text) => onChangeFormData("name", text)}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        testID="email_input"
        value={formData.email}
        onChangeText={(text) => onChangeFormData("email", text)}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Button title="Submit" testID="submit_button" onPress={onSubmit} />
    </View>
  );
}
