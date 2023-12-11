const routes = {
  "/": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/exploration": "/pages/exploration.html"
}

function route(event) {
  event = event || window.event // verifica se o evento existe na página
  event.preventDefault() // impede o padrão de redirecionamento

  window.history.pushState({}, "", event.target.href) //colocar o estado no histórico como sendo alvo do disparo do evento o href da taf a.

  handle()
}

function handle() {
  const { pathname } = window.location // localizar o caminho pela URL
  const route = routes[pathname] || routes["/"]

  fetch(route)
    .then(data => data.text())
    .then(html => (document.querySelector("#app").innerHTML = html))
}

handle()

window.onpopstate = () => handle() //popstate permite fazer
