import React from 'react'
import {StyleSheet, Text, TextInput, View} from 'react-native'

const InputComponent = (props: {
  placeholder: string
  hidden: boolean
  header: string
  value: string
  setter: (value: string) => void
}) => {
  return (
    <View>
      <View>
        <Text style={styles.label}>{props.header}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={val => props.setter(val)}
        secureTextEntry={props.hidden}></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#A1D5E3',
    borderWidth: 3,
    borderRadius: 5,
    paddingStart: 20,
    marginTop: -10,
    zIndex: -1,
  },
  label: {
    backgroundColor: '#FFF',
    alignSelf: 'flex-start',
    marginLeft: 15,
    color: 'black',
    paddingHorizontal: 5,
    fontWeight: '500',
  },
})

export default InputComponent
