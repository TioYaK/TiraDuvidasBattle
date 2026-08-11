const steps = {
    1: {
        question: "Você é membro da BattleStorm?",
        yes: 2,
        no: "FINAL_1"
    },
    2: {
        question: "Você está de respblock?",
        yes: 3,
        no: "FINAL_2"
    },
    3: {
        question: "Você tem makers nos mundos: Auroria, Belaria, Bellum, Tenebrium, Vesperia, Grimoria?",
        yes: 4,
        no: "FINAL_3"
    },
    4: {
        question: "Todos os makers estão no nível 320 ou superior?",
        yes: 5,
        no: "FINAL_3"
    },
    5: {
        question: "Eles são MS, ED ou RP? Só essas classes são aceitas;",
        yes: 6,
        no: "FINAL_3"
    },
    6: {
        question: `Sua descrição está correta no TS? 
        <span class="text-muted">Lembrando que se faz necessário ter TODOS os servidores em sua descrição, ex:<br>
        <strong>Main: Kit | Auroria: Kit Auroria | Belaria: Kit Belaria | Bellum: Kit Bellum | Tenebrium: Kit Tenebrium | Vesperia: Kit Vesperia | Kit Grimoria</strong></span>`,
        yes: 7,
        no: "FINAL_4"
    },
    7: {
        question: "Seus personagens estão na guilda?",
        yes: 8,
        no: "FINAL_7"
    },
    8: {
        question: 'Seu Whatsapp está registrado no site <a href="https://battlestorm.com.br/" target="_blank" class="link-highlight">battlestorm.com.br</a>?',
        yes: 9,
        no: "FINAL_5"
    },
    9: {
        question: "Você está com o ícone de Whatsapp no TS?",
        yes: "FINAL_6",
        no: "FINAL_4"
    }
};

const finals = {
    "FINAL_1": "Procure um Líder, não sei nem o que você está fazendo aqui.",
    "FINAL_2": "Ok então! Bom jogo!",
    "FINAL_3": "Aí está o seu problema, volte a falar comigo quando você tiver suas metas.",
    "FINAL_4": "Procure um líder no TEAMSPEAK (Não adianta ficar chorando no whatsapp).",
    "FINAL_5": "Aí está o problema, se registre.",
    "FINAL_6": "Então está tudo certo! Você cumpre todos os requisitos.<br><br>Se ainda tiver problemas, procure um líder no TS.",
    "FINAL_7": 'Dê apply nas guildas, e preencha o formulário em <a href="https://tioyak.github.io/FormularioBattle/" target="_blank" class="link-highlight">https://tioyak.github.io/FormularioBattle/</a>, esse bot só ACEITA na guilda, ou seja, se faz necessário dar APPLY'
};

let currentStep = 1;

const questionText = document.getElementById('question-text');
const buttonsContainer = document.getElementById('buttons-container');
const restartContainer = document.getElementById('restart-container');
const contentArea = document.getElementById('content-area');

function renderStep() {
    // animate out
    contentArea.className = 'fade-exit';
    
    setTimeout(() => {
        if (typeof currentStep === 'number') {
            // It's a question
            questionText.innerHTML = steps[currentStep].question;
            buttonsContainer.classList.remove('hidden');
            restartContainer.classList.add('hidden');
        } else {
            // It's a final result
            questionText.innerHTML = finals[currentStep];
            buttonsContainer.classList.add('hidden');
            restartContainer.classList.remove('hidden');
        }
        
        // animate in
        contentArea.className = 'fade-enter';
        setTimeout(() => {
            contentArea.className = 'fade-enter-active';
        }, 50);
    }, 300); // match transition duration
}

function handleAnswer(answer) {
    const stepData = steps[currentStep];
    if (answer === 'yes') {
        currentStep = stepData.yes;
    } else {
        currentStep = stepData.no;
    }
    renderStep();
}

function startFlow() {
    currentStep = 1;
    renderStep();
}

// Initialize
window.onload = () => {
    startFlow();
};
