import React from 'react';
import Screen from './Screen';
import Profile from './Profile';
import Message from './Message';

export const ProfileScreen = ({navigation}) => <Profile navigation={navigation} name="Profile" />;
export const MessageScreen = ({navigation}) => <Message navigation={navigation} name="Message" />;
export const ActivityScreen = ({navigation}) => <Screen navigation={navigation} name="Activity" />;
export const ListScreen = ({navigation}) => <Screen navigation={navigation} name="List" />;
export const ReportScreen = ({navigation}) => <Screen navigation={navigation} name="Report" />;
export const SignOutScreen = ({navigation}) => <Screen navigation={navigation} name="SignOut" />;
