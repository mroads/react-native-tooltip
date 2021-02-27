import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Overlay, Tooltip} from 'react-native-tooltip-mroads';
import infoImage from './assets/information.png';

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolTipContainer: {
    color: 'blue',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 180,
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    width: 400,
    height: 80,
    padding: 20,
    justifyContent: 'center',
  },
  textInput: {
    textAlign: 'left',
    fontSize: 26,
  },
  iconContainer: {
    color: '#FFFFFF',
    fontSize: 24,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    width: 250,
    height: 120,
    backgroundColor: 'black',
  },
  imageStyle: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    color: '#AD0028',
    textAlign: 'center',
    marginBottom: 10,
  },
  iconTooltipContainer: {
    position: 'absolute',
    right: 10,
  },
  country: {
    width: 350,
    height: 70,
    backgroundColor: 'black',
    borderWidth: 0.8,
    borderColor: 'white',
    borderRadius: 10,
  },
  countryText: {
    color: '#FFFFFF',
    fontSize: 26,
    padding: 20,
  },
});

class MainApp extends React.Component {
  state = {
    selectedCountry: 'India',
  };

  setSelectedCountry = country => {
    this.setState({selectedCountry: country});
  };

  renderCountry = ({item}) => (
    <TouchableOpacity
      style={styles.country}
      onPress={() => this.setSelectedCountry(item)}>
      <Text style={styles.countryText}>{item}</Text>
    </TouchableOpacity>
  );

  renderCountryTooltip = () => {
    const countryList = [
      'United States',
      'United Kingdom',
      'United Arab Emirates',
    ];

    return (
      <View style={styles.toolTipContainer}>
        <FlatList
          data={countryList}
          renderItem={this.renderCountry}
          keyExtractor={item => item}
        />
      </View>
    );
  };

  renderIconTooltip = () => {
    return (
      <View style={styles.iconText}>
        <Text style={styles.iconContainer}>
          Find the relevant information here
        </Text>
      </View>
    );
  };

  render() {
    const {selectedCountry} = this.state;
    return (
      <View style={styles.outerContainer}>
        <Overlay />
        <Text style={styles.text}>
          Click on the info icon to see the tooltip
        </Text>
        <Text style={[styles.text, {color: 'green'}]}>
          Select the country by clicking on the text box
        </Text>
        <View style={styles.toolTipContainer}>
          <Tooltip content={this.renderCountryTooltip()}>
            <View style={styles.textInputContainer}>
              <Text style={styles.textInput}>{selectedCountry}</Text>
              <View style={styles.iconTooltipContainer}>
                <Tooltip content={this.renderIconTooltip()} direction="right">
                  <View>
                    <Image
                      source={infoImage}
                      style={styles.imageStyle}
                      resizeMode="contain"
                    />
                  </View>
                </Tooltip>
              </View>
            </View>
          </Tooltip>
        </View>
      </View>
    );
  }
}

export default MainApp;
