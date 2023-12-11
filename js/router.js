export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event // verifica se o evento existe na página
    event.preventDefault() // impede o padrão de redirecionamento

    window.history.pushState({}, "", event.target.href) //colocar o estado no histórico como sendo alvo do disparo do evento o href da taf a.

    this.handle()
  }

  handle() {
    const { pathname } = window.location // localizar o caminho pela URL
    const route = this.routes[pathname] || this.routes["/"]

    fetch(route)
      .then(data => data.text())
      .then(html => (document.querySelector("#app").innerHTML = html))
  }
}
