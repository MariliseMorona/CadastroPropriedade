import React from 'react'
import {Text} from 'react-native'

export default ({route, navigation}) => {
    //Mostra as achaves disponiveis na activity, formulario
    //console.warn(Object.keys(props))
    const [user, setUser] = useState(route.params ? route.params : {})
    const{ dispatch } = UsersContext(UsersContext)
    return (
    //    <Text>{user.id}</Text>
    <View style={style.form}>
        <Text>Nome</Text>
        <TextInput
        style={style.input}
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe o nome"
        value={user.name}
        />
        <Text>Email</Text>
        <TextInput
            style={style.input}
            onChangeText={email => setUser({...user, email})}
            placeholder="Informe o E-mail"
            value={user.email}
        />
        <Text>URL do Avatar</Text>
        <TextInput
            style={style.input}
            onChangeText={avatar => setUser({...user, avatarUrl})}
            placeholder="Informe a URL do avatar"
            value={user.avatarUrl}
        />
        <Button
            title="Salvar"
            onPress={() =>{
                dispatch({
                    type: user.id ? 'updateUser' : 'createUser',
                    payload: user, 
                })
                navigation.goBack()
            }}
        />
    </View>
    )
    }
    const style = StyleSheet.create({
    form: {
        padding: 12
    },

        input: {
        height: 40,
        borderColor: 'gray',
        borderWidht: 1,
        marginBotton: 10
        }
    }
)