import {Alert, HStack, Text, VStack} from 'native-base';
import React from 'react';

function index({color, status, content}) {
  return (
    <Alert
      w="100%"
      colorScheme={color}
      status={status}
      variant={'left-accent'}
      t>
      <VStack space={2} flexShrink={1} w="100%">
        <HStack
          flexShrink={1}
          space={2}
          alignItems="center"
          justifyContent="space-between">
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text color={'#1f2937'}>{content}</Text>
          </HStack>
        </HStack>
      </VStack>
    </Alert>
  );
}

export default index;
