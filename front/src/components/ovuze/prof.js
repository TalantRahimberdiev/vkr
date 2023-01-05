
import { useProfQuery } from "../../rtk/API"
import { Divider, Badge, List } from "@mantine/core"

export default function Prof() {

   const { data } = useProfQuery()

   return (
      <div>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">Профессиональный союз</Badge>} labelPosition="center" />
         {
            data && (
               <List type="ordered">
                  {
                     data.map((item, index) => <List.Item key={index}>
                        {item.country}
                        <p>{`Название : `}{' '}{item.name}</p>
                        <p>{`Почта : `}{' '}{item.email}</p>
                        <p>{`Телефон : `}{' '}{item.telephone}</p>
                        <p>{`Факс : `}{' '}{item.fax}</p>
                        <p>{`Адрес : `}{' '}{item.address}</p>
                        <hr style={{ width: '1px solid black' }}></hr>
                     </List.Item>)
                  }
               </List>
            )
         }
      </div>
   )
}