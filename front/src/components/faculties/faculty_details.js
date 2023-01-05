
import { useParams } from "react-router-dom"
import { useFaculty_by_pkQuery } from "../../rtk/API"
import { Divider, Badge, Grid, Card, Table, Text, Group, } from "@mantine/core"

export default function Faculty_details() {

   const { pk } = useParams()
   const { data } = useFaculty_by_pkQuery(pk)

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">{data?.['faculty'].title}</Badge>} labelPosition="center" />
         {
            data && (
               <>
                  <div style={{ overflowY: 'auto' }}>
                     <Table verticalSpacing="md" striped highlightOnHover withColumnBorders>
                        <thead>
                           <tr>
                              <th>декан</th>
                              <th>почта</th>
                              <th>телефон</th>
                              <th>адрес</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>{data['faculty'].fio_dekan}</td>
                              <td>{data['faculty'].email}</td>
                              <td>{data['faculty'].phone}</td>
                              <td>{data['faculty'].address}</td>
                           </tr>
                        </tbody>
                     </Table>
                  </div>

                  <Grid mt={'lg'}>
                     {
                        data['kafedras'].map((item, index) => (
                           <Grid.Col md={6} lg={4} sm={12} key={index}>
                              <Card shadow="sm" p="xs" radius="xs" withBorder>
                                 <Group position="apart" mt="xs" mb="xs">
                                    <Badge color="green" variant="light">
                                       {item.title}
                                    </Badge>
                                 </Group>
                                 <Text size="sm" color="dimmed"></Text>
                                 <Text weight={400}>{`Зав. кафедры : `}{' '}{item.zav_kafedra}</Text>
                                 <p>{`Почта : `}{' '}{item.email}</p>
                                 <p>{`Телефон : `}{' '}{item.phone}</p>
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