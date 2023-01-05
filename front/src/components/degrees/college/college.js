
import { useCollegeQuery } from "../../../rtk/API"
import { Divider, Badge, Title, Text } from '@mantine/core'

export default function College() {
   const { data } = useCollegeQuery()

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color="dark" variant="filled">Коледж</Badge>} labelPosition="center" />
         {
            data && data.map((specialization, index) => (
               <div key={index}>
                  <Title order={4}>{specialization.name}</Title>
                  <Text>цена:{' '}{specialization.fees}</Text>
                  <Text>{specialization.description}</Text>
               </div>
            ))
         }
      </>
   )
}