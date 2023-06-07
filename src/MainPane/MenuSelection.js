export class MenuSelection {

    async pickUpMenu(){
        const menu = await fetch('./menu.txt')
        .then((r) => r.text())
        .then(text  => text.split("\n"))

        const result = menu[Math.floor(Math.random() * (menu.length-1))]

        return result
    }
}
