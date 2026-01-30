## README.md

### Proyecto: Carrito de Compras con React

Este proyecto es una aplicación desarrollada con **React** que simula un carrito de compras para una tienda de guitarras. El objetivo es comprender y aplicar los conceptos fundamentales de React vistos en clase, como componentes, estados, props, hooks, manejo de eventos y la relación entre componentes padre e hijo.

---

### ¿Qué es React?

React es una biblioteca de JavaScript que se utiliza para construir interfaces de usuario de forma declarativa. Permite dividir la interfaz en componentes reutilizables y actualizar solo las partes necesarias cuando los datos cambian.

---

### Componentes

Un componente es una unidad independiente de la interfaz. Cada componente tiene una responsabilidad específica y puede reutilizarse en diferentes partes de la aplicación.

En este proyecto se utilizan componentes como:

* `App`
* `Header`
* `Card`
* `Item`
* `Footer`

Los componentes en React se crean como funciones que retornan JSX.

---

### Componentes Padre e Hijo

Un **componente padre** es aquel que contiene a otros componentes y controla la lógica principal o el estado.
Un **componente hijo** recibe información del padre mediante props y se encarga principalmente de mostrar información.

En este proyecto:

* `App` es el componente padre principal.
* `Header`, `Card` e `Item` son componentes hijo.

El componente padre es quien define los estados y pasa los datos a los hijos.

---

### JSX y JavaScript

Los componentes que retornan interfaz visual utilizan **JSX**, que es una extensión de JavaScript que permite escribir código similar a HTML dentro de JavaScript.

Por ejemplo:

* Componentes como `App`, `Header` y `Card` usan JSX porque renderizan elementos visuales.
* Un archivo JavaScript normal puede contener solo lógica (funciones, estados o datos) sin JSX, como el archivo `db.js`.

JSX no es HTML, es JavaScript que se transforma internamente para crear elementos de React.

---

### Estados (State)

El estado permite manejar información dinámica que puede cambiar durante la ejecución de la aplicación.

En este proyecto se usan diferentes tipos de estado:

#### Estado global (compartido)

Es el estado que se define en un componente padre y se comparte con otros componentes mediante props.

Ejemplo:

* El carrito (`cart`) se define en `App` y se pasa a `Header` e `Item`.

```js
const [cart, setCart] = useState([])
```

#### Estado local

Es el estado que solo afecta a un componente específico.

Ejemplo:

* El estado que controla si el carrito se muestra u oculta (`showCart`).

```js
const [showCart, setShowCart] = useState(false)
```

---

### Props

Las props son propiedades que permiten enviar datos y funciones desde un componente padre a un componente hijo.

Ejemplo:

```jsx
<Header cart={cart} setShowCart={setShowCart} />
```

Las props son de solo lectura, el componente hijo no puede modificarlas directamente.

---

### Hooks

Los hooks son funciones especiales de React que permiten usar características como el estado en componentes funcionales.

En este proyecto se utiliza:

* `useState`: para crear y manejar estados.

Ejemplo:

```js
import { useState } from 'react'
```

---

### Evento onClick

`onClick` se utiliza para ejecutar una función cuando el usuario hace clic en un elemento.

Ejemplo:

```jsx
<button onClick={handleClick}>Agregar al carrito</button>
```

También se puede usar una función flecha para modificar el estado:

```jsx
onClick={() => setShowCart(prev => !prev)}
```

Esta forma permite cambiar el estado usando el valor anterior de manera segura.

---

### Clases en JSX

En JSX se utiliza `className` en lugar de `class` para asignar clases CSS, ya que `class` es una palabra reservada en JavaScript.

Ejemplo:

```jsx
<div className="container-xl mt-5">
```

---

### Conclusión

Este proyecto permite comprender cómo funciona React a nivel básico, diferenciando claramente entre componentes padre e hijo, el uso de JSX y JavaScript, el manejo de estados locales y globales, y la comunicación entre componentes mediante props y eventos.

