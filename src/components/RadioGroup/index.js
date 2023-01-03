import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Radio, NativeBaseProvider, Text} from 'native-base';
function index({
  name,
  label = '',
  options,
  valid = true,
  control,
  defaultValue,
  ...rest
}) {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <NativeBaseProvider style={{flex: 1}}>
        {label && <Text style={styles.label}>{label}</Text>}
        <Controller
          control={control}
          name={name}
          render={({field: {onChange, value}}) => (
            <Radio.Group
              defaultValue={defaultValue}
              onChange={onChange}
              name={name}
              value={value}
              flexDirection="row"
              space={5}
              {...rest}>
              {options.map(item => (
                <Radio value={item.value} key={item.key}>
                  <Text marginRight={3}> {item.name}</Text>
                </Radio>
              ))}
            </Radio.Group>
          )}
        />
        {/* {errors[name] && <Text>This is required.</Text>} */}
      </NativeBaseProvider>
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
