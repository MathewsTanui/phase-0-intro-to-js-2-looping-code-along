function writeCards(names, eventName) {
    const messages = []; 
    for (let i = 0; i < names.length; i++) { 
      messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`); 
    }
    return messages; 
  }
  
  function countDown(startingNumber) {
    let i = startingNumber; 
    while (i >= 0) { 
      console.log(i); 
      i--; 
    }
  }
  

