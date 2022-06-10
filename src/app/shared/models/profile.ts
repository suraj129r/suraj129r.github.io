export class PersonalInfo {
    personal = [
        { header: 'Name', field: 'Suraj' },
        { header: 'Mobile', field: '784084539' },
        { header: 'Address', field: 'A-610, Mahavir Enclave-2, Gali No-17, New delhi-110059' }
    ]

    social = [
        { header: 'Instagram', field: 'https://www.instagram.com/besotted__one/' },
        { header: 'facebook', field: 'https://www.facebook.com/besottedONE/' },
        { header: 'LinkedIn', field: '' },
        { header: 'Git', field: '' }
    ]

    education = [
        {
            name: 'Graduation', details: [
                { header:'College',field: 'MSIT Delhi' },
                { header:'GPA',field: '8.43' },
                { header:'Year',field: '2015-19' },
            ]
        },
        {
            name: 'Higher-Secondary', details: [
                { header:'School',field: 'RPVV Sec-10, Dwarka' },
                { header:'Percentage',field: '85.4' },
                { header:'Year',field: '2012-14' },
            ]
        },
        {
            name: 'Secondary', details: [
                { header:'School',field: 'MSIT Delhi' },
                { header:'CGPA',field: '9.8' },
                { header:'Year',field: '2012' },
            ]
        },
    ]

    constructor() {
    }
}