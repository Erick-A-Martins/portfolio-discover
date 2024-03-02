function toggleMode() {
    const html = document.documentElement // pegando o html

    html.classList.toggle('light') // troca de classe

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if (html.classList.contains('light')) {
    // se tiver o light mode, adicionar a imagem light    
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo, usando óculos e jaqueta presa, barba e fundo azul")
    } else {
    // se tiver sem light mode, manter a imagem normal 
        img.setAttribute("src", "./assets/avatar.png")
    }

    
    
    
} 