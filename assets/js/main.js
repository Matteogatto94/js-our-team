//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
//MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
//MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto

const team = [
    {
        name: 'Wayne Barnett',
        rule: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela',
        rule: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Waleter gordon',
        rule: 'Chief Editor',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Waleter gordon',
        rule: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        rule: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        rule: 'Grafic designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
]

for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];

for (const key in teamMember) {
   console.log(teamMember[key]);
}
}
