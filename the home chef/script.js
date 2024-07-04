document.addEventListener("DOMContentLoaded", () => {
    let buttons = document.querySelectorAll("#event");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Congratulations!")
        })
    })
});
