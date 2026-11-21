let lecturerDb = [];
lecturerDb.push(
  {
    id: 1,
    fullName: "Amadu Kamara",
    department: "DICT",
    PhoneNumber: "076123456",
  },

  {
    id: 2,
    fullName: "Samuel Kamara",
    department: "Software Engineering",
    PhoneNumber: "077124456",
  },
  {
    id: 1,
    fullName: "Foday Kamara",
    department: "Networking",
    PhoneNumber: "088123456",
  },
);

// Display  the entire narrys
console.log(lecturerDb);
// Display the entire array
console.log(`Lecturer Name: ${lecturerDb[1].fullName}`);
console.log(`Department: ${lecturerDb[1].department}`);
console.log(`Phone Number: ${lecturerDb[1].PhoneNumber}`);
