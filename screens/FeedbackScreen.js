import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import { colors } from '../colors';

export default function FeedbackScreen() {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const sendFeedback = () => {
    if (feedback.trim().length === 0) {
      Alert.alert(
        'Feedback Required',
        'Please enter your feedback before sending.'
      );
      return;
    }

    MailComposer.composeAsync({
      recipients: ['yashseth07@gmail.com'],
      subject: 'User Feedback - CompoundIt',
      body: `Feedback:\n${feedback}\n\nFrom: ${email || 'Anonymous'}`,
    })
      .then((result) => {
        if (result.status === 'sent') {
          Alert.alert(
            'Thank You!',
            'Your feedback has been sent successfully.'
          );
          setFeedback('');
          setEmail('');
        }
      })
      .catch((error) => {
        Alert.alert(
          'Error',
          'Could not send feedback. Please try again later.'
        );
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>We Value Your Feedback</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your feedback here"
        multiline
        value={feedback}
        onChangeText={setFeedback}
      />
      <TextInput
        style={styles.input}
        placeholder="Your email (optional)"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <Button
        title="Send Feedback"
        onPress={sendFeedback}
        color={colors.accentPrimary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.backgroundPrimary,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderColor: colors.borderAccent,
    borderWidth: 1,
    padding: 15,
    borderRadius: 8,
    backgroundColor: colors.inputBackground,
    marginBottom: 15,
    color: colors.textPrimary,
  },
});
