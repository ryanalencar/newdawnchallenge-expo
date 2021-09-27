import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import renderFooter from './src/components/renderFooter';
import renderItem from './src/components/renderItem';
import { useFetchVideos } from './src/components/useFetchVideos';
import { Container } from './src/styles';

const App = () => {
  const [videos, fetchMore] = useFetchVideos();

  return (
    <PaperProvider>
      <SafeAreaView>
        <Container>
          <FlatList
            style={{ marginTop: 30 }}
            data={videos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            onEndReached={fetchMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={renderFooter}
          />
        </Container>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
