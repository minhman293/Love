class PinLogin {
    constructor({ el, redirectTo, maxNumbers = 6 }) {
        this.el = {
            main: el,
            numPad: el.querySelector(".pin-login-numpad"),
            textDisplay: el.querySelector(".pin-login-text")
        };
        this.redirectTo = redirectTo;
        this.maxNumbers = maxNumbers;
        this.value = "";
        this._generatePad();
    }

    _generatePad() {
        const padLayout = [
            "1", "2", "3",
            "4", "5", "6",
            "7", "8", "9",
            "backspace", "0", "done"
        ];

        padLayout.forEach(key => {
            const insertBreak = key.search(/[369]/) !== -1;
            const keyEl = document.createElement("div");
            keyEl.classList.add("pin-login-key");
            keyEl.classList.toggle("material-icons", isNaN(key));
            keyEl.textContent = key;
            keyEl.addEventListener("click", () => { this._handleKeyPress(key) });
            this.el.numPad.appendChild(keyEl);

            if (insertBreak) {
                this.el.numPad.appendChild(document.createElement("br"));
            }
        });
    }

    _handleKeyPress(key) {
        switch (key) {
            case "backspace":
                this.value = this.value.substring(0, this.value.length - 1);
                this.el.textDisplay.classList.remove("pin-login-text-error");
                break;
            case "done":
                this._attemptLogin();
                break;
            default:
                if (this.value.length < this.maxNumbers && !isNaN(key)) {
                    this.value += key;
                    this.el.textDisplay.classList.remove("pin-login-text-error");
                }
                break;
        }
        this._updateValueText();
    }

    _updateValueText() {
        this.el.textDisplay.value = "_".repeat(this.value.length);
    }

    _attemptLogin() {
        let enteredPin = this.value;
        if (enteredPin === "090903") {
            window.location.href = this.redirectTo;
        } else {
            this.el.textDisplay.classList.add("pin-login-text-error");
        }
    }
}

new PinLogin({
    el: document.getElementById("mainPinLogin"),
    redirectTo: "heart.html"
});