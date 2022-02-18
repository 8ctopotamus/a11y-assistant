function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var A11y = /*#__PURE__*/function () {
  function A11y() {
    _classCallCheck(this, A11y);

    this.init();
  }

  _createClass(A11y, [{
    key: "init",
    value: function init() {// this.widget = document.createElement('div')
      // this.widget.id = `${this.constructor.name.toLocaleLowerCase()}-widget`
      // this.toggleButton = document.createElement('button')
      // this.modal = document.createElement('modal')
    }
  }]);

  return A11y;
}();

var a11y = new A11y();

export { a11y as default };
