import sturgeon from '../assest/images/sturgeon.png';
import turkey from '../assest/images/turkey.png';
import eggplant from '../assest/images/eggplant.png';
import lamb from '../assest/images/lamb.png'



export const initialState = [
    {
        id: 1,
        url: 'cold-snack',
        title: 'Холодные закуски',
        products: [
            {
                id:1,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price: 620 ,
                cartPrice: 620,
                cartCount: 1,
                images: {
                    src: lamb,
                    alt: 'food'
                }
            },
            {
                id:2,
                title: 'Индейка',
                description: 'Фаршированная яблоком',
                weigt: 'Вес: 225',
                price: 450 ,
                cartPrice: 450,
                cartCount: 1,
                images: {
                    src: turkey,
                    alt: 'food'
                }
            },
            {
                id:3,
                title: 'Осетр',
                description: 'Запеченный',
                weigt: 'Вес: 225',
                price: 7900 ,
                cartPrice: 7900,
                cartCount: 1,
                images: {
                    src: sturgeon,
                    alt: 'food'
                }
            },
            {
                id:4,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230 ,
                cartPrice: 3230,
                cartCount: 1,
                images: {
                    src: eggplant,
                    alt: 'food'
                }
            }

        ]
    },
    {
        id: 2,
        url: 'hot-snack',
        title: 'Горячие закуски',
        products: [
            {
                id:1,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price: 620 ,
                cartPrice: 620,
                cartCount: 1,
                images: {
                    src: lamb,
                    alt: 'food'
                }
            },
            
            
            {
                id:4,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230 ,
                cartPrice: 3230,
                cartCount: 1,
                images: {
                    src: eggplant,
                    alt: 'food'
                }
            }

        ]

    },
    {
        id: 3,
        url: 'meat-dishes',
        title: 'Мясные блюда',
        products: [
            {
                id:1,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price: 620 ,
                cartPrice: 620,
                cartCount: 1,
                images: {
                    src: lamb,
                    alt: 'food'
                }
            },
            
            {
                id:3,
                title: 'Осетр',
                description: 'Запеченный',
                weigt: 'Вес: 225',
                price: 7900 ,
                cartPrice: 7900,
                cartCount: 1,
                images: {
                    src: sturgeon,
                    alt: 'food'
                }
            },
            {
                id:4,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230 ,
                cartPrice: 3230,
                cartCount: 1,
                images: {
                    src: eggplant,
                    alt: 'food'
                }
            }

        ]

    },
    {
        id: 4,
        url: 'soups',
        title: 'Супы',
        products: [
            {
                id:1,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price: 620 ,
                cartPrice: 620,
                cartCount: 1,
                images: {
                    src: lamb,
                    alt: 'food'
                }
            },
            
            {
                id:3,
                title: 'Осетр',
                description: 'Запеченный',
                weigt: 'Вес: 225',
                price: 7900 ,
                cartPrice: 7900,
                cartCount: 1,
                images: {
                    src: sturgeon,
                    alt: 'food'
                }
            },
            {
                id:4,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230 ,
                cartPrice: 3230,
                cartCount: 1,
                images: {
                    src: eggplant,
                    alt: 'food'
                }
            }

        ]

    },
    {
        id: 5,
        url: 'fish-dishes',
        title: 'Рыбные блюда',
        products: [
            {
                id:1,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price:  620 ,
                cartPrice: 620,
                cartCount: 1,
                images: {
                    src: lamb,
                    alt: 'food'
                }
            },
            {
                id:2,
                title: 'Индейка',
                description: 'Фаршированная яблоком',
                weigt: 'Вес: 225',
                price: 450 ,
                cartPrice: 450,
                cartCount: 1,
                images: {
                    src: turkey,
                    alt: 'food'
                }
            },
            {
                id:3,
                title: 'Осетр',
                description: 'Запеченный',
                weigt: 'Вес: 225',
                price: 7900 ,
                cartPrice: 7900,
                cartCount: 1,
                images: {
                    src: sturgeon,
                    alt: 'food'
                }
            },
            {
                id:4,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230 ,
                cartPrice: 3230,
                cartCount: 1,
                images: {
                    src: eggplant,
                    alt: 'food'
                }
            }

        ]

    },
    {
        id: 6,
        url: 'grill-menu',
        title: 'Гриль меню',
        products: [
            {
                id:1,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price:  620 ,
                cartPrice: 620,
                cartCount: 1,
                images: {
                    src: lamb,
                    alt: 'food'
                }
            },
            {
                id:2,
                title: 'Индейка',
                description: 'Фаршированная яблоком',
                weigt: 'Вес: 225',
                price: 450 ,
                cartPrice: 450,
                cartCount: 1,
                images: {
                    src: turkey,
                    alt: 'food'
                }
            },
            {
                id:3,
                title: 'Осетр',
                description: 'Запеченный',
                weigt: 'Вес: 225',
                price: 7900 ,
                cartPrice: 7900,
                cartCount: 1,
                images: {
                    src: sturgeon,
                    alt: 'food'
                }
            },
            {
                id:4,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230 ,
                cartPrice: 3230,
                cartCount: 1,
                images: {
                    src: eggplant,
                    alt: 'food'
                }
            }

        ]
        

    },
    {
        id: 7,
        url: 'branded-dishes',
        title: 'Фирменные блюда',
        products: [
            {
                id:1,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price: 620 ,
                cartPrice: 620,
                cartCount: 1,
                images: {
                    src: lamb,
                    alt: 'food'
                }
            },
            {
                id:2,
                title: 'Индейка',
                description: 'Фаршированная яблоком',
                weigt: 'Вес: 225',
                price: 450 ,
                cartPrice: 450,
                cartCount: 1,
                images: {
                    src: turkey,
                    alt: 'food'
                }
            },
            {
                id:3,
                title: 'Осетр',
                description: 'Запеченный',
                weigt: 'Вес: 225',
                price: 7900 ,
                cartPrice: 7900,
                cartCount: 1,
                images: {
                    src: sturgeon,
                    alt: 'food'
                }
            },
            {
                id:4,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230 ,
                cartPrice: 3230,
                cartCount: 1,
                images: {
                    src: eggplant,
                    alt: 'food'
                }
            }

        ]

    },
    {
        id: 8,
        url: 'drink',
        title: 'Напитки',
        products: [
            {
                id:1,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price: 620 ,
                cartPrice: 620,
                cartCount: 1,
                images: {
                    src: lamb,
                    alt: 'food'
                }
            },
            {
                id:2,
                title: 'Индейка',
                description: 'Фаршированная яблоком',
                weigt: 'Вес: 225',
                price: 450 ,
                cartPrice: 450,
                cartCount: 1,
                images: {
                    src: turkey,
                    alt: 'food'
                }
            },
            {
                id:3,
                title: 'Осетр',
                description: 'Запеченный',
                weigt: 'Вес: 225',
                price:  7900 ,
                cartPrice: 7900,
                cartCount: 1,
                images: {
                    src: sturgeon,
                    alt: 'food'
                }
            },
            {
                id:4,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230 ,
                cartPrice: 3230,
                cartCount: 1,
                images: {
                    src: eggplant,
                    alt: 'food'
                }
            }

        ]

    }
]