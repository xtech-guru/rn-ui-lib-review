/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  BottomNavigation,
  Text,
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Chip,
} from 'react-native-paper';

const MusicRoute = () => (
  <Card>
    <Card.Title
      title="Card Title"
      subtitle="Card Subtitle"
      left={LeftContent}
    />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

const AlbumsRoute = () => (
  <DataTable>
    <DataTable.Header>
      <DataTable.Title>Dessert</DataTable.Title>
      <DataTable.Title numeric>Calories</DataTable.Title>
      <DataTable.Title numeric>Fat</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={page => {
        console.log(page);
      }}
      label="1-2 of 6"
    />
  </DataTable>
);

const RecentsRoute = () => <Text>Recents</Text>;
const App: () => React$Node = () => {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    {key: 'music', title: 'Music', icon: 'queue-music'},
    {key: 'albums', title: 'AlDatabums', icon: 'album'},
    {key: 'recents', title: 'Recents', icon: 'history'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <>
      <Text>zebi</Text>
    </>
  );
};

export default App;
