
import { useStrategyQuery } from "../../rtk/API"
import { Divider, Badge, List } from "@mantine/core"

export default function Strategy() {

   const { data } = useStrategyQuery()

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">Стратегия</Badge>} labelPosition="center" />
         {
            data && (
               <List type="ordered" size="sm">
                  {
                     data.map((item, index) => <List.Item key={index}><p>{`год -->`}{' '}{item.year}</p><p>{`Цель -->`}{' '}{item.title}</p></List.Item>)
                  }
               </List>
            )
         }
      </>
   )
}