import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  title: string;
  subtitle?: string;
  tagText?: string;
  children?: React.ReactNode;
  style?: object;
}

export const CardComponent = ({
  title,
  subtitle,
  tagText,
  children,
  style,
}: Props) => {
  return (
    <TouchableOpacity style={[styles.containerCard, style]}>
      <Text style={styles.title}>{title}</Text>
      {tagText && (
        <View style={styles.tag}>
          <Text style={styles.tagText}>{tagText}</Text>
        </View>
      )}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 16,
    width: 300,
    paddingVertical: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Lexend-Bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Lexend-Medium',
    color: '#111827',
    marginTop: 16,
  },
  tag: {
    alignSelf: 'flex-start',
    backgroundColor: '#fee2e2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    marginTop: 48,
  },
  tagText: {
    fontSize: 14,
    fontFamily: 'Lexend-Regular',
    color: '#ef4444',
  },
});
