import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { PostListContext } from '../contextAPI/contextProvider';

const Post = (props: any) => {

  const { loading } = props;

  type Post = {
    unique?: any;
    userId: string;
    id: string;
    title: string;
    body: string;
    randomNum?: any;
  };

  const { postData } = useContext(PostListContext);

  const [value, setValue] = useState<Post[]>(postData[0]);
  let listData = postData[0];

  let keyCount = 0;

  useEffect(() => {
    getDataCount();
  }, [postData[0]]);

  const getDataCount = () => {
    listData = Array(30).fill(listData).flat();

    listData = listData.map(currElem => {
      return {
        ...currElem, unique: keyCount++, randomNum: Math.floor(
          Math.random() * (9000000000 - 1000000000 + 1) + 1000000000,
        )
      };
    });

    setValue(listData);
  };

  return (
    <View style={styles.postContainer}>
      {loading &&
        <View>
          <ActivityIndicator style={styles.loader} />
        </View>
      }
      {!loading &&
        <FlatList
          data={value}
          renderItem={({ item }) => {
            return (
              <Text style={styles.text}>
                {item?.id}: {item?.body} -{' '}
                <Text style={{ fontWeight: 'bold' }}>
                  {item?.randomNum}
                </Text>
              </Text>
            );
          }}
          keyExtractor={item => item.unique.toString()}
        />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    margin: 10,
  },
  text: {
    marginBottom: 5,
  },
  loader: {
    size: 'large',
    color: '#0c9',
  },
});

export default Post;
