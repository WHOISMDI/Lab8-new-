// class Cars {
//     constructor(brand, model, year, complectation) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.complectation = complectation;
//     }
    
//     information() {
//         document.write(`<p>Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Complectation: ${this.complectation}</p>`);
//     }
// }

// let car1 = new Cars('Audi', 'RS8', '2016', 'coupe');
// let car2 = new Cars('Audi', 'TT', '2010', 'coupe');
// let car3 = new Cars('Audi', 'A6', '2009', 'sedan');

// car1.information();
// car2.information();
// car3.information();

class Component {
    constructor(selector) {
        this.$el=document.querySelector(selector)
    }
    blockHide(){
        this.$el.style.display = 'none'
    }
    editColor(color) {
        this.$el.style.background=color
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = options.width+'px'
        this.$el.style.height=options.height+'px'
        this.$el.style.background=options.color

    }
}

const box1 = new Box ({
    selector: '#box1',
    width: 1000,
    height: 50,
    color: 'blue'

})