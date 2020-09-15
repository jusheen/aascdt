import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

// const posts = [" hi, ", " his"];
const posts = [
  {
    id: '1',
    name: 'Ju Sheen Kim',
    text: "Anyone down for Cafe 3 at noon?",
    avatar: require('../images/jusheen.jpg'),
    timestamp: '10:17am'
  },
  {
    id: '2',
    name: 'Nilay',
    text: "Down, meet at unit 3?",
    avatar: require('../images/nilay.jpg'),
    timestamp: '10:30am'
  }
]

export default class Cafe3Screen extends React.Component {
  renderPost = (post) => {
    return (
      <View style={styles.feedItem}>
        <Image source={post.avatar} style={styles.avatar}/>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
              <Text style={styles.name}>{post.name}</Text>
    <Text style={styles.timestamp}>{post.timestamp}</Text>
            </View>
          </View>
    <Text style={styles.posts}>{post.text}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Cafe 3 Feed</Text>
        </View>

        <FlatList
          style={styles.feed}
          data={posts}
          renderItem={({item}) => this.renderPost(item)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFECF4'
  },
  header: {
    paddingTop: 64,
    paddingBottom: 16,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#EBECF4',
    shadowColor: '#454D65',
    shadowOffset: { height: 5 },
    shadowRadius: 15,
    shadowOpacity: 0.2,
    zIndex: 10
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500'
  },
  feed: {
    marginHorizontal: 16
  },
  feedItem: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 8,
    flexDirection: 'row',
    marginVertical: 8
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 16
  },
  name: {
    fontSize: 15,
    fontWeight: '500',
    color: '#454d65'
  },
  timestamp: {
    fontSize: 11,
    color: '#C4C6CE',
    marginTop: 4
  },
  post: {
    marginTop: 15,
    fontSize: 14,
    color: '#838899'
  }
});
