let products = {
  data: [
    {
      productName: "H2O",
      category: "굽은형",
      price: "결합각: 104.5°",
      image: "../images/H2O.jpg",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 2",
      son: "비공유 전자쌍: 2",
      neymar: "δ⁺: H, δ⁻: O",
    },
    {
      productName: "CO2",
      category: "직선형",
      price: "결합각: 180°",
      image: "../images/CO2.png",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 4",
      son: "비공유 전자쌍: 4",
      neymar: "δ⁺: C, δ⁻: O",
    },
    {
      productName: "CH4",
      category: "정사면체형",
      price: "결합각: 109.5°",
      image: "../images/CH4.jpg",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 4",
      son: "비공유 전자쌍: 0",
      neymar: "δ⁺: H, δ⁻: C",
    },
    {
      productName: "NF3",
      category: "삼각뿔형",
      price: "결합각: 107°",
      image: "../images/NF3.webp",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 3",
      son: "비공유 전자쌍: 10",
      neymar: "δ⁺: N, δ⁻: F",
    },
    {
      productName: "HCN",
      category: "직선형",
      price: "결합각: 180°",
      image: "../images/HCN.png",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 4",
      son: "비공유 전자쌍: 1",
      neymar: "δ⁺: H, δ⁻: N",
    },
    {
      productName: "CCL4",
      category: "정사면체형",
      price: "결합각: 109.5°",
      image: "../images/CCl4.png",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 4",
      son: "비공유 전자쌍: 12",
      neymar: "δ⁺: C, δ⁻: Cl",
    },
    {
      productName: "NOF",
      category: "굽은형",
      price: "결합각: 약 120°",
      image: "../images/NOF.jpg",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 3",
      son: "비공유 전자쌍: 6",
      neymar: "δ⁺: N, δ⁻: F",
    },
    {
      productName: "H2O2",
      category: "굽은형",
      price: "결합각: ",
      image: "../images/H2O2.png",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 3",
      son: "비공유 전자쌍: 4",
      neymar: "δ⁺: H, δ⁻: O",
    },
    {
      productName: "OF2",
      category: "굽은형",
      price: "결합각: 104.5°",
      image: "../images/OF2.png",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 2",
      son: "비공유 전자쌍: 8",
      neymar: "δ⁺: O, δ⁻: F",
    },
    {
      productName: "BF3",
      category: "평면삼각형",
      price: "결합각: 120°",
      image: "../images/BF3.png",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 3",
      son: "비공유 전자쌍: 9",
      neymar: "δ⁺: B, δ⁻: F",
    },
    {
      productName: "BeF2",
      category: "직선형",
      price: "결합각: 180°",
      image: "../images/BeF2.jpg",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 2",
      son: "비공유 전자쌍: 6",
      neymar: "δ⁺: Be, δ⁻: F",
    },
    {
      productName: "FCN",
      category: "직선형",
      price: "결합각: 180°",
      image: "../images/FCN.png",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 4",
      son: "비공유 전자쌍: 4",
      neymar: "δ⁺: C, δ⁻: F",
    },
    {
      productName: "NH3",
      category: "삼각뿔형",
      price: "결합각: 107°",
      image: "../images/NH3.png",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 3",
      son: "비공유 전자쌍: 1",
      neymar: "δ⁺: H, δ⁻: N",
    },
    {
      productName: "CLCN",
      category: "직선형",
      price: "결합각: 180°",
      image: "../images/ClCN.png",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 4",
      son: "비공유 전자쌍: 4",
      neymar: "δ⁺: C, δ⁻: Cl",
    },
    {
      productName: "CH3CL",
      category: "사면체형",
      price: "결합각: 약 109.5°",
      image: "../images/CH3Cl.png",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 4",
      son: "비공유 전자쌍: 3",
      neymar: "δ⁺: H, δ⁻: Cl",
    },
    {
      productName: "C2H2",
      category: "직선형",
      price: "결합각: 180°",
      image: "../images/C2H2.png",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 5",
      son: "비공유 전자쌍: 0",
      neymar: "δ⁺: H, δ⁻: C",
    },
    {
      productName: "CH2O",
      category: "평면삼각형",
      price: "결합각: 약 120°",
      image: "../images/CH2O.png",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 4",
      son: "비공유 전자쌍: 2",
      neymar: "δ⁺: H, δ⁻: O",
    },
    {
      productName: "COF2",
      category: "평면삼각형",
      price: "결합각: 약 120°",
      image: "../images/COF2.jpg",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 4",
      son: "비공유 전자쌍: 8",
      neymar: "δ⁺: C, δ⁻: F",
    },
    {
      productName: "CHCL3",
      category: "사면체형",
      price: "결합각: 약 109.5°",
      image: "../images/CHCl3.png",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 4",
      son: "비공유 전자쌍: 9",
      neymar: "δ⁺: H, δ⁻: Cl",
    },
    {
      productName: "CH2CL2",
      category: "사면체형",
      price: "결합각: 약 120°",
      image: "../images/CH2Cl2.png",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 4",
      son: "비공유 전자쌍: 6",
      neymar: "δ⁺: H, δ⁻: Cl",
    },
    {
      productName: "C2CL2",
      category: "직선형",
      price: "결합각: 180°",
      image: "../images/C2Cl2.png",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 5",
      son: "비공유 전자쌍: 6",
      neymar: "δ⁺: C, δ⁻: Cl",
    },
    {
      productName: "C2H6",
      category: "사면체형",
      price: "결합각: 약 109.5°",
      image: "../images/C2H6.png",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 7",
      son: "비공유 전자쌍: 0",
      neymar: "δ⁺: H, δ⁻: C",
    },
    {
      productName: "OCl2",
      category: "굽은형",
      price: "결합각: 104.5°",
      image: "../images/OCl2.png",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 2",
      son: "비공유 전자쌍: 8",
      neymar: "δ⁺: O, δ⁻: Cl",
    },
    {
      productName: "C2F6",
      category: "사면체형",
      price: "결합각: 약 109.5°",
      image: "../images/C2F6.png",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 7",
      son: "비공유 전자쌍: 18",
      neymar: "δ⁺: C, δ⁻: F",
    },
    {
      productName: "BCL3",
      category: "평면삼각형",
      price: "결합각: 120°",
      image: "../images/BCl3.png",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 3",
      son: "비공유 전자쌍: 9",
      neymar: "δ⁺: B, δ⁻: Cl",
    },
    {
      productName: "C2F2",
      category: "직선형",
      price: "결합각: 180°",
      image: "../images/C2F2.png",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 5",
      son: "비공유 전자쌍: 6",
      neymar: "δ⁺: C, δ⁻: F",
    },
    {
      productName: "C2F4",
      category: "평면삼각형",
      price: "결합각: 약 120°",
      image: "../images/C2F4.jpg",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 6",
      son: "비공유 전자쌍: 12",
      neymar: "δ⁺: C, δ⁻: F",
    },
    {
      productName: "C2H4",
      category: "평면삼각형",
      price: "결합각: 약 120°",
      image: "../images/C2H4.png",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 6",
      son: "비공유 전자쌍: 0",
      neymar: "δ⁺: H, δ⁻: C",
    },
    {
      productName: "BeCL2",
      category: "직선형",
      price: "결합각: 180°",
      image: "../images/BeCl2.png",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 2",
      son: "비공유 전자쌍: 6",
      neymar6: "δ⁺: Be, δ⁻: C",
    },
    {
      productName: "SiCL4",
      category: "정사면체형",
      price: "결합각: 109.5°",
      image: "../images/SiCl4.png",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 4",
      son: "비공유 전자쌍: 12",
      neymar: "δ⁺: Si, δ⁻: Cl",
    },
    {
      productName: "NSF3",
      category: "사면체형",
      price: "결합각: 약 109.5°",
      image: "../images/NSF3.png",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 6",
      son: "비공유 전자쌍: 10",
      neymar: "δ⁺: S, δ⁻: F",
    },
    {
      productName: "C2CL6",
      category: "사면체형",
      price: "결합각: 약 109.5°",
      image: "../images/C2Cl6.png",
      ronaldo: "무극성 분자",
      messi: "공유 전자쌍: 7",
      son: "비공유 전자쌍: 18",
      neymar: "δ⁺: C, δ⁻: Cl",
    },
    {
      productName: "N2H4",
      category: "삼각뿔형",
      price: "결합각: 약 107°",
      image: "../images/N2H4.png",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 5",
      son: "비공유 전자쌍: 2",
      neymar: "δ⁺: H, δ⁻: N",
    },
    {
      productName: "N2F4",
      category: "삼각뿔형",
      price: "결합각: 약 107°",
      image: "../images/N2F4.jpg",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 5",
      son: "비공유 전자쌍: 14",
      neymar: "δ⁺: N, δ⁻: F",
    },
    {
      productName: "N2CL4",
      category: "삼각뿔형",
      price: "결합각: 약 107°",
      image: "../images/N2Cl4.png",
      ronaldo: "극성 분자",
      messi: "공유 전자쌍: 5",
      son: "비공유 전자쌍: 14",
      neymar: "δ⁺: N, δ⁻: Cl",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h3");
  name.classList.add("product-name");
  name.innerText = i.productName;
  container.appendChild(name);
  //price
  let price = document.createElement("h4");
  price.innerText = i.price;
  container.appendChild(price);
  //ronaldo = 분자의 극성
  let ronaldo = document.createElement("h4");
  ronaldo.innerText = i.ronaldo;
  container.appendChild(ronaldo);
  //messi = 공유 전자쌍
  let messi = document.createElement("h4");
  messi.innerText = i.messi;
  container.appendChild(messi);
  //son = 비공유 전자쌍
  let son = document.createElement("h4");
  son.innerText = i.son;
  container.appendChild(son);
  //neymar = 부분 전하
  let neymar = document.createElement("h4");
  neymar.innerText = i.neymar;
  container.appendChild(neymar);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};
