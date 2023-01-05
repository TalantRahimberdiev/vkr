
import { Group, Text, Accordion, Title } from '@mantine/core'
import { useStipendiaQuery } from '../../rtk/API'

function AccordionLabel({ name }) {
   return (
      <Group noWrap>
         <div>
            <Title order={3}>{name}</Title>
         </div>
      </Group>
   )
}

export default function Stipendia() {

   const { data } = useStipendiaQuery()

   if (data) return data?.map((item, index) => (
      <Accordion my={'lg'} key={index} chevronPosition="right" variant="contained">
         <Accordion.Item value={item.name}>
            <Accordion.Control>
               <AccordionLabel {...item} />
            </Accordion.Control>
            <Accordion.Panel>
               <Text align='justify' size="sm">{item.description}</Text>
            </Accordion.Panel>
         </Accordion.Item>
      </Accordion>
   ))
}