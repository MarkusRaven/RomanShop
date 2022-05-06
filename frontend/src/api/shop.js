import instance from './instance'

export const getItems = (data = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(`product`, {params: data})
     .then(resp => {
       resolve(resp.data)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const getItemsType = (id) => {
  return new Promise((resolve, reject) => {
    instance.get(`product/filter/${id}`)
     .then(resp => {
       resolve(resp.data)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const getOneItem = id => {
  return new Promise((resolve, reject) => {
    instance.get(`shop/item/${id}`)
     .then(resp => {
       resolve(resp.data)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const getFilterMaterial = () => {
  return new Promise((resolve, reject) => {
    instance.get(`shop/item_material/`)
     .then(resp => {
       resolve(resp.data.results)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const getFilterTypes = () => {
  return new Promise((resolve, reject) => {
    instance.get(`shop/item_type/`)
     .then(resp => {
       resolve(resp.data.results)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const getFilter = () => {
  return new Promise((resolve, reject) => {
    instance.get(`filter/`)
     .then(resp => {
       resolve(resp.data)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const getOrders = () => {
  return new Promise((resolve, reject) => {
    instance.get(`order/`)
     .then(resp => {
       resolve(resp.data)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const orderAdd = data => {
  return new Promise((resolve, reject) => {
    instance.post(`order/add/`, data)
     .then(resp => {
       resolve(resp.data)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const orderPay = data => {
  return new Promise((resolve, reject) => {
    instance.post(`payment/pay/`, data)
     .then(resp => {
       resolve(resp.data)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const getCartUser = () => {
  return new Promise((resolve, reject) => {
    instance.get(`cart/`)
     .then(resp => {
       resolve(resp.data)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const addToCard = data => {
  return new Promise((resolve, reject) => {
    instance.post(`cart/add/`, data)
     .then(resp => {
       resolve(resp.data.results)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const deleteCartItemFetch = id => {
  return new Promise((resolve, reject) => {
    instance.get(`cart/remove/${id}`)
     .then(resp => {
       resolve(resp.data.results)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const ActivateUser = data => {
  return new Promise((resolve, reject) => {
    instance.post(`auth/users/activation/`, data)
     .then(resp => {
       resolve(resp.data)
     })
     .catch(err => {
       reject(err)
     })
   })
}

export const support = data => {
  return new Promise((resolve, reject) => {
    instance.post(`shop/support/`, data)
     .then(resp => {
       resolve(resp.data)
     })
     .catch(err => {
       reject(err)
     })
   })
}
// card

// export const addToCard = () => {
//   return new Promise((resolve, reject) => {
//     if
// }