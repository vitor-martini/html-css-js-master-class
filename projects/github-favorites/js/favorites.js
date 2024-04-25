import { GithubUser } from "./githubUser.js"

class Favorites {
  constructor(root) {
    this.root = document.getElementById(root)
    this.noFavs = document.getElementById("no-favs")
    this.table = this.root.querySelector("table")
    this.tbody = this.root.querySelector("tbody")
    this.loadData()
  }

  loadData() {
    this.data = JSON.parse(localStorage.getItem("@github-favorites:")) || []
  }

  delete(user) {
    const filteredData = this.data.filter(x => x.login !== user.login) 
    this.data = filteredData
    this.save()
  }

  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.data))
  }

  async add(searchedUser) {
    const userExists = this.data.find(x => x.login === searchedUser)
    if(userExists) {
      alert("Usuário já adicionado!")
      return
    }

    const user = await GithubUser.search(searchedUser)
    if (user){
      this.data = [user, ...this.data]
      this.save()
    }
  }
}

export class FavoritesView extends Favorites{
  constructor(root) {
    super(root)
    this.update()
    this.onAdd()
  }

  onAdd() {
    const addButton = this.root.querySelector(".search-wrapper button")
    const searchInput = this.root.querySelector(".search-wrapper input")
    addButton.onclick = async () => {
      const { value } = searchInput
      await this.add(value)
      this.update()
      searchInput.value = ""
    }
  }

  toggleFavsBackground() {
    this.noFavs.classList.add("hidden")
    this.table.classList.remove("no-favs-border")

    if (!this.data || this.data.length == 0) {
      this.noFavs.classList.remove("hidden")
      this.table.classList.add("no-favs-border")
    }
  }

  update() {
    this.removeAllTr()
    this.data.forEach(user => {
      const tr = this.createTr()
      tr.querySelector("a").href = `https://github.com/${user.login}`
      tr.querySelector("img").src = `https://github.com/${user.login}.png`
      tr.querySelector("img").alt = `Imagem de ${user.user}`
      tr.querySelector("p").innerText = user.name
      tr.querySelector("span").innerText = user.login
      tr.querySelector(".repositories").innerText = user.public_repos
      tr.querySelector(".followers").innerText = user.followers
      tr.querySelector(".delete").onclick = () => {
        this.delete(user)
        this.update()
      }
      this.tbody.append(tr)
    })

    this.toggleFavsBackground() 
  }

  removeAllTr() {
    const trs = this.tbody.querySelectorAll("tr")
    trs.forEach(tr => tr.remove())
  }

  createTr() {
    const tr = document.createElement('tr')
    const data = `
      <td class="user">
        <a href="" target="_blank">
          <img src="" alt="">
          <div class="identification-wrapper">
            <p></p>
            <span></span>
          </div>
        </a>
      </td>
      <td class="repositories">6</td>
      <td class="followers">2</td>
      <td class="delete"><button>&times;</button></td>
    `

    tr.innerHTML = data
    return tr
  }
}