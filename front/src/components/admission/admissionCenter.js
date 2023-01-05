
import { useAdmissionQuery } from '../../rtk/API';
import { Grid, Text, Card, Badge, Image, Group, Divider, } from '@mantine/core'
import { BsFacebook, BsInstagram, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { FaInternetExplorer, FaRoute } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function AdmissionCenter() {

   const { data} = useAdmissionQuery()

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color="dark" variant="filled">Приемная коммиссия</Badge>} labelPosition="center" />
         {
            data?.map((bb, index) => (
               <Grid key={index} grow justify="center">
                  <Grid.Col md={4} lg={4} sm={12}>
                     <Card shadow="sm" p="lg" radius="md" withBorder>
                        <Card.Section>
                           <Image
                              src={bb.foto}
                              style={{ width: '100%', height: 'auto' }}
                              alt="director"
                           />
                        </Card.Section>
                        <Group position="apart" mt="md" mb="xs">
                           <Text weight={500}>{bb.manager}</Text>
                        </Group>
                        <Text size="sm" color="dimmed">{bb.characteristics}</Text>
                     </Card>
                  </Grid.Col>

                  <Grid.Col md={7} lg={7} sm={7}>
                     <Card shadow="sm" p="xs" radius="md" withBorder mb={'sm'}>
                        <Text weight={500}>Контакты</Text>
                        <Text size="sm" color="dimmed">информация для осуществления связи</Text>
                     </Card>
                     <Card shadow="sm" p="xs" radius="md" withBorder>

                        <Group position="apart" mt="md" mb="xs">
                           <div style={{ display: 'flex', alignItems: 'center' }}>
                              <BsWhatsapp color='teal' style={{ margin: 3 }} />
                              <Text ml={'sm'} align='center' component='a' href={`tel:${bb.whatsapp}`} weight={200} underline>
                                 {bb.whatsapp}</Text>
                           </div>
                           <div style={{ display: 'flex', alignItems: 'center' }}>
                              <BsFacebook color='teal' style={{ margin: 3 }} />
                              <Text ml={'sm'} component='a' href={`${bb.facebook}`} weight={200} underline>
                                 {bb.facebook}</Text>
                           </div>
                        </Group>

                        <Group position="apart" mt="md" mb="xs">
                           <div style={{ display: 'flex', alignItems: 'center' }}>
                              <BsInstagram style={{ margin: 3, color: 'teal' }} />
                              <Text ml={'sm'} align='center' component='a' href={`${bb.instagramm}`} weight={200} underline>
                                 {bb.instagramm}</Text>
                           </div>
                           <div style={{ display: 'flex', alignItems: 'center' }}>
                              <BsTelephone color='teal' style={{ margin: 3 }} />
                              <Text ml={'sm'} component='a' href={`tel:${bb.telephone}`} weight={200} underline>
                                 {bb.telephone}</Text>
                           </div>
                        </Group>

                        <Group position="apart" mt="md" mb="xs">
                           <div style={{ display: 'flex', alignItems: 'center' }}>
                              <span style={{ color: 'teal' }}>fax : </span>
                              <Text ml={'sm'} align='center' component='a' href={`tel:${bb.fax}`} weight={200} underline>
                                 {bb.fax}</Text>
                           </div>
                           <div style={{ display: 'flex', alignItems: 'center' }}>
                              <MdEmail color='teal' style={{ margin: 3 }} />
                              <Text ml={'sm'} component='a' href={`mailto:${bb.mail}`} weight={200} underline>
                                 {bb.mail}</Text>
                           </div>
                        </Group>

                        <Group position="apart" mt="md" mb="xs">
                           <div style={{ display: 'flex', alignItems: 'center' }}>
                              <FaInternetExplorer color='teal' style={{ margin: 3 }} />
                              <Text ml={'sm'} align='center' component='a' href={`${bb.site}`} weight={200} underline>
                                 {bb.site}</Text>
                           </div>
                           <div style={{ display: 'flex', alignItems: 'center' }}>
                              <FaRoute color='teal' style={{ margin: 3 }} />
                              <Text ml={'sm'} weight={200}>{bb.address}</Text>
                           </div>
                        </Group>
                     </Card>
                  </Grid.Col>
               </Grid>
            ))
         }
      </>
   );
}