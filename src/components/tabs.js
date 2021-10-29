import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const topic = document.createElement('div');
    topic.classList.add('topics');
  const tab1 = document.createElement('div');
    tab1.classList.add('tab');
  const tab2 = document.createElement('div');
    tab2.classList.add('tab');
  const tab3 = document.createElement('div');
    tab3.classList.add('tab');

    topic.appendChild(tab1);
    topic.appendChild(tab2);
    topic.appendChild(tab3);

    tab1.textContent = topics[0];
    tab2.textContent = topics[1];
    tab3.textContent = topics[2];

  return topic;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const element = document.querySelector(selector);
  axios.get(`http://localhost:5000/api/topics`)
    .then(res => {
      const topics = Array.from(res.data.topics);
      
    element.append(Tabs(topics[1],topics[0], topics[2]));
    })
    .catch(err => {
      console.error(err)
    });

    return element
}

console.log(tabsAppender('body'))

export { Tabs, tabsAppender }

// To make the tabs refresh with 3 random items from the provided API array, I did it this way.

// const tabsAppender = (selector) => {
//   const element = document.querySelector(selector);
//   axios.get(`http://localhost:5000/api/topics`)
//     .then(res => {
//       const topics = Array.from(res.data.topics);
//       const arr = [];
//       for(let i = 0; i < 3; i++){
//         const rando = Math.floor(Math.random() * topics.length);
//         arr.push(topics[rando]);
//         topics.splice(rando, 1);
//       };

//     element.append(Tabs(arr));
//     })
//     .catch(err => {
//       console.error(err)
//     });

//     return element
// }