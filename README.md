[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=13839695)
# Introducción a Vue.js

**Nombre del alumno:** 

## ¿Qué es Vue.js?

Vue.js es un framework progresivo para construir interfaces de usuario. A diferencia de otros frameworks monolíticos, Vue está diseñado desde el inicio para ser adoptado incrementalmente. La biblioteca principal se enfoca solo en la capa de vista, y es fácil de recoger e integrar con otras bibliotecas o proyectos existentes. Por otro lado, Vue también es perfectamente capaz de impulsar aplicaciones sofisticadas de una sola página cuando se utiliza en combinación con herramientas modernas y bibliotecas de apoyo.

## Hola mundo

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Vue.js</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>
  <body>
    <div id="app">
      {{ message }}
    </div>
    <script>
      var app = new Vue({
        el: '#app',
        data: {
          message: '¡Hola, Vue!'
        }
      })
    </script>
  </body>
</html>
```