$(function () {
  leftMenuListData.forEach(function (item, index) {
    var $menuItem = $('<div class="menu__item"></div>');
    var $label = $(
      '<label class="menu__item__title aic" data-index="' +
        index +
        '">' +
        '<span><input type="radio" name="menu" />' +
        item.menuTitle +
        '</span>' +
        '<i></i>' +
        '</label>'
    );
    $menuItem.append($label);
    if (item.landscape && item.landscape.length) {
      var $landscape = $('<div class="landscape"></div>');
      item.landscape.forEach(function (item2) {
        $landscape.append(
          '<label>' +
            '<img src="' +
            item2.img +
            '" alt="" />' +
            '<div class="landscape__item-title">' +
            '<input type="checkbox" name="" id="" />' +
            '<p>' +
            item2.title +
            '</p>' +
            '</div>' +
            '</label>'
        );
      });

      $menuItem.append($landscape);
    }

    $('#menuList').append($menuItem);
  });
  var modal;
  $('.menu__list').on('change', 'label.menu__item__title', function () {
    console.log($(this).data('index'));
    var listItem = leftMenuListData[$(this).data('index')];

    if (listItem.modal) {
      modal = new Modal({
        title: listItem.modal.title,
        iframeSrc: listItem.modal.iframeHref,
        width: listItem.modal.width,
        height: listItem.modal.height,
      });
    } else {
      if (modal) {
        modal.hide();
      }
    }
  });

  // $('#courseId').on('change', 'span', function () {
  //   var modal = new Modal({
  //     title: '苏州绿色环保航道总览',
  //     content: $('#course').html(),
  //     width: 650,
  //     height: 620,
  //   });
  // });
});
