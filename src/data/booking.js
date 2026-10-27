export const bookingGuest = {
  name: 'អេលេណា វ៉ាសកេស',
  initials: 'EV',
  email: 'elena.vasquez@correo.es',
  phone: '+34 611 208 774',
  meta: 'ម៉ាឌ្រីដ, អេស្ប៉ាញ · ភាសាអេស្ប៉ាញ ES, EN',
  returning: 'ត្រឡប់មកវិញ · ស្នាក់នៅលើកទី៣',
  lifetime: '€1,284 · 7 យប់',
  note: 'ចូលចិត្តបន្ទប់ស្ងប់ស្ងាត់ ជាន់ខ្ពស់។ មិនចូលចិត្តក្រណាត់រោមសត្វ។',
}

export const bookingDates = {
  checkIn: '2025-10-24',
  checkOut: '2025-10-27',
  nights: 3,
  arrivalTime: '16:00',
  columns: ['24 តុលា', '25 តុលា', '26 តុលា'],
}

export const bookingRoomTypes = [
  {
    id: 'garden',
    name: 'ស៊ូយសួនច្បារ',
    meta: 'ស៊ូយ · 34 ម៉ែត្រការ៉េ · គេង 3 · រានហាល',
    rate: 210,
    availability: ['available', 'available', 'last'],
  },
  {
    id: 'cedar',
    name: 'ស៊ូយសេដា',
    meta: 'ស៊ូយ · 38 ម៉ែត្រការ៉េ · គេង 2 · ទិដ្ឋភាពសួនច្បារ',
    rate: 230,
    availability: ['available', 'available', 'available'],
    selected: true,
  },
  {
    id: 'loft',
    name: 'ស្ទូឌីយ៉ូឡូហ្វ',
    meta: 'ស្ទូឌីយ៉ូ · 28 ម៉ែត្រការ៉េ · គេង 2 · ផ្ទះបាយតូច',
    rate: 172,
    availability: ['last', 'available', 'available'],
  },
  {
    id: 'olive',
    name: 'បន្ទប់អូលីវ',
    meta: 'បន្ទប់គ្នា · 22 ម៉ែត្រការ៉េ · គេង 2 · ទីធ្លា',
    rate: 198,
    availability: ['available', 'available', 'last'],
  },
  {
    id: 'fig',
    name: 'បន្ទប់ដើមល្វា',
    meta: 'បន្ទប់គ្នា · 20 ម៉ែត្រការ៉េ · គេង 2 · ផ្លូវ',
    rate: 165,
    availability: ['available', 'soldOut', 'available'],
  },
  {
    id: 'courtyard',
    name: 'បន្ទប់ទីធ្លា',
    meta: 'បន្ទប់គ្នា · 21 ម៉ែត្រការ៉េ · គេង 2 · ស្ងប់ស្ងាត់',
    rate: 155,
    availability: ['available', 'last', 'last'],
  },
]

export const bookingRates = [
  { id: 'flexible', price: 230, selected: true },
  { id: 'roomOnly', price: 198 },
  { id: 'advance', price: 184 },
]

export const bookingExtras = [
  { id: 'breakfast', price: 72, checked: true },
  { id: 'airport', price: 55, checked: true },
  { id: 'lateCheckout', price: 35, checked: false },
  { id: 'dinner', price: null, checked: false },
]

export const bookingSummary = {
  adults: 2,
  nights: 3,
  dates: '24–27 តុលា 2025',
  roomName: 'ស៊ូយសេដា',
  roomMeta: 'បន្ទប់ 12 · ជាន់ទី១ · ទិដ្ឋភាពសួនច្បារ',
  season: 'រដូវស្លឹកឈើជ្រុះ · បត់បែន · អាហារព្រឹក',
  roomTotal: 690,
  breakfastTotal: 72,
  transferTotal: 55,
  touristTax: 12,
  subtotal: 829,
  discount: 41.45,
  total: 787.55,
  deposit: 236.27,
}

export const bookingAssignedUnit = {
  name: 'ស៊ូយសេដា',
  meta: 'បន្ទប់ 12 · ជាន់ទី១ · ទិដ្ឋភាពសួនច្បារ',
}
