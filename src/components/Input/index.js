import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import CONSTANT from '../../controller/Constant';

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
    height: 65,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    color:CONSTANT.color.textblack,
  },
  label: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    marginBottom: 5,
  },
});
