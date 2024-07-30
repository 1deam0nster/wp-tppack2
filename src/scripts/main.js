// Vendors
// import 'src/scripts/vendor/jquery'
import 'src/scripts/vendor/bootstrap'
// import 'src/scripts/modules/darkmode-handler'

document.addEventListener('DOMContentLoaded', function() {
    function isMobile() {
        return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
  
    if (isMobile()) {
        var asides = document.querySelectorAll('aside');
  
        asides.forEach(function(aside) {
            aside.classList.add('collapse');
        });
  
        infoBlocks.forEach(function(infoBlock) {
            infoBlock.classList.add('collapse');
        });
    }
  });
  
  
  document.getElementById('menu').addEventListener('click', function() {
    // Находим элементы, которым нужно добавить или удалить класс
    var asideElement = document.querySelector('aside');
  
    // Проверяем, есть ли у элементов класс 'active'
    // Если есть - удаляем, если нет - добавляем
    asideElement.classList.toggle('collapse');
  });