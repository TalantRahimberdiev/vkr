
import { useStajirovkaQuery } from "../../rtk/API"
import { Divider, Badge, Grid, Card, Image, Text, Group, } from "@mantine/core"

export default function Stajirovka() {

   const { data } = useStajirovkaQuery()

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">Стажировка</Badge>} labelPosition="center" />
         {
            data && <Grid>
               {
                  data.map((item, index) => (
                     <Grid.Col md={6} lg={4} sm={12} key={index}>
                        <Card shadow="sm" p="lg" radius="md" withBorder>
                           <Card.Section>
                              <Image src={item.foto} width='100%' height={130} />
                           </Card.Section>

                           <Group position="apart" mt="md" mb="xs">
                              <Text weight={500}>{`Организация : `}{' '}{item.organization}</Text>
                              <Badge color="green" variant="light">
                                 Стажировка
                              </Badge>
                           </Group>
                           <Text size="sm" color="dimmed"></Text>
                           <Text weight={400}>{`Описание : `}{' '}{item.description}</Text>
                           <p>{`Почта : `}{' '}{item.email}</p>
                           <p>{`Телефон : `}{' '}{item.telephone}</p>
                           <p>{`Адрес : `}{' '}{item.address}</p>
                        </Card>
                     </Grid.Col>
                  ))
               }
            </Grid>
         }
      </>
   )
}