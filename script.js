const compliments = [
    "Em là lý do khiến anh mỉm cười mỗi ngày!",
    "Có em rồi, anh chẳng cần gì thêm nữa!",
    "Em dễ thương như một chú mèo con vậy đó!",
    "Anh chỉ muốn ôm em mãi thôi!",
    "Em là mặt trời nhỏ của anh!",
    "Nhìn em cười là anh tan chảy luôn!",
    "Em là điều ngọt ngào nhất trên đời này!",
    "Anh yêu em nhiều hơn hôm qua và ít hơn ngày mai!",
    "Em xinh như thiên thần ấy!",
    "Chỉ cần có em, ngày nào cũng là ngày đẹp trời!"
];

const btn = document.getElementById('btn');
const complimentDiv = document.getElementById('compliment');

btn.addEventListener('click', () => {
    const random = Math.floor(Math.random() * compliments.length);
    complimentDiv.textContent = compliments[random];
    complimentDiv.style.background = '#ffe3f0';
});
