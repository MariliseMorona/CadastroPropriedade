import { getActionFromState } from '@react-navigation/native'
import React from 'react'
import {Text} from 'react-native'
import { View, Alert, FlatList } from 'react-native'
import users from '../data/users'
import {ListItem, Button, Icon} from 'react-native-elements'

export default props => {
 //   console.warn('error')

 const {state, dispatch} = useContext(UsersContext)
 //console.warn(Object.keys(ctx))
    
 function confirmUserDeletion(user){
     Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
         {text: 'Sim', onPress(){dispatch({type: 'deleteUser', payload: user})}},
         //{console.warn('delete' + user.id)}},
         {text: 'Não'}
  
        ])
 }
 
 function getActions(user){
        return (
            <>
            <Button
                onPress={() => props.navigation.navigate('UserForm', user)}
                type="clear"
                icon={<Icon name="edit" size={25} color="orange"/>}

            />
            <Button
                onPress={() => confirmUserDeletion(user)}
                type="clear"
                icon={<Icon name="delete" size={25} color="red"/>}

            />
            </>
           )
        }

    function getUserItem( {item: user}){
//        return <Text>{use.name} - {use.email}</Text>
    return (
        <ListItem
            leftAvatar={{source:{url: user.avatarUrl}}}
            key={user.id}
            title={user.name}
            subtitle={user.email}
            bottomDividir
            rightElemen={getActions(user)}
            onPress={()=>props.navigation.navigate('UserForm')}
        />
    )

    return (
        <View>
            <FlatList
                keyExtracter={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}
}