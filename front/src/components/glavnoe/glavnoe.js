
import { Button, Group, Divider, Badge } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { BsFillKeyFill, BsGraphUp, BsPeopleFill, BsLightning, BsGlobe2 } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const groupElements = ['Деятельность вуза', 'Миссия вуза', 'стратегия', 'Кадровый состав', 'Кратко из истории']
const routes = 'action mission strategy staff history'.split(' ')

export default function Glavnoe() {

   const { colorScheme } = useMantineColorScheme()
   const dark = colorScheme === 'dark'

   const icons = [<BsFillKeyFill size={23} color={dark ? 'white' : 'teal'} />, <BsLightning size={23} color={dark ? 'white' : 'teal'} />, <BsGraphUp size={23} color={dark ? 'white' : 'teal'} />, <BsPeopleFill size={23} color={dark ? 'white' : 'teal'} />, <BsGlobe2 size={23} color={dark ? 'white' : 'teal'} />]

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">Главное </Badge>} labelPosition="center" />

         <Group position="center">
            {
               groupElements.map((element, index) => {
                  return (
                     <Button
                        radius="xl"
                        style={{ textDecoration: 'underline' }}
                        key={index}
                        leftIcon={icons[index]}
                        mb={'lg'}
                        size='lg'
                        fullWidth
                        variant={dark ? 'outline' : 'outline'}
                        color={dark ? 'teal' : 'dark'}>
                        <Link style={dark ? { color: 'white' } : { color: 'teal' }} to={`${routes[index]}`}> {element}</Link>
                     </Button>
                  )
               })
            }
         </Group>
      </>
   )
}