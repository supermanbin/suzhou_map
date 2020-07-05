/**
 * Modal
 */
(function (window, document) {
  var Modal = function (options) {
    var defaults = {
      title: '温馨提示',
      content: '',
      width: 440,
      height: 260,
      buttons: [
        {
          text: '确定',
          hideModal: true,
          onCallback: null,
        },
      ],
    };
    var opt = $.extend({}, defaults, options),
      _this = this,
      title,
      content;
    // actions = $('<div class="jscg-alert__action"></div>'),
    // len = opt.buttons.length;

    _this.init = function () {
      if ($('.pop').length) {
        _this.ele = $('.pop');
        _this.closeEle = _this.ele.find('.pop__title i');
        title = _this.ele.find('.pop__title span').html(opt.title);
        content = _this.ele.find('.pop__content').html(opt.content);
      } else {
        _this.ele = $('<div class="pop"></div>');
        _this.closeEle = $('<i></i>');
        title = $(
          '<div class="pop__title aic"><span>' + opt.title + '</span></div>'
        );
        content = $('<div class="pop__content"></div>').html(opt.content);
        title.append(_this.closeEle);
        _this.ele.append(title).append(content);
        $('body').append(_this.ele);
      }
      _this.ele.css({
        width: opt.width + 'px',
        height: opt.height + 'px',
        'margin-top': -opt.height / 2 + 'px',
      });
    };
    _this.init();
    // for (var index = 0; index < len; index++) {
    //   var element = opt.buttons[index];
    //   var width = len == 1 ? 240 : 140;
    //   actions.append(
    //     '<button class="jscg-btn" style="width: ' +
    //       width +
    //       'px">' +
    //       element.text +
    //       '</button>'
    //   );
    // }
    // 关闭
    _this.closeEle.on('click', function () {
      _this.ele.remove();
    });

    // actions.on('click', '.jscg-btn', function () {
    //   var index = $(this).index(),
    //     btnItem = opt.buttons[index];
    //   if (btnItem.onCallback) {
    //     btnItem.onCallback();
    //     if (btnItem.hideModal) {
    //       _this.closeEle.click();
    //     }
    //   } else {
    //     _this.closeEle.click();
    //   }
    // });
  };

  Modal.prototype.show = function () {};
  Modal.prototype.hide = function () {
    // _this.close();
    this.closeEle.click();
  };

  window.Modal = Modal;
})(window, document);
