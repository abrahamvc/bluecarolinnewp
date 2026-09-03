---
layout: project_entry
name: "Cómo hacer tu propia Tarjeta Perforada"
---

<img src="{{ '/assets/images/tarjeta_perf.png' | relative_url }}"
    alt="Tarjeta perforada"
    class="img-right">

Durante décadas, las tarjetas perforadas fueron una forma de almacenar datos y programas de manera física. Cada perforación representaba información que una máquina podía leer. ¡Simplemente asombroso!

Te comparto un post bonito que realicé sobre el tema de las tarjetas perforadas:

- <img class="md-icon" src="{{ '/assets/icons/star.svg' | relative_url }}" alt="Star Icon">
<a href="https://www.instagram.com/blue.carolinne/p/Dcw2cHZmzE3/"
    class="btn-link"
    target="blank"
    rel="noopener noreferrer">
    Post: Tarjetas perforadas
</a>

Y un reel con más datos interesantes:

- <img class="md-icon" src="{{ '/assets/icons/star.svg' | relative_url }}" alt="Star Icon">
<a href="https://www.instagram.com/blue.carolinne/reel/DczZNCvogUV/"
    class="btn-link"
    target="blank"
    rel="noopener noreferrer">
    Reel: Datos interesantes
</a>

## Simulador de Tarjetas Perforadas

Y, a continuación, una guía muy sencilla de cómo "vivir" la experiencia de las tarjetas perforadas.
(¡La experiencia completa sería utilizar la máquina real!)

Usé el simulador **The Virtual Keypunch de MASSWERK** (es fabuloso y sencillo, gracias por existir)

- <img class="md-icon" src="{{ '/assets/icons/star.svg' | relative_url }}" alt="Star Icon">
<a href="https://www.masswerk.at/keypunch/"
    class="btn-special"
    target="blank"
    rel="noopener noreferrer">
    The Virtual Keypunch
</a>

Presiona "Start" y ahí puedes escribir un **mensaje** o **una línea de código** y convertirla en el patrón de perforaciones de una tarjeta IBM de 80 columnas.

En la parte superior de la ventana puedes elegir el lenguaje que deseas utilizar (en "Card Type"). El simulador incluye FORTRAN, COBOL, incluso Python como una opción moderna y recreativa. Python no fue utilizado históricamente con tarjetas perforadas, pero esta alternativa hace que sea una experiencia retro moderna (me encanta).

<img src="{{ '/assets/images/tarjeta_keypunch.png' | relative_url }}"
    alt="Simulador The Virtual Keypunch"
    class="img-small">

Recuerda que, si te equivocaste, no hay forma de "arreglarlo". Debes usar una nueva tarjeta. Incluso si presionas la tecla de "borrar", automáticamente te mueve a una nueva tarjeta. Así fue en décadas anteriores. Nada de ctrl+z

Cuando ya la tengas lista, presiona Enter y se generará tu imagen en PNG, lista para descargar. Lo bueno de este formato es que respeta las transparencias y, justamente, las perforaciones generadas quedan transparentes.

<img src="{{ '/assets/images/tarjeta_captura.png' | relative_url }}"
    alt="Simulador The Virtual Keypunch"
    class="img-small">


## Fabricar una Tarjeta Perforada     

Si la quieres llevar a una tarjeta real, puedes hacerlo de diferentes formas. Yo usé un plotter de corte Silhouette Cameo 4.
Ajusté el tamaño de mis tarjetas (como referencia, las tarjetas IBM reales tenían una dimensión aproximada de 187 × 83 mm) y las imprimí en papel fotográfico matte de 260g.
El corte lo hice con una cuchilla con profundidad 8, presión 20 y velocidad 2.
Por supuesto, también puedes imprimirla y cortarla manualmente con un cortacartón.

¡Y listo!

Ahora tienes un mensaje codificado físicamente en una tarjeta perforada.

Si quieres ver cómo quedó mi proceso, lo dejo aquí.

- <img class="md-icon" src="{{ '/assets/icons/star.svg' | relative_url }}" alt="Star Icon">
<a href="https://www.instagram.com/blue.carolinne/reel/Dczovf2tkmZ/"
    class="btn-link"
    target="blank"
    rel="noopener noreferrer">
    Reel: Mis Tarjetas Perforadas
</a>

Y si haces una, ¡etiquétame! Quiero ver qué mensaje escondiste en tu tarjeta c:

## ¿Cómo se codificaban los caracteres en las tarjetas?

En una tarjeta perforada IBM, cada **columna representa un carácter**.

<img src="{{ '/assets/images/tarjetas_fc.png' | relative_url }}"
    alt="tarjeta Perforada"
    class="img-small">


Los números son los más sencillos:

> | Carácter | Perforación |
|---|---|
| 1 | Fila 1 |
| 2 | Fila 2 |
| 3 | Fila 3 |
| ... | ... |
| 9 | Fila 9 |

Para las letras se combinan principalmente las filas superiores **12, 11 y 0** con otra fila:

> | Grupo | Combinación |
|---|---|
| A – I | Fila 12 + otra fila |
| J – R | Fila 11 + otra fila |
| S – Z | Fila 0 + otra fila |

Por ejemplo:

> - **A** = filas 12 + 1
- **B** = filas 12 + 2
- **C** = filas 12 + 3
- ...
- **I** = filas 12 + 9
- **J** = filas 11 + 1
- **K** = filas 11 + 2
- **L** = filas 11 + 3
- ...
- **W** = filas 0 + 6
- **X** = filas 0 + 7
- **Y** = filas 0 + 8
- **Z** = filas 0 + 9

> La máquina no “ve” una letra, reconoce un patrón de perforaciones y lo interpreta según una tabla de códigos.

Los **símbolos especiales** también podían representarse mediante combinaciones de dos o tres perforaciones. Estas combinaciones dependían del modelo de perforadora y del código utilizado.

¡Ahora que ya tienes tu tarjeta usando el simulador de arriba, puedes intentar descifrar sus perforaciones y comprobar cómo cada combinación coincide con el texto que escribiste!

**Dato bonito**: durante décadas, una tarjeta podía representar una línea de código. Un programa completo podía existir literalmente como un mazo de cartones que podías sostener entre tus manos.

