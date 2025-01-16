"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PictureGrid;
var _react = _interopRequireWildcard(require("react"));
var _styles = require("@mui/styles");
var _material = require("@mui/material");
var _Grid = _interopRequireDefault(require("@mui/material/Grid2"));
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _infiniteReactCarousel = _interopRequireDefault(require("infinite-react-carousel"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function PictureGrid(props) {
  const useStyles = (0, _styles.makeStyles)(theme => ({
    title: {
      color: "black",
      marginRight: 10,
      fontWeight: 600,
      fontSize: 25
    }
  }));
  const classes = useStyles();
  const [showImage, setShowImage] = (0, _react.useState)(null);
  const [showGallaryView, setShowGallaryView] = (0, _react.useState)(false);
  var displayGallaryImage = images => {
    if (images) {
      // console.log("images", images);
      if (images.length === 1) {
        return /*#__PURE__*/_react.default.createElement("div", {
          container: true,
          justify: "center",
          style: {
            backgroundImage: "url(".concat(images[0]),
            backgroundSize: "cover",
            width: "100%",
            height: 300,
            marginLeft: 20,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }
        });
      } else {
        return /*#__PURE__*/_react.default.createElement(_infiniteReactCarousel.default, {
          dots: true,
          arrows: false
        }, images.map(image => {
          if (isAVideo(image)) {
            return /*#__PURE__*/_react.default.createElement(_Grid.default, {
              item: true,
              md: 12,
              lg: 12,
              xl: 12,
              xs: 12,
              sm: 12
            }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
              container: true,
              direction: "row",
              justify: "center",
              alignItems: "center"
            }, /*#__PURE__*/_react.default.createElement("video", {
              width: "100%",
              height: "auto",
              src: image,
              controls: true
            })));
          }
          return /*#__PURE__*/_react.default.createElement(_Grid.default, {
            item: true,
            md: 12,
            lg: 12,
            xl: 12,
            xs: 12,
            sm: 12
          }, /*#__PURE__*/_react.default.createElement("div", {
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
              textAlign: "left"
            },
            onDoubleClick: () => {
              setShowImage(image);
            }
          }, /*#__PURE__*/_react.default.createElement(_material.IconButton, {
            onClick: () => {
              setShowGallaryView(false);
            }
          }, /*#__PURE__*/_react.default.createElement(_Close.default, null))));
        }));
      }
    }
  };
  const isAVideo = path => {
    if (props.children === null) {
      if (path.includes(".mp4") || path.includes(".mov")) {
        return true;
      }
    }
    return false;
  };
  const hasAVideo = paths => {
    var hasVideo = false;
    if (props.children === null) {
      paths.map(path => {
        if (path.includes(".mp4") || path.includes(".mov")) {
          console.log("checking videos", path);
          hasVideo = true;
        }
      });
    }
    return hasVideo;
  };
  const displayImage = images => {
    if (images) {
      console.log("images", images[0]);
      if (images.length === 1) {
        if (isAVideo(images[0])) {
          return /*#__PURE__*/_react.default.createElement(_Grid.default, {
            container: true,
            direction: "row",
            justify: "center"
          }, /*#__PURE__*/_react.default.createElement("video", {
            width: "95%",
            height: "400",
            src: images[0],
            controls: true
          }));
        } else {
          return /*#__PURE__*/_react.default.createElement("div", {
            container: true,
            justify: "center",
            style: {
              backgroundImage: "url(".concat(images[0]),
              backgroundSize: "cover",
              width: "100%",
              height: 300,
              // marginLeft: 20,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            },
            onDoubleClick: () => {
              setShowImage(images[0]);
            }
          });
        }
      } else if (images.length === 2) {
        if (hasAVideo(images)) {
          return /*#__PURE__*/_react.default.createElement(_Grid.default, {
            container: true,
            spacing: 1
          }, images.map((image, index) => {
            if (isAVideo(image)) {
              return /*#__PURE__*/_react.default.createElement(_Grid.default, {
                item: true,
                md: 12,
                lg: 12,
                xl: 12,
                xs: 12,
                sm: 12
              }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
                container: true,
                direction: "row",
                justify: "center"
              }, /*#__PURE__*/_react.default.createElement("video", {
                width: "100%",
                height: "290",
                src: image,
                controls: true
              })));
            }
            return /*#__PURE__*/_react.default.createElement(_Grid.default, {
              item: true,
              md: 12,
              lg: 12,
              xl: 12,
              xs: 12,
              sm: 12
            }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
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
                backgroundPosition: "center"
              },
              onDoubleClick: () => {
                setShowImage(image);
              }
            }));
          }));
        } else {
          return /*#__PURE__*/_react.default.createElement(_Grid.default, {
            container: true,
            spacing: 1
          }, images.map((image, index) => {
            return /*#__PURE__*/_react.default.createElement(_Grid.default, {
              item: true,
              md: 6,
              lg: 6,
              xl: 6,
              xs: 6,
              sm: 6
            }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
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
                backgroundPosition: "center"
              },
              onDoubleClick: () => {
                setShowImage(image);
              }
            }));
          }));
        }
      } else if (images.length === 3) {
        return /*#__PURE__*/_react.default.createElement(_Grid.default, {
          container: true,
          spacing: 1
        }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
          item: true,
          md: 6,
          lg: 6,
          xl: 6,
          xs: 6,
          sm: 6
        }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
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
            backgroundPosition: "center"
          },
          onDoubleClick: () => {
            setShowImage(images[0]);
          }
        })), " ", /*#__PURE__*/_react.default.createElement(_Grid.default, {
          item: true,
          md: 6,
          lg: 6,
          xl: 6,
          xs: 6,
          sm: 6
        }, images.map((image, index) => {
          if (index != 0) {
            if (isAVideo(image)) {
              return /*#__PURE__*/_react.default.createElement(_Grid.default, {
                item: true,
                md: 12,
                lg: 12,
                xl: 12,
                xs: 12,
                sm: 12
              }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
                container: true,
                direction: "row",
                justify: "center"
              }, /*#__PURE__*/_react.default.createElement("video", {
                width: "100%",
                height: "auto",
                style: {
                  maxHeight: 205
                },
                src: image,
                controls: true
              })));
            } else {
              return /*#__PURE__*/_react.default.createElement(_Grid.default, {
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
                  backgroundPosition: "center"
                },
                onDoubleClick: () => {
                  setShowImage(image);
                }
              });
            }
          }
        })));
      } else if (images.length === 4) {
        return /*#__PURE__*/_react.default.createElement(_Grid.default, {
          container: true,
          spacing: 1
        }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
          item: true,
          md: 6,
          lg: 6,
          xl: 6,
          xs: 6,
          sm: 6
        }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
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
            backgroundPosition: "center"
          },
          onDoubleClick: () => {
            setShowImage(images[0]);
          }
        })), " ", /*#__PURE__*/_react.default.createElement(_Grid.default, {
          item: true,
          md: 6,
          lg: 6,
          xl: 6,
          xs: 6,
          sm: 6
        }, images.map((image, index) => {
          if (index != 0) {
            if (isAVideo(image)) {
              return /*#__PURE__*/_react.default.createElement(_Grid.default, {
                item: true,
                md: 12,
                lg: 12,
                xl: 12,
                xs: 12,
                sm: 12
              }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
                container: true,
                direction: "row",
                justify: "center"
              }, /*#__PURE__*/_react.default.createElement("video", {
                width: "100%",
                height: "auto",
                src: image,
                controls: true
              })));
            }
            return /*#__PURE__*/_react.default.createElement(_Grid.default, {
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
                backgroundPosition: "center"
              },
              onDoubleClick: () => {
                setShowImage(image);
              }
            });
          }
        })));
      } else {
        return /*#__PURE__*/_react.default.createElement(_Grid.default, {
          container: true,
          spacing: 1
        }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
          item: true,
          md: 6,
          lg: 6,
          xl: 6,
          xs: 6,
          sm: 6
        }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
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
            backgroundPosition: "center"
          },
          onDoubleClick: () => {
            setShowImage(images[0]);
          }
        })), " ", /*#__PURE__*/_react.default.createElement(_Grid.default, {
          item: true,
          md: 6,
          lg: 6,
          xl: 6,
          xs: 6,
          sm: 6
        }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
          container: true,
          spacing: 1
        }, images.map((image, index) => {
          if (index != 0) {
            if (index > 3 && images.length > 5) {
              if (index === 4) {
                return /*#__PURE__*/_react.default.createElement(_Grid.default, {
                  item: true,
                  md: 6,
                  lg: 6,
                  xl: 6,
                  xs: 6,
                  sm: 6
                }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
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
                    cursor: "pointer"
                    // // marginBottom: 5,
                    // backgroundSize: "cover",
                    // backgroundRepeat: "no-repeat",
                    // backgroundPosition: "center",
                  },
                  onClick: () => {
                    // setShowImage(image);
                    setShowGallaryView(true);
                  }
                }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
                  style: {
                    color: "white"
                  },
                  className: classes.title
                }, "+", images.length - (index + 1))));
              }
            } else {
              if (hasAVideo(images) && images.length <= 5) {
                if (index > 2) {
                  // alert("it coming herer");
                  if (isAVideo(image)) {
                    return /*#__PURE__*/_react.default.createElement(_Grid.default, {
                      item: true,
                      md: 12,
                      lg: 12,
                      xl: 12,
                      xs: 12,
                      sm: 12
                    }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
                      container: true,
                      direction: "row",
                      justify: "center"
                    }, /*#__PURE__*/_react.default.createElement("video", {
                      width: "100%",
                      height: "130",
                      src: image,
                      controls: true
                    })));
                  }
                  return /*#__PURE__*/_react.default.createElement(_Grid.default, {
                    item: true,
                    md: 12,
                    lg: 12,
                    xl: 12,
                    xs: 12,
                    sm: 12
                  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
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
                      backgroundPosition: "center"
                    },
                    onDoubleClick: () => {
                      setShowImage(image);
                    }
                  }));
                }
                return /*#__PURE__*/_react.default.createElement(_Grid.default, {
                  item: true,
                  md: 6,
                  lg: 6,
                  xl: 6,
                  xs: 6,
                  sm: 6
                }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
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
                    backgroundPosition: "center"
                  },
                  onDoubleClick: () => {
                    setShowImage(image);
                  }
                }));
              } else {
                return /*#__PURE__*/_react.default.createElement(_Grid.default, {
                  item: true,
                  md: 6,
                  lg: 6,
                  xl: 6,
                  xs: 6,
                  sm: 6
                }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
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
                    backgroundPosition: "center"
                  },
                  onDoubleClick: () => {
                    setShowImage(image);
                  }
                }));
              }
            }
          }
        }))));
      }
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: props.width,
      maxWidth: props.maxWidth
    }
  }, showGallaryView === false ? displayImage(props.images || props.children) != null && /*#__PURE__*/_react.default.createElement("div", null, displayImage(props.images || props.children)) : displayGallaryImage(props.images || props.children) != null && /*#__PURE__*/_react.default.createElement("div", null, displayGallaryImage(props.images || props.children)), showImage && /*#__PURE__*/_react.default.createElement(_material.Dialog
  // title={"POST"}
  , {
    scroll: "body",
    open: showImage ? true : false,
    onClose: () => {
      setShowImage(null);
    },
    hideActions: true
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    container: true,
    direction: "row",
    justify: "center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: "100%"
    },
    src: showImage
  }))));
}