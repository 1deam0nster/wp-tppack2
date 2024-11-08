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

    //E-mail Ajax Send
    $("form").submit(function() { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
      }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
    
  });

  // document.addEventListener("DOMContentLoaded", function() {
  
  //   // Обработка отправки формы
  //   document.querySelectorAll("form").forEach(function(form) {
  //     form.addEventListener("submit", function(event) {
  //       event.preventDefault(); // предотвращаем стандартное поведение отправки
  
  //       const formData = new FormData(form); // собираем данные формы
  
  //       fetch("mail.php", {
  //         method: "POST",
  //         body: formData
  //       })
  //       .then(response => {
  //         if (response.ok) {
  //           alert("Thank you!");
  //           setTimeout(function() {
  //             form.reset(); // сбрасываем форму
  //           }, 1000);
  //         } else {
  //           throw new Error("Network response was not ok.");
  //         }
  //       })
  //       .catch(error => console.error("There has been a problem with your fetch operation:", error));
  //     });
  //   });
  
  // });