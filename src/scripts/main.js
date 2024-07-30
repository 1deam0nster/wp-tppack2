// Vendors
import 'src/scripts/vendor/jquery'
import 'src/scripts/vendor/bootstrap'
// import 'src/scripts/modules/darkmode-handler'

// document.addEventListener('DOMContentLoaded', function() {
//     function isMobile() {
//         return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//     }
  
//     if (isMobile()) {
//         var asides = document.querySelectorAll('aside');
  
//         asides.forEach(function(aside) {
//             aside.classList.add('collapse');
//         });
  
//         infoBlocks.forEach(function(infoBlock) {
//             infoBlock.classList.add('collapse');
//         });
//     }
//   });
  
  
//   document.getElementById('menu').addEventListener('click', function() {
//     // Находим элементы, которым нужно добавить или удалить класс
//     var asideElement = document.querySelector('aside');
  
//     // Проверяем, есть ли у элементов класс 'active'
//     // Если есть - удаляем, если нет - добавляем
//     asideElement.classList.toggle('collapse');
//   });


//   document.addEventListener('DOMContentLoaded', function () {
//     var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'));
//     var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
//       return new bootstrap.Offcanvas(offcanvasEl);
//     });

//     offcanvasList.forEach(function (offcanvas) {
//       offcanvas._element.addEventListener('show.bs.offcanvas', function () {
//         console.log('Offcanvas is about to be shown');
//       });

//       offcanvas._element.addEventListener('shown.bs.offcanvas', function () {
//         console.log('Offcanvas is fully shown');
//       });

//       offcanvas._element.addEventListener('hide.bs.offcanvas', function () {
//         console.log('Offcanvas is about to be hidden');
//       });

//       offcanvas._element.addEventListener('hidden.bs.offcanvas', function () {
//         console.log('Offcanvas is fully hidden');
//       });
//     });
//   });

$(document).ready(function () {
    $('#offcanvasToggle').on('click', function () {
      $('#offcanvasMenu').toggleClass('open');
    });

    $('#offcanvasClose').on('click', function () {
      $('#offcanvasMenu').removeClass('open');
    });

    $(document).on('click', function (event) {
      if (!$(event.target).closest('#offcanvasMenu, #offcanvasToggle').length) {
        $('#offcanvasMenu').removeClass('open');
      }
    });
  });