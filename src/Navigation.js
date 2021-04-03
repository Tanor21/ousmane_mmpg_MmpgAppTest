import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { initUsers } from './store/actions';
import { getUsers } from './store/selectors';
import UserScreen from './screens/UserScreen';


const Drawer = createDrawerNavigator();

export default function App() {
    const dispatch = useDispatch();
    const users = useSelector(getUsers);

    useEffect(() => {
        dispatch(initUsers());
    }, [dispatch])

    if (!users?.length > 0) return null;

    const screens = users.map((user) => (
        <Drawer.Screen
            key={user.id}
            name={`user-${user.id}`}
            component={UserScreen}
            initialParams={user}
            options={{ drawerLabel: `${user.first_name} ${user.last_name}` }}
        />
    ))

    return (
        <NavigationContainer>
            <Drawer.Navigator
              drawerContentOptions={{
                activeTintColor: '#d8611b',
                backgroundColor: '#1b6176',
                itemStyle: { marginVertical: 5 },
              }}
              initialRouteName={`user-${users[0].id}`}>
                {screens}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
