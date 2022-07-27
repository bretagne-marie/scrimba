import postContent from "./data.js"

const main = document.getElementById("main")
let html = ""

renderPosts()

function renderPosts() {
    for (let i = 0; i < postContent.length; i++) {
        html += `
            <article class = "post-framework">
                    <div class="user">
                        <img class="avatar" src=${postContent[i].avatar}>
                        <div class="user-info">
                            <p class="name">${postContent[i].name}</p>
                            <p class="location">${postContent[i].location}</p>
                        </div>
                    </div>
                    <div>
                        <img class="post" src="${postContent[i].post}">
                    </div>
                    <div class="icon-section">
                        <img class="like icon" src="images/icon-heart.png">
                        <img class="comment icon" src="images/icon-comment.png">
                        <img class="share icon" src="images/icon-dm.png">
                    </div>
                    <div class="caption-section">
                        <div>
                            <p class="like-count">${postContent[i].likes} likes</p>
                        </div>
                        <div>
                            <p class="caption"><span class="bold">${postContent[i].username}</span> ${postContent[i].comment}</p>
                        </div>
                    </div>
            </article>
        `
    }
    main.innerHTML = html
}


