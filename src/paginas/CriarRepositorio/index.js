import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { criarRepositorioDoUsusario } from '../../servicos/requisicoes/repositorios';

export default function CriarRepositorio({ route, navigation }) {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');

    async function criar() {
        const resultado = await criarRepositorioDoUsusario
        (
            route.params.id,
            nome,
            data,
        )
        console.log(route.parms.id)

        if(resultado === "sucesso"){
            Alert.alert('Repositorio Criado')
            navigation.goBack();
        }else{
            Alert.alert('Erro ao criar repositorio')
        }
        

    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
            />
            <TouchableOpacity style={estilos.botao}
                onPress={criar}
            >
                <Text style={estilos.textoBotao}>
                    Criar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
