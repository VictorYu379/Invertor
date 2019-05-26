class ColorInvertor {
    constructor(button, triggerFunction) {
        this.button = button;

        this.button.addEventListener('click', triggerFunction);
    }
}