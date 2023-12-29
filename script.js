function togglePlusAndText(plusElement, textElement,paraElement) {
    let count = 0;

    plusElement.addEventListener('click', () => {
        plusElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 30" style="display:inline-flex; justify-content: flex-end; "><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`;

        textElement.style.display = "initial";
        count++;

        if (count % 2 === 0) {
            plusElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 30" style="display:inline-flex; justify-content: flex-end; " id="plus"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>`;
            textElement.style.display = "none";
        }
    });
}

function toggleParaAndText(textElement,paraElement,plusElement) {
    let count = 0;

    paraElement.addEventListener('click', () => {
        plusElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 30" style="display:inline-flex; justify-content: flex-end; "><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`;

        textElement.style.display = "initial";
        count++;

        if (count % 2 === 0) {
            plusElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 30" style="display:inline-flex; justify-content: flex-end; " id="plus"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>`;
            textElement.style.display = "none";
        }
    });
}

togglePlusAndText(document.querySelector(".plus1"), document.querySelector(".text1"),document.querySelector("#text1"));
togglePlusAndText(document.querySelector(".plus2"), document.querySelector(".text2"),document.querySelector("#text2"));
togglePlusAndText(document.querySelector(".plus3"), document.querySelector(".text3"),document.querySelector("#text3"));
togglePlusAndText(document.querySelector(".plus4"), document.querySelector(".text4"),document.querySelector("#text4"));
toggleParaAndText( document.querySelector(".text1"),document.querySelector("#text1"),document.querySelector(".plus1"));
toggleParaAndText( document.querySelector(".text2"),document.querySelector("#text2"),document.querySelector(".plus2"));
toggleParaAndText( document.querySelector(".text3"),document.querySelector("#text3"),document.querySelector(".plus3"));
toggleParaAndText( document.querySelector(".text4"),document.querySelector("#text4"),document.querySelector(".plus4"));