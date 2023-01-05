
import { useStaffQuery } from "../../rtk/API"
import { Divider, Badge, Table } from "@mantine/core"

export default function Staff() {

   const { data } = useStaffQuery()

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color={'dark'} variant="filled">Кадровый состав</Badge>} labelPosition="center" />
         {
            data && (
               <Table>
                  <thead>
                     <tr>
                        <th>Индекс</th>
                        <th>Степень</th>
                        <th>Количество</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        data.map((item, index) => <tr key={index}>
                           <td>{index + 1}</td>
                           <td>{item.level}</td>
                           <td>{item.quantity}</td>
                        </tr>)
                     }
                  </tbody>
               </Table>
            )
         }
      </>
   )
}