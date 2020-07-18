const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = Array.isArray(collection) ? collection : Object.values(collection)
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = Array.isArray(collection) ? collection : Object.values(collection)
      let newArray = []
      for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      let i = acc ? 0 : (1, acc = collection[0])
      for (i; i < collection.length; i++) {
        acc = callback(acc, collection[i])
      }
      return acc
    },

    find: function(collection, predicate) {
      for (let el of collection) {
        if (predicate(el)) { return el }
      }
    },

    filter: function(collection, predicate) {
      let arr = []
      for (let el of collection) {
        if (predicate(el)) { arr.push(el) }
      }
      return arr
    },

    size: function(collection) {
      let newCollection = Array.isArray(collection) ? collection : Object.keys(collection)
      return newCollection.length
    },

    size: function(collection) {
      let newCollection = Array.isArray(collection) ? collection : Object.keys(collection)
      return newCollection.length
    },

    first: function(array, i) {
      return i ? array.slice(0, i) : array[0]
    },

    last: function(array, i) {
      return i ? array.slice(array.length - i) : array[array.length - 1]
    },

    compact: function(array) {
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        if (array[i]) { newArray.push(array[i]) }
      }
      return newArray
    },

    sortBy: function(array, callback) {
      let newArray = array.slice()
      return newArray.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow, newArray = []) {
      if (!Array.isArray(array)) {
        return newArray.push(array)
      }
      if (shallow) {
        for (let element of array) {
          if (Array.isArray(element)) {
            for (let value of element) {
              newArray.push(value)
            }
          } else {
            newArray.push(element)
          }
        }
      } else {
        for (let element of array) {
          this.flatten(element, false, newArray)
        }
      }
      return newArray
    },

    uniq: function(array, sorted, callback) {
      let newArray = []

      for (let i = 0; i < array.length; i++) {
        let num = 0
        for (let n = 0; n < newArray.length; n++) {
          if (!!callback) {
            if (callback(array[i])==callback(newArray[n])) {
              num++
            }
          }

          if (array[i]==newArray[n]) {
            num++
          }
        }

        if (num <= 0) {
          newArray.push(array[i])
        }
      }

      return newArray
    },

     keys: function (object) {
      return Object.keys(object)
     },

     values: function (object) {
      return Object.values(object)
     },

    functions: function(object) {
      let collection = []
      for (let [key, value] of Object.entries(object)) {
        if (typeof value == "function") {
          collection.push(key)
        }
      }
      return collection
    }
  }
})()

fi.libraryMethod()
