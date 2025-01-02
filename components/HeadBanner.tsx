import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const specialities = [
  { id: 1, name: "Dentist", icon: require("./assets/images/dentist.png") },
  { id: 2, name: "Neurologist", icon: require("./assets/images/neurologist.png") },
  { id: 3, name: "Orthopedic", icon: require("./assets/images/orthopedic.png") },
  { id: 4, name: "Cardiologist", icon: require("./assets/images/cardiologist.png") },
];

const doctors = [
  {
    id: 1,
    name: "Dr. Zara K",
    speciality: "Dentist",
    services: "Cleaning, repair",
    rating: 5,
    reviews: 2,
    location: "Coimbatore, India",
    price: "₹50.00",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Dr. Waseem Sabra",
    speciality: "Neurologist",
    services: "service 1, service 2",
    rating: 4,
    reviews: 1,
    location: "Cherrybrook, Australia",
    price: "₹2.45",
    image: "https://via.placeholder.com/150",
  },
];

const Home = () => {
  const [city, setCity] = useState("");
  const [doctorName, setDoctorName] = useState("");

  const handleSearch = () => {
    console.log(`Search for doctors in ${city} with name or speciality ${doctorName}`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Home</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <FontAwesome name="phone" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Section */}
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Search City (Ex: Chennai, etc)"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="Search Doctor name, Speciality"
          value={doctorName}
          onChangeText={setDoctorName}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search Now</Text>
        </TouchableOpacity>
      </View>

      {/* Specialities Section */}
      <View style={styles.specialitiesSection}>
        <Text style={styles.sectionTitle}>Specialities</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={specialities}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.specialityCard}>
            <Image source={item.icon} style={styles.specialityIcon} />
            <Text style={styles.specialityName}>{item.name}</Text>
          </View>
        )}
      />

      {/* Doctors List */}
      <View style={styles.doctorsSection}>
        <Text style={styles.sectionTitle}>Find Doctors</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>
      {doctors.map((doctor) => (
        <View key={doctor.id} style={styles.doctorCard}>
          <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
          <View style={styles.doctorDetails}>
            <Text style={styles.doctorName}>{doctor.name}</Text>
            <Text style={styles.doctorServices}>{doctor.services}</Text>
            <Text style={styles.doctorSpeciality}>{doctor.speciality}</Text>
            <View style={styles.ratingRow}>
              <FontAwesome name="star" size={16} color="#FFD700" />
              <Text style={styles.ratingText}>{doctor.rating} ({doctor.reviews})</Text>
            </View>
            <Text style={styles.doctorLocation}>{doctor.location}</Text>
          </View>
          <View style={styles.doctorFooter}>
            <Text style={styles.doctorPrice}>{doctor.price} / per slot</Text>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 16,
  },
  headerTitle: { fontSize: 20, color: "white", fontWeight: "600" },
  headerIcons: { flexDirection: "row", alignItems: "center" },
  searchSection: {
    backgroundColor: "white",
    padding: 16,
    margin: 16,
    borderRadius: 8,
    elevation: 3,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    fontSize: 16,
  },
  searchButton: { backgroundColor: "#00C4FF", borderRadius: 8, padding: 12 },
  searchButtonText: { textAlign: "center", color: "white", fontWeight: "600" },
  specialitiesSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  sectionTitle: { fontSize: 18, fontWeight: "600" },
  viewAll: { color: "#007AFF", fontSize: 14 },
  specialityCard: { alignItems: "center", marginHorizontal: 8 },
  specialityIcon: { width: 60, height: 60, marginBottom: 8 },
  specialityName: { fontSize: 14, fontWeight: "500" },
  doctorsSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  doctorCard: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 16,
    margin: 16,
    borderRadius: 8,
    elevation: 3,
  },
  doctorImage: { width: 80, height: 80, borderRadius: 8, marginRight: 16 },
  doctorDetails: { flex: 1 },
  doctorName: { fontSize: 16, fontWeight: "600" },
  doctorServices: { color: "#666", fontSize: 14 },
  doctorSpeciality: { color: "#00C4FF", fontSize: 14, marginVertical: 4 },
  ratingRow: { flexDirection: "row", alignItems: "center", marginVertical: 4 },
  ratingText: { marginLeft: 4, color: "#666" },
  doctorLocation: { color: "#666", fontSize: 14 },
  doctorFooter: { alignItems: "flex-end" },
  doctorPrice: { fontSize: 14, fontWeight: "600", marginBottom: 8 },
  bookButton: { backgroundColor: "#00C4FF", borderRadius: 8, padding: 8 },
  bookButtonText: { color: "white", fontWeight: "600", fontSize: 14 },
});

export default Home;
