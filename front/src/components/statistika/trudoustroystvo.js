
import { useTrudoustroystvo_tableQuery,useTrudoustroystvo_statistikaQuery} from '../../rtk/API'
import { Table, Image } from '@mantine/core'

export default function Trudoustroystvo() {

   const { data } = useTrudoustroystvo_tableQuery()
   const statistika = useTrudoustroystvo_statistikaQuery()

   return <>
      {
         data && (
            <Table verticalSpacing="md" withColumnBorders mb={'lg'}>
               <thead>
                  <tr>
                     <th>индекс</th>
                     <th>год</th>
                     <th>трудоустроены</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     data.map((sostav, index) => (
                        <tr key={index}>
                           <td>{index + 1}</td>
                           <td>{sostav.god}</td>
                           <td>{sostav.trudoustroen}</td>
                        </tr>
                     ))
                  }
               </tbody>
            </Table>
         )
      }
      {
         statistika.data && <Image src={statistika.data} />
      }
   </>
}
