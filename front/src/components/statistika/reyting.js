
import {useReyting_tableQuery, useReyting_statistikaQuery} from '../../rtk/API'
import { Table, Image } from '@mantine/core'

export default function Reyting() {

   const { data } = useReyting_tableQuery()
   const statistika = useReyting_statistikaQuery()

   return <>
      {
         data && (
            <Table verticalSpacing="md" withColumnBorders mb={'lg'}>
               <thead>
                  <tr>
                     <th>индекс</th>
                     <th>вуз</th>
                     <th>количество обучающихся</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     data.map((sostav, index) => (
                        <tr key={index}>
                           <td>{index + 1}</td>
                           <td>{sostav.vuz}</td>
                           <td>{sostav.kolichestvo}</td>
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
