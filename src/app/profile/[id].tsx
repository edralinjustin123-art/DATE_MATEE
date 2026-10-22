
import { router, useLocalSearchParams } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { profiles } from '../../data/profiles';

export default function ProfileDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const profile = profiles.find((person) => person.id === id);

  if (!profile) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile not found</Text>
        <Text style={styles.description}>
          Sorry, we couldn't find this profile. It may not exist.
        </Text>

        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Pressable
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </Pressable>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            {profile.name.charAt(0)}
          </Text>
        </View>

        <Text style={styles.title}>{profile.name}</Text>
        <Text style={styles.age}>{profile.age} years old</Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.description}>
          {profile.description}
        </Text>

        <Text style={styles.idText}>Profile ID: {profile.id}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
    paddingTop: 55,
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#FCE8EC',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginBottom: 24,
  },
  backButtonText: {
    color: '#E85D75',
    fontSize: 16,
    fontWeight: '600',
  },
  profileCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F2DDE2',
    borderRadius: 24,
    padding: 24,
    width: '100%',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FCE8EC',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  avatarText: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#E85D75',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#292929',
    textAlign: 'center',
    marginBottom: 6,
  },
  age: {
    fontSize: 16,
    color: '#777777',
  },
  divider: {
    height: 1,
    backgroundColor: '#F2DDE2',
    width: '100%',
    marginVertical: 24,
  },
  sectionTitle: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#292929',
    marginBottom: 10,
  },
  description: {
    alignSelf: 'flex-start',
    fontSize: 16,
    lineHeight: 24,
    color: '#666666',
  },
  idText: {
    alignSelf: 'flex-start',
    fontSize: 13,
    color: '#999999',
    marginTop: 24,
  },
});
