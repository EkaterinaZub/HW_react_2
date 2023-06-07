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
                id: 1,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 210',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: lamb,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '210 г'
                }
            },
            {
                id: 2,
                title: 'Индейка',
                description: 'Фаршированная яблоком',
                weigt: 'Вес: 225',
                price: 450,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: turkey,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.34',
                    fatsCal:'7.80',
                    carbohydratesCal:'22.87',
                    kilocaloriesCal: '245',
                    weigtElemCal: '225 г'
                }
            },
            {
                id: 3,
                title: 'Осетр',
                description: 'Запеченный',
                weigt: 'Вес: 245',
                price: 7900,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: sturgeon,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.32',
                    fatsCal:'7.98',
                    carbohydratesCal:'22.65',
                    kilocaloriesCal: '345',
                    weigtElemCal: '245 г'
                }
            },
            {
                id: 4,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: eggplant,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '225 г'
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
                id: 5,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: lamb,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '210 г'
                }
            },


            {
                id: 6,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: eggplant,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '225 г'
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
                id: 7,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: lamb,
                    alt: 'food'
                }, elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '210 г'
                }
            },

            {
                id: 8,
                title: 'Осетр',
                description: 'Запеченный',
                weigt: 'Вес: 225',
                price: 7900,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: sturgeon,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.32',
                    fatsCal:'7.98',
                    carbohydratesCal:'22.65',
                    kilocaloriesCal: '345',
                    weigtElemCal: '245 г'
                }
            },
            {
                id: 9,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: eggplant,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '225 г'
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
                id: 10,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: lamb,
                    alt: 'food'
                }, elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '210 г'
                }
            },

            {
                id: 11 ,
                title: 'Осетр',
                description: 'Запеченный',
                weigt: 'Вес: 225',
                price: 7900,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: sturgeon,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.32',
                    fatsCal:'7.98',
                    carbohydratesCal:'22.65',
                    kilocaloriesCal: '345',
                    weigtElemCal: '245 г'
                }
            },
            {
                id: 12,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: eggplant,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '225 г'
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
                id: 13,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: lamb,
                    alt: 'food'
                }, elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '210 г'
                }
            },
            {
                id: 14,
                title: 'Индейка',
                description: 'Фаршированная яблоком',
                weigt: 'Вес: 225',
                price: 450,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: turkey,
                    alt: 'food'
                },elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.34',
                    fatsCal:'7.80',
                    carbohydratesCal:'22.87',
                    kilocaloriesCal: '245',
                    weigtElemCal: '225 г'
                }
            },
            {
                id: 15,
                title: 'Осетр',
                description: 'Запеченный',
                weigt: 'Вес: 225',
                price: 7900,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: sturgeon,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.32',
                    fatsCal:'7.98',
                    carbohydratesCal:'22.65',
                    kilocaloriesCal: '345',
                    weigtElemCal: '245 г'
                }
            },
            {
                id: 16,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: eggplant,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '225 г'
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
                id: 17,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: lamb,
                    alt: 'food'
                }, elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '210 г'
                }
            },
            {
                id: 18,
                title: 'Индейка',
                description: 'Фаршированная яблоком',
                weigt: 'Вес: 225',
                price: 450,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: turkey,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.34',
                    fatsCal:'7.80',
                    carbohydratesCal:'22.87',
                    kilocaloriesCal: '245',
                    weigtElemCal: '225 г'
                }
            },
            {
                id: 19,
                title: 'Осетр',
                description: 'Запеченный',
                weigt: 'Вес: 225',
                price: 7900,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: sturgeon,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.32',
                    fatsCal:'7.98',
                    carbohydratesCal:'22.65',
                    kilocaloriesCal: '345',
                    weigtElemCal: '245 г'
                }
            },
            {
                id: 20,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: eggplant,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '225 г'
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
                id: 21,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: lamb,
                    alt: 'food'
                }, elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '210 г'
                }
            },
            {
                id: 22,
                title: 'Индейка',
                description: 'Фаршированная яблоком',
                weigt: 'Вес: 225',
                price: 450,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: turkey,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.34',
                    fatsCal:'7.80',
                    carbohydratesCal:'22.87',
                    kilocaloriesCal: '245',
                    weigtElemCal: '225 г'
                }
            },
            {
                id: 23,
                title: 'Осетр',
                description: 'Запеченный',
                weigt: 'Вес: 225',
                price: 7900,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: sturgeon,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.32',
                    fatsCal:'7.98',
                    carbohydratesCal:'22.65',
                    kilocaloriesCal: '345',
                    weigtElemCal: '245 г'
                }
            },
            {
                id: 24,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: eggplant,
                    alt: 'food'
                },elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '225 г'
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
                id: 25,
                title: 'Ягненок',
                description: 'Фаршированный гречневой кашей курагой, апельсином и зеленым яблоком',
                weigt: 'Вес: 225',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: lamb,
                    alt: 'food'
                }, elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '210 г'
                }
            },
            {
                id: 26,
                title: 'Индейка',
                description: 'Фаршированная яблоком',
                weigt: 'Вес: 225',
                price: 450,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: turkey,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.34',
                    fatsCal:'7.80',
                    carbohydratesCal:'22.87',
                    kilocaloriesCal: '245',
                    weigtElemCal: '225 г'
                }
            },
            {
                id: 27,
                title: 'Осетр',
                description: 'Запеченный',
                weigt: 'Вес: 225',
                price: 7900,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: sturgeon,
                    alt: 'food'
                },
                elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.32',
                    fatsCal:'7.98',
                    carbohydratesCal:'22.65',
                    kilocaloriesCal: '345',
                    weigtElemCal: '245 г'
                }
            },
            {
                id: 28,
                title: 'Баклажаны',
                description: 'Фаршированные рисом, курагой и айвой',
                weigt: 'Вес: 225',
                price: 3230,
                cartPrice: 0,
                cartCount: 0,
                images: {
                    src: eggplant,
                    alt: 'food'
                },elements: {
                    squirrels: 'белки',
                    fats:'жиры',
                    carbohydrates:'углеводы',
                    kilocalories: 'Ккал',
                    weigtElem:'Вес'
                },
                calories: {
                    squirrelsCal: '17.23',
                    fatsCal:'7.63',
                    carbohydratesCal:'22.35',
                    kilocaloriesCal: '235',
                    weigtElemCal: '225 г'
                }
            }

        ]

    }
]