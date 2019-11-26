// search issues (Public)
const btnRepos = document.getElementById("btnRepos")
const btnIssues = document.getElementById("btnIssues")
const divResult = document.getElementById("divResult")
btnRepos.addEventListener("click", getRepos)
btnIssues.addEventListener("click", getIssues)
async function getRepos() {
    clear();
    const url = "https://api.github.com/search/repositories?q=stars:150000..300000"
    const response = await fetch(url)
    const result = await response.json()
    result.items.forEach(i=>{
        const anchor = document.createElement("a")
        anchor.href = i.html_url;
        anchor.textContent = i.full_name;
        divResult.appendChild(anchor)
        divResult.appendChild(document.createElement("br"))
    })
}
async function getIssues() {
    clear();
    const url = "https://api.github.com/search/issues?q=author:raisedadead repo:freecodecamp/freecodecamp type:issue"
    const response = await fetch(url)
    const result = await response.json()
    result.items.forEach(i=>{
        const anchor = document.createElement("a")
        anchor.href = i.html_url;
        anchor.textContent = i.title;
        divResult.appendChild(anchor)
        divResult.appendChild(document.createElement("br"))
    })
}
function clear(){
    while(divResult.firstChild) 
        divResult.removeChild(divResult.firstChild)
}