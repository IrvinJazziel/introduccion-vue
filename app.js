//Limpia la consola. Sin embargo, "Hola mundo" no es un argumento valido para console.clear().
console.clear("Hola mundo");

//Crea una nueva apliacion Vue. Sin embargo, la sintaxis de la plantilla esta incorrecta.
//Deberia ser "<h1> Hola a todos en la UPAP</h1>
var diversion = Vue.createApp({
    template: "<h1> Hola a todos en la UPAP</h1>",
});

//Monta la aplicacion Vue en un elemento con el id "main".
diversion.mount("#main");

var Edad = Vue.createApp({
    template: `
        <div>
            <h1>Aplicacion de Vue.js</h1>
            <p>La edad de {{nombre}} es: {{edad}} años</p>
            <button v-on:click="sumarEdad">Aumentar edad</button>
        </div>
    `,
    data() {
        //Los datos que se pueden usar en la plantilla
        return {
            nombre: 'Juan',
            edad: 20 
        };
    },
    methods: {
        //Un metodo que se puede llamar desde la plantilla.
        sumarEdad() {
            this.edad++;
        }
    }
});

//Monta la aplicacion Vue en un elemento con el id "app".
Edad.mount("#app");

// //Crear una instancia de Vue y no montarla inmediatamente.
// //Esto puede ser util si necesitas hacer algo antes de montar la apliacion.
const instanciaVue = Vue.createApp ({
     template: `
         <div>
             <p>Instancia de Vue que se monta despues de 5 segundos.</p>
         </div>
     `,
 })

 setTimeout (() => {
     instanciaVue.mount("#instanciaVue");
 }, 5000)