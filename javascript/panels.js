var headers = document.querySelectorAll(".accordion-header");

for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener("click", function () {
        var header = this;
        var body = header.nextElementSibling;

        if (body.style.maxHeight) {
            body.style.maxHeight = null;
            header.classList.remove("active");
        } else {
            body.style.maxHeight = body.scrollHeight + "px";
            header.classList.add("active");
        }
    });
}
