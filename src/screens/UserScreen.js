import React from 'react';
import { Button, Dimensions, Image, Linking, StyleSheet, Text, View } from 'react-native';


const Avatar = ({ imageUrl }) => {
    const { width, height } = Dimensions.get('window');
    return (
        <Image
            source={{ uri: imageUrl }}
            style={{ width: width, height: height / 1.5 }}
        />
    )
}

const ProfileInfo = ({ label, value, onPress }) => (
    <Text>
        <Text style={styles.label}>{label}: </Text>
        <Text style={[styles.value, onPress && styles.link]} onPress={onPress}>{value}</Text>
    </Text>
)

const UserScreen = ({ navigation, route }) => {
    const { avatar, email, first_name, last_name } = route.params;
    return (
        <View style={styles.container}>
            <Avatar imageUrl={avatar} />
            <ProfileInfo label="First name" value={first_name} />
            <ProfileInfo label="Last name" value={last_name} />
            <ProfileInfo label="Email" value={email} onPress={() => Linking.openURL(email)} />
            <Button title="See other people" onPress={navigation.openDrawer} />
        </View>
    );
}

export default UserScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d8611b'
    },
    label: {
      fontSize: 25
    },
    value: {
      fontSize: 22
    },
    link: {
      color: 'blue',
      textDecorationLine: 'underline'
    },
})
