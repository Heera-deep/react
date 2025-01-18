import React, { useEffect } from 'react'

const Simple = () => {

    // const user = {
    //     id: 101,
    //     name: "John Doe",
    //     email: "john.doe@example.com",
    //     address: {
    //       street: "123 Main Street",
    //       city: "Springfield",
    //       state: "IL",
    //       zip: "62704",
    //       geo: {
    //         lat: 39.7817,
    //         lng: -89.6501,
    //       },
    //     },
    //     contactNumbers: ["+123456789", "+987654321"],
    //     socialMedia: {
    //       twitter: "@johndoe",
    //       linkedin: "linkedin.com/in/johndoe",
    //       github: "github.com/johndoe",
    //     },
    //     skills: [
    //       { name: "JavaScript", level: "Advanced" },
    //       { name: "React", level: "Intermediate" },
    //       { name: "Node.js", level: "Intermediate" },
    //     ],
    //     isActive: true,
    //     loginHistory: [
    //       { date: "2024-12-05", device: "Laptop" },
    //       { date: "2024-12-06", device: "Mobile" },
    //     ],
    //     preferences: {
    //       theme: "dark",
    //       notifications: {
    //         email: true,
    //         sms: false,
    //       },
    //     },
    //   };
      
      // console.log(user.address.street);
      

      // const studentMarks = {
      //   math: 85,
      //   science: 90,
      //   english: 78,
      //   history: 88,
      //   geography: 92,
      // };
      

      // for(let i = 0; i < Object.keys(studentMarks).length; i++ ){
      //   console.log(Object.keys(studentMarks)[i], studentMarks[Object.keys(studentMarks)[i]]);
      // }
      // for(let key in studentMarks){
      //   console.log(key, studentMarks[key])
      // }
      useEffect(()=>{
        const obj = document.getElementById("obj");
        obj.style.color = "blue"
        obj.style.background = "red"
        obj.style.fontSize = "20px"
        obj.style.padding = "20px"
        obj.style.borderRadius = "20px"
        obj.style.fontWeight = "600"
      },[])


      
  return (
    <div id='obj'>
      object
    </div>
  )
}

export default Simple
