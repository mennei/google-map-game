webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/fe/MapContainer.js":
/*!********************************!*\
  !*** ./src/fe/MapContainer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! google-maps-react */ "./node_modules/google-maps-react/dist/index.js");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_10__);











var mapStyles = {
  width: '100%',
  height: '100%'
};

var MapContainer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MapContainer, _Component);

  function MapContainer() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MapContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MapContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      ballLocation: {
        lat: 0,
        lng: 0
      },
      goalLocation: {
        lat: 0,
        lng: 0
      },
      loading: true
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onMarkerDragEnd", function (coord) {
      var latLng = coord.latLng;
      var lat = latLng.lat();
      var lng = latLng.lng();

      _this.setState({
        ballLocation: {
          lat: lat,
          lng: lng
        },
        loading: false
      }, function () {
        var _this$state = _this.state,
            ballLocation = _this$state.ballLocation,
            goalLocation = _this$state.goalLocation;
        ballLocation = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(ballLocation);
        goalLocation = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(goalLocation);
        return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()("http://localhost:3000/api/v1/googleMap/getDistance?ballLocation=".concat(ballLocation, "&goalLocation=").concat(goalLocation)).then(function (resopnse) {
          return resopnse.json();
        }).then(function (data) {
          _this.setState({
            ballLocation: {
              lat: lat,
              lng: lng
            },
            loading: false
          });

          if (data && data['data'] < 0.01) {
            console.log('GOAL!!!!!!!!!');
            alert('GOAL!!!!!!');
          }
        }).catch(function (err) {
          return console.log(err);
        });
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MapContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      navigator.geolocation.getCurrentPosition(function (position) {
        var _position$coords = position.coords,
            latitude = _position$coords.latitude,
            longitude = _position$coords.longitude;

        _this2.setState({
          ballLocation: {
            lat: 33.02499278880199,
            lng: 35.28442144393921
          }
        }, function () {
          console.log(_this2.state);
        });
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      var _this$state2 = this.state,
          loading = _this$state2.loading,
          ballLocation = _this$state2.ballLocation;
      var url = "http://localhost:3000/api/v1/googleMap/getGoalLocationService?latitude=".concat(ballLocation.lat, "&longitude=").concat(ballLocation.lng);

      if (loading) {
        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()(url).then(function (resopnse) {
          return resopnse.json();
        }).then(function (data) {
          _this3.setState({
            goalLocation: {
              lat: data.data.lat,
              lng: data.data.lng
            },
            loading: false
          });
        }).catch(function (err) {
          return console.log(err);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state3 = this.state,
          loading = _this$state3.loading,
          ballLocation = _this$state3.ballLocation,
          goalLocation = _this$state3.goalLocation;
      var google = this.props.google;

      if (loading) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_10__["Map"], {
        google: google,
        zoom: 16,
        style: mapStyles,
        initialCenter: ballLocation
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_10__["Marker"], {
        name: 'Ball position',
        position: ballLocation,
        icon: {
          url: 'static/ball.png',
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(34, 34)
        },
        draggable: true,
        onDragend: function onDragend(t, map, coord) {
          return _this4.onMarkerDragEnd(coord);
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_10__["Marker"], {
        name: 'Goal position',
        position: {
          lat: goalLocation.lat,
          lng: goalLocation.lng
        },
        icon: {
          url: 'static/goal.png',
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(34, 34)
        }
      }));
    }
  }]);

  return MapContainer;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_10__["GoogleApiWrapper"])({
  apiKey: 'AIzaSyDUb9IkmIUP3Wlzir40A0jn3bR4FbBpl1k'
})(MapContainer));

/***/ })

})
//# sourceMappingURL=index.js.7ba509f76f284aecef29.hot-update.js.map