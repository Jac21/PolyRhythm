var animationController={dict:{87:veil,69:ufo,79:dotted_spiral,80:clay,84:highRise,83:circlePop,70:horizontalLines,65:strike,82:squiggle,68:flash,circle:centerCircle},trigger:function(o,i){var l=soundController.dict[o];console.log("soundcont",soundController);var r=this.dict[o];if(l&&i&&l.play(),81===o){console.log("I'm in");var t=r("square",randomColor());t.start()}else r&&(r.playing()&&r.clear(),r.start(void 0,void 0))}};two.bind("update",function(){TWEEN.update()}).play();