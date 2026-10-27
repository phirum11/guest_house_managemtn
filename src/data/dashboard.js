export const arrivals = [
  {
    id: 'arr1',
    name: 'អាមេលី វីតហ្វីល',
    initials: 'AW',
    room: 'ស៊ូយសួនច្បារ · 3 យប់',
    time: '13:00',
    position: 18,
    status: 'checkedIn',
    barLabel: 'ចូល 13:00',
  },
  {
    id: 'arr2',
    name: 'ព្រីយ៉ា រ៉ាហ្គុណាថាន',
    initials: 'PR',
    room: 'បន្ទប់អូលីវ · 2 យប់',
    time: '14:30',
    position: 34,
    status: 'checkedIn',
    barLabel: 'ចូល 14:30',
  },
  {
    id: 'arr3',
    name: 'តូម៉ាស ហ្វេរេរ៉ា',
    initials: 'TF',
    room: 'ស្ទូឌីយ៉ូឡូហ្វ · 4 យប់',
    time: '16:00',
    position: 52,
    status: 'due',
    barLabel: 'ដល់ម៉ោង 16:00',
  },
  {
    id: 'arr4',
    name: 'ខ្លារ៉ា ប៊ែកស្ត្រូម',
    initials: 'CB',
    room: 'ស៊ូយសេដា · 5 យប់',
    time: '18:30',
    position: 76,
    status: 'unpaid',
    barLabel: 'មិនទាន់បង់ € 18:30',
  },
]

export const departureList = [
  {
    id: 'dep1',
    name: 'ណូអា អូកាហ្វ័រ',
    room: 'ស៊ូយសួនច្បារ',
    nights: 2,
    due: '11:00',
    balance: '€0.00',
    status: 'overdue',
    action: 'checkOut',
  },
  {
    id: 'dep2',
    name: 'សូហ្វីយ៉ា រីចឆ៊ី',
    room: 'ស្ទូឌីយ៉ូឡូហ្វ',
    nights: 4,
    due: '11:00',
    balance: '€124.50',
    status: 'checkedOut',
    action: 'receipt',
  },
  {
    id: 'dep3',
    name: 'ម៉ាកូស ដេឡានី',
    room: 'ស៊ូយសេដា',
    nights: 3,
    due: '12:00',
    balance: '€0.00',
    status: 'checkedOut',
    action: 'receipt',
  },
]

export const housekeepingProgress = [
  { key: 'departureCleans', done: 6, total: 9 },
  { key: 'stayover', done: 5, total: 7 },
  { key: 'inspections', done: 4, total: 6 },
]

export const housekeepingTasksInProgress = [
  {
    id: 'hk1',
    name: 'អ៊ីណេស A.',
    initials: 'IA',
    room: 'Terracotta Room',
    task: 'សម្អាតបន្ទប់ចេញ · អាទិភាព',
    time: '18m',
  },
  {
    id: 'hk2',
    name: 'រូយ B.',
    initials: 'RB',
    room: 'Fig Room',
    task: 'សម្អាតបន្ទប់ស្នាក់នៅ',
    time: '9m',
  },
  {
    id: 'hk3',
    name: 'ឡេណា C.',
    initials: 'LC',
    room: 'Willow Room',
    task: 'រង់ចាំជាងទឹក',
    time: '—',
  },
]

export const revenueWeek = [
  { label: 'ច័ន្ទ 20', value: 2100, display: '2.1k' },
  { label: 'អង្គារ 21', value: 2300, display: '2.3k' },
  { label: 'ពុធ 22', value: 1900, display: '1.9k' },
  { label: 'ព្រហស្បតិ៍ 23', value: 2700, display: '2.7k' },
  { label: 'សុក្រ 24', value: 2940, display: '2.9k', highlight: true },
  { label: 'សៅរ៍ 25', value: 3200, display: '3.2k' },
  { label: 'អាទិត្យ 26', value: 2800, display: '2.8k' },
]
