import React from 'react';
import { Input, IconButton, Button, Checkbox, Text, Box,
  VStack, HStack, Heading, Icon, Slider, Divider,
  Center, useToast
  } from 'native-base';
import { Entypo } from '@expo/vector-icons';

interface ToDoItem{
  title: string;
  isCompleted: boolean;
  urgencyLevel: number ;
}
const ToDo = () => {
  
  const [list, setList] = React.useState<ToDoItem[]>([]);
  const [inputValue, setInputValue] = React.useState('');
  const [urgencyLevel, setUrgencyLevel] = React.useState<number>(1);
  const level = ["!!!", " !!", " ! "]
  const urgencyLevelColor = ['#FF2400', '#FFFF4D', '#99E64D']
  const toast = useToast();
  
  const addToDo = (title:string, urgency: number) => {
    if (title === '') {
      toast.show({
        title: '請輸入待辦事項',
      });
      return;
    }
    setList((prevList) => {
      return [
        ...prevList,
        {
          title: title,
          isCompleted: false,
          urgencyLevel: urgency,
        },
      ];
    });
  };

  const handleDelete = (index: number) => {
    setList((prevList) => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };

  const handleStatusChange = (index: number) => {
    setList((prevList) => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });
  };

  return (
    <Center w="100%" safeArea>
      <Box maxW="300" w="80%" maxH="100%" mt="5%" mb="90%" alignItems={'center'}>
        <Heading size="xl" mb={4}>
          ToDo
        </Heading>
        <VStack space={4} width="90%">
          <Input
            mt={5}
            size="md"
            onChangeText={(v) => setInputValue(v)}
            value={inputValue}
            placeholder="輸入待辦"
            color="black"
            variant="outline"
          />
          <HStack justifyContent="space-between" width="100%">
            <Text bold fontSize="3xl" color='#FF2400'>!!!</Text>
            <Text bold fontSize="3xl" color='#FFFF4D'>!! </Text>
            <Text bold fontSize="3xl" color='#99E64D'>  !</Text>
          </HStack>
          <Slider 
            defaultValue={1} 
            minValue={0} 
            maxValue={2} 
            step={1} 
            value ={urgencyLevel}
            onChange={(value) => setUrgencyLevel(value)}
            isReadOnly={false}
            >
              <Slider.Track>
                  <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
          </Slider>
          <Button
            borderRadius="md"
            variant="solid"
            alignSelf={'center'}
            onPress={() => {
              addToDo(inputValue, urgencyLevel);
              setInputValue('');
            }}>加入+
          </Button> 
        </VStack>
        <Divider mt={5} thickness="2" bg="gray.400"/>
        <VStack space={5} mt={6}>
          {list.map((item, itemI) => (
            <HStack w="100%" alignItems="center" key={item.title + itemI.toString()}>
              <Checkbox
                alignSelf=''
                isChecked={item.isCompleted}
                onChange={() => handleStatusChange(itemI)}
                value={item.title}></Checkbox>
              <Text
                ml={2}
                mr={2}
                fontSize="2xl"
                color= {urgencyLevelColor[item.urgencyLevel]}>
                {level[item.urgencyLevel]}
              </Text>
              <Text
                width="100%"
                flexShrink={1}
                fontSize="lg"
                textDecorationLine={item.isCompleted ? 'line-through' : 'none'}
                color= {item.isCompleted ? 'gray.400' : 'coolGray.800'}>
                {item.title}
              </Text>
              <IconButton
                size="sm"
                colorScheme="trueGray"
                icon={
                  <Icon
                    as={Entypo}
                    name="minus"
                    size="xs"
                    color="trueGray.400"
                  />
                }
                onPress={() => handleDelete(itemI)}
              />
            </HStack>
          ))}
        </VStack>
      </Box>
    </Center>
  );
};

export default ToDo;