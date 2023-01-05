
import { useMasterQuery } from "../../../rtk/API"
import DynamTable from "../dynamTable"
import { Divider, Badge } from '@mantine/core'

export default function Master() {
   const { data } = useMasterQuery()

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color="dark" variant="filled">Магистратура</Badge>} labelPosition="center" />
         {data && <DynamTable param={data} />}
      </>
   )
}