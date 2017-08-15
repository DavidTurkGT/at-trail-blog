(async () => {
  let BLOG = document.querySelector(".blog-container");
  let MARCH = document.createElement("div");
  MARCH.classList.add("march-container");
  let APRIL = document.createElement("div");
  APRIL.classList.add("april-container");
  let MAY = document.createElement("div");
  MAY.classList.add("may-container");
  let JUNE = document.createElement("div");
  JUNE.classList.add("june-container");
  let JULY = document.createElement("div");
  JULY.classList.add("july-container");
  let AUGUST = document.createElement("div");
  AUGUST.classList.add("august-container");
  let SEPTEMBER = document.createElement("div");
  SEPTEMBER.classList.add("september-container");

  //Fetching photos
  let photoURL = "https://api.gettyimages.com/v3/search/images?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=appalachia";
  let request = new Request(photoURL, {
    headers: new Headers({
      'Api-key': "rscbhm9r6exe9s7uc7che8ee"
    })
  })
  res = await fetch(request);
  data = await res.json();
  let photoArr = data.images;
  photoArr = photoArr.map( (x) => {
    return x.display_sizes[0].uri;
  });

  //March Posts
  createPosts(MARCH, photoArr);
  BLOG.appendChild(MARCH);

  //April Posts
  createPosts(APRIL, photoArr);
  BLOG.appendChild(APRIL);

  //May Posts
  createPosts(MAY, photoArr);
  BLOG.appendChild(MAY);

  //June Posts
  createPosts(JUNE, photoArr);
  BLOG.appendChild(JUNE);

  //July Posts
  createPosts(JULY, photoArr);
  BLOG.appendChild(JULY);

  //August Posts
  createPosts(AUGUST, photoArr);
  BLOG.appendChild(AUGUST);

  //September Posts
  createPosts(SEPTEMBER, photoArr);
  BLOG.appendChild(SEPTEMBER);

})();


function createHeading(parent, title){
  let heading = document.createElement("div");
  heading.classList.add("heading");
  let h1 = document.createElement("h1");
  h1.textContent = title + ", 2018";
  heading.appendChild(h1);
  parent.appendChild(heading);
}

async function createPosts(month, photoArr){
  //Create heading
  let monthName = month.classList[0].split("-")[0];
  monthName = monthName.charAt(0).toUpperCase() + monthName.substring(1);
  let heading = document.createElement("div");
  heading.classList.add("heading");
  let h1 = document.createElement("h1");
  h1.textContent = monthName + ", 2018";
  heading.appendChild(h1);
  month.appendChild(heading);

  let numPosts;
  switch (monthName) {
    case "March":
      numPosts = 16;
      break;
    case "April":
      numPosts = 27;
      break;
    case "May":
      numPosts = 29;
      break;
    case "June":
      numPosts = 25;
      break;
    case "July":
      numPosts = 30;
      break;
    case "August":
      numPosts = 28;
      break;
    case "September":
      numPosts = 10;
      break;
    default:
      numPosts = 1;
  }

  console.log("Post #: ", numPosts);

  for(let i = 0; i < numPosts; i++){
    let URL = "https://www.randomtext.me/api/lorem";
    let res, data, sentences;

    let sentenceNum = Math.floor(Math.random() * 10) + 5;
    res = await fetch(URL + "/p-"+sentenceNum+"/20-75");
    data = await res.json();
    sentences = data.text_out.split("\r");
    sentences = sentences.map( (tag) => {
      return tag.substring(3, tag.length - 4);
    });
    let photoNum = Math.floor(Math.random() * 5);
    let photos = [];
    for(let i = 0; i < photoNum; i++){
      photos.push(photoArr[Math.floor(Math.random() * photoArr.length)]);
    }

    let postContent = [];
    if(photos.length){
      let step = Math.floor(sentences.length / photos.length);
      for(let i = 0; i < photos.length; i++){
        let p = document.createElement("p");
        for(let j = 0; j < step; j++){
          p.textContent += sentences[i*step + j];
          postContent.push(p);
        }
        let img = document.createElement("img");
        img.src = photos[i];
        if(i == photos.length - 1){
          img.classList.add("last-img");
        }else if(i%2 == 0){
          //Float right
          img.setAttribute("style","float:right");
        } else {
          //Float left
          img.setAttribute("style","float:left");
        }
        postContent.push(img);
      }
    } else {
      let p = document.createElement("p");
      sentences.forEach( (sentence) => {
        p.textContent += sentence;
        postContent.push(p);
      })
    }
    let post = document.createElement("div");
    post.classList.add("post");

    let date = document.createElement("div");
    date.classList.add("date");
    date.textContent = new Date().toDateString();
    post.appendChild(date);

    let body = document.createElement("div");
    body.classList.add("body");
    postContent.forEach( (e) => body.appendChild(e));
    post.appendChild(body);

    month.append(post);

  }


}

function addPhotos(parent, photoArr){
  let rng = Math.random;
  for(let i  = 0; i < Math.floor(rng() * 4); i++){
    let img = document.createElement("img");
    img.src = photoArr[Math.floor(rng() * photoArr.length)];
    parent.appendChild(img);
  }

}
