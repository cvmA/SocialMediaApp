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
  },
  {
    fistName: 'Nove',
    id: 9,
  },
  ]
  const posts = [
    {
      firstName: 'Allison',
      lastName: 'Becker',
      location: 'Centro de Eventos do Ceará, Fortaleza',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 1,
    },
    {
      firstName: 'Jorge',
      lastName: 'Luis',
      location: 'UNIFOR, Fortaleza',
      likes: 1622,
      comments: 64,
      bookmarks: 25,
      id: 2,
    },
    {
      firstName: 'Adam',
      lastName: 'Louis',
      location: 'Home',
      likes: 120,
      comments: 2,
      bookmarks: 3,
      id: 3,
    },
    {
      firstName: 'Junior',
      lastName: 'Marcos',
      location: 'Centro de Eventos do Ceará, Fortaleza',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 4,
    },
    {
      firstName: 'Lord',
      lastName: 'Vinheteiro',
      location: 'Centro de Eventos do Ceará, Fortaleza',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      id: 5,
    },
  ]
  const pageSize = 4
  const pageSizePosts = 2
  const [pageNumber, setPageNumber] = useState(1)
  const [postPageNumber, setPostPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingPost, setIsLoadingPosts] = useState(false)
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize))
  const [renderedDataPosts, setRenderedDataPosts] = useState(posts.slice(0, pageSize))


  const pagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize
    console.log(startIndex, renderedData.length)
    if (startIndex > data.length) {
      return []
    }
    setPageNumber(pageNumber)
    return data.slice(startIndex, startIndex + pageSize)
  }
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
        <View style={style.userStoryContainer}>
          <FlatList
            keyExtractor={item => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (!isLoading) {
                setIsLoading(true)
                setRenderedData(prev => [
                  ...prev,
                  ...pagination(data, pageNumber + 1, pageSize),
                ])
                setIsLoading(false)
              }
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={renderedData}
            renderItem={({ item }) => <UserStory firstName={item.fistName} />}
          />
        </View>
        <View style={style.userPostContainer}>

        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

export default App;