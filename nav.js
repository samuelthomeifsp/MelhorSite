document.addEventListener("DOMContentLoaded", () => {
    const navPlaceholder = document.getElementById("nav-placeholder");

    if (navPlaceholder) {
        navPlaceholder.innerHTML = `
            <nav>
                <link rel="stylesheet" href="nav.css">
                <ul>
                    <li><a href="index.html">Início</a></li>
                    <li><a href="about.html">Sobre nós</a></li>
                    <li>
                        <a href="services.html">Serviços ∨</a>
                        <ul>
                            <li><a href="dev.html">Desenvolvimento</a></li>
                            <li><a href="design.html">Design Gráfico</a></li>
                            <li><a href="marketing.html">Marketing Digital</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contato</a></li>
                    <li><a href="login.html">Log-in</a></li>
                </ul>
            </nav>
        `;
    }
});