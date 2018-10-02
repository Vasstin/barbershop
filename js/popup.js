        var link = document.querySelector(".login-link");
        var popup = document.querySelector(".modal-login");
        var close = document.querySelector(".modal-close");
        var form = popup.querySelector("form");
        var login = popup.querySelector("[name=login]");
        var password = popup.querySelector("[name=password]");
        var storage = localStorage.getItem("login");
        var maplink = document.querySelector(".contacts-button-map");
        var mappopup = document.querySelector(".modal-map");
        var mapclose = mappopup.querySelector(".modal-close");

        link.addEventListener("click", function(evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");
            
            if (storage) {
                login.value = storage;
                password.focus();
            } else {
                login.focus();

            }
        });

        close.addEventListener("click", function(evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        });
        
        form.addEventListener("submit", function (evt) {
            if (!login.value || !password.value) {
                evt.preventDefault();
                popup.classList.add("modal-error");
            }
        });
        
        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                if(popup.classList.contains("modal-show")) {
                    popup.classList.remove("modal-show");
                }
            }
        });
        
        maplink.addEventListener("click", function(evt) {
            evt.preventDefault();
            mappopup.classList.add("modal-show");
     
        });

        mapclose.addEventListener("click", function(evt) {
            evt.preventDefault();
            mappopup.classList.remove("modal-show");
        });
        
        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                if(mappopup.classList.contains("modal-show")) {
                    mappopup.classList.remove("modal-show");
                }
            }
        });