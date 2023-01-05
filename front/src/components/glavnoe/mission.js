
import { useMissionQuery } from "../../rtk/API"
import { Divider, Badge, List } from "@mantine/core"

export default function Mission() {

   const { data } = useMissionQuery()

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">Миссия вуза</Badge>} labelPosition="center" />
         {
            data && (
               <List type="ordered" size="sm">
                  {
                     data.map((item, index) => <List.Item key={index}>{`Задача -->`}{' '}{item.title}</List.Item>)
                  }
               </List>
            )
         }
      </>
   )
}