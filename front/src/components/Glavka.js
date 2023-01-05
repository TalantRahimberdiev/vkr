
import { Provider } from "react-redux"
import { store } from "../rtk/store"
import { Routes, Route, } from "react-router-dom"

import Entry from "./entry"
import Glavnoe from "./glavnoe/glavnoe"

import Action from "./glavnoe/action"
import Mission from './glavnoe/mission'
import Strategy from './glavnoe/strategy'
import Staff from './glavnoe/staff'
import History from "./glavnoe/history"

import Prof from "./ovuze/prof"
import Stajirovka from './ovuze/stajirovka'
import Libriary from "./ovuze/libriary"
import Npa from "./ovuze/npa"
import Foto_Gallery from "./ovuze/gallery"

import Partnership from "./partnership/partnership"
import MainStatistika from "./statistika/main_statistika"
import Trudoustroystvo from "./statistika/trudoustroystvo"
import Kolichestvo_postupivshih from "./statistika/kolichestvo_postupivshih"
import Professorskiy_sostav from "./statistika/professorckiy_sostav"
import Reyting from "./statistika/reyting"

import AdmissionCenter from "./admission/admissionCenter"
import Structure from "./structure/structure"
import Instruction from "./instruction/instruction"

import Technicum from "./degrees/technikum/technikum"
import College from "./degrees/college/college"
import Bachelor from './degrees/bachelor/bachelor'
import DetailsBachelor from './degrees/bachelor/detailsBachelor'
import Master from "./degrees/master/master"
import DetailsMaster from "./degrees/master/detailsMaster"
import Faculties from "./faculties/faculties"
import Faculty_details from "./faculties/faculty_details"
import Stipendia from "./stipendia/stipendia"


export default function Glavka() {

   return (
      <Provider store={store}>

         <Routes>
            <Route path="" element={<Entry />} />
            <Route path="/main/" element={<Glavnoe />} />
            <Route path='/main/action' element={<Action />} />
            <Route path='/main/mission' element={<Mission />} />
            <Route path='/main/strategy' element={<Strategy />} />
            <Route path='/main/staff' element={<Staff />} />
            <Route path='/main/history' element={<History />} />

            <Route path='/prof_union' element={<Prof />} />
            <Route path='/stajirovka' element={<Stajirovka />} />
            <Route path='/libriary' element={<Libriary />} />
            <Route path='/npa' element={<Npa />} />
            <Route path='/gallery' element={<Foto_Gallery />} />

            <Route path='partnership' element={<Partnership />} />
            <Route path='statistika/' element={<MainStatistika />} />
            <Route path='statistika/trudoustroystvo/' element={<Trudoustroystvo />} />
            <Route path='statistika/kolichestvo_postupivshih/' element={<Kolichestvo_postupivshih />} />
            <Route path='statistika/professorskiy_sostav/' element={<Professorskiy_sostav />} />
            <Route path='statistika/reyting/' element={<Reyting />} />

            <Route path="admissionCenter" element={<AdmissionCenter />} />
            <Route path="structure" element={<Structure />} />
            <Route path="instruction" element={<Instruction />} />

            <Route path="technicum/" element={<Technicum />} />
            <Route path="college/" element={<College />} />
            <Route path="bachelor" element={<Bachelor />} />
            <Route path="bachelor/:details" element={<DetailsBachelor />} />
            <Route path="master" element={<Master />} />
            <Route path="master/:details" element={<DetailsMaster />} />
            <Route path="faculties/" element={<Faculties />} />
            <Route path="faculties/:pk" element={<Faculty_details />} />
            <Route path="schoolarship/" element={<Stipendia />} />

         </Routes>
      </Provider>
   )
}