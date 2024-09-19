import image from './assets/image.png'

export const model = [
    {type: 'title', value: 'Компания Велес', options:{
        tag: 'h2',
        styles: "background: linear-gradient(to right, #33ff66, #493240); color: #fff;",
    }},
    {type: 'text', value: 'начнем с текста'},
    {type: 'columns', value:[
        'Услуги',
        'Тарифы',
        'Сотрудники',
        'Вакансии'
    ]},
    {type: 'image', value: image}
]