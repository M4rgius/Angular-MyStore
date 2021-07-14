export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL bellissimo',
    price: 1799,
    description: 'Vuoi essere alla moda? Devi comprarlo per forza'
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'Bello eh, però non proprio per gli standard 2021'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'Povero!'
  },

{
  id:4,
  name: 'Caricabatteria con cavo',
  price: 35,
  description: "Tanto lo so che lo comprerai dal cinese"
},

{
  id:5,
  name: 'Computer con la mela',
  price: 1899,
  description: 'Sei sicuro?'
}

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/