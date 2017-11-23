(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework

   //variables
   var model = document.querySelectorAll('.modelName'),
       price = document.querySelectorAll('.priceInfo'),
       description = document.querySelectorAll('.modelDetails'),
       carButtons = document.querySelectorAll('.data-ref');

       function changeElements() {
      //load carData
      let objectIndex = carData[this.id];
      console.log(objectIndex.model);
      document.querySelectorAll(".modelName");
      let price = document.querySelectorAll(".priceInfo");
      let description = document.querySelectorAll('.modelDetails');
      let model = document.querySelectorAll(".modelName");

      model[0].innerHTML = objectIndex.model;
      price[0].innerHTML = objectIndex.price;
      description[0].innerHTML = objectIndex.description;




              }
              carButtons.forEach(function(element,index){
              element.addEventListener("click",changeElements,false);
    });

})();
