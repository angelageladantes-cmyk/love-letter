
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");
const hearts = document.getElementById("hearts");
const content = document.querySelector(".content");

let yesStage = 0;

// YES BUTTON
yesBtn.addEventListener("click", function() {

    // FIRST CLICK
    if (yesStage === 0) {

        yesStage = 1;

        message.innerHTML = "YAYYYY! I LOVE YOU SO MUCH! ❤️💕";

        yesBtn.innerHTML = "I LOVE YOU TOO! 💗";

        noBtn.remove();

        for (let i = 0; i < 20; i++) {
            createHeart();
        }

    }

    // SECOND CLICK: FINAL SURPRISE
    else {

        content.innerHTML = `
            <div class="surprise-layout">

                <!-- LEFT: TWO PIGGIES -->
                <div class="surprise-left">

                    <h3>Us Together ♡</h3>

                    <div class="piggy-pair">

                        <div class="piggy">
                            <span>🐷</span>
                            <small>KYLLA ♡</small>
                        </div>

                        <div class="piggy">
                            <span>🐷</span>
                            <small>ELLA ♡</small>
                        </div>

                    </div>

                    <div class="moving-heart">
                        💕 💗 💕
                    </div>

                    <p>CUTE NATEN MAHAL! ♡</p>

                </div>

                <!-- RIGHT: LOVE LETTER -->
                <div class="surprise-right">

                    <h2>Hello, my love! ♡</h2>

                    <p>
I'm sorry for being moody sometimes or maybe always.

I know I can be difficult to understand at times, but please know that I never mean to make you feel bad.

Mahal na mahal kita, love. Andito lang ako palagi sa tabi mo, alam mo 'yan.

Thank you for your patience, understanding, and love.

I'm so lucky to have you.
I love you so much! ❤️💕
                    </p>

                    <h3>Always yours ♡</h3>

                    <div class="love-footer">
                        YOUR ALWAYS AND FOREVER LOVE
                        LOVE ANGELA PRETTY ♡
                    </div>

                </div>

            </div>
        `;

        for (let i = 0; i < 30; i++) {
            createHeart();
        }

    }

});

// NO BUTTON
noBtn.addEventListener("click", function() {

    message.innerHTML = "WALA KANG MAGAGAWA BOI HAHAHA! 😝💗";

    noBtn.style.position = "absolute";
    noBtn.style.zIndex = "10";
    noBtn.style.transition = "left 0.2s ease, top 0.2s ease";

    const padding = 10;

    const maxX = content.clientWidth - noBtn.offsetWidth - padding;
    const maxY = content.clientHeight - noBtn.offsetHeight - padding;

    const randomX = padding + Math.random() * Math.max(0, maxX - padding);
    const randomY = padding + Math.random() * Math.max(0, maxY - padding);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

});

// CREATE FLOATING HEARTS
function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("heart");
    heart.innerHTML = "♥";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

// CONTINUOUS HEARTS
setInterval(createHeart, 300);
