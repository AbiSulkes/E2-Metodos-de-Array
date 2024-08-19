const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//ejercicio A: Las pizzas que tengan un "id" impar.
const pizzasConIdImpar = pizzas.filter((idImpar) => {
  return (idImpar = idImpar.id % 2 !== 0);
});

const idPizza = pizzasConIdImpar.forEach((pizzaId) => {
  console.log(`Las pizzas con "id" impar son: ${pizzaId.id}`);
});

//ejercicio B: Responder ¿Hay alguna pizza que valga menos de $600?.
const pizzaMenorAseiscientos = pizzas.some((pizza) => {
  return (pizza = pizza.precio < 600);
});

console.log(
  `¿Hay alguna pizza que valga menos de $600? ${
    pizzaMenorAseiscientos
      ? "Sí, hay pizzas con precio menor a lo indicado."
      : "No, todas superan ese valor."
  }`
);

//ejercicio C: El nombre de cada pizza con su respectivo precio.
pizzas.forEach((pizza) => {
  console.log(
    `Pizza: ${pizza.nombre}, tiene un valor de $${pizza.precio} pesos.`
  );
});

//ejercicio D: Todos los ingredientes de cada pizza (en cada iteración imprimir los ingredientes de la pizza que se está recorriendo).
pizzas.forEach((pizza) => {
  console.log(`Pizza: ${pizza.nombre}`);
  console.log(`Ingredientes: ${pizza.ingredientes.join(", ")}.`);
});
