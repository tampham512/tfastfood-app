import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
function index({
  name,
  label = '',
  //   onChange,
  valid = true,
  //   value,
  //   onBlur,
  control,

  ...rest
}) {
  return (
    <View style={{width: '100%'}}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            {...rest}
          />
        )}
        name={name}
      />
      {/* {errors[name] && <Text>This is required.</Text>} */}
    </View>
  );
}

export default index;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 5,
    borderColor: '#afb6bd',
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
