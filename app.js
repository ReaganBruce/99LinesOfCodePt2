document.addEventListener('DOMContentLoaded', function(){
  let friends = ["Rebecca", "John", "Jake", "Connor", "Jordan"];
  let button = document.createElement('button')
  let buttonText = document.createTextNode('SING!');
  

  button.addEventListener('click', function(){
    for (let i = 0; i < friends.length; i++){
      let div = document.createElement('div');
      div.className = 'friends';
      document.body.appendChild(div);

      let h3 = document.createElement('h3');
      let h3Text = document.createTextNode(friends[i] + ':');
      h3.appendChild(h3Text);
      div.appendChild(h3);

      for (let j = 99; j > 0; j--) {
        let p1 = document.createElement('p');
        if (j > 2) {
          let pText = document.createTextNode(`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} lines of code in the file!`);
          p1.appendChild(pText);
        } else if (j == 2){
          let pText = document.createTextNode(`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} line of code in the file!`);
          p1.appendChild(pText);
        } else {
          let pText = document.createTextNode(`${j} line of code in the file, ${j} line of code; ${friends[i]} strikes one out, clears it all out, now there is no code in the file!`)
          p1.appendChild(pText);
        }
        div.appendChild(p1);
        
    }
  }});

  
  
  button.appendChild(buttonText);
  document.body.appendChild(button);
  
  
  
  
  
  
  function friendsArray() {
    button.addEventListener('click', function(){
      loop1: for (i = 0; i < friends.length; i++) {
        console.log(friends[i] + ':')
          loop2: for (j = 99; j > 0; j--) {
            if (j > 2) {
              console.log(`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} lines of code in the file.`);
            } else if (j === 2) {
              console.log(`${j} lines of code in the file, ${j} lines of code; ${friends[i]} strikes one out, clears it all out, ${j - 1} line of code in the file`);
            } else {
              console.log(`${j} line of code in the file, ${j} line of code; ${friends[i]} strikes one out, clears it all out, now there is no code in the file`);
            }
          }
      }
    })
  }
friendsArray();



})  
