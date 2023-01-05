
import { Text, Image, Flex } from '@mantine/core'
import react_logo from '../../public/react_logo.svg'

export default function Feet() {
   return (
      <Flex align={'center'} justify={'space-between'}>
         <Text>Адрес: город Каракол, ул. Абдрахманова 103</Text>
         <Image width={40} height={40} src={react_logo} />
      </Flex>
   )
}