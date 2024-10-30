// globalStyles.js
import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.backgroundPrimary,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 14,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: colors.borderLight,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: colors.textPrimary,
    backgroundColor: colors.backgroundSecondary,
  },
  pickerContainer: {
    height: 40,
    borderColor: colors.borderLight,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: colors.textPrimary,
    backgroundColor: colors.backgroundSecondary,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  resultColumn: {
    alignItems: 'center',
    flex: 1,
  },
  resultHeaderText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resultValue: {
    color: colors.accentPrimary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderAccent,
  },
  cell: {
    color: colors.textPrimary,
    fontSize: 16,
    flex: 1,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.accentPrimary,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.textAccentPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
  switchLabel: {
    color: colors.textAccent,
    fontSize: 14,
    marginHorizontal: 8,
  },
  toggleSwitch: {
    transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }], // Adjust the size of the toggle switch if desired
    thumbColor: colors.accentPrimary, // Color of the thumb (circle) of the switch
    trackColor: { true: colors.accentSecondary, false: colors.borderLight }, // Color of the track based on the switch state
  },
});
