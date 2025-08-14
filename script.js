const cualidades = [
    {texto: "Eres mi inspiración diaria 💫", imagen: "imagenes/img1.jpg"},
    {texto: "Tienes la sonrisa más hermosa 😍", imagen: "imagenes/img2.jpg"},
    {texto: "Tu risa alegra mi alma 🎶", imagen: "imagenes/img3.jpg"},
    {texto: "Me encanta tu forma de ver la vida 🌈", imagen: "imagenes/img4.jpg"},
    {texto: "Eres mi paz y mi refugio 🕊️", imagen: "imagenes/img5.jpg"},
    {texto: "Cada momento contigo es un regalo 🎁", imagen: "imagenes/img6.jpg"},
    {texto: "Tienes un corazón gigante ❤️", imagen: "imagenes/img7.jpg"},
    {texto: "Eres la razón de mis sonrisas 😊", imagen: "imagenes/img8.jpg"},
    {texto: "Haces que todo sea más bonito ✨", imagen: "imagenes/img9.jpg"},
    {texto: "Te admiro más cada día, mi Reina 🌟", imagen: "imagenes/img10.jpg"}
];

document.getElementById("mostrarCualidades").addEventListener("click", () => {
    let index = 0;
    const cualidadDiv = document.getElementById("cualidad");
    const portada = document.querySelector(".portada");

    const mostrar = () => {
        if (index < cualidades.length) {
            portada.innerHTML = `
                <img src="${cualidades[index].imagen}" class="imagen">
                <div class="texto-principal">${cualidades[index].texto}</div>
            `;
            index++;
            setTimeout(mostrar, 4000);
        } else {
            portada.innerHTML = `
                <img src="imagenes/final.jpg" class="imagen">
                <div class="texto-principal">Eres lo mejor que me ha pasado 💖</div>
            `;
        }
    };

    mostrar();
});
