import * as React from 'react';
import { Pressable, View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default Home = ({ navigation }) => {
  return (
    <View
        style={styles.container}
    >
        <SafeAreaView
            style={{
                flex: 1
            }}
        >
            <TouchableOpacity
                style={{
                    alignItems: 'flex-end',
                    margin: 16
                }}
                onPress={navigation.openDrawer}
            >
                <FontAwesome5 name="bars" size={24} color="#161924" />
            </TouchableOpacity>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Welcome to our Home Screen</Text>
                <Text>Checkout screens from the tab below</Text>
                <Pressable
                    onPress={() => navigation.openDrawer()}
                    style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
                >
                    <Text>Open Drawer</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    text:{
        color:"#161924",
        fontSize: 20,
        fontWeight: "500",
    },
});