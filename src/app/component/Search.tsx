import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { PostListContext } from '../contextAPI/contextProvider';

const Search = (props: any) => {
  const [text, setText] = useState("");
  const { updatePostData } = useContext(PostListContext);
  let totalPosts = props.data;

  const onInputChange = (e: any) => {
    setText(e);
    setTimeout(() => {
      searchText(e);
    }, 500);
  }

  const handle = () => {
    setText('')
    props.btnClick();
  }


  const searchText = (e: string) => {
    let currText = e;
    let filteredName = totalPosts.filter((item: any) => {
      return item.body.match(currText);
    })

    if (!currText || currText === '') {
      updatePostData(totalPosts);
    } else if (!Array.isArray(filteredName) && !filteredName.length) {
      updatePostData([])
    } else if (Array.isArray(filteredName)) {
      updatePostData(filteredName)
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          onChangeText={($event) => onInputChange($event)}
          value={text}
          placeholder="Search a text"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handle}
        >
          <Text>Re-render</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    margin: 10,
  },

  input: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#000',
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginVertical: 10,
    width: 120,
  }
})
export default Search;



