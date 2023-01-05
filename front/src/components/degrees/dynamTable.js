
import { Link, } from "react-router-dom"
import { Table, Text,} from '@mantine/core'
import uuid from 'react-uuid'

export default function DynamTable({ param }) {

   return (
      <Table highlightOnHover>
         <thead>
            <tr>
               <th style={{ textAlign: 'center' }}>код</th>
               <th style={{ textAlign: 'center' }}>название</th>
            </tr>
         </thead>
         <tbody>
            {
               param.map(bb => (
                  <tr style={{ textAlign: 'center' }} key={uuid()}>
                     <td key={uuid()}>{bb.code}</td>
                     {bb.name && <td key={uuid()}><Text color="teal" underline component={Link} to={`${bb.code}`}>{bb.name}</Text></td>}
                  </tr>
               ))
            }
         </tbody>
      </Table>
   )
}