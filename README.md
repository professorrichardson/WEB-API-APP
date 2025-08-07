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

💻 Bom código a todos e até a próxima aula!
