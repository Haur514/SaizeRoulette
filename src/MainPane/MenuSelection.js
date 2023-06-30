export class MenuSelection {
  static async pickUpMenu(menuCandidate) {
    let menu = await fetch("./menu.txt")
      .then((r) => r.text())
      .then((text) => text.split("\n"));

    menu = menu.filter((e) => {
      return menuCandidate.includes(e.substring(0, 2));
    });

    console.log(menu);

    const result = menu[Math.floor(Math.random() * (menu.length - 1))];

    return result;
  }
}
