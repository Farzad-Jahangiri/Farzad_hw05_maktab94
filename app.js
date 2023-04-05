'use strict';
/***************************question-1*********************************** */

let user = {
    name:"John",
    age:30,
    sayHello(){
        console.log('====================================');
        console.log("John Hello");
        console.log('====================================');
    }
}

// user.sayHello();

/***************************question-2*********************************** */

let stepCounter = {

    currentStep: 0,
    increase(){
        this.currentStep++;
    },
    decrease(){
        this.currentStep--;
    },
    reset(){
        this.currentStep=0;
    },
    read(){
        console.log('====================================');
        console.log(this.currentStep);
        console.log('====================================');
    }
    
}

/***************************question-3*********************************** */

let people = [
    { name: "John", age: 25 },
    { name: "Mary", age: 20 },
    { name: "Bob", age: 30 },
    { name: "Jane", age: 28 }
  ];
  
  function sortByAge(peopl){
      for (let i = 0; i < peopl.length; i++) {
          for (let j = 0; j < peopl.length - i - 1; j++) {
              if (peopl[j].age > peopl[j + 1].age) {
                  const temp = peopl[j];
                  peopl[j] = peopl[j + 1];
                  peopl[j + 1] = temp;
              }
          }
      }
      return peopl;
  }
  
//   console.log(sortByAge(people));
  

  /***************************question-4*********************************** */


  function showNotification(position) {
    const notification = document.createElement('div');
    notification.innerText = position.html;
    notification.style.position = 'absolute';
    notification.style.top = position.top;
    notification.style.right = position.right;
    document.body.appendChild(notification);
  }

//   showNotification({top: prompt("top:")+"px", right: prompt("right:")+"px",html:prompt("message:")});

/***************************question-5*********************************** */

const ask=(question,yes,no)=>{
    if (confirm(question)) yes();
    else no();
}

// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//     );

/***************************question-6*********************************** */


