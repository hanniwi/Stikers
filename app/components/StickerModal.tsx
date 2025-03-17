import React from 'react';
import { 
  Modal, 
  View, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  Text, 
  Dimensions 
} from 'react-native';

// Datos de ejemplo para las pegatinas
const stickers = [
  { id: '1', uri: 'https://via.placeholder.com/100?text=😀' },
  { id: '2', uri: 'https://via.placeholder.com/100?text=😎' },
  { id: '3', uri: 'https://via.placeholder.com/100?text=❤️' },
  { id: '4', uri: 'https://via.placeholder.com/100?text=🚀' },
  { id: '5', uri: 'https://via.placeholder.com/100?text=💯' },
  { id: '6', uri: 'https://via.placeholder.com/100?text=🔥' },
];

interface StickerModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectSticker: (uri: string) => void;
}

export default function StickerModal({ visible, onClose, onSelectSticker }: StickerModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Selecciona una pegatina</Text>
          
          <FlatList
            data={stickers}
            numColumns={3}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.stickerItem}
                onPress={() => {
                  onSelectSticker(item.uri);
                  onClose();
                }}
              >
                <Image source={{ uri: item.uri }} style={styles.stickerImage} />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
          
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  stickerItem: {
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  stickerImage: {
    width: 80,
    height: 80,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});