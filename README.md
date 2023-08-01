# Stepper Challenge

### Description:

Este proyecto consiste en una aplicación utilizando Next.js, Typescript y el framework de estilos Tailwind CSS. El objetivo principal es desarrollar un componente Stepper que permita mostrar un conjunto de pasos (steps) de forma dinámica, con la posibilidad de agregar un ícono a cada paso. Se utilizo la librería de iconos Font Awesome para gestionar los íconos.

El Stepper es una barra de progreso que se completa a medida que el usuario avanza por los pasos. Cada paso tiene un ícono dinámico, es decir, se puede personalizar fácilmente según los requerimientos de la aplicación.

### Consideraciones adicionales

Este Stepper funciona de manera similar al Stepper de MaterialTailwind, pero con una diferencia importante en la gestión de estados. Mientras que el Stepper de MaterialTailwind tiene dos estados, "inactivo" y "default" (activo), este Stepper permite tres tipos de estados: "inactivo," "default" y "activo."

- **Inactivo:** Representa los pasos que aún no se han completado y no están activos en el flujo actual del proceso.

- **Default (Completado):**
  Representa que el paso está completado.

- **Activo:** Representa el paso actual en el flujo del proceso, indicando que se está trabajando en ese paso.

Una característica importante es que en el último paso del Stepper, la etiqueta del botón "Next" se cambia automáticamente a "Finish." Esto se hace para que el usuario comprenda que, aunque esté en el paso final (estado Activo), el paso aún no se ha completado (estado Default). Esto ayuda a evitar confusiones y proporciona una mejor experiencia de usuario.

Esta funcionalidad adicional brinda más flexibilidad al Stepper y permite una mejor representación de los diferentes estados en el proceso, lo que puede resultar útil en flujos de trabajo más complejos y detallados.

Evite el uso de estrategias de memorization, ya que no se vio ninguna mejora en el rendimiento de la app.

### [Deploy](https://stepper-challenge.vercel.app/)

### Tecnologías

<br/>
<ul align="start">

- <a href="https://nextjs.org/" target="_blank"> <img src="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" alt="MaterialUI" width="40" height="40" /> Next.js</a>

- <a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> Typescript</a>

- <a href="https://reactjs.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png" alt="typescript" width="40" height="35"/> React</a>

- <a href="https://tailwindcss.com/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png" alt="typescript" width="40" height="40"/> Tailwind</a>

</ul>
<br/>

### Installation

To run this project use the commands

```bash
npm install
# o
yarn install
```

### Enlace de Figma

Se proporciona un enlace a un diseño en Figma que muestra cómo debería lucir el Stepper: [Enlace de Figma](https://www.figma.com/file/8IWLzCxxbhN0YRcr98XNX3/Untitled?type=design&node-id=200-170&mode=design)

### Tests

Las pruebas se realizaron con _Jest_ mas _Testing Library_ Para pruebas de integracion , para ejecutar las pruebas utilice el siguiente comando:

```bash
yarn test or npm run test
```

<br/>

```bash
Node Version : > 16v
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
