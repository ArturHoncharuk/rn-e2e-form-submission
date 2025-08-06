import { Form } from "@/src/components";
import { useCallback, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

interface FormData {
  name: string;
  email: string;
}

export default function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const onSubmit = useCallback(() => {
    setSubmitted(true);
  }, []);

  const onChangeFormData = useCallback((key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Form
          onSubmit={onSubmit}
          formData={formData}
          onChangeFormData={onChangeFormData}
        />

        {submitted && (
          <View style={styles.resultContainer} testID="submission_result">
            <Text style={styles.resultText}>Submitted Data:</Text>
            <Text testID="submitted_name">Name: {formData.name}</Text>
            <Text testID="submitted_email">Email: {formData.email}</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  resultContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
});
