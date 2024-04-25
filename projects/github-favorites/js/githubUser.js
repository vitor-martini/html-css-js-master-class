export class GithubUser {
  static async search(userName) {
    const url = `https://api.github.com/users/${userName}`

    return fetch(url)
      .then(data => data.json())
      .then(({ login, name, public_repos, followers }) => ({ login, name, public_repos, followers }))
      .then(user => {
        if (!user.login) {
          throw new Error("Usuário não encontrado!")
        }

        return user
      })
      .catch(e => alert(e.message))
  }
}