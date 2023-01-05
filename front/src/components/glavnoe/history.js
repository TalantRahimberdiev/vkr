
import { useHistoryQuery } from "../../rtk/API"
import { Divider, Badge, List } from "@mantine/core"

export default function History() {

   const { data } = useHistoryQuery()

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">Историческая справка</Badge>} labelPosition="center" />
         {
            data && (
               <List type="ordered" size="sm">
                  {
                     data.map((item, index) => <List.Item key={index}>{`Год -->`}{' '}{item.year}<p>{item.events}</p></List.Item>)
                  }
               </List>
            )
         }
      </>
   )
}