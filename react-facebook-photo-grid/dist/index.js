"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = PictureGrid;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _Typography = _interopRequireDefault(
  require("@material-ui/core/Typography")
);

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _infiniteReactCarousel = _interopRequireDefault(
  require("infinite-react-carousel")
);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== "object" && typeof obj !== "function")
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function PictureGrid(props) {
  var useStyles = (0, _styles.makeStyles)(function (theme) {
    return {
      title: {
        color: "black",
        marginRight: 10,
        fontWeight: 600,
        fontSize: 25,
      },
    };
  });
  var classes = useStyles();

  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    showImage = _useState2[0],
    setShowImage = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showGallaryView = _useState4[0],
    setShowGallaryView = _useState4[1];

  var displayGallaryImage = function displayGallaryImage(images) {
    if (images) {
      // console.log("images", images);
      if (images.length === 1) {
        return /*#__PURE__*/ _react.default.createElement("div", {
          container: true,
          justify: "center",
          style: {
            backgroundImage: "url(".concat(images[0]),
            backgroundSize: "cover",
            width: "100%",
            height: 300,
            marginLeft: 20,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          },
        });
      } else {
        return /*#__PURE__*/ _react.default.createElement(
          _infiniteReactCarousel.default,
          {
            dots: true,
            arrows: false,
          },
          images.map(function (image) {
            if (isAVideo(image)) {
              return /*#__PURE__*/ _react.default.createElement(
                _core.Grid,
                {
                  item: true,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  xs: 12,
                  sm: 12,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _core.Grid,
                  {
                    container: true,
                    direction: "row",
                    justify: "center",
                    alignItems: "center",
                  },
                  /*#__PURE__*/ _react.default.createElement("video", {
                    width: "100%",
                    height: "auto",
                    src: image,
                    controls: true,
                  })
                )
              );
            }

            return /*#__PURE__*/ _react.default.createElement(
              _core.Grid,
              {
                item: true,
                md: 12,
                lg: 12,
                xl: 12,
                xs: 12,
                sm: 12,
              },
              /*#__PURE__*/ _react.default.createElement(
                "div",
                {
                  container: true,
                  direction: "row",
                  justify: "center",
                  style: {
                    backgroundImage: "url(".concat(image),
                    backgroundSize: "cover",
                    width: "100%",
                    height: 300,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    textAlign: "left",
                  },
                  onDoubleClick: function onDoubleClick() {
                    setShowImage(image);
                  },
                },
                /*#__PURE__*/ _react.default.createElement(
                  _core.IconButton,
                  {
                    onClick: function onClick() {
                      setShowGallaryView(false);
                    },
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _Close.default,
                    null
                  )
                )
              )
            );
          })
        );
      }
    }
  };

  var isAVideo = function isAVideo(path) {
    if (props.children === null) {
      if (path.includes(".mp4") || path.includes(".mov")) {
        return true;
      }
    }

    return false;
  };

  var hasAVideo = function hasAVideo(paths) {
    var hasVideo = false;

    if (props.children === null) {
      paths.map(function (path) {
        if (path.includes(".mp4") || path.includes(".mov")) {
          console.log("checking videos", path);
          hasVideo = true;
        }
      });
    }

    return hasVideo;
  };

  var displayImage = function displayImage(images) {
    if (images) {
      console.log("images", images[0]);

      if (images.length === 1) {
        if (isAVideo(images[0])) {
          return /*#__PURE__*/ _react.default.createElement(
            _core.Grid,
            {
              container: true,
              direction: "row",
              justify: "center",
            },
            /*#__PURE__*/ _react.default.createElement("video", {
              width: "95%",
              height: "400",
              src: images[0],
              controls: true,
            })
          );
        } else {
          return /*#__PURE__*/ _react.default.createElement("div", {
            container: true,
            justify: "center",
            style: {
              backgroundImage: "url(".concat(images[0]),
              backgroundSize: "cover",
              width: "100%",
              height: 300,
              // marginLeft: 20,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            },
            onDoubleClick: function onDoubleClick() {
              setShowImage(images[0]);
            },
          });
        }
      } else if (images.length === 2) {
        if (hasAVideo(images)) {
          return /*#__PURE__*/ _react.default.createElement(
            _core.Grid,
            {
              container: true,
              spacing: 1,
            },
            images.map(function (image, index) {
              if (isAVideo(image)) {
                return /*#__PURE__*/ _react.default.createElement(
                  _core.Grid,
                  {
                    item: true,
                    md: 12,
                    lg: 12,
                    xl: 12,
                    xs: 12,
                    sm: 12,
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _core.Grid,
                    {
                      container: true,
                      direction: "row",
                      justify: "center",
                    },
                    /*#__PURE__*/ _react.default.createElement("video", {
                      width: "100%",
                      height: "290",
                      src: image,
                      controls: true,
                    })
                  )
                );
              }

              return /*#__PURE__*/ _react.default.createElement(
                _core.Grid,
                {
                  item: true,
                  md: 12,
                  lg: 12,
                  xl: 12,
                  xs: 12,
                  sm: 12,
                },
                /*#__PURE__*/ _react.default.createElement(_core.Grid, {
                  container: true,
                  direction: "row",
                  justify: "center",
                  style: {
                    backgroundImage: "url(".concat(image),
                    width: "auto",
                    height: 200,
                    borderRadius: 5,
                    marginBottom: 5,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  },
                  onDoubleClick: function onDoubleClick() {
                    setShowImage(image);
                  },
                })
              );
            })
          );
        } else {
          return /*#__PURE__*/ _react.default.createElement(
            _core.Grid,
            {
              container: true,
              spacing: 1,
            },
            images.map(function (image, index) {
              return /*#__PURE__*/ _react.default.createElement(
                _core.Grid,
                {
                  item: true,
                  md: 6,
                  lg: 6,
                  xl: 6,
                  xs: 6,
                  sm: 6,
                },
                /*#__PURE__*/ _react.default.createElement(_core.Grid, {
                  container: true,
                  direction: "row",
                  justify: "center",
                  style: {
                    backgroundImage: "url(".concat(image),
                    width: "auto",
                    height: 400,
                    borderRadius: 5,
                    marginBottom: 5,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  },
                  onDoubleClick: function onDoubleClick() {
                    setShowImage(image);
                  },
                })
              );
            })
          );
        }
      } else if (images.length === 3) {
        return /*#__PURE__*/ _react.default.createElement(
          _core.Grid,
          {
            container: true,
            spacing: 1,
          },
          /*#__PURE__*/ _react.default.createElement(
            _core.Grid,
            {
              item: true,
              md: 6,
              lg: 6,
              xl: 6,
              xs: 6,
              sm: 6,
            },
            /*#__PURE__*/ _react.default.createElement(_core.Grid, {
              container: true,
              direction: "row",
              justify: "center",
              style: {
                backgroundImage: "url(".concat(images[0]),
                // width: 250,
                height: 400,
                borderRadius: 5,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              },
              onDoubleClick: function onDoubleClick() {
                setShowImage(images[0]);
              },
            })
          ),
          " ",
          /*#__PURE__*/ _react.default.createElement(
            _core.Grid,
            {
              item: true,
              md: 6,
              lg: 6,
              xl: 6,
              xs: 6,
              sm: 6,
            },
            images.map(function (image, index) {
              if (index != 0) {
                if (isAVideo(image)) {
                  return /*#__PURE__*/ _react.default.createElement(
                    _core.Grid,
                    {
                      item: true,
                      md: 12,
                      lg: 12,
                      xl: 12,
                      xs: 12,
                      sm: 12,
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _core.Grid,
                      {
                        container: true,
                        direction: "row",
                        justify: "center",
                      },
                      /*#__PURE__*/ _react.default.createElement("video", {
                        width: "100%",
                        height: "auto",
                        style: {
                          maxHeight: 205,
                        },
                        src: image,
                        controls: true,
                      })
                    )
                  );
                } else {
                  return /*#__PURE__*/ _react.default.createElement(
                    _core.Grid,
                    {
                      container: true,
                      direction: "row",
                      justify: "center",
                      style: {
                        backgroundImage: "url(".concat(image),
                        width: "auto",
                        height: 195,
                        borderRadius: 5,
                        marginBottom: 5,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      },
                      onDoubleClick: function onDoubleClick() {
                        setShowImage(image);
                      },
                    }
                  );
                }
              }
            })
          )
        );
      } else if (images.length === 4) {
        return /*#__PURE__*/ _react.default.createElement(
          _core.Grid,
          {
            container: true,
            spacing: 1,
          },
          /*#__PURE__*/ _react.default.createElement(
            _core.Grid,
            {
              item: true,
              md: 6,
              lg: 6,
              xl: 6,
              xs: 6,
              sm: 6,
            },
            /*#__PURE__*/ _react.default.createElement(_core.Grid, {
              container: true,
              direction: "row",
              justify: "center",
              style: {
                backgroundImage: "url(".concat(images[0]),
                // width: 250,
                height: 400,
                borderRadius: 5,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              },
              onDoubleClick: function onDoubleClick() {
                setShowImage(images[0]);
              },
            })
          ),
          " ",
          /*#__PURE__*/ _react.default.createElement(
            _core.Grid,
            {
              item: true,
              md: 6,
              lg: 6,
              xl: 6,
              xs: 6,
              sm: 6,
            },
            images.map(function (image, index) {
              if (index != 0) {
                if (isAVideo(image)) {
                  return /*#__PURE__*/ _react.default.createElement(
                    _core.Grid,
                    {
                      item: true,
                      md: 12,
                      lg: 12,
                      xl: 12,
                      xs: 12,
                      sm: 12,
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _core.Grid,
                      {
                        container: true,
                        direction: "row",
                        justify: "center",
                      },
                      /*#__PURE__*/ _react.default.createElement("video", {
                        width: "100%",
                        height: "auto",
                        src: image,
                        controls: true,
                      })
                    )
                  );
                }

                return /*#__PURE__*/ _react.default.createElement(_core.Grid, {
                  container: true,
                  direction: "row",
                  justify: "center",
                  style: {
                    backgroundImage: "url(".concat(image),
                    width: "auto",
                    height: 130,
                    borderRadius: 5,
                    marginBottom: 5,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  },
                  onDoubleClick: function onDoubleClick() {
                    setShowImage(image);
                  },
                });
              }
            })
          )
        );
      } else {
        return /*#__PURE__*/ _react.default.createElement(
          _core.Grid,
          {
            container: true,
            spacing: 1,
          },
          /*#__PURE__*/ _react.default.createElement(
            _core.Grid,
            {
              item: true,
              md: 6,
              lg: 6,
              xl: 6,
              xs: 6,
              sm: 6,
            },
            /*#__PURE__*/ _react.default.createElement(_core.Grid, {
              container: true,
              direction: "row",
              justify: "center",
              style: {
                backgroundImage: "url(".concat(images[0]),
                // width: 250,
                height: 400,
                borderRadius: 5,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              },
              onDoubleClick: function onDoubleClick() {
                setShowImage(images[0]);
              },
            })
          ),
          " ",
          /*#__PURE__*/ _react.default.createElement(
            _core.Grid,
            {
              item: true,
              md: 6,
              lg: 6,
              xl: 6,
              xs: 6,
              sm: 6,
            },
            /*#__PURE__*/ _react.default.createElement(
              _core.Grid,
              {
                container: true,
                spacing: 1,
              },
              images.map(function (image, index) {
                if (index != 0) {
                  if (index > 3 && images.length > 5) {
                    if (index === 4) {
                      return /*#__PURE__*/ _react.default.createElement(
                        _core.Grid,
                        {
                          item: true,
                          md: 6,
                          lg: 6,
                          xl: 6,
                          xs: 6,
                          sm: 6,
                        },
                        /*#__PURE__*/ _react.default.createElement(
                          _core.Grid,
                          {
                            container: true,
                            direction: "row",
                            justify: "center",
                            alignItems: "center",
                            style: {
                              backgroundImage: "url(".concat(image),
                              background: "gray",
                              width: "auto",
                              height: 195,
                              borderRadius: 5,
                              cursor: "pointer", // // marginBottom: 5,
                              // backgroundSize: "cover",
                              // backgroundRepeat: "no-repeat",
                              // backgroundPosition: "center",
                            },
                            onClick: function onClick() {
                              // setShowImage(image);
                              setShowGallaryView(true);
                            },
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            _Typography.default,
                            {
                              style: {
                                color: "white",
                              },
                              className: classes.title,
                            },
                            "+",
                            images.length - (index + 1)
                          )
                        )
                      );
                    }
                  } else {
                    if (hasAVideo(images) && images.length <= 5) {
                      if (index > 2) {
                        // alert("it coming herer");
                        if (isAVideo(image)) {
                          return /*#__PURE__*/ _react.default.createElement(
                            _core.Grid,
                            {
                              item: true,
                              md: 12,
                              lg: 12,
                              xl: 12,
                              xs: 12,
                              sm: 12,
                            },
                            /*#__PURE__*/ _react.default.createElement(
                              _core.Grid,
                              {
                                container: true,
                                direction: "row",
                                justify: "center",
                              },
                              /*#__PURE__*/ _react.default.createElement(
                                "video",
                                {
                                  width: "100%",
                                  height: "130",
                                  src: image,
                                  controls: true,
                                }
                              )
                            )
                          );
                        }

                        return /*#__PURE__*/ _react.default.createElement(
                          _core.Grid,
                          {
                            item: true,
                            md: 12,
                            lg: 12,
                            xl: 12,
                            xs: 12,
                            sm: 12,
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            _core.Grid,
                            {
                              container: true,
                              direction: "row",
                              justify: "center",
                              style: {
                                backgroundImage: "url(".concat(image),
                                width: "auto",
                                height: 105,
                                borderRadius: 5,
                                // marginBottom: 5,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                              },
                              onDoubleClick: function onDoubleClick() {
                                setShowImage(image);
                              },
                            }
                          )
                        );
                      }

                      return /*#__PURE__*/ _react.default.createElement(
                        _core.Grid,
                        {
                          item: true,
                          md: 6,
                          lg: 6,
                          xl: 6,
                          xs: 6,
                          sm: 6,
                        },
                        /*#__PURE__*/ _react.default.createElement(_core.Grid, {
                          container: true,
                          direction: "row",
                          justify: "center",
                          style: {
                            backgroundImage: "url(".concat(image),
                            width: "auto",
                            height: 155,
                            borderRadius: 5,
                            // marginBottom: 5,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          },
                          onDoubleClick: function onDoubleClick() {
                            setShowImage(image);
                          },
                        })
                      );
                    } else {
                      return /*#__PURE__*/ _react.default.createElement(
                        _core.Grid,
                        {
                          item: true,
                          md: 6,
                          lg: 6,
                          xl: 6,
                          xs: 6,
                          sm: 6,
                        },
                        /*#__PURE__*/ _react.default.createElement(_core.Grid, {
                          container: true,
                          direction: "row",
                          justify: "center",
                          style: {
                            backgroundImage: "url(".concat(image),
                            width: "auto",
                            height: 195,
                            borderRadius: 5,
                            // marginBottom: 5,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                          },
                          onDoubleClick: function onDoubleClick() {
                            setShowImage(image);
                          },
                        })
                      );
                    }
                  }
                }
              })
            )
          )
        );
      }
    }
  };

  return /*#__PURE__*/ _react.default.createElement(
    "div",
    {
      style: {
        width: props.width,
        maxWidth: props.maxWidth,
      },
    },
    showGallaryView === false
      ? displayImage(props.images || props.children) != null &&
          /*#__PURE__*/ _react.default.createElement(
            "div",
            null,
            displayImage(props.images || props.children)
          )
      : displayGallaryImage(props.images || props.children) != null &&
          /*#__PURE__*/ _react.default.createElement(
            "div",
            null,
            displayGallaryImage(props.images || props.children)
          ),
    showImage &&
      /*#__PURE__*/ _react.default.createElement(
        _core.Dialog, // title={"POST"}
        {
          scroll: "body",
          open: showImage ? true : false,
          onClose: function onClose() {
            setShowImage(null);
          },
          hideActions: true,
        },
        /*#__PURE__*/ _react.default.createElement(
          _core.Grid,
          {
            container: true,
            direction: "row",
            justify: "center",
          },
          /*#__PURE__*/ _react.default.createElement("img", {
            style: {
              maxWidth: "100%",
            },
            src: showImage,
          })
        )
      )
  );
}
