import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
// 4- importar a função de salvar
import { salvarRepositoriosDoUsuario } from '../../servicos/requisicoes/repositorios';  

export default function InfoRepositorio({ route, navigation }) {
    // 1- preencher os campos com os dados enviados pela rota
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    // 5 - função de ação ao clicar em salvar
    async function salvar(){
        const resultado= await salvarRepositoriosDoUsuario(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id
        )
        if(resultado === 'sucesso'){
            Alert.alert('Repositorio atualizado!')
             navigation.goBack();
        }else{
            Alert.alert('Erro ao atualizar repositorio')
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                // 2- manipular os campos input
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                 // 3- manipular os campos input
                 value={data}
                 onChangeText={setData}
            />
            <TouchableOpacity 
                style={estilos.botao} 
                // 6- criar a ação de salvar - após terminar aqui volte para repositorios fazer a atualização automatica de tela
                onPress={salvar}
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]} 
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
