const rowEl = document.querySelector(".row");

const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    const postCards = data;
    //console.log(postCards);
    postCards.forEach((card) => {
      const cardMarkup = generateCards(card);
      console.log(cardMarkup);
      rowEl.insertAdjacentHTML(`beforeend`, cardMarkup);
    });
  });

function generateCards(card) {
  const { id, title, date, url } = card;
  const cardMarkup = `<div class="col col_md_6 col_sm_12">
            <div class="card">
              <div class="card_head">
                <img class="pin" src=".//img/pin.svg" alt="pin" />
                <img class="card_img" src="${url}" alt="img" />
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
