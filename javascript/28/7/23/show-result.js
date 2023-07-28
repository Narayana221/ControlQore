let details = [
    {
      "FirstName": "John",
      "LastName": "Doe",
      "Age": 20,
      "Department": "Computer Science"
    },
    {
      "FirstName": "Jane",
      "LastName": "Smith",
      "Age": 22,
      "Department": "Physics"
    },
    {
      "FirstName": "Michael",
      "LastName": "Johnson",
      "Age": 21, 
      "Department": "Mathematics"
    },
    {
      "FirstName": "Sarah",
      "LastName": "Williams",
      "Age": 19,
      "Department": "Computer Science"
    },
    {
      "FirstName": "Robert",
      "LastName": "Brown",
      "Age": 23,
      "Department": "Mathematics"
    },
    {
      "FirstName": "Emily",
      "LastName": "Davis",
      "Age": 20,
      "Department": "Computer Science"
    }
  ]
  //console.log(details)

  let a = details.filter(x => x.Department === "Computer Science").map(x => `${x.FirstName}  ${x.LastName}`)
  console.log(a)
  
  a  = details.filter(x => x.Age > 21).map(x => x.FirstName)
  console.log(a)

  a = details.filter(x => x.Department === "Computer Science").some( x=> x.FirstName === "Robert")
  console.log(a)

  a = details.some(x=> x.Age > 23  && x.Department === "Mathematics")
  console.log(a)

  a = details.every(x => x.Age > 18)
  console.log(a)

  a = details.find(x => x.FirstName === "Robert").map(x => x.Department)
  console.log(a)