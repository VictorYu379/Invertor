class ColorInvertor {
    constructor(app) {
        self = app;

        self.appConfig.modeButton.addEventListener('click', function () {
            self.appConfig.modeSwitchContainer.classList.toggle("hidden");
        });

        self.modeButtons = self.appConfig.modeSwitchContainer.firstElementChild.children;
        for (var i = 0; i < self.modeButtons.length; i++) {
            (function (index) {
                self.modeButtons[index].addEventListener('click', function () {
                    if (localStorage.getItem("darkMode") !== index.toString()) {
                        localStorage.setItem("darkMode", index.toString());
                        PDFViewerApplication.open(self.fileInput);
                    }
                    self.appConfig.modeSwitchContainer.classList.toggle("hidden");
                });
            })(i);
        }
    }

    setFileInput(file) {
        self.fileInput = file;
    }

    setForegroundColor(color) {
        self.appConfig.modeButton.firstElementChild.style.backgroundColor = color;
    }

    setBackgroundColor(color) {
        self.appConfig.modeButton.lastElementChild.style.backgroundColor = color;
    }
}



export {
    ColorInvertor
};