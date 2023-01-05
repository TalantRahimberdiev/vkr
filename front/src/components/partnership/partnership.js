
import { usePartnershipQuery } from "../../rtk/API"
import { Badge, Divider, Table } from '@mantine/core'

export default function Partnership() {

   const { data } = usePartnershipQuery()

   return <div>
      <Divider my="lg" color={'dark'} label={<Badge color="dark" variant="filled">Вузы партнеры</Badge>} labelPosition="center" />
      {
         data && (
            <Table verticalSpacing="md" striped highlightOnHover withColumnBorders>
               <thead>
                  <tr>
                     <th>индекс</th>
                     <th>вуз</th>
                     <th>страна</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     data.map((vuz, index) => (
                        <tr key={index}>
                           <td>{index + 1}</td>
                           <td><a href={vuz.link}>{vuz.name}</a></td>
                           <td>{vuz.country}</td>
                        </tr>
                     ))
                  }
               </tbody>
            </Table>
         )
      }
   </div>
}
