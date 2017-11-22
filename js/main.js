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


       model.innerHTML = modelName.innerHTML;
       description.innerHTML = modelDetails.description[currentIndex];
       description.innerHTML = modelDetails.description[currentIndex];

              }
              carButtons.forEach(function(element,index){
              element.addEventListener("click",changeElements,false);
    });

})();
