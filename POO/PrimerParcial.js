const autoPrincipal = {
    marca: "Daihatsu",
    modelo: "centra",
    ruedas: 4,
    arrancar() {
        console.log(`${this.marca}: Arrancó sin ningun problema`);
    },
    frenar() {
        console.log(`${this.marca}: Freno un poco brusco`);
    }
};

console.log(autoPrincipal);

autoPrincipal.marca = "Honda";

console.log(autoPrincipal);

function Auto(marca, modelo, ruedas, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.ruedas = ruedas;
    this.year = year;
    this.arrancar = function () {
        console.log(`${this.marca}: Arrancó con mucho ruido`);
    };
    this.frenar = function () {
        console.log(`${this.marca}: los frenos no funcionan muy bien`);
    };
}

const auto1 = new Auto("Nissan", "Sentra", 4, 2024);
const auto2 = new Auto("Ford", "Mustang", 4, 2023);
const auto3 = new Auto("Hyundai", "Elantra", 4, 2025);


auto1.marca = "Chevrolet";


const autos = [auto1, auto2, auto3];


auto1.arrancar();
auto2.arrancar();
auto1.frenar();
auto3.frenar();


console.log(autos);
