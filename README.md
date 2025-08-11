# 🌐 Projeto Integrado: Consumo de API com Expo + Insomnia

<img src="https://cdn-icons-png.flaticon.com/512/1705/1705110.png" width="120" align="right"/>

Bem-vindo(a) ao projeto onde vamos unir **APIs, apps mobile e testes reais** com ferramentas modernas como **Insomnia**, **Axios** e **Expo**!

📍 Aula voltada para os alunos do **3º ano técnico**, dividida em dois momentos:

| Horário | Conteúdo                                  |
|--------|-------------------------------------------|
| 🕘 1º tempo | Testes de API com **Insomnia**            |
| 🕙 2º tempo | Projeto com **Expo** consumindo API real |

---

## 🎯 Objetivo

- Aprender o que é uma API
- Fazer requisições com **Insomnia**
- Criar um app React Native com **Expo**
- Consumir uma API usando **Axios**
- Testar tudo na prática com terminal e navegador

---

## 🧠 Pré-requisitos

📦 Ter acesso ao repositório base:  
👉 [WEB-API-APP no GitHub](https://github.com/professorrichardson/WEB-API-APP)

> Faça um **fork** do projeto e depois clique em  
> **"Codespaces > Create codespace on main"**

---

## ⚙️ Configurando o Projeto

### 🔧 Etapa 1 - Instalar pacotes iniciais

```bash
npm install
```

### 🚀 Etapa 2 - Instalar o Expo CLI globalmente

```bash

npm install -g expo-cli exp
```
### 🌐 Etapa 3 - Instalar Axios


```bash
npm install axios
```
----------

## 📁 Estrutura do Projeto

1.  Na pasta `src`, crie:


`src/servicos/api.js` 

2.  Dentro de `api.js`:
    
```javascript
import axios from  "axios"  
const api = axios.create({ baseURL: "https://fake-api-2y5e.onrender.com/" }) 
export  default api;
```
----------

## 🔌 Conectando a API no app

1.  Vá para:

`src/principal/index.js` 

2.  No topo do arquivo, importe a API:

`import api from  '../../servicos/api'` 

3.  Antes do `return`, crie a função:
    
```javascript

function  Busca() {
    api.get('/users')
    .then(response => { console.log(response.data)
    })
    .catch(error => { console.log(error)
    })
}
```
4.  No botão "Buscar", adicione o `onPress`:
   
```jsx
<TouchableOpacity style={estilos.botao}
    onPress={() =>  Busca()}
> 
<Text>Buscar</Text>
</TouchableOpacity>` 
```
----------

## 🧪 Testando o app no navegador
```bash
expo start
```

➡️ Pressione `W` para abrir o app no navegador.

👁️ Abra o console (F12 ou botão direito > inspecionar)  
🖱️ Clique no botão **Buscar**  no APP
✅ Veja os dados retornando no console!

----------

## 🧪 Testando a API com Insomnia

🔗 **Endpoint da API:**

```http
GET https://fake-api-2y5e.onrender.com/users
```

### Passos:

1.  Abra o **Insomnia**
    
2.  Crie uma nova requisição `GET`
    
3.  Cole a URL
    
4.  Clique em **Send**
    
5.  Veja o JSON sendo retornado!
    

🧪 Exemplo de retorno:

```json

[  
	{  "id":  1,  
	"nome":  "Maria",  
	"idade":  18  
	},  
	{  "id":  2,  
	"nome":  "Lucas",  
	"idade":  19  
	}  
]
```
----------


## 📚 Recursos úteis

-   🔗 Axios Docs
    
-   📱 React Native Docs
    
-   🚀 Expo Docs
    
-   🧪 Insomnia
    

----------

## 💡 Dica final

> Sempre verifique o **console do navegador** para saber se a API respondeu corretamente.  
> Se der erro, revise os caminhos, o nome da função, a URL da API e o console!

----------

## 👨‍🏫 Suporte

📩 Dúvidas? Chame o professor!  
**Prof. Richardson Schawarski Cruz**


## 📲 Teste em celular (opcional)

1.  Instale o app **Expo Go** no celular
    
2.  Use o terminal com `expo start`
    
3.  Escaneie o QR code que aparece com o celular
    

> Se quiser gerar seu próprio QR code:
> 
> -   https://www.qr-code-generator.com/
>     

----------
# Aula 02
1.  Vá para:

`src/servicos` 

2.  Crie a pasta `requisicoes` e dentro o arquivo `usuario.js`:

`src/servicos/requisicoes/usuario.js'` 

3.  Dentro do arquivo usuario.js faça o seguinte :
    
```javascript
import api from  "../api";

export  async  function  buscaUsusario(){
	try{
		const  resultado  =  await api.get('/userslogin=professorrichardson');
	return  resultado.data[0]
}
	catch (error){
		console.log(error)
}
}
```
4.  Agora vamos alterar o pricipal/index.js:
   adicione esse import: 
```jsx
import { buscaUsusario } from  '../../servicos/requisicoes/usuarios';
```
----------
5.  E troque a função busca:

```jsx
async  function  busca(){
		const  resultado  =  await  buscaUsusario()
		console.log(resultado)
	if(resultado){
		setUsuario(resultado)
	}else{
		Alert.alert("Usuario não encontrado!")
	}
}
```
6. Faça as próximas alterações conforme e pedido no React:
```jsx
<Text  style={estilos.textoNome}>{usuario.name}</Text>
<Text  style={estilos.textoEmail}>Email do usuario</Text>
```

7. Após terminar de editar os campos para receber os dados da API temos que configurar o campo input para receber parametros como, por exemplo, o nome para fazer o filtro de busca.

```jsx
<TextInput
placeholder="Busque por um usuário"
autoCapitalize="none"
style={estilos.entrada}
value={nomeUsuario}
onChangeText={setNomeUsuario}
/>
```

8. Vamos alterar a forma de busca para receber os dados via filtro ou o nome que nos digitarmos.

```jsx
async  function  busca(){
	const  resultado  =  await  buscaUsusario(nomeUsuario)
	console.log(resultado)
if(resultado){
	setUsuario(resultado)
}else{
	Alert.alert("Usuario não encontrado!")
	}
}
```
9. No arquivo Usuario temos que receber esse nome que foi informado no input

```jsx
import api from  "../api";

export  async  function  buscaUsusario(nome){
	try{
		const  resultado  =  await  api.get(`/users?login=${nome}`);
		return  resultado.data[0]
	}catch (error){
		console.log(error)
	}
}
```  
10. para evitar que ao pesquisar e não encontrar nada ele fique na  tela anterior vamos validar isso também.
para fazer isso vamos colocar uma estrutura de if 

```javascrpit
{  usuario.login &&
}

antes do inicio do fragmente `<> </>` e depois no final
```

# Aula 03

Agora vamos ver os repositórios, fazer os links e explorar mais um pouco a API.

para isso vamos criar um arquivo que servira de auxilixar em nossas requisiçoes assim como o da busca

1. crie uma pasta chamada `requisicoes` dentro de servicos e um arquivo chamado `repositorio.js` dentro dela

no arquivo iremos escrever o seguinte codigo 
```jsx
import api from  "../api";
export  async  function  pegaRepositrioDoUsuario(id) {
	try{
	const  resultado  =  await  api.get(`/repos?postId=${id}`);
	return  resultado.data
}
	catch (error){
	console.log(error)
	return []
	}
}
```
2. agora temos que linkar o arquivo em `/src/paginas/repositorios` 

```jsx
import { pegaRepositrioDoUsuario } from  '../../servicos/requisicoes/repositorios';
```
3. vamos criar a função especial que atualiza os dados assim que é renderizado a tela 

```jsx
useEffect(async()=>{
	const  resultado  =  await  pegaRepositrioDoUsuario(route.params.id)
setRepo(resultado)
},[])
```

4. Precisamos criar uma flat list para exibir os repositorio que o usuario tem 

```jsx
//</TouchableOpacity>
<FlatList
data={repo}
style={{width:'100%'}}
keyExtractor={repo  =>  repo.id}
renderItem={({item})=>(

<TouchableOpacity style={estilos.repositorio} >
<Text  style={estilos.repositorioNome}>{item.name}</Text>
<Text  style={estilos.repositorioData}>Atualizado em {item.data}</Text>
</TouchableOpacity>
)}
/>
//</View>
```
5. por fim temos que passar o id por parametro lá no botão ou link  que mostra os repositorios

```jsx
<TouchableOpacity  onPress={() => navigation.navigate('Repositorios',{id: usuario.id})}>
<Text  style={estilos.repositorios}>
Ver os repositórios
</Text>
</TouchableOpacity>
```








💻 Bom código a todos e até a próxima aula!
