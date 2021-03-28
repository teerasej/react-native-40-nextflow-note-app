import { Body, Container, Content, Header, List, ListItem, Title, Button, Icon } from 'native-base'
import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';

export default function HomePage({ navigation }) {

    const notes = useSelector(state => state.notes)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button transparent onPress={onPlusButtonPress}>
                    <Icon
                        name='add'
                        style={
                            { color: 'white' }
                        }
                    />
                </Button>
            ),
        });
    }, [navigation]);

    const onPlusButtonPress = () => {
        navigation.navigate('New Note Page')
    }

    // let notes = [
    //     { title: 'a' },
    //     { title: 'b' },
    //     { title: 'c' }
    // ]

    return (
        <Container>
            <Content>
                <List>
                    {
                        
                        notes.map((item, index) => {
                            return (
                                <ListItem key={index}>
                                    <Text>{item.title}</Text>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Content>
        </Container>
    )
}
