import { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('justin');

  const [age, setAge] = useState('');
  const [displayAge, setDisplayAge] = useState('21');

  const [isOnline, setIsOnline] = useState(true);

  const changeProfilePress = () => {
    const trimmedName = name.trim();
    const trimmedAge = age.trim();

    if (trimmedName) {
      setDisplayName(trimmedName);
    }

    if (trimmedAge && /^\d+$/.test(trimmedAge)) {
      setDisplayAge(trimmedAge);
    }

    setName('');
    setAge('');
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Page heading */}
        <View style={styles.header}>
          <Text style={styles.title}>My Profile</Text>
          <Text style={styles.subtitle}>
            Your space to show who you are.
          </Text>
        </View>

        {/* Profile card */}
        <View style={styles.profileCard}>
          <View style={styles.photoContainer}>
            <Image
              style={styles.photo}
              source={require('../../components/images/profile.png')}
            />

            <View
              style={[
                styles.statusCircle,
                { backgroundColor: isOnline ? '#2EAD72' : '#A0A0A0' },
              ]}
            />
          </View>

          <Text style={styles.name}>{displayName}</Text>
          <Text style={styles.age}>{displayAge} years old</Text>

          <View
            style={[
              styles.statusBadge,
              isOnline ? styles.onlineBadge : styles.offlineBadge,
            ]}
          >
            <View
              style={[
                styles.badgeDot,
                { backgroundColor: isOnline ? '#2EAD72' : '#888888' },
              ]}
            />
            <Text style={styles.statusText}>
              {isOnline ? 'Online' : 'Offline'}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.statusButton,
              isOnline ? styles.goOfflineButton : styles.goOnlineButton,
            ]}
            onPress={() => setIsOnline(!isOnline)}
            activeOpacity={0.8}
          >
            <Text style={styles.statusButtonText}>
              {isOnline ? 'Go Offline' : 'Go Online'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Edit profile */}
        <View style={styles.editCard}>
          <Text style={styles.sectionTitle}>Edit Profile</Text>
          <Text style={styles.sectionDescription}>
            Keep your profile details up to date.
          </Text>

          <Text style={styles.inputLabel}>Display Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#999999"
            value={name}
            onChangeText={setName}
            maxLength={30}
            returnKeyType="next"
          />

          <Text style={styles.inputLabel}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your age"
            placeholderTextColor="#999999"
            value={age}
            onChangeText={(text) => setAge(text.replace(/[^0-9]/g, ''))}
            keyboardType="number-pad"
            maxLength={3}
            returnKeyType="done"
          />

          <TouchableOpacity
            style={styles.saveButton}
            onPress={changeProfilePress}
            activeOpacity={0.8}
          >
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          Make connections. Be yourself. 💗
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 30,
  },

  header: {
    marginBottom: 22,
  },

  title: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#252525',
  },

  subtitle: {
    fontSize: 14,
    color: '#777777',
    marginTop: 5,
  },

  profileCard: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#F0E5E8',
    paddingHorizontal: 20,
    paddingVertical: 24,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },

  photoContainer: {
    position: 'relative',
    marginBottom: 12,
  },

  photo: {
    width: 108,
    height: 108,
    borderRadius: 54,
    backgroundColor: '#F5F5F5',
    borderWidth: 3,
    borderColor: '#F9DCE3',
  },

  statusCircle: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    right: 4,
    bottom: 5,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },

  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#252525',
    textAlign: 'center',
  },

  age: {
    fontSize: 15,
    color: '#777777',
    marginTop: 4,
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 12,
  },

  onlineBadge: {
    backgroundColor: '#E8F7EF',
  },

  offlineBadge: {
    backgroundColor: '#F0F0F0',
  },

  badgeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    marginRight: 7,
  },

  statusText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#454545',
  },

  statusButton: {
    minWidth: 150,
    minHeight: 44,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 18,
  },

  goOfflineButton: {
    backgroundColor: '#FCE9ED',
  },

  goOnlineButton: {
    backgroundColor: '#E8F7EF',
  },

  statusButtonText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: 'bold',
  },

  editCard: {
    width: '100%',
    backgroundColor: '#FFF8FA',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#F5E7EB',
    padding: 18,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#252525',
  },

  sectionDescription: {
    fontSize: 13,
    color: '#777777',
    marginTop: 5,
    marginBottom: 20,
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#444444',
    marginBottom: 8,
  },

  input: {
    width: '100%',
    minHeight: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8E1E3',
    borderRadius: 13,
    paddingHorizontal: 14,
    fontSize: 15,
    color: '#252525',
    marginBottom: 18,
  },

  saveButton: {
    width: '100%',
    minHeight: 50,
    backgroundColor: '#E85D75',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  footerText: {
    color: '#999999',
    fontSize: 13,
    textAlign: 'center',
    marginTop: 24,
  },
});