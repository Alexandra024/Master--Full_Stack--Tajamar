// ==========================================
// 1. CONTADOR REGRESIVO
// ==========================================
// Fecha límite del evento (14 de Noviembre de 2026 a las 20:00)
const fechaEvento = new Date(2026, 10, 14, 20, 0, 0).getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    const daysElem = document.getElementById("days");
    const hoursElem = document.getElementById("hours");
    const minutesElem = document.getElementById("minutes");
    const secondsElem = document.getElementById("seconds");

    // Validar si el evento ya pasó
    if (diferencia <= 0) {
        if (daysElem) daysElem.innerText = "00";
        if (hoursElem) hoursElem.innerText = "00";
        if (minutesElem) minutesElem.innerText = "00";
        if (secondsElem) secondsElem.innerText = "00";
        return;
    }

    const unDia = 1000 * 60 * 60 * 24;
    const unaHora = 1000 * 60 * 60;
    const unMinuto = 1000 * 60;

    const dias = Math.floor(diferencia / unDia);
    const horas = Math.floor((diferencia % unDia) / unaHora);
    const minutos = Math.floor((diferencia % unaHora) / unMinuto);
    const segundos = Math.floor((diferencia % unMinuto) / 1000);

    if (daysElem) daysElem.innerText = String(dias).padStart(2, '0');
    if (hoursElem) hoursElem.innerText = String(horas).padStart(2, '0');
    if (minutesElem) minutesElem.innerText = String(minutos).padStart(2, '0');
    if (secondsElem) secondsElem.innerText = String(segundos).padStart(2, '0');
}

actualizarContador();
setInterval(actualizarContador, 1000);


// ==========================================
// 2. EFECTO DE CONFETI OPCIONAL
// ==========================================
const confettiBtn = document.getElementById("confettiBtn");
if (confettiBtn) {
    confettiBtn.addEventListener("click", () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#8B0000', '#ffd069', '#ff1493', '#da70d6']
        });
    });
}


// ==========================================
// 3. ACCIONES INTERACTIVAS SÍ / NO
// ==========================================
const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");
const rsvpResponseMsg = document.getElementById("rsvpResponseMsg");

let yesClicks = 0;

if (btnYes) {
    btnYes.addEventListener("click", () => {
        yesClicks++;

        if (yesClicks === 1) {
            btnYes.innerText = "MUCHO 🎉";
            btnYes.style.transform = "scale(1.3)";
        } else if (yesClicks === 2) {
            btnYes.innerText = "¡Demasiado! 💥";
            btnYes.style.transform = "scale(1.7)";
        } else {
            confetti({
                particleCount: 200,
                spread: 120,
                origin: { y: 0.5 },
                colors: ['#8B0000', '#28a745', '#ff69b4', '#ffc107', '#17a2b8']
            });

            btnYes.style.transform = "scale(2.5)";
            btnYes.style.opacity = "0";

            setTimeout(() => {
                btnYes.style.display = "none";
                if (btnNo) btnNo.style.display = "none";
            }, 300);

            if (rsvpResponseMsg) {
                rsvpResponseMsg.className = "mt-3 fw-bold text-success fs-5";
                rsvpResponseMsg.innerText = "¡Increíble! 🎉 Registra tu asistencia abajo.";
            }
            
            const guestNameInput = document.getElementById("guestName");
            if (guestNameInput) guestNameInput.focus();
        }
    });
}

if (btnNo) {
    btnNo.addEventListener("click", (e) => {
        e.preventDefault(); 

        const randomX = (Math.random() - 0.5) * 200; 
        const randomY = (Math.random() - 0.5) * 100; 

        btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
        btnNo.blur(); 

        rsvpResponseMsg.className = "mt-3 small fw-bold text-danger";
        rsvpResponseMsg.innerText = "¡Oye! Ese botón no funciona 🙄 ; ¡tendrás que decir que sí! 😜";
    });
}


// ==========================================
// 4. GESTOR DE INVITADOS (ESTILO RECIBO VINTAGE)
// ==========================================
const guestNameInput = document.getElementById("guestName");
const guestCountInput = document.getElementById("guestCount");
const addGuestBtn = document.getElementById("addGuestBtn");
const taskList = document.getElementById("taskList");
const totalPeopleSpan = document.getElementById("totalPeople");

let guests = JSON.parse(localStorage.getItem("birthdayGuests")) || [];

function renderGuests() {
    if (!taskList) return;
    
    taskList.innerHTML = "";
    let totalAsistentesCount = 0;

    if (guests.length === 0) {
        taskList.innerHTML = `<p class="text-center text-muted small py-3">Aún no hay confirmaciones registradas.</p>`;
    }

    guests.forEach((guest, index) => {
        totalAsistentesCount += Number(guest.count);

        const card = document.createElement("div");
        card.className = "vintage-card p-3 mb-3 bg-white";

        card.innerHTML = `
            <div class="d-flex justify-content-between align-items-center mb-2 border-bottom border-danger pb-1">
                <span class="font-title small">#00${index + 1}</span>
                <span class="badge bg-transparent text-danger border border-danger">CONFIRMADO</span>
            </div>
            <div class="d-flex justify-content-between align-items-center text-start mt-2">
                <div>
                    <h6 class="fw-bold mb-1 text-dark font-title text-start">${guest.name}</h6>
                    <p class="text-secondary mb-0 small text-start">Pases reservados: <strong>${guest.count} persona(s)</strong></p>
                </div>
                <button class="btn btn-outline-danger btn-sm" onclick="eliminarInvitado(${index})">
                    ✕
                </button>
            </div>
        `;
        taskList.appendChild(card);
    });

    if (totalPeopleSpan) totalPeopleSpan.innerText = totalAsistentesCount;
    localStorage.setItem("birthdayGuests", JSON.stringify(guests));
}

if (addGuestBtn) {
    addGuestBtn.addEventListener("click", () => {
        const name = guestNameInput.value.trim();
        const count = parseInt(guestCountInput.value);

        if (name === "" || isNaN(count) || count < 1) {
            alert("Por favor ingresa un nombre válido y al menos 1 asistente.");
            return;
        }

        guests.push({ name, count });

        guestNameInput.value = "";
        guestCountInput.value = "1";

        renderGuests();

        confetti({ particleCount: 50, spread: 50, origin: { y: 0.8 }, colors: ['#8B0000', '#ffd069'] });
    });
}

window.eliminarInvitado = function(index) {
    guests.splice(index, 1);
    renderGuests();
};

renderGuests();