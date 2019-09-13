export const formatPrice = (x) => x.toFixed(2);

export const storeAPI = 'http://localhost:8001/api/products';

export const mockedProducts = {
  products: [
    {
      "id": 12,
      "title": "Peas",
      "description": "Lovely garden peas",
      "price": 0.95,
      "currencyId": "GBP",
      "isFreeDelivery": true
    },
    {
      "id": 13,
      "title": "Free range Eggs",
      "description": "Straight from the chicken",
      "price": 2.1,
      "currencyId": "GBP",
      "isFreeDelivery": true
    },
    {
      "id": 14,
      "title": "Soya Milk",
      "description": "Lovely fresh Soya milk",
      "price": 1.3,
      "currencyId": "GBP",
      "isFreeDelivery": true
    },
    {
      "id": 15,
      "title": "Baked Beans",
      "description": "Healthy Baked Beans",
      "price": 0.73,
      "currencyId": "GBP",
      "isFreeDelivery": true
    },
  ]
}


export const ratesAPI = 'https://api.exchangeratesapi.io/latest?base=GBP';
