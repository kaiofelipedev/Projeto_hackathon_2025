document.addEventListener('DOMContentLoaded', () => {
    const ferozImage = document.getElementById('ferozImage');
    const chatOverlay = document.getElementById('chatOverlay');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const messageArea = document.getElementById('messageArea');

   
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(sender); 
        messageDiv.textContent = text;
        messageArea.appendChild(messageDiv);

        
        messageArea.scrollTop = messageArea.scrollHeight;
    }

    
    addMessage("Olá! Sou o Feroz, seu Tutor Inteligente. No que posso ajudar hoje?", "ai");
    addMessage("Que legal! Tenho algumas dúvidas sobre o curso.", "user");
    addMessage("Certo! Pode me perguntar. Estou aqui para te auxiliar.", "ai");

    
    ferozImage.addEventListener('click', () => {
        chatOverlay.classList.add('visible');
        messageInput.focus();
        messageArea.scrollTop = messageArea.scrollHeight;
    });

   
    closeChatBtn.addEventListener('click', () => {
        chatOverlay.classList.remove('visible');
    });

   
    chatOverlay.addEventListener('click', (e) => {
        if (e.target === chatOverlay) {overlay
            chatOverlay.classList.remove('visible');
        }
    });

    
    messageForm.addEventListener('submit', async (e) => {
        e.preventDefault(); 

        const userMessage = messageInput.value.trim();
        if (userMessage === '') return; 

        addMessage(userMessage, 'user'); 
        messageInput.value = ''; 

        
      
        setTimeout(() => {
            let aiResponse = "Ainda estou aprendendo a responder a essa pergunta. Em breve, a IA estará completa!";
            if (userMessage.toLowerCase().includes("disciplina")) {
                aiResponse = "Qual disciplina específica você tem dúvida? Posso te direcionar.";
            } else if (userMessage.toLowerCase().includes("curso")) {
                aiResponse = "Nosso curso de Análise e Desenvolvimento de Sistemas é focado no mercado de trabalho e te prepara para as tecnologias mais atuais.";
            } else if (userMessage.toLowerCase().includes("olá")) {
                aiResponse = "Olá! Fico feliz em conversar com você.";
            }
            addMessage(aiResponse, "ai");
        }, 800); 
        
    });
});