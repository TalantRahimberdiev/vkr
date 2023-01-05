
const navData =
{
   'ру': [
      { label: 'Башкысы', link: 'main' },
      {
         label: 'Окуу жай тууралу',
         children: [
            { label: 'Профсоюз', link: 'prof_union' },
            { label: 'Стажировка', link: 'practise' },
            { label: 'Китепкана', link: 'libriary' },
            { label: 'Укуктук актылар', link: 'legislative' },
            { label: 'Сурот-галереясы', link: 'gallery' },
         ]
      },
      { label: 'Тузулушу', link: 'structure' },
      { label: 'Университеттин өнөктөштөрү', link: 'partnership' },
      { label: 'Статистика', link: 'statistics' },
      { label: 'Кабыл алуу комиссиясы', link: 'admissionCenter' },
      { label: 'Структура вуза', link: 'structure' },
      { label: 'Кабыл алуу боюнча нускамалар', link: 'instruction' },
      { label: 'Факультеттер', link: 'faculties' },
      {
         label: 'Адистер',
         children: [
            { label: 'техникум', link: 'technikalSchool' },
            { label: 'колледж', link: 'college' },
            { label: 'бакалавриат', link: 'bachelor' },
            { label: 'магистратура', link: 'master' },
         ]
      },
      { label: 'Факультеттер', link: 'faculties' },
      { label: 'Стипендиялар', link: 'schoolarship' },
   ],

   'кыр': [
      { label: 'Главное', link: 'main' },
      {
         label: 'О вузе',
         children: [
            { label: 'Профсоюз', link: 'prof_union' },
            { label: 'Стажировка', link: 'stajirovka' },
            { label: 'Библиотека', link: 'libriary' },
            { label: 'НПА', link: 'npa' },
            { label: 'Фото-галерея', link: 'gallery' },
         ]
      },
      { label: 'Вузы партнеры', link: 'partnership' },
      { label: 'Статистика', link: 'statistika' },
      { label: 'Приемная коммиссия', link: 'admissionCenter' },
      { label: 'Структура вуза', link: 'structure' },
      { label: 'Инструкция для поступления', link: 'instruction' },
      {
         label: 'Специальности',
         children: [
            { label: 'техникум', link: 'technicum/' },
            { label: 'колледж', link: 'college/' },
            { label: 'бакалавриат', link: 'bachelor' },
            { label: 'магистратура', link: 'master' },
         ]
      },
      { label: 'Факультеты', link: 'faculties' },
      { label: 'Стипендии', link: 'schoolarship' },
   ]
}

export default navData