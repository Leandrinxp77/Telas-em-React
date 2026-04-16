import { View, Image, Text, StyleSheet } from 'react-native';


export default function TelaProdutos() {
  return (
    <View style={css.container}>
      <View style={css.menu}>
        <Text style={css.titulo}>Lista de Produtos</Text>
        <Image style={css.imagem} source={require('./images/lupaa.jpg')} />
      </View>

      
      <View style={css.produtos}>
  <View style={css.lista}>
    <Image style={css.itemImg} source={require('./images/xtudo.png')} />
    <Text style={css.nome}>X-tudo</Text>
    <Text style={css.preco}>R$ 33,00</Text>
  </View>

  
  <View style={css.lista}>
    <Image style={css.itemImg} source={require('./images/x-bacon.jpg')} />
    <Text style={css.nome}>X-bacon</Text>
    <Text style={css.preco}>R$ 27,00</Text>
  </View>

  <View style={css.lista}>
    <Image style={css.itemImg} source={require('./images/x-salada.jpg')} />
    <Text style={css.nome}>X-salada</Text>
    <Text style={css.preco}>R$ 25,00</Text>
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
    <Image style={css.itemImg} source={require('./images/x-frango.jpg')} />
    <Text style={css.nome}>X-frango</Text>
    <Text style={css.preco}>R$ 26,50</Text>
  </View>
</View>
      


      </View>

  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff6500",
    
  },

  menu: {
    backgroundColor: "#000",
    height: 80,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  produtos: {
    flexDirection: "row", 
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  lista: {
  backgroundColor: "#ff6500",
  flex: 1,
  alignItems: "center",
  justifyContent: "flex-start",
  paddingVertical: 10,
},

  imagem: {
    width: 40,
    height: 40,  
  },

  itemImg: {
    width: 80,
    height: 80,
  },


  titulo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10, 
  },

  preco: {
    fontSize: 16,
    marginHorizontal: 10,
  },

  
});