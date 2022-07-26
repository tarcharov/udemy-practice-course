const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
		"nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
		"nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
		"nestedField": { total: 200 }
  }
];

(function (usersArr){
    const tableShema = {
        index: "#",
        name: "Name",
        email: "Email",
        balance: "Balance"
    }
    const container = document.querySelector('.container')
    const table = document.createElement('table')

    users.forEach(user => {
        table.appendChild(trTemplate(tableShema, user))
    });
    
    container.appendChild(table)

    function trTemplate(tableShema,user){
        const tr = document.createElement('tr')
        
        Object.keys(tableShema).forEach(arg => {
            const td = document.createElement('td')
            td.textContent = user[arg]
            console.log(user)
            tr.appendChild(td)
        })
        return tr
    }

    function theadTemplate(){
        const thead = document.querySelector('thead')
        thead
        return tr
    }

})(users)