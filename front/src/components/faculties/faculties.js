
import { useFacultiesQuery } from '../../rtk/API';
import { Badge, Table, Divider, } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

export default function Faculties() {

   const { data } = useFacultiesQuery()
   const navigate = useNavigate()

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color="dark" variant="filled">Факультеты</Badge>} labelPosition="center" />
         {
            data && (
               <Table verticalSpacing="md" striped highlightOnHover withColumnBorders>
                  <thead>
                     <tr>
                        <th>pk</th>
                        <th>факультет</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        data.map((bb, index) => (
                           <tr key={index}>
                              <td>{bb.pk}</td>
                              <td onClick={() => navigate(`/faculties/${bb.pk}`)} style={{ textDecoration: 'underline' }}>{bb.title}</td>
                           </tr>
                        ))
                     }
                  </tbody>
               </Table>
            )
         }
      </>
   )
}