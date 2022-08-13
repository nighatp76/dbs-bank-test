import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, ScrollView } from 'react-native'
import { PostListContext } from '../contextAPI/contextProvider';

const Post = (props: any) => {
  // console.log(props.post)

  type Post = {
    unique?: any;
    userId: string;
    id: string;
    title: string;
    body: string
  }


  const { postData } = useContext(PostListContext);

  const [value, setValue] = useState<Post[]>(postData[0])
  let listData = postData[0]

  let keyCount = 0;

  useEffect(() => {
    getDataCount();
    // updatePostData()
    console.log(value)
    // setsam(searchedData)
  }, [postData[0]])

  const getDataCount = () => {
    // listData = Array(30).fill(listData).flat();
    let subArray = Array.apply(null, new Array(30));
    subArray = subArray.map(function () { return listData });
    listData = subArray.flat();


    listData.map((currElem: any) => {
      currElem.unique = keyCount++;
    });
    console.log('data', listData)

    setValue(listData)

    let filter = listData.filter((item: any) => item.unique == listData[0].unique)
    console.log('unique filtered => ', filter)

  }



  return (
    <View style={styles.postContainer}>

      <FlatList
        data={props.data}
        renderItem={({ item, index }) => {
          return (
            <Text style={styles.text}>{item?.id}: {item?.body} - <Text style={{ fontWeight: "bold" }}>{Math.floor(Math.random() * (9000000000 - 1000000000 + 1) + 1000000000)}</Text></Text>
          )
        }
        }
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    margin: 10,
  },
  text: {
    marginBottom: 5
  }
})
export default Post;
