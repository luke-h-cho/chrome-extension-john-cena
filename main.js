
chrome.runtime.onMessage.addListener(setTimeout);
let randomTime = 1000*(Math.floor(Math.random() * 20));

setTimeout( function() {
  alert("YOU CAN'T SEE ME")

  let body = document.body;
  let audio = document.createElement('audio');
  body.appendChild(audio);
  audio.setAttribute('id', 'audio')
  audio.setAttribute('src', chrome.extension.getURL("src/johncena.mp3"))
  audio.setAttribute('autoplay', 'true')
  audio.setAttribute('loop','true')
  
    let imgs = document.getElementsByTagName('img');
    for(imgElt of imgs){
      imgElt.src = chrome.extension.getURL("src/johncena.gif");
    }

  //store the filtered array, by invoking the above function
  let textNodes = elementsWithText();

  //loop through the array
  for (let i = 0; i<textNodes.length; i++){
    //assign nodeVal variable to nodeValue of each textnode array item
    let nodeVal = textNodes[i].nodeValue;
    //replace all "the" with 'OOF'
    textNodes[i].nodeValue = nodeVal.replaceAll(/the/gi,"YOU CAN'T SEE ME");
  }
    
},randomTime);




//create a function that will filter thru all elements in html and return an array with all element nodes with texts inside
function elementsWithText() {
  //calling all elements under <body?
  let elements = document.querySelectorAll("body, body *");
  //empty array of results
  let results = [];
  //run nested loop;; for all the elements under the body
  for(let i = 0; i < elements.length; i++) {
    //check for its child(ren)
    //decalre child to equal to current element's child
    let child = elements[i].childNodes;
      for(let j = 0; j < child.length; j++){
        //if(element's current child exists and the node type is text (==3))
        if(child[j] && child[j].nodeType == 3) {
          //add inside the results array
          results.push(child[j]);
        }
      }
  }
  return results;
}





