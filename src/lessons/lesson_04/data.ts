interface IForceUser {
    name: string
    age: number
    isDark: boolean
    lightsaberColors?: string[]
    image: string
}
export const forceUsers: IForceUser[]= [
    {
        name: 'Luke Skywalker',
        age: 30,
        isDark: false,
        lightsaberColors: ['green', 'blue'],
        image:
        'https://nsabers.de/cdn/shop/articles/opolar_Luke_Skywalker_illuminated_only_by_his_green_lightsaber._ea2cfe7b-c177-4019-9b1d-14ca18970bdc.png?v=1706273475'
    },
    {
        name: 'Darth Maul',
        age: 20,
        isDark: true,
        lightsaberColors: ['red'],
        image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yLKTDphimSk5K1BCm2Cp2tGsOC1dsiHPwA&s'
        
    },
    {
        name: 'Yoda',
        age: 1000,
        isDark: false,
        lightsaberColors: ['green'],
        image:
        'https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C768'
    },
    {
        name: 'Darth Vader',
        age: 50,
        isDark: true,
        lightsaberColors: ['blue', 'red'],
        image:
        'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B0BDA09845AA575291C38D21E462571A6E07AC34899505FA6F6D615137B15EDF/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp'
    },
    {
        name: 'Obi Wan',
        age: 52,
        isDark: false,
        lightsaberColors: ['blue'],
        image:
        'https://images.cgames.de/images/gamestar/290/star-wars-obi-wan-kenobi_6004439.jpg'
    }
];