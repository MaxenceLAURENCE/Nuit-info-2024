function handleCheckboxGroup(groupClass) {
    const checkboxes = document.querySelectorAll(`.${groupClass}`);
    

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                checkboxes.forEach((otherCheckbox) => {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });
}


handleCheckboxGroup('Q1');
handleCheckboxGroup('Q2');
handleCheckboxGroup('Q3');
handleCheckboxGroup('Q4');
handleCheckboxGroup('Q5');
handleCheckboxGroup('Q6');
handleCheckboxGroup('Q7');
handleCheckboxGroup('Q8');
handleCheckboxGroup('Q9');
handleCheckboxGroup('Q10');


document.addEventListener("DOMContentLoaded", function () {
    function handleCheckboxGroup(groupClass) {
        const checkboxes = document.querySelectorAll(`.${groupClass}`);
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", () => {
                if (checkbox.checked) {
                    checkboxes.forEach((otherCheckbox) => {
                        if (otherCheckbox !== checkbox) {
                            otherCheckbox.checked = false;
                        }
                    });
                }
            });
        });
    }

    function handleAnswer(questionClass) {
        const checkboxes = document.querySelectorAll(`.${questionClass}`);
        const faux = document.querySelector(`.${questionClass} ~ .faux`);
        const vrai = document.querySelector(`.${questionClass} ~ .vrai`);
        const reponse = document.querySelector(`.${questionClass} ~ .reponse`);

        if (faux && vrai && reponse) {
            faux.style.display = "none";
            vrai.style.display = "none";
            reponse.style.display = "none";
        }

        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", function () {
                if (!checkbox.checked) {
                    faux.style.display = "none";
                    vrai.style.display = "none";
                    reponse.style.display = "none";
                } else if (checkbox.dataset.correct === "true") {
                    vrai.style.display = "block";
                    reponse.style.display = "block";
                    faux.style.display = "none";
                } else {
                    faux.style.display = "block";
                    reponse.style.display = "block";
                    vrai.style.display = "none";
                }
            });
        });
    }

    for (let i = 1; i <= 10; i++) {
        handleCheckboxGroup(`Q${i}`);
        handleAnswer(`Q${i}`);
    }

    const button = document.querySelector("button");
    const imageContainer = document.querySelector(".image");

    if (button && imageContainer) {
        button.onclick = function () {
            const imageUrl = "assets/quizz/img/logo.png";

            imageContainer.innerHTML = `<img src="${imageUrl}" alt="Image du logo">`;
        };
    }
});