
const gifId = document.getElementById("gif");
const gif = document.querySelector(".gif");
const gif2 = document.querySelector(".gif2");
const gifBtn = document.querySelector(".gif-btn");
const menu = document.querySelector(".menu");
const closeSideBar = document.querySelector(".close-sideBar");
const sideBar = document.querySelector(".sideBar");
// const indicatorA = document.querySelector(".indicator-a");
// const indicatorB = document.querySelector(".indicator-b");
// const indicatorC = document.querySelector(".indicator-c");
// const indicatorD = document.querySelector(".indicator-d");
// const indicatorE = document.querySelector(".indicator-e");
sideBar.style.display = "none";
menu.addEventListener("click", () => {
    if(sideBar.style.display === "none") {
        sideBar.style.display = "grid";
    }
});

closeSideBar.addEventListener("click", () => {
    if( sideBar.style.display === "grid") {
        sideBar.style.display = "none";
    }
});

gifBtn.style.display = "none";

gifId.addEventListener("mouseover", () => {
    gifId.classList.remove("gif2");
    gifId.classList.add("gif");
    gifBtn.style.display = "block";
});

gifId.addEventListener("mouseout", () => {
    gifId.classList.remove("gif");
    gifId.classList.add("gif2");
    gifBtn.style.display = "none";
});


// WALLET SLIDER
const walletLeftControl = document.querySelector(".wallet-prev");
const walletRightControl = document.querySelector(".wallet-next");

let walletSlidePosition = 0;
const walletSlides = document.getElementsByClassName("wallets");
const totalWalletSlides = walletSlides.length;

walletLeftControl.addEventListener("click", () => {
    walletPrev();
});

walletRightControl.addEventListener("click", () => {
    walletNext();
});

let walletUpdate = () => {
    for (let slide of walletSlides) {
        slide.classList.remove("wallet-visible");
        slide.classList.add("wallet-hidden");
    }
    walletSlides[walletSlidePosition].classList.add("wallet-visible");
}

  let walletNext = () => {
    if(walletSlidePosition === totalWalletSlides - 1) {
        walletSlidePosition = 0;
    } else {
        walletSlidePosition++;
    }
    walletUpdate();
}

  let walletPrev = () => {
    if(walletSlidePosition === 0) {
        walletSlidePosition = totalWalletSlides - 1;
    } else {
        walletSlidePosition--;
    }
        walletUpdate();   
} 


// EXCHANGE SLIDER
const exchangeLeftControl = document.querySelector(".exchange-prev");
const exchangeRightControl = document.querySelector(".exchange-next");

let ExchangeSlidePosition = 0;
const exchangeSlides = document.getElementsByClassName("exchanges");
const totalExchangeSlides = exchangeSlides.length;

exchangeLeftControl.addEventListener("click", () => {
        exchangePrev();
});

exchangeRightControl.addEventListener("click", () => {
        exchangeNext();
});

let exchangeUpdate = () => {
    for (let slide of exchangeSlides) {
        slide.classList.remove("exchange-visible");
        slide.classList.add("exchange-hidden");
    }
    exchangeSlides[ExchangeSlidePosition].classList.add("exchange-visible");
}

  let exchangeNext = () => {
    if(ExchangeSlidePosition === totalExchangeSlides - 1) {
        ExchangeSlidePosition = 0;
    } else {
        ExchangeSlidePosition++;
    }
    exchangeUpdate();
}

  let exchangePrev = () => {
    if(ExchangeSlidePosition === 0) {
        ExchangeSlidePosition = totalExchangeSlides - 1;
    } else {
        ExchangeSlidePosition--;
    }
    exchangeUpdate();   
} 


// EXPLORE SLIDER
const exploreLeftControl = document.querySelector(".explore-prev");
const exploreRightControl = document.querySelector(".explore-next");

let exploreSlidePosition = 0;
const exploreSlides = document.getElementsByClassName("explores");
const totalExploreSlides = exploreSlides.length;

exploreLeftControl.addEventListener("click", () => {
        explorePrev();
});

exploreRightControl.addEventListener("click", () => {
        exploreNext();
});

let exploreUpdate = () => {
    for (let slide of exploreSlides) {
        slide.classList.remove("explore-visible");
        slide.classList.add("explore-hidden");
    }
    exploreSlides[exploreSlidePosition].classList.add("explore-visible");
}

  let exploreNext = () => {
    if(exploreSlidePosition === totalExploreSlides - 1) {
        exploreSlidePosition = 0;
    } else {
        exploreSlidePosition++;
    }
    exploreUpdate();
}

  let explorePrev = () => {
    if(exploreSlidePosition === 0) {
        exploreSlidePosition = totalExploreSlides - 1;
    } else {
        exploreSlidePosition--;
    }
    exploreUpdate();   
} 
