const cardData = [
    {
        image: "assets/images/icon-access-anywhere.svg",
        title: "Access your files, anywhere",
        description: "The ability to use a smartphone, tablet, or computer<br>to access your account means your files follow you<br>everywhere.",
    },
    {
        image: "assets/images/icon-security.svg",
        title: "Security you can trust",
        description: "2-factor authentication and user-controlled encryption are<br>just a couple of the security features we allow to help<br>secure your files.",
    },
    {
        image: "assets/images/icon-collaboration.svg",
        title: "Real-time collaboration",
        description: "Securely share files and folders with friends, family and<br>colleagues for live collaboration. No email attachments<br>required.",
    },
    {
        image: "assets/images/icon-any-file.svg",
        title: "Store any type of file",
        description: "Whether you're sharing holidays photos or work<br>documents, Fylo has you covered allowing for all file<br>types to be securely stored and shared."
    },
];

function loadCards() {
    const cardDiv = document.getElementById('card-grid-container');
    cardData.forEach(item => {
        const newCardDiv = document.createElement('div');
        newCardDiv.className = 'card-grid';
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.innerHTML =
            `
    <img class="card-img" src="${item.image}" alt="">
    <h2 class="card-title">"${item.title}"</h2>
    <p class="card-paragraph">"${item.description}"</p>
    `
        cardDiv.appendChild(newCardDiv);
        newCardDiv.appendChild(newCard);
    });
};

document.addEventListener('DOMContentLoaded', loadCards());
