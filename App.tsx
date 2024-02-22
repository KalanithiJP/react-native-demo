import React, {useState} from 'react';
import {NativeModules} from 'react-native';
const {Hyperkyc} = NativeModules;

import {Button, StyleSheet, Text} from 'react-native';

function startKYC(): void {
  console.log('Launched');
  let configDictionary: {[name: string]: any} = {};
  configDictionary.appId = '63ac9a';
  configDictionary.appKey = '<<appKey>>';
  configDictionary.transactionId = 'HV-test-01';
  configDictionary.workflowId = 'qr_scan';
  //configDictionary.defaultLangCode = "vi";

  let inputsDictionary: {[name: string]: string} = {};
  inputsDictionary.transactionID =
    '559687';

  //configDictionary.inputs = inputsDictionary

  console.log(configDictionary);
  Hyperkyc.launch(configDictionary, function (response: any) {
    console.log(response);
    switch (response.status) {
      case 'auto_approved':
      case 'auto_declined':
      case 'needs_review':
        // Handle Success Workflow
        break;
      case 'user_cancelled':
        // Handle User Cancelled
        break;
      case 'error':
        // Handle Failure Scenario
        break;
    }
  });
}

function App(): JSX.Element {
  return (
    <>
      <Button title="Start KYC" onPress={startKYC} />
      
    </>
  );
}

export default App;
