import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  SectionList,
} from 'react-native';

const notifications = [
  {
    id: 1,
    notificationText:
      'Lorem Ipsum is simply dummy text of printing and type setting entry',
    date: '12/04/2018 12:30 PM',
  },
  {
    id: 2,
    notificationText:
      'Lorem Ipsum is simply dummy text of printing and type setting entry',
    date: '12/04/2018 12:30 PM',
  },
  {
    id: 3,
    notificationText:
      'Lorem Ipsum is simply dummy text of printing and type setting entry',
    date: '12/04/2018 12:30 PM',
  },
];

const headerTitle = [
  {
    title: 'Today',
    data: notifications,
  },
  {
    title: 'Yeasterday',
    data: notifications,
  },
  {
    title: 'Day before Yesterday',
    data: notifications,
  },
];

const VNotificationItem = ({item, onItemClick}) => {
  return (
    <TouchableOpacity style={styles.notificationItem} onPress={onItemClick}>
      <Image
        style={styles.leftContainer}
        source={require('../../images/notifications.png')}
      />
      <View style={styles.rightContainer}>
        <Text style={styles.notificationText} numberOfLines={2}>
          {item.notificationText}
        </Text>
        <Text style={styles.notificationDate} numberOfLines={1}>
          {item.date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

class VNotifications extends Component {
  onItemClick = () => {
    this.props.navigation.navigate('VNotificationDetail');
  };

  renderHeader(title) {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <SectionList
            style={styles.header}
            sections={headerTitle}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <VNotificationItem item={item} onItemClick={this.onItemClick} />
            )}
            renderSectionHeader={({section: {title}}) =>
              this.renderHeader(title)
            }
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  notificationItem: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    paddingHorizontal: 16,
  },
  rightContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#f6f6f6',
  },
  notificationText: {
    fontFamily: 'Poppins-Regular',
    color: 'black',
    fontSize: 12,
    width: '100%',
  },
  leftContainer: {
    width: 48,
    height: 48,
    marginRight: 16,
  },
  notificationDate: {
    fontFamily: 'Poppins-Regular',
    color: 'gray',
    fontSize: 12,
    marginBottom: 4,
    width: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  header: {
    backgroundColor: '#f6f6f6',
  },
  headerText: {
    fontFamily: 'Poppins-Medium',
    color: 'gray',
    fontSize: 12,
  },
  listContainer: {
    width: '100%',
    flexDirection: 'column',
  },
  headerContainer: {
    padding: 8,
    paddingLeft: 16,
  },
});

export default VNotifications;
