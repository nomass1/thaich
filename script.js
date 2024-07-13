document.addEventListener('DOMContentLoaded', function() {
  const eggPrices = {
    "egg0": {
      "name": "ไข่ไก่เบอร์ 0",
      "price": "25 บาท"
    },
    "egg1": {
      "name": "ไข่ไก่เบอร์ 1",
      "price": "23 บาท"
    },
    "egg2": {
      "name": "ไข่ไก่เบอร์ 2",
      "price": "22 บาท"
    },
    "egg3": {
      "name": "ไข่ไก่เบอร์ 3",
      "price": "20 บาท"
    },
    "egg4": {
      "name": "ไข่ไก่เบอร์ 4",
      "price": "18 บาท"
    },
    "egg5": {
      "name": "ไข่ไก่เบอร์ 5",
      "price": "15 บาท"
    },
    "egg6": {
      "name": "ไข่ไก่เบอร์ 6",
      "price": "12 บาท"
    }
  };

  const eggContainer = document.getElementById('eggPrices');

  // วนลูปเพื่อแสดงข้อมูลราคาไข่ไก่ทั้งหมด
  for (const key in eggPrices) {
    if (eggPrices.hasOwnProperty(key)) {
      const egg = eggPrices[key];
      const eggBox = document.createElement('div');
      eggBox.classList.add('egg-box');
      eggBox.innerHTML = `
        <h2>${egg.name}</h2>
        <p>${egg.price}</p>
      `;
      eggContainer.appendChild(eggBox);
    }
  }
});
