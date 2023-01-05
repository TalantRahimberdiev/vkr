
import { Button, Group, Divider, Badge } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { Link } from 'react-router-dom';

const groupElements = ['Трудоустройство', 'Количество поступивших', 'Профессорский состав', 'Рейтинг вуза',]
const routes = 'trudoustroystvo kolichestvo_postupivshih professorskiy_sostav reyting'.split(' ')

export default function MainStatistika() {

   const { colorScheme } = useMantineColorScheme()
   const dark = colorScheme === 'dark'

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">Статистика </Badge>} labelPosition="center" />

         <Group position="center">
            {
               groupElements.map((element, index) => {
                  return (
                     <Button
                        radius="xl"
                        style={{ textDecoration: 'underline' }}
                        key={index}
                        mb={'lg'}
                        size='lg'
                        fullWidth
                        variant={dark ? 'outline' : 'outline'}
                        color={dark ? 'teal' : 'dark'}>
                        <Link to={`${routes[index]}/`}> {element}</Link>
                     </Button>
                  )
               })
            }
         </Group>
      </>
   )
}