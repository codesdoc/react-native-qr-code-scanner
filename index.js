import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


class QrScan extends Component{
  render() {
    return (
      <View style={{width: '100%', height: '100%'}}>
        <WebView
          source={{uri: 'https://codesdoc.com/demo/qrcodescanner/'}}
          startInLoadingState={true}
          onShouldStartLoadWithRequest={event => {
            if (event.url !== 'https://codesdoc.com/demo/qrcodescanner/') {
              console.log('onShouldStartLoadWithRequest', event.url);
              // Write your code here.
              return false;
            }
            return true;
          }}
        />
      </View>
    );
  }
}

export default QrScan;
