import React from 'react';
import {DatePicker, List} from 'antd-mobile-rn';
import {View} from 'react-native';

const App = () => {
  return (
    <View style={{marginTop: 30}}>
      <List>
        <DatePicker mode="datetime">
          <List.Item arrow="horizontal">选择时间</List.Item>
        </DatePicker>
      </List>
    </View>
  );
};

export default App;
