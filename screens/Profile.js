import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class Profile extends Component {
    render() {
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
                        onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name="bars" size={24} color="#161924" />
                    </TouchableOpacity>
                    <View
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Text style={styles.text}>
                            {this.props.name} screen of Ben
                        </Text>
                    </View>
                </SafeAreaView>
            </View>
        )
    } 
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
