
import { useKolichestvo_postupivshih_tableQuery, useKolichestvo_postupivshih_statistikaQuery } from '../../rtk/API'
import { Table, Image } from '@mantine/core'

export default function Kolichestvo_postupivshih() {

   const { data } = useKolichestvo_postupivshih_tableQuery()
   const statistika = useKolichestvo_postupivshih_statistikaQuery()

   return <>
      {
         data && (
            <Table verticalSpacing="md" withColumnBorders mb={'lg'}>
               <thead>
                  <tr>
                     <th>индекс</th>
                     <th>год</th>
                     <th>количество поступивших</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     data.map((postuplenie, index) => (
                        <tr key={index}>
                           <td>{index + 1}</td>
                           <td>{postuplenie.god}</td>
                           <td>{postuplenie.kolichestvo}</td>
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
