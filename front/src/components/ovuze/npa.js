
import { useNpaQuery } from "../../rtk/API"
import { Badge, Divider, Grid, Card, Text, Group, Button } from "@mantine/core"

export default function Npa() {

   const { data } = useNpaQuery()

   return (
      <div>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">Нормативно-правове акты</Badge>} labelPosition="center" />
         {
            data && <Grid>
               {
                  data.map((item, index) => (
                     <Grid.Col md={6} lg={4} sm={12} key={index}>
                        <Card shadow="sm" p="xs" radius="md" withBorder>
                           <Group position="apart" mt="xs" mb="xs">
                              <Text weight={500}>{item.name}</Text>
                              <Badge color="teal" variant="light">НПА</Badge>
                           </Group>
                           <Text weight={400}>{`Описание : `}{' '}{item.description}</Text>
                           <Button component="a" href={item.document} variant="light" color="teal" fullWidth mt="md" radius="md">
                              скачать документ
                           </Button>
                        </Card>
                     </Grid.Col>
                  ))
               }
            </Grid>
         }
      </div>
   )
}