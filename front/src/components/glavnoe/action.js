
import { useActionQuery } from "../../rtk/API"
import { Divider, Badge, List } from "@mantine/core"

export default function Action() {

   const { data } = useActionQuery()

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">Деятельность </Badge>} labelPosition="center" />
         {
            data && (
               <List type="ordered" size="sm">
                  {
                     data.map((item, index) => <List.Item key={index}><p>{`Мероприятие -->`}{' '}{item.title}</p><p>{`Цель -->`}{' '}{item.aim}</p></List.Item>)
                  }
               </List>
            )
         }
      </>
   )
}