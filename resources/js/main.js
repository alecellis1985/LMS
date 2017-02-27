var mainctrl = (function () {
  var ctrlFns = {

  };
  init();

  function init() {

    var itemsToFlip = ["#card"];
    var totalItems = 12;
    while (totalItems--) {
      itemsToFlip.push(totalItems);
    }

    $(itemsToFlip.join(",#card")).flip({
      axis: 'y',
      trigger: 'hover'
    });
  }
  return ctrlFns;

})();