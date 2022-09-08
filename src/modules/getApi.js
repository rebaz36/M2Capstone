import content from "../index.js";

const getApi = async() => {
    const dataurl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    const datafetch = await fetch(dataurl);
    const jsonFormat = await datafetch.json();
    content.innerHTML = '';
    for (let i = 0; i < jsonFormat.result.length; i += 1) {
      content.innerHTML
              += ` <div class="content1"> <div class="result"><img 
      src=" ${jsonFormat.result[i].image}"> <p class="title" ${jsonFormat.result[i].title}</p></div> 
       </div> `;
    }
  }
  export default getApi;