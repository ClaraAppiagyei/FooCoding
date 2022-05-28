const ul = document.getElementById('characters')

const createNode = (element) => { return document.createElement(element); }
const append = (parent, el) => { return parent.appendChild(el); }



fetch("https://www.breakingbadapi.com/api/characters")
   .then(res => res.json())
   .then(data =>{
      console.log(data)

      let characters = data; 
      return characters.map( character => { 
        let li = createNode('li'), 
            img = createNode('img'),
            span = createNode('name');
        img.src = character.img;  
        span.innerHTML = `${character.name}`; 
        append(li, img); 
        append(li, span);
        append(ul, li);
      });

      
   })


