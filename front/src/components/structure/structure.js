
import { useStructureQuery } from "../../rtk/API"
import { Grid, Text, Card, Badge, Divider, Image } from '@mantine/core'

export default function Structure() {

   const { data } = useStructureQuery()

   return <div>
      <Divider my="lg" color={'dark'} label={<Badge color="dark" variant="filled">Структура вуза</Badge>} labelPosition="center" />
      {
         data && (
            <Grid mt={'sm'} grow justify="center">
               {
                  data.map((korpus, index) => (
                     <Grid.Col key={index} md={6} lg={6} sm={6} xs={12}>
                        <Card shadow="sm" p="md" radius="md" withBorder>
                           <Card.Section withBorder inheritPadding py="xs">
                              <Text weight={500}>{korpus.nazvanie_korpusa}</Text>
                           </Card.Section>
                           <Card.Section>
                              <Image src={korpus.foto} />
                           </Card.Section>
                           <Text size="sm" color="dimmed">{korpus.address}</Text>
                        </Card>
                     </Grid.Col>
                  ))
               }
            </Grid>
         )
      }
   </div>
}
