import * as React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
export default function Home() {
  const navigation = useNavigation();

  const handleFindDonorsPress = () => {
    navigation.navigate("Search");
  };
  return (
    <>
      <View>
        <View
          style={{
            flexDirection: "row",
            padding: 5,
            marginBottom: 10
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 8,
              shadowColor: "#000", // For iOS
              shadowOpacity: 0.5, // For iOS
              shadowRadius: 4, // For iOS
              elevation: 5, // For Android
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: 600,
                paddingTop: 18,
              }}
            >
              LifeSaver: Your Virtual Blood Bank
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 11,
                fontWeight: 450,
                padding: 10,
                paddingBottom: 18,
              }}
            >
              Connecting Blood Donors and Recipients Across Bangladesh.
            </Text>
          </View>
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            gap: 4,
            padding: 5
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={handleFindDonorsPress}
          >
            <MaterialCommunityIcons
              name="account-search"
              size={32}
              color={"red"}
            />
            <Text style={styles.buttonText}>Find Donors</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleFindDonorsPress}
          >
            <MaterialCommunityIcons name="blood-bag" size={32} color={"red"} />
            <Text style={styles.buttonText}>Donate Blood</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleFindDonorsPress}
          >
            <MaterialCommunityIcons
              name="send-outline"
              size={32}
              color={"red"}
            />
            <Text style={styles.buttonText}>Emergency Requests</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={handleFindDonorsPress}
          >
            <MaterialCommunityIcons
              name="frequently-asked-questions"
              size={32}
              color={"red"}
            />
            <Text style={styles.buttonText}>Tips & Faqs</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({


  button: {
    backgroundColor: "white",
    flex: 0.25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 5,
    cursor: "pointer",
    paddingTop: 20,
    paddingBottom: 20,
  },
  buttonText: {
    color: "red",
    fontSize: 10,
    fontWeight: "500",
    paddingTop: 10,
    textAlign: "center"
  },
});
