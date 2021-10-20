// 1. Ei oleks pikalt välja kirjutatud, võib väga pikaks minna:
// {title: string, price: number, origin: string, category: string, isActive: boolean}
// 2. Kui teen siin muudatuse, läheb kõigile automaatselt
// muidu peaks kõik üles otsima ja veel ka kontrollima, et kõigile sai lisatud
// 3. Haaraks ühe pilguga, et andmemudelid on samasugused
// {title: string, price: number, imgSrc: string, category: string, isActive: boolean} -- Item
// {title: string, price: number, origin: string, category: string, isActive: boolean} -- CartItem

// Andmemudelit peaks kasutama selleks, et täpselt seda tüüpi väärtused läheksid õigetesse kohtadesse
// Kui ootan Stringi, siis tuleks sinna String ('jutumärkides sõna')
// Kui ootan eset, millel on 5 võti-väärtus paari, siis tuleks ka täpselt see ese

export class Item {
    constructor(
        public title: string,
        public price: number,
        public imgSrc: string,
        public category: string,
        public isActive: boolean
    ) { }
}