Perfecto, Peke. Aquí tienes tu JS con la misma estructura y funcionalidad, pero adaptado con un toque personalizado para tu web "Cómo ganar dinero con la IA":

```js
// Inicializa animaciones AOS solo una vez por elemento
AOS.init({ once: true });

// Suaviza el scroll para enlaces internos que comienzan con #
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
```

La funcionalidad es la misma, con comentarios explicativos adaptados para tu web.

Si quieres, puedo ayudarte a ampliar este JS para agregar un menú móvil o alguna funcionalidad extra. ¿Quieres?
