//step 1.1
function doubleOddNumbers(numbers) {
    const newNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
      }
    }
    return newNumbers;
  }
  
  const myNumbers = [1, 2, 3, 4];
  console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]

  //This is my rewritten code
const doubleOdd = myNumbers.filter(num => num % 2).map(num => num * 2);
console.log(doubleOdd); // ==> [2, 6]

//step 1.2
const monday = [
    {
      name: 'Write a summary HTML/CSS',
      duration: 180
    },
    {
      name: 'Some web development',
      duration: 120
    },
    {
      name: 'Fix homework for class10',
      duration: 20
    },
    {
      name: 'Talk to a lot of people',
      duration: 1.0
    }
  ];
  const tuesday = [
    {
      name: 'Keep writing summary',
      duration: 1.0
    },
    {
      name: 'Some more web development',
      duration: 180
    },
    {
      name: 'Staring out the window',
      duration: 10
    },
    {
      name: 'Talk to a lot of people',
      duration: 1.0
    },
    {
      name: 'Look at application assignments new students',
      duration: 40
    }
  ];
  
  //My program that computes how much Maartje has earned
  let hours = monday.concat(tuesday);
  let total = hours.filter(workDurations =>(workDurations.duration>119)).map(workDurations =>(workDurations.duration/60*20)).reduce((sum, arr) => (sum + arr), 0);
  
  console.log("€" + total);