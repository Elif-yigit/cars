let cars = [
  { 
      brand: "Ford", 
      model: "Mustang", 
      color: "Mavi",
      icon:'assets/image/ford-mustang.webp'
  },
  { 
      brand: "BMW", 
      model: "3 Serisi", 
      color: "Siyah",
      icon:'assets/image/bmw-3-serisi.png'
  },
  { 
      brand: "Mercedes-Benz", 
      model: "E Serisi", 
      color: "Kırmızı",
      icon:'assets/image/merc.png'
  },
  { 
      brand: "Toyota", 
      model: "Corolla", 
      color: "Beyaz" ,
      icon:'assets/image/toyota-corolla.png'
  },
  { 
      brand: "Honda", 
      model: "Civic", 
      color: "Gri" ,
      icon:'assets/image/honda-civic-gumus-gri.png'
  },
  { 
      brand: "Volkswagen", 
      model: "Golf", 
      color: "Yeşil",
      icon:'assets/image/volkswagen-yesil.png'
  },
  { 
      brand: "Audi", 
      model: "A4", 
      color: "Turuncu",
      icon:'assets/image/audi-a4.png'
  },
  { 
      brand: "Porsche", 
      model: "911", 
      color: "Sarı",
      icon:'assets/image/porsche.png'
  },
  { 
      brand: "Ferrari", 
      model: "488 GTB", 
      color: "Lacivert",
      icon:'assets/image/ferrari.png'
  },
  { 
      brand: "Lamborghini", 
      model: "Aventador", 
      color: "Altın",
      icon:'assets/image/lamborghini.png'

  },
  { 
      brand: "Tesla", 
      model: "Model S", 
      color: "Gümüş",
      icon:'assets/image/tesla.png'
  },
  { 
      brand: "Subaru", 
      model: "Impreza", 
      color: "Mor" ,
      icon:'assets/image/subaru.png'
  },
  { 
      brand: "Chevrolet", 
      model: "Camaro", 
      color: "Turkuaz" ,
      icon:'assets/image/chevrolet.png'
  },
  { 
      brand: "Hyundai", 
      model: "Tucson", 
      color: "Kahverengi" ,
      icon:'assets/image/hyundai-tucson-kuvars-kahve.png'

  },
  { 
      brand: "Kia", 
      model: "Sportage", 
      color: "Pembe",
      icon:'assets/image/kia.png'
  },
  { 
      brand: "Nissan", 
      model: "Altima", 
      color: "Beyaz" ,
      icon:'assets/image/nissan .png'
  },
  { 
      brand: "Jaguar", 
      model: "F-Type", 
      color: "Siyah" ,
       icon:'assets/image/kia.png'
  },
  { 
      brand: "Land Rover", 
      model: "Range Rover", 
      color: "Gri" ,
      icon:'assets/image/land-rover.png'
  },
  { 
      brand: "Volvo", 
      model: "XC90", 
      color: "Yeşil" ,
       icon:'assets/image/volvo.png'
  },
  { 
      brand: "Mazda", 
      model: "MX-5", 
      color: "Kırmızı" ,
      icon:'assets/image/mazda.avif'
  }
];

 
for(let i =0; i < cars.length; i++) {
// console.log(cars[i]);
    carsList.innerHTML += `<li class="listElement"> ${cars[i].brand}
    <div class="listImage"><img src="${cars[i].icon}"/></div>
    <div class="listItem">${cars[i].model}</div>
    <div class="color">${cars[i].color}</div>
   
    </li>`
}