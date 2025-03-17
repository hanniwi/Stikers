import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

// Datos de ejemplo para las pegatinas
const stickers = [
  { id: '1', uri: 'https://via.placeholder.com/100?text=😀' },
  { id: '2', uri: 'https://via.placeholder.com/100?text=😎' },
  { id: '3', uri: 'https://via.placeholder.com/100?text=❤️' },
  { id: '4', uri: 'https://via.placeholder.com/100?text=🚀' },
  { id: '5', uri: 'https://via.placeholder.com/100?text=💯' },
  { id: '6', uri: 'https://via.placeholder.com/100?text=🔥' },
];

export default function PegatinasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pegatinas Disponibles</Text>
      <FlatList
        data={stickers}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.stickerContainer}>
            <Image source={{ uri: item.uri }} style={styles.sticker} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.stickerList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  stickerList: {
    alignItems: 'center',
  },
  stickerContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  sticker: {
    width: 100,
    height: 100,
  },
});