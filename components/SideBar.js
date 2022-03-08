import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Image
} from 'react-native';
import bgImage from '../assets/wallpaper.jpg';
import avatarImage from '../assets/icon.png';

import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

export default SideBar = props => (
    <View>
        <ImageBackground
            source={ bgImage }
            style={{
                width: undefined,
                padding: 16,
                paddingTop:48
            }}
        >
            <Image
                source={ avatarImage }
                style={ styles.profile }
            />
            <Text style={ styles.name }>Vietstar.nt@gmail.com</Text>
            <View
                style={{
                    flexDirection: "row"
                }}
            >
                <Text style={ styles.position }> Developer </Text>
                <Ionicons name="md-people" size={16} color="rgba(255,255,255,0.8)" />
            </View>
        </ImageBackground>
        <ScrollView>
            <View
                style={styles.container}
            >
                <DrawerNavigatorItems {...props} />
            </View>
        </ScrollView>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth:3,
        backgroundColor: "#FFF"
    },
    name: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "800",
        marginVertical: 8
    },
    position: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 13,
        marginRight: 5
    }
});
