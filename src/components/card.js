import axios from "axios";

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const Card = (article) => {

  const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
  const headline = document.createElement('div');
    headline.classList.add('headline');
  const author = document.createElement('div');
    author.classList.add('author');
  const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
  const photo = document.createElement('img');
  const name = document.createElement('span');

  cardDiv.appendChild(headline);
  cardDiv.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(name);
  imgContainer.appendChild(photo);

  headline.textContent = article.headline;
  photo.src = article.authorPhoto;
  name.textContent = article.authorName;

  cardDiv.addEventListener('click' , () => console.log(headline))

return cardDiv;
}


  
  
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const cardAppender = (selector) => {
    
    const container = document.querySelector(selector);
 
     axios.get(`http://localhost:5000/api/articles`)
      .then(res => {
        const javascript = res.data['articles']['javascript'];
          javascript.forEach( item => container.appendChild(Card(item)))
        const bootstrap = res.data['articles']['bootstrap'];
          bootstrap.forEach( item => container.appendChild(Card(item)))
        const tech = res.data['articles']['technology'];
          tech.forEach( item => container.appendChild(Card(item)))
        const jquery = res.data['articles']['jquery'];
          jquery.forEach( item => container.appendChild(Card(item)))
        const node = res.data['articles']['node'];
          node.forEach( item => container.appendChild(Card(item)))
      })
      .catch(err => console.error(err));

  return container;
}

export { Card, cardAppender }
