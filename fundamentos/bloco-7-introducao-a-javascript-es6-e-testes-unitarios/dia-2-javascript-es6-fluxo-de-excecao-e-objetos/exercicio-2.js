const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const name1 = order.order.delivery.deliveryPerson;
  const name2 = order.name;
  const phone = order.phoneNumber;
  const street = order.address.street;
  const num = order.address.number;
  const apartment = order.address.apartment;

  return `Olá ${name1}, entrega para: ${name2}, Telefone: ${phone}, R. ${street}, N°: ${num}, AP: ${apartment}`
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  const obj = order;
  obj.order.delivery.deliveryPerson = 'Luiz Silva';
  obj.payment.total = 50;
  const name = obj.order.delivery.deliveryPerson;
  const totalOrder = `${Object.keys(obj.order.pizza).join(', ')} e ${obj.order.drinks.coke.type}`;
  const price = obj.payment.total;

  return `Olá ${name}, o total do seu pedido de ${totalOrder} é R$ ${price},00.`
}

console.log(orderModifier(order));