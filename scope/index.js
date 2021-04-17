const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // console.log('A', personB);
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // console.log('B', personC;);
        }
      }

      personC = personA;
      // console.log('C', personB);
    }

    changePerson();

    // console.log('D', personC);

    const result = [
      { 'A': 'Ben' },
      { 'B': 'CardiB' },
      { 'C': 'CardiB' },
      { 'D': 'Paul' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // console.log('A', number);

      function newNumber() {
        number = 64;

        // console.log('B', number);
      }

      newNumber();

      // console.log('C', number);
    }

    numberFunction();

    // console.log('D', number);

    const result = [
      { 'A': 75 },
      { 'B': 64 },
      { 'C': 64 },
      { 'D': 30 },
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // console.log('A', greeting);
      
      function newPhrase() {
        greeting = 'Hey';
        
        // console.log('B', greeting);
      }
      
      newPhrase();
      
      // console.log('C', greeting);
    }
    
    greetingFunction();
    
    // console.log('D', greeting);
    
    const result = [
      { 'A': 'Yo' },
      { 'B': 'Hey' },
      { 'C': 'Hey' },
      { 'D': 'Hello' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // console.log('A', greeting);

      const newGreeting = ()  => {
        greeting = 'welcome';

        // console.log('B', greeting);
      };

      newGreeting();

      // console.log('C', greeting);
    };

    greetingGenerator();

    // console.log('D', greeting);

    const result = [
      { 'A': 'hi' },
      { 'B': 'welcome' },
      { 'C': 'welcome' },
      { 'D': 'howdy' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // console.log('A', name);
      }
      // console.log('B', name);
    }

    // console.log('C', name);

    sayName();
    // console.log('D', name);

    const result = [
      { 'C': 'Brittany' },
      { 'A': 'Nathaniel' },
      { 'B': 'Nathaniel' },
      { 'D': 'Brittany' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // console.log('A', dog);

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // console.log('B', dog);

        dog = 'Biscuit';

        // console.log('C', dog);

      }

      rollOver();

      // console.log('D', dog);
    }

    petDog();

    // console.log('E', dog);

    const result = [
      { 'A': 'Spot' },
      { 'B': 'Spot' },
      { 'C': 'Biscuit' },
      { 'D': 'Biscuit' },
      { 'E': 'Biscuit' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // console.log('A', fruit); 
          const fruit = 'strawberry';
        }

        // console.log('B', fruit);
      }

      // console.log('C', fruit); 
    }

    eatFruit();

    // console.log('D', fruit);

    const result = [
      { 'A': 'reference error' },
      { 'B': 'mango' },
      { 'C': 'mango' },
      { 'D': 'apple' }];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // console.log('A', num);

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // console.log('B', newNum);
      }

      newNum = num;

      // console.log('C', newNum);
    };

    const fn2 = function(num){
      // console.log('D', num);

      num = num + 1;

      // console.log('E', num);
    };

    fn1();

    const result = [
      { 'A': 4 },
      { 'D': 9 },
      { 'E': 10 },
      { 'B': 9 },
      { 'C': 4 }];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // console.log('A', hunger); 
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // console.log('B', hunger);
      }

      // console.log('C', hunger);
    }

    eatSnack();

    hunger += 5;
    // console.log('D', hunger);

    eatSnack();
    // console.log('E', hunger);

    const result = [
      {'A': 75 },
      {'B': 0 },
      {'C': 75 },
      {'D': 80 },
      {'A': 55 },
      {'B': 0 },
      {'C': 55 },
      {'E': 55 }];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // console.log('A', sandwich);

    const addChipotle = () => {
      // console.log('B', toppings);
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // console.log('C', sandwich);
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // console.log('D', cheeseTopping);

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // console.log('E', sandwich);
    // console.log('F', amandaBynes);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // console.log('A', num);
    }

    foo();

    // console.log('B', num);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // console.log('A', grade);
      }

      addPoints();

      // console.log('B', grade);
    }

    losePoints();

    // console.log('C', grade);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // console.log('A', num);
      num = 6;
      // console.log('B', num);
    }

    function second() {
      // console.log('C', num);
      let num = 7;
    }

    first();
    second();

    // console.log('D', num);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // console.log('A', instructor);

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // console.log('B', instructor);

      function rename() {
        instructor = 'Louisa';
        // console.log('C', instructor);
      }

      rename();

      // console.log('D', instructor);

    }

    // console.log('E', instructor);

    changeInstructor();

    // console.log('F', instructor);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // console.log('A', shoe);
      var shoe = 'boot';
    }

    // console.log('B', shoe);
    putOnShoe();
    // console.log('C', shoe);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // console.log('A', lunch);
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // console.log('B', lunch);
    }

    orderLunch();

    // console.log('C', lunch);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // console.log('A', kid);
      wildKids.push(kid);
      // console.log('B', wildKids);
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // console.log('C', myKid);
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // console.log('D', myKid);
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // console.log('E', myKid;);
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // console.log('A', myName);

    const parentFunc = () => {
      myName += 'Toy';
      // console.log('B', myName);

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // console.log('C', myName);
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // console.log('D', myName);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;