import * as React from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import BodyComponent from './components/BodyComponent';
import HeaderComponent from './components/HeaderComponent';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

type State = {
  footerWidth: number;
}

export default class App extends React.Component<any, State> {
  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
    );
  };

  state: State = {
    footerWidth: 0
  };

  onContentLayout(layout: { width: number }) {
    this.setState({ footerWidth: layout.width });
  }

  render() {
    const footerStyle = {
      ...StyleSheet.flatten(styles.footerOverlay),
      width: this.state.footerWidth
    };

    return (
      <View style={styles.container}>
        <HeaderComponent
         statusbarProps={{barStyle: 'light-content'}}
         barStyle="light-content"
        />
        
        <View style={styles.content}
          onLayout={ event => this.onContentLayout(event.nativeEvent.layout) }>
          
          <Card style={styles.cardDesign}>
            <BodyComponent />
          </Card>
          
          <View style={footerStyle}>

            <Ionicons style={styles.button}
             raised
             name="md-camera" 
             size={40}
             color="#aaa"
             onPress={this._handleButtonPress} // go to AR situation page
            />

            <Text style={styles.footerText}>AR situation</Text>
            
          </View>
        </View>

      </View>
    );
  }
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    //justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    //padding: 8,
  },

  content: {
    flex: 1,
    padding: 12,
    //justifyContent: 'center',
  },

  button: {
    //backgroundColor:'#000', //black
    marginLeft: 165,
    marginRight: 170,
  },

  cardDesign: {
    borderRadius: 25,
    marginTop: 40,
  },

  footerOverlay: {
    flex: 1,
    height: 96,
    borderWidth: 2,
    borderTopColor: '#fff', //#ccc
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderBottomColor: '#fff',

    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    opacity: 0.8,
    justifyContent: "center",
  },

  footerText: {
    color: '#ccc',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
