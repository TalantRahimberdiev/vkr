import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const API = createApi({
   reducerPath: 'anything',
   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
   endpoints: (builder) => ({

      entry: builder.query({
         query: () => 'entry/'
      }),
      action: builder.query({
         query: () => 'glavnoe/action'
      }),
      mission: builder.query({
         query: () => 'glavnoe/mission'
      }),
      strategy: builder.query({
         query: () => 'glavnoe/strategy'
      }),
      staff: builder.query({
         query: () => "glavnoe/staff",
      }),
      history: builder.query({
         query: () => "glavnoe/history",
      }),


      prof: builder.query({
         query: () => "ovuze/prof",
      }),
      stajirovka: builder.query({
         query: () => "ovuze/stajirovka",
      }),
      libriary: builder.query({
         query: () => "ovuze/libriary",
      }),
      npa: builder.query({
         query: () => "ovuze/npa",
      }),
      gallery: builder.query({
         query: () => "ovuze/gallery",
      }),
      partnership: builder.query({
         query: () => "partnership/",
      }),
      trudoustroystvo_table: builder.query({
         query: () => 'statistika/trudoustroystvo_table/'
      }),
      trudoustroystvo_statistika: builder.query({
         query: () => 'statistika/trudoustroystvo_statistika/'
      }),
      kolichestvo_postupivshih_table: builder.query({
         query: () => 'statistika/kolichestvo_postupivshih_table/'
      }),
      kolichestvo_postupivshih_statistika: builder.query({
         query: () => 'statistika/kolichestvo_postupivshih_statistika/'
      }),
      professorskiy_sostav_table: builder.query({
         query: () => 'statistika/professorskiy_sostav_table/'
      }),
      professorskiy_sostav_statistika: builder.query({
         query: () => 'statistika/professorskiy_sostav_statistika/'
      }),
      reyting_table: builder.query({
         query: () => 'statistika/reyting_table/'
      }),
      reyting_statistika: builder.query({
         query: () => 'statistika/reyting_statistika/'
      }),
      admission: builder.query({
         query: () => 'admission/'
      }),
      structure: builder.query({
         query: () => "structure/",
      }),
      instructure: builder.query({
         query: () => 'instructure/'
      }),
      technicum: builder.query({
         query: () => 'technicum_college/technicum/'
      }),
      college: builder.query({
         query: () => 'technicum_college/college/'
      }),
      bachelor: builder.query({
         query: () => 'bachelor/'
      }),
      master: builder.query({
         query: () => 'master/'
      }),
      faculties: builder.query({
         query: () => 'faculties/'
      }),
      faculty_by_pk: builder.query({
         query: (pk) => `faculties/${pk}/`
      }),
      stipendia: builder.query({
         query: () => `schoolarship/`
      }),
   })
})

export const {
   useEntryQuery,
   useActionQuery,
   useMissionQuery,
   useStrategyQuery,
   useStaffQuery,
   useHistoryQuery,

   useProfQuery,
   useStajirovkaQuery,
   useLibriaryQuery,
   useNpaQuery,
   useGalleryQuery,

   usePartnershipQuery,
   useTrudoustroystvo_tableQuery,
   useTrudoustroystvo_statistikaQuery,
   useKolichestvo_postupivshih_tableQuery,
   useKolichestvo_postupivshih_statistikaQuery,
   useProfessorskiy_sostav_tableQuery,
   useProfessorskiy_sostav_statistikaQuery,
   useReyting_tableQuery,
   useReyting_statistikaQuery,
   useAdmissionQuery,
   useStructureQuery,
   useInstructureQuery,

   useTechnicumQuery,
   useCollegeQuery,
   useBachelorQuery,
   useMasterQuery,
   useFacultiesQuery,
   useFaculty_by_pkQuery,
   useStipendiaQuery,

} = API
