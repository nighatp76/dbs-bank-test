import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Image, StyleSheet, Alert, ScrollView } from 'react-native'
import Post from '../component/Post';
import Search from '../component/Search';
import HttpService from '../services/HttpService';
import { PostListContext } from '../contextAPI/contextProvider';


const Home = () => {

  const { postData, addPostData } = useContext(PostListContext);
  const [response, setResponse] = useState([])

  useEffect(() => {
    getApiData();
  }, [])

  const getApiData = async () => {
    try {
      let response = await HttpService.callFetchGet('posts');
      setResponse(response)
      await addPostData(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Image source={require('../../assets/images/doggo_walk.gif')} style={styles.bannerImage} />
        <Search btnClick={() => getApiData()} data={response} />
        <Post data={postData[0]} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bannerImage: {
    width: '100%'
  }
})

export default Home


