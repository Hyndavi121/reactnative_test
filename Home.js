import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <View>
                <Button
                    title="Go to Login"
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <Button
                    title="Go to Items"
                    onPress={() => navigation.navigate('Item')}
                />
            </View>
        </View>
    );
}
export default Home;
