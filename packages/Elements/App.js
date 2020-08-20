/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, {useState} from 'react';
import {Text} from 'react-native';
import {
  ButtonGroup,
  Card,
  Button,
  SocialIcon,
  AirbnbRating,
} from 'react-native-elements';

const App: () => React$Node = () => {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const buttons = ['Hello', 'World', 'Buttons'];

  const updateIndex = index => {
    setSelectedIndex(index);
  };
  const ratingCompleted = () => {
    console.log('rating completed');
  };
  return (
    <>
      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{height: 100}}
      />
      <Card
        title="HELLO WORLD"
        image={{
          uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
        }}>
        <Text style={{marginBottom: 10}}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
      <AirbnbRating />
      <SocialIcon title="Sign In With Facebook" button type="facebook" />
      <SocialIcon title="Some Twitter Message" button type="twitter" />
      <SocialIcon button type="medium" />
    </>
  );
};

export default App;
