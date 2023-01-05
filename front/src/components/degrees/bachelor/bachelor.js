
import { useBachelorQuery } from "../../../rtk/API"
import DynamTable from "../dynamTable"
import { Divider, Badge, } from '@mantine/core'

export default function Bachelor() {

   const { data} = useBachelorQuery()

   return (
      <>
         <Divider my="lg" color={'dark'} label={<Badge color="dark" variant="filled">Бакалавриат</Badge>} labelPosition="center" />
         {data && <DynamTable param={data} />}
      </>
   )
}