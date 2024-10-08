// Função para alternar a visibilidade da informação nos itens do processo
function toggleInfo(item) {
    const info = item.querySelector('.info');
    const allInfos = document.querySelectorAll('.info');
    const section = document.querySelector('#processo'); // Seleciona a seção de processo

    // Fecha todas as informações abertas
    allInfos.forEach(i => {
        if (i !== info) {
            i.style.display = 'none';
        }
    });

    // Alterna a visibilidade da informação clicada
    if (info.style.display === 'block') {
        info.style.display = 'none';
    } else {
        info.style.display = 'block';
        // Rolagem suave para a seção de processo
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Função para alternar a visibilidade das perguntas frequentes
function toggleFaq(item) {
    const faqInfo = item.querySelector('.faq-info');
    const allFaqInfos = document.querySelectorAll('.faq-info');
    const section = document.querySelector('#faq'); // Seleciona a seção de FAQ

    // Fecha todas as FAQs abertas
    allFaqInfos.forEach(i => {
        if (i !== faqInfo) {
            i.style.display = 'none';
        }
    });

    // Alterna a visibilidade da FAQ clicada
    if (faqInfo.style.display === 'block') {
        faqInfo.style.display = 'none';
    } else {
        faqInfo.style.display = 'block';
        // Rolagem suave para a seção de FAQ
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Inicializa o mapa
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -23.5505, lng: -46.6333 }, // São Paulo, Brasil
        zoom: 12,
    });

    // Adiciona um marcador
    const marker = new google.maps.Marker({
        position: { lat: -23.5505, lng: -46.6333 },
        map: map,
        title: "Estamos aqui!",
    });
}
