export const occupancyTrend = {
  labels: ['1 តុលា', '4 តុលា', '7 តុលា', '10 តុលា', '13 តុលា', '16 តុលា', '19 តុលា', '22 តុលា', '24 តុលា'],
  series: [
    {
      key: '2025',
      label: '2025',
      color: '#9c4b2f',
      values: [69, 74, 71, 66, 79, 84, 81, 92, 84],
    },
    {
      key: '2024',
      label: '2024',
      color: '#8a8175',
      values: [62, 66, 61, 58, 64, 70, 68, 74, 70],
      dashed: true,
    },
    {
      key: 'average',
      label: 'មធ្យម',
      color: '#c7b8a4',
      values: [64, 68, 63, 60, 66, 72, 70, 76, 72],
      dashed: true,
    },
  ],
}

export const channelMix = [
  { key: 'direct', value: 138, percent: 38, color: '#9c4b2f' },
  { key: 'booking', value: 106, percent: 29, color: '#64795b' },
  { key: 'airbnb', value: 62, percent: 17, color: '#a9772c' },
  { key: 'expedia', value: 36, percent: 10, color: '#8a8175' },
  { key: 'other', value: 22, percent: 6, color: '#cbbfae' },
]

export const revenueSources = [
  { key: 'room', value: 38412, percent: 82 },
  { key: 'breakfast', value: 4218, percent: 9 },
  { key: 'extras', value: 2106, percent: 5 },
  { key: 'lateCheckout', value: 1482, percent: 3 },
  { key: 'events', value: 602, percent: 1 },
]

export const adrRevpar = {
  labels: ['30 កញ្ញា', '07 តុលា', '14 តុលា', '21 តុលា'],
  adr: [196, 208, 218, 232],
  revpar: [154, 168, 182, 195],
}

export const roomPerformance = [
  {
    id: 'rp1',
    name: 'ស៊ូយសួនច្បារ',
    meta: 'ស៊ូយ · 34 ម៉ែត្រការ៉េ',
    units: 2,
    sold: 41,
    occupancy: 85,
    adr: '€218',
    revpar: '€185',
    revenue: '€8,938',
    trend: '+6.2%',
    up: true,
  },
  {
    id: 'rp2',
    name: 'ស៊ូយសេដា',
    meta: 'ស៊ូយ · 38 ម៉ែត្រការ៉េ',
    units: 1,
    sold: 21,
    occupancy: 88,
    adr: '€242',
    revpar: '€213',
    revenue: '€5,082',
    trend: '+9.1%',
    up: true,
  },
  {
    id: 'rp3',
    name: 'ស៊ូយចម្ការ',
    meta: 'ស៊ូយ · 42 ម៉ែត្រការ៉េ · គេង 4',
    units: 1,
    sold: 18,
    occupancy: 75,
    adr: '€288',
    revpar: '€216',
    revenue: '€5,184',
    trend: '-2.4%',
    up: false,
  },
  {
    id: 'rp4',
    name: 'ស្ទូឌីយ៉ូឡូហ្វ',
    meta: 'ស្ទូឌីយ៉ូ · 28 ម៉ែត្រការ៉េ',
    units: 4,
    sold: 78,
    occupancy: 81,
    adr: '€178',
    revpar: '€144',
    revenue: '€13,884',
    trend: '+4.8%',
    up: true,
  },
  {
    id: 'rp5',
    name: 'បន្ទប់គ្នា',
    meta: '11 យូនីត · 20–22 ម៉ែត្រការ៉េ',
    units: 11,
    sold: 198,
    occupancy: 75,
    adr: '€186',
    revpar: '€140',
    revenue: '€36,828',
    trend: '+1.9%',
    up: true,
  },
]
