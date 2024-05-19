import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import foto from './assets/foto.png';
import linkedinLogo from './assets/linkedin.png';
import behanceLogo from './assets/behance.png';
import githubLogo from './assets/github.png';
import estrela1 from './assets/estrela1.png';
import estrela2 from './assets/estrela2.png';
import cert1 from './assets/cert1.png';
import cert2 from './assets/cert2.png';
import cert3 from './assets/cert3.png';
import cert4 from './assets/cert4.png';

// Componentes de página
const PaginaInicial = () => {
  return (
    <View style={styles.container}>
    <Image
      source={estrela1} // Usa a imagem local para o background
      style={styles.estrela1}
    />
    <Image
      source={estrela2} // Usa a imagem local para o background
      style={[styles.estrela2]}
    />
    <View style={styles.content}>
      <Image
        source={foto} // Usa a imagem local
        style={styles.image}
      />
      <Text style={styles.name}>Lucas Oliveira</Text>
      <Text style={styles.occupation}>Designer</Text>
      <Text style={styles.location}>Recife, PE - Brazil</Text>
      <Text style={styles.workText}>Get to know my work.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/lucasrosantos')}>
          <View style={styles.buttonContent}>
            <Image source={linkedinLogo} style={styles.buttonLogo} />
            <Text style={styles.buttonText}>LinkedIn</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.behance.net/lucasrosantos')}>
          <View style={styles.buttonContent}>
            <Image source={behanceLogo} style={styles.buttonLogo} />
            <Text style={styles.buttonText}>Behance</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://github.com/oliveir4lucas')}>
          <View style={styles.buttonContent}>
            <Image source={githubLogo} style={styles.buttonLogo} />
            <Text style={styles.buttonText}>GitHub</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
};

const Pagina1 = () => {
  return (


    
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Image
      source={estrela1} // Usa a imagem local para o background
      style={styles.estrelaAbout}
    />

    <View style={styles.containerAbout}>
      <View style={styles.contentAbout}>
        <Text style={styles.tituloAbout}>About Me</Text>
        <Text style={styles.textabout}>Hello, I'm Lucas, a Graphic Designer and UI/UX Designer constantly evolving in my field. I'm a design enthusiast passionate about exploring the full spectrum of digital design. With over two years of experience in the design field, I decided to broaden my horizons and embark on the journey of Analysis and Systems Development in 2023. I chose to merge my passion for visual creation with technology, where I've been exploring the intersection of design and app/website development.

        I have knowledge in web development and am currently learning mobile development. My goal is to complete my education with excellence and contribute to innovative projects by combining creativity and technical knowledge. In addition to my academic and professional path, I'm constantly seeking to expand my repertoire. I'm open to connections and collaborations with professionals who share the same enthusiasm for design, technology, and innovation.</Text>
        <View style={styles.certificadoContent}>
          <Text style={styles.tituloEdu}>Education and Certifications</Text>

          <Text style={styles.textoads}><Icon name='pencil' size={36} color="#581AA6" /> Analysis and Systems Development 2023 - currently enrolled</Text>


<Text style={styles.tituloCert}>Certifications</Text>
            <View style={styles.contentCert1}>
              <Image source={cert1} style={styles.cert1} />
              <Text style={styles.certText}>PROFIGMA 2023</Text>
            </View>

            <View style={styles.contentCert2}>
              <Image source={cert2} style={styles.cert2} />
              <Text style={styles.certText}>Introduction to UI/UX</Text>
            </View>

            <View style={styles.contentCert3}>
              <Image source={cert3} style={styles.cert3} />
              <Text style={styles.certText}>Advanced HTML</Text>
            </View>

            <View style={styles.contentCert4}>
              <Image source={cert4} style={styles.cert4} />
              <Text style={styles.certText}>How to improve the UX on the digital public service </Text>
            </View>
        </View>
      </View>
    </View>
  </ScrollView>
  );
};

const Pagina2 = () => {
  return (
    <View style={styles.containerSkils}>
    
    </View>
  );
};


const Pagina3 = () => {
  return (
    <View style={styles.pagina}>
      <Text style={styles.textoPagina}>Conteúdo da Página 3</Text>
    </View>
  );
};

const App = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [paginaAtual, setPaginaAtual] = useState('Página Inicial');

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (pagina) => {
    setPaginaAtual(pagina);
    setMenuAberto(false);
  };

  // Renderização condicional da página atual
  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'Página Inicial':
        return <PaginaInicial />;
      case 'Página 1':
        return <Pagina1 />;
      case 'Página 2':
        return <Pagina2 />;
      case 'Página 3':
        return <Pagina3 />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.titulo}>Curriculo Digital</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuIcon}>
          <Text>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Menu */}
      {menuAberto && (
         <View style={[styles.menu, {zIndex: 1}]}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página Inicial')}>
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 1')}>
            <Text style={styles.menuItemText}>About me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 2')}>
            <Text style={styles.menuItemText}>Skills</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navegarPara('Página 3')}>
            <Text style={styles.menuItemText}>Portfolio</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Conteúdo */}
      <View style={styles.content}>{renderizarPagina()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#EFEFED',
  },


  /*Header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    zIndex: 2, // Eleva o cabeçalho acima do menu
    width: '100%',
    position: 'absolute', // Define a posição como absoluta para sobrepor outros elementos
    top: 0, // Alinha o cabeçalho ao topo da tela
    backgroundColor: '#EFEFED', // Define o fundo do cabeçalho como branco
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#581AA6',
    left: 10
  },
  menuIcon: {
    padding: 10,
    color: '#581AA6',
  },
  menu: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    zIndex: 999, // Eleva o menu acima do conteúdo
  },
  menuItem: {
    marginTop:10,
    backgroundColor: '#f9f9f9',
    paddingHorizontal:'42%',
    paddingTop:20,
    alignItems:'center',
    zIndex: 999, // Eleva o menu acima do conteúdo
  }, 
  
  menuItemText: {
    padding:-10,
    color: '#581AA6',
   fontSize:15,
   left: -5,
  },
/*Home*/
  estrela1: {
    position: 'absolute',
    top: 0,
    right: 100,
  
    resizeMode: 'cover',
  },
  estrela2: {
  position: 'absolute',
  bottom:-150,
  left: 70,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#581AA6',
  },
  occupation: {
    fontSize: 20,
    fontWeight: 'medium',
    color: '#581AA6',
  },
  location: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
  },
  workText: {
    fontSize: 22,
    marginTop:30,
    marginBottom: 10,
    fontWeight: '',
    color: '#581AA6',
  },
  buttonContainer: {
    flexDirection: 'colum',
    justifyContent: 'space-around',
  },
  button: {
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row', // Alinha itens na horizontal
    alignItems: 'center', // Alinha itens verticalmente
  
  },
  buttonContent: {
    flexDirection: 'row', // Alinha itens na horizontal
    alignItems: 'center', // Alinha itens verticalmente
  },
  buttonLogo: {
   
    marginRight: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },


  /*Pagina sobre*/

  estrelaAbout: {
    position: 'absolute',
    bottom:550,
    left: 120,
    },

  containerAbout:{
    top:0,
  },

  tituloAbout:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#581AA6',
    bottom: 10,
    textAlign:'center',
  },

  textabout:{
    fontSize: 14,
    textAlign: 'left',
  },

  tituloEdu:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#581AA6',
    textAlign: 'center',
    bottom:20,

  },


    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      top:60,
      paddingBottom:200,
      padding: 20,
    },

    textoads:{
      fontSize:22,
      textAlign:'center',
     },
  
     tituloCert:{
      fontSize:16,
      top:10,
     },
  
    
   certificadoContent:{
    top:50,
  
   },

   contentCert1:{
    top:40,
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 20,
    
   }, 
   contentCert2:{
    top:40,
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 20,
   
   },
    
   contentCert3:{
    top:40,
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 20,
  
   },
    
   contentCert4:{
    top:40,
    justifyContent:'center',
   alignItems:'center',
    marginBottom: 20,
   
   },

   certText:{
    top:10,
    fontSize:18,
   },
  
    
  

});

export default App;