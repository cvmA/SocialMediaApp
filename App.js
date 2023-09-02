import React, { useState } from "react";
import { Pressable, SafeAreaView, ScrollView, View, Text, FlatList } from "react-native";
import Title from "./components/Title/Title";
import UserStory from "./components/UserStory/UserStory";
import style from "./assets/styles/main";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const App = () => {
  const data = [{
    fistName: 'Caio',
    id: 1,
  },
  {
    fistName: 'Vinicius',
    id: 2,
  },
  {
    fistName: 'Jovanira',
    id: 3,
  },
  {
    fistName: 'Jovana',
    id: 4,
  },
  {
    fistName: 'Iara',
    id: 5,
  },
  {
    fistName: 'Josy',
    id: 6,
  },
  {
    fistName: 'Eduardo',
    id: 7,
  },
  {
    fistName: 'Diassis',
    id: 8,
  },]
  const pageSize = 4
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setisLoading] = useState(false)
  const [renderedData, setRenderedData] = useState([])
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.header}>
          <Title title={"Let's Explore"} />
          <Pressable>
            <FontAwesomeIcon icon={faEnvelope} size={29} />
            <View
              style={style.messageNumberContainer}>
              <Text style={style.messageNumber}>
                2
              </Text>
            </View>
          </Pressable>
        </View>
        <View>
          <FlatList data={data} renderItem={({item}) => <UserStory firstName={item.fistName}/>}></FlatList>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

export default App;