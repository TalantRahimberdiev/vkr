
import { useProfessorskiy_sostav_tableQuery, useProfessorskiy_sostav_statistikaQuery } from '../../rtk/API'
import { Table, Image } from '@mantine/core'

export default function Professorskiy_sostav() {

   const { data } = useProfessorskiy_sostav_tableQuery()
   const statistika = useProfessorskiy_sostav_statistikaQuery()

   return <>
      {
         data && (
            <Table verticalSpacing="md" withColumnBorders mb={'lg'}>
               <thead>
                  <tr>
                     <th>индекс</th>
                     <th>степень</th>
                     <th>количество</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     data.map((sostav, index) => (
                        <tr key={index}>
                           <td>{index + 1}</td>
                           <td>{sostav.level}</td>
                           <td>{sostav.quantity}</td>
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
