
import { useBachelorQuery } from "../../../rtk/API"
import { useParams } from "react-router-dom"
import DynamDetails from "../dynamDetails"

export default function DetailsBachelor() {

   const { data} = useBachelorQuery()
   const { details } = useParams()
   const current = data && data.find(bb => bb.code === details)

   return current && <DynamDetails param={current} />
}