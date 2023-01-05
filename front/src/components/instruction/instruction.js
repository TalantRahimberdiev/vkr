
import { useInstructureQuery } from '../../rtk/API'
import { useState } from "react"
import { Stepper, Button, Group, Divider, Text, Card, Badge, Grid } from '@mantine/core'
import uuid from 'react-uuid'

export default function Instruction() {

   const { data } = useInstructureQuery()
   const [active, setActive] = useState(0)

   const nextStep = () => setActive(c => c < data.length ? c + 1 : 0)
   const prevStep = () => setActive(c => c > 0 ? c - 1 : data.length - 1)

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color="dark" variant="filled">Инструкции</Badge>} labelPosition="center" />

         <Group position="center" mt="xl" mb={'xl'}>
            <Button onClick={prevStep} color="teal" size="xs" variant="outline">предыдущий</Button>
            <Button onClick={nextStep} color="teal" size="xs" variant="outline">следующий</Button>
         </Group>

         {
            data && (
               <>
                  <Stepper color="teal" size="sm" iconSize={32} active={active} onStepClick={setActive} breakpoint="xs">
                     {
                        data.map(bb => <Stepper.Step key={uuid()} description={bb.title} />)
                     }
                  </Stepper>

                  <Grid mt={'sm'} grow justify="center">
                     {
                        data.map(bb => (
                           <Grid.Col key={uuid()} md={12} lg={12} sm={12} xs={12}>
                              <Card shadow="sm" p="md" radius="md" withBorder>
                                 <Card.Section withBorder inheritPadding py="xs">
                                    <Badge color={bb.nomer === active ? 'teal' : 'dark'} variant="filled">{bb.nomer}</Badge>
                                    <Text weight={500}>{bb.title}</Text>
                                 </Card.Section>

                                 <Text size="sm" color="dimmed">
                                    {bb.description}
                                 </Text>
                              </Card>
                           </Grid.Col>
                        ))
                     }

                  </Grid>
               </>
            )
         }
      </>
   )
}