// 1. La tua riga attuale (mantiene l'app installabile)
self.addEventListener('fetch', () => {});

// 2. Importa Firebase per le notifiche
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-sw.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-sw.js');

// 3. Inizializza con i tuoi dati
firebase.initializeApp({
    apiKey: "AIzaSyAWMmt7lrRF1V6AIpQWh2CwXZE88_w_8E0",
    projectId: "ficup-c9186",
    messagingSenderId: "825031993621",
    appId: "1:825031993621:web:f9b49d210864a8c26f611c"
});

const messaging = firebase.messaging();

// 4. Gestione notifiche in background (quando l'app è chiusa)
messaging.onBackgroundMessage((payload) => {
    console.log('Notifica ricevuta:', payload);
    const notificationTitle = payload.notification.title || "Nuovo Messaggio!";
    const notificationOptions = {
        body: payload.notification.body || "Hai ricevuto un messaggio su FICup",
        icon: 'ficup (1).png', // Assicurati che il nome sia identico a GitHub
        badge: 'ficup (1).png',
        vibrate: [200, 100, 200]
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
