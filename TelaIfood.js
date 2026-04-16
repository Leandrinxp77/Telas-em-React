import { View, Image, Text, StyleSheet } from 'react-native';

export default function TelaProdutos() {
  return (
    <View style={css.container}>
    
      <View style={css.logoArea}>
        <Image 
          style={css.logo} 
          source={require('./images/logo_ifood.png')} />
      </View>

      <View style={css.superbomArea}>
  <Image style={css.superbomLogo} source={require('./images/superbom.jpg')} />
  <Image style={css.superbomLogo} source={require('./images/tauste.jpg')} />
  <Image style={css.superbomLogo} source={require('./images/confianca.png')} />
</View>

     
      <View style={css.produtos}>
        <View style={css.lista}>
          <Image style={css.itemImg} source={require('./images/dogao.jpg')} />
          <Text style={css.nome}>Hot-Dog</Text>
          <Text style={css.preco}>R$ 10,00</Text>
        </View>

        <View style={css.lista}>
          <Image style={css.itemImg} source={require('./images/x-bacon.jpg')} />
          <Text style={css.nome}>X-bacon</Text>
          <Text style={css.preco}>R$ 27,00</Text>
        </View>

        <View style={css.lista}>
          <Image style={css.itemImg} source={require('./images/sabor.jpg')} />
          <Text style={css.nome}>saBOR</Text>
          <Text style={css.preco}>R$ 17,00</Text>
        </View>
      </View>

    
      <View style={css.produtos}>
        <View style={css.lista}>
          <Image style={css.itemImg} source={require('./images/x-egg.jpg')} />
          <Text style={css.nome}>X-egg</Text>
          <Text style={css.preco}>R$ 26,50</Text>
        </View>

        <View style={css.lista}>
          <Image style={css.itemImg} source={require('./images/x-fernando.jpg')} />
          <Text style={css.nome}>X-fernand</Text>
          <Text style={css.preco}>R$ 999,99</Text>
        </View>

        <View style={css.lista}>
          <Image style={css.itemImg} source={require('./images/kfc.jpg')} />
          <Text style={css.nome}>KFC</Text>
          <Text style={css.preco}>R$ 42,90</Text>
        </View>
        
       </View>

  <View style={css.produtos}>
  <View style={css.lista}>
    <Image style={css.itemImg} source={require('./images/cocaa.jpg')} />
    <Text style={css.nome}>Coca-cola</Text>
    <Text style={css.preco}>R$ 5,00</Text>
  </View>

  <View style={css.lista}>
    <Image style={css.itemImg} source={require('./images/casquinha.jpg')} />
    <Text style={css.nome}>Casquinhas</Text>
    <Text style={css.preco}>R$ 3,00</Text>
  </View>

  <View style={css.lista}>
    <Image style={css.itemImg} source={require('./images/batata.jpg')} />
    <Text style={css.nome}>Batata-frita</Text>
    <Text style={css.preco}>R$ 15,00</Text>
  </View>
</View>

 </View> 

    
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0000", 
  },



  logoArea: {
    alignItems: "center",
    marginVertical: 15,
  },

  logo: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },

  superbomArea: {
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  marginBottom: 20,
  
},

superbomLogo: {
  width: 80,
  height: 80,
  borderRadius: 40, 
  resizeMode: "cover",
},

  produtos: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 1,
  },

  lista: {
    flex: 1,
    alignItems: "center",
  },

  itemImg: {
    width: 80,
    height: 80,
  },


  nome: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },

  preco: {
    fontSize: 14,
    color: "#fff",
  },
});