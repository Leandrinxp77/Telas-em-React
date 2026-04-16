import { StyleSheet, Text, View, Pressable } from 'react-native';


export default function HelloWorld() {
  return (
    <View style={css.container}> 
      <Text style={css.teste}> 
        Navegação
      </Text>

      
     
        <Text style={css.parte2}> 
          Tela de Login
        </Text>
        
             
        <Text style={css.parte3}> 
          Tela de Produtos
        </Text>

         <Text style={css.parte4}> 
          Tela de Ifood
        </Text>
         
    </View>
  );
}


const css = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor: "#000000",
    borderWidth: 50,
    
    
  
  },


  teste:{
    fontSize:46,
    borderWidth:2,
    backgroundColor:"#FFFFFF",
    
    
  },

  parte2:{
    fontSize:34,
    borderWidth:5,
    backgroundColor:"#0065ff",
    borderRadius: 30,
    
  },

parte3:{
  fontSize:29,
  borderWidth:5,
  backgroundColor:"#00FF00",
  alignSelf:'stretch',   // ocupa a largura do container
  textAlign:'left',  
  borderRadius: 30,  // texto fica à esquerda
},

parte4:{
  fontSize:34,
  borderWidth:5,
  backgroundColor:"#FF0000",
  alignSelf:'stretch',   // ocupa a largura do container
  textAlign:'left',  
  borderRadius: 30,
}


});


