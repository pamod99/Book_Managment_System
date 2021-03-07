import React, { Component, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

export default function ViewBooks({ navigation }) {
  const [data, setData] = useState({
    tableHead: ["ISBN", "Author", "Publisher", "Price"],
    tableData: [
      ["1", "Author1", "Publisher1", "Rs."],
      ["2", "Author2", "Publisher2", "Rs."],
      ["3", "Author3", "Publisher3", "Rs."],
      ["4", "Author4", "Publisher4", "Rs."],
    ],
  });

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row
          data={data.tableHead}
          style={styles.head}
          textStyle={styles.text}
        />
        <Rows data={data.tableData} textStyle={styles.text} />
      </Table>

      <View 
        style={{
          flexDirection: 'row',
          marginTop: 30,
      }}
      >
      <TouchableOpacity 
        style={{
          backgroundColor: '#0d47a1',
          marginHorizontal: 10,
          padding: 15,
          width: 150,
          borderRadius: 30,
        }}>
          <Text 
          style={{
            color: '#FFF',
            fontSize: 16,
            textAlign: 'center',
          }}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate('AddBook')}
        style={{
          backgroundColor: '#0d47a1',
          padding: 15,
          width: 150,
          borderRadius: 30,
        }}>
          <Text 
          style={{
            color: '#FFF',
            fontSize: 16,
            textAlign: 'center',
          }}>Add Books</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});
