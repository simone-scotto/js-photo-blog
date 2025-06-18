const rowEl = document.querySelector(".row");
const modalcontnentEl = document.querySelector(".modal_contnent");
const modalEl = document.querySelector(".modal");
console.log(modalcontnentEl, modalEl);

const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    const postCards = data;
    //console.log(postCards);
    postCards.forEach((card) => {
      const cardMarkup = generateCards(card);

      rowEl.insertAdjacentHTML(`beforeend`, cardMarkup);

      console.log(cardMarkup);
    });

    const imgEL = document.querySelectorAll(".card_img");
    const modalEl = document.querySelector(".modal");
    const btnOff = document.querySelector(".btn_off");
    const adateEl = document.querySelectorAll(".tx_ita");
    const modalimgEl = document.querySelector(".modal_img");

    console.log(imgEL, modalimgEl);

    imgEL.forEach((imgEL) => {
      imgEL.addEventListener("click", () => {
        modalEl.style.display = "block";
        modalimgEl.src = imgEL.src;
      });
      btnOff.addEventListener("click", () => {
        modalEl.style.display = "none";
      });
    });
  });

function generateCards(card) {
  const { id, title, date, url } = card;
  const cardMarkup = `<div class="col col_md_6 col_sm_12">
            <div class="card">
              <div class="card_head">
                <img class="pin" src=".//img/pin.svg" alt="pin" />
                <img id="img" class="card_img" src="${url}" alt="img" />
              </div>
              <div class="card_body">
                <span class="tx_ita date"
                  >${title}</span
                >
                <span class="tx_ita"
                  >${date}</span
                >
              </div>
            </div>
          </div>`;
  return cardMarkup;
}

/* function generatemodalImg (url) {
  const 
} */

/* function generateMarkup(member) {
  const { id, title, email, img } = member;
  console.log(id, title, email, img);

  const memberMarkup = <div class="col">
            <div class="card">
              <div class="card_head">
                <img class="pin" src=".//img/pin.svg" alt="pin" />
                <img class="card_img" src="./img/los-angeles-m.avif" alt="LA" />
              </div>
              <div class="card_body">
                <span class="tx_ita"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore, reprehenderit.</span
                >
              </div>
            </div>
          </div>;

  return memberMarkup;
}
 */
