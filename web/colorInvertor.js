import { PDFViewerApplication } from './app';

class ColorInvertor {
    constructor(button, app) {
        this.button = button;

        self = app;

        this.button.addEventListener('click', function () {
            debugger;
            PDFViewerApplication.open(self.fileInput);
            if (localStorage.getItem("darkMode") !== "1") {
                localStorage.setItem("darkMode", "1");
            } else {
                localStorage.setItem("darkMode", 0);
            }
        });
    }

    setFileInput(file) {
        self.fileInput = file;
    }
}

export {
    ColorInvertor
};