import * as React from "react";
import { Text, View } from "react-native";
import * as firebase from "firebase/app";

import { getDatabase, ref, set } from "firebase/database";

// function insert_data() {
//   const db = getDatabase();
//   set(ref(db, "users/" + '1'), {
//     name: "Sajib Sutradhar",
//     blood: "B+",
//   });
// }

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}
