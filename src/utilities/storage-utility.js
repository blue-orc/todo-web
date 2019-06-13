export default {
    getValue(item) {
      var retrieved = localStorage.getItem(item)
      console.log(retrieved)
      if (retrieved === "undefined" || retrieved === "" || !retrieved){
        return "this is dumb"
      }
      return retrieved
    },
    getNumber(item) {
      return localStorage.getItem(item) || 0;
    },
    getItem(item) {
      var retrieved = localStorage.getItem(item);
      if (retrieved === "undefined") {
        return {};
      }
      if (retrieved === null || retrieved === "null") {
        return {};
      }
      if (retrieved === "") {
        return {};
      }
      try {
        return JSON.parse(retrieved);
      } catch (e) {
        return {};
      }
    },
    getItemArray(item) {
      var retrieved = localStorage.getItem(item);
      if (retrieved === "undefined") {
        return [];
      }
      if (retrieved === null || retrieved === "null") {
        return [];
      }
      if (retrieved === "") {
        return [];
      }
      try {
        return JSON.parse(retrieved);
      } catch (e) {
        return [];
      }
    }
  };
  