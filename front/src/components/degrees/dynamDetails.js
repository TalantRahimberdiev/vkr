
import { Divider, List, Paper, Text } from "@mantine/core"

export default function DynamDetails({ param }) {

   return (
      <>
         {
            param.specialities.map((bb, index) => (
               <List size="sm" key={index}>
                  <Divider my="sm" label={`${param.code} : ${param.name}`} labelPosition="center" />
                  <List.Item>Направление: {bb.name}</List.Item>
                  <List.Item>Форма : {bb.distance}</List.Item>
                  <List.Item>Оплата : {bb.fees}</List.Item>
                  <List.Item>Стоимость : {bb.price}</List.Item>
               </List>
            ))
         }
         <Divider my="sm" label={`Опись`} labelPosition="center" />
         <Paper shadow="sm" radius="sm" p="xs">
            <Text size='sm'>{param.description}</Text>
         </Paper>
      </>
   )
}