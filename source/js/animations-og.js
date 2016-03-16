// Environment Set Up
var type = /(canvas|webgl)/.test(url.type) ? url.type : 'svg',
    two = new Two({
       type: Two.Types[type],
       fullscreen: true
    }).appendTo(document.querySelector('#two')),
    Easing = TWEEN.Easing;

// Animation Related Variables and helpers
var width = $(window).width(), height = $(window).height();
var center = { x: width / 2, y: height / 2 };
var min_dimension = width > height ? height : width;
var TWO_PI = Math.PI * 2;
var duration = 1000;
var shortDuration = duration * 0.3;
var mediumDuration = duration * 0.75;
var rand = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function map(v, i1, i2, o1, o2) {
  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}

var colors = {
    // inspo: https://dribbble.com/shots/2590101-BeBright-App
    morning: ["#FFE481", "#FB8C8E", "#C695FA"],
    // inspo: varying
    afternoon: ["#A6F4FE", "#E9547D", "#DFD4B8"],
    // inspo: https://dribbble.com/shots/2590588-Login-Startup-Screen
    night: ["#DE1157", "#F2A600", "#1F285E"]
};

function convertHex(hex,opacity){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);

    result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
    return result;
}

var currentPallette = colors.afternoon;

document.querySelector('body').style.backgroundImage = 'linear-gradient(45deg'
        + ', ' + currentPallette[0] + ', ' + currentPallette[1] + ', '
        + currentPallette[2] + ')';

var midCornerPositions = [
    {
        x: width - width/3,
        y: (height / 3)/2
    },
    {
        x: width - width/3,
        y: height - (height / 3)/2
    },
    {
        x: width/3,
        y: (height / 3)/2
    },
    {
        x: width/3,
        y: height - (height / 3)/2
    },
    {
        x: width - (width/3)/2,
        y: (height / 3)
    },
    {
        x: width - (width/3)/2,
        y: height - (height / 3)
    },
    {
        x: (width/3)/2,
        y: (height / 3)
    },
    {
        x: (width/3)/2,
        y: height - (height / 3)
    }
];


// ======================================
// BACK GROUND
// ======================================
var backGround = two.makeGroup();

var highRise = (function(){
    var callback = _.identity,
        colCount = 5,
        playing = false,
        shape = two.makeRectangle(0, 0, (width/colCount)*1.5, height);
        shape.fill = currentPallette[0];
        shape.noStroke();
        shape.visible = true;

    var start = function(onComplete, silent) {
        playing = true;
        shape.visible = true;
        animate_in.start();

        if (_.isFunction(onComplete)) {
            callback = onComplete;
        }
    };


    start.onComplete = reset;

    var animate_in = new TWEEN.Tween(shape.translation)
        .to({y: center.y}, shortDuration)
        .easing(Easing.Cubic.Out)
        .onComplete(function() {
            animate_out.start();
        });
        console.log(Easing);
    var animate_out = new TWEEN.Tween(shape.translation)
        .to({y: height+height/2}, shortDuration)
        .easing(Easing.Cubic.Out)
        .onComplete(function() {
        start.onComplete();
            callback();
        });

    reset();

    function reset() {
        var newPos = {x: width/(rand(0, colCount)+1), y: height + height/2};
        shape.translation.set(newPos.x, newPos.y);
        shape.visible = false;
        shape.fill = currentPallette[0];
        playing = false;
        animate_in.stop();
        animate_out.stop();
    }

    var exports = {
        start: start,
        clear: reset,
        playing: function() { return playing; },
    };

    return exports;

})();

var sqaureExplode = (function() {
    var callback = _.identity;
    var playing = false;

    var shape = two.makeStar(center.x, center.y, 200, 400, 5);
    var randColor = randomColor({luminosity: 'light'});
    shape.fill = convertHex(randColor, 100);
    shape.stroke = convertHex(randColor, 100);
    shape.linewidth = 10;
    shape.visible = true;
    shape.scale = 0;

    var start = function(onComplete, silent) {
      var randColor = randomColor({luminosity: 'light'});
      shape.fill = convertHex(randColor, 100);
      shape.stroke = convertHex(randColor, 100);
      playing = true;
      shape.visible = true;
      animate_in.start();
      if (_.isFunction(onComplete)) {
          callback = onComplete;
      }
    }
    start.onComplete = reset;

    var animate_in = new TWEEN.Tween(shape)
      .to({scale: 1}, duration * .2)
      .easing(Easing.Exponential.Out)
      .onComplete(function() {
        animate_out.start();
      });
    var animate_out = new TWEEN.Tween(shape)
      .to({scale: 0}, duration * .2)
      .easing(Easing.Exponential.In)
      .onComplete(function() {
        start.onComplete();
        callback();
      });
    reset();
    function reset() {
      shape.rotation = Math.PI * Math.random() * 10;
      shape.visible = true;
      playing = false;
      animate_in.stop();
      animate_out.stop();
    }
    var exports = {
      start: start,
      clear: reset,
      playing: function() { return playing; },
    };
    return exports;
})();

// ======================================
// MIDDLE GROUND
// ======================================
var middleGround = two.makeGroup();

// ======================================
// FORE GROUND
// ======================================
var foreGround = two.makeGroup();

var circlePop = (function(){
    var callback = _.identity,
        playing = false,
        shape = two.makeCircle(center.x, center.y, 200, 200);
        shape.fill = "#FFF";
        shape.noStroke();
        shape.visible = true;

    var start = function(onComplete, silent) {
        playing = true;
        shape.visible = true;
        animate_in.start();

        if (_.isFunction(onComplete)) {
            callback = onComplete;
        }
    };


    start.onComplete = reset;

    var animate_in = new TWEEN.Tween(shape)
        .to({scale: 1}, shortDuration)
        .easing(Easing.Exponential.Out)
        .onComplete(function() {
            animate_out.start();
        });

    var animate_out = new TWEEN.Tween(shape)
        .to({scale: 0}, shortDuration)
        .easing(Easing.Exponential.Out)
        .onComplete(function() {
        start.onComplete();
            callback();
        });

    reset();

    function reset() {
        var newPos = midCornerPositions[rand(0,midCornerPositions.length)];
        shape.translation.set(newPos.x, newPos.y);
        shape.visible = false;
        shape.fill = currentPallette[rand(0, currentPallette.length)];
        playing = false;
        animate_in.stop();
        animate_out.stop();
    }

    var exports = {
        start: start,
        clear: reset,
        playing: function() { return playing; },
    };

    return exports;

})();
