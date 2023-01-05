
import { useLibriaryQuery } from "../../rtk/API"
import { Divider, Badge, List } from "@mantine/core"

export default function Libriary() {

   const { data } = useLibriaryQuery()

   return (
      <div>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">Библиотека</Badge>} labelPosition="center" />
         {
            data && (
               <List type="ordered">
                  {
                     data.map((item, index) => <List.Item key={index}>
                        {`Описание : `}{' '}{item.description}
                        <p>Ссылка на библиотеку :{`  `}<a href={item.link}>{item.link}</a></p>
                        <hr style={{ width: '1px solid black' }}></hr>
                     </List.Item>
                     )
                  }
               </List>
            )
         }
      </div>
   )
}