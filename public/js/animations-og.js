function map(t,e,n,i,o){return i+(o-i)*((t-e)/(n-e))}function convertHex(t,e){return t=t.replace("#",""),r=parseInt(t.substring(0,2),16),g=parseInt(t.substring(2,4),16),b=parseInt(t.substring(4,6),16),result="rgba("+r+","+g+","+b+","+e/100+")",result}function lerp(t,e,n){return(e-t)*n+t}var type=/(canvas|webgl)/.test(url.type)?url.type:"svg",two=new Two({type:Two.Types[type],fullscreen:!0}).appendTo(document.querySelector("#two")),Easing=TWEEN.Easing,width=$(window).width(),height=$(window).height(),center={x:width/2,y:height/2},min_dimension=width>height?height:width,TWO_PI=2*Math.PI,duration=1e3,shortDuration=.3*duration,mediumDuration=.75*duration,rand=function(t,e){return Math.floor(Math.random()*(e-t))+t},colors={morning:["#FFE481","#FB8C8E","#C695FA"],afternoon:["#A6F4FE","#E9547D","#DFD4B8"],night:["#DE1157","#F2A600","#1F285E"]},currentPallette=colors.afternoon;document.querySelector("body").style.backgroundImage="linear-gradient(45deg, "+currentPallette[0]+", "+currentPallette[1]+", "+currentPallette[2]+")";var midCornerPositions=[{x:width-width/3,y:height/3/2},{x:width-width/3,y:height-height/3/2},{x:width/3,y:height/3/2},{x:width/3,y:height-height/3/2},{x:width-width/3/2,y:height/3},{x:width-width/3/2,y:height-height/3},{x:width/3/2,y:height/3},{x:width/3/2,y:height-height/3}],backGround=two.makeGroup(),highRise=function(){function t(){var t={x:width/(rand(0,n)+1),y:height+height/2};o.translation.set(t.x,t.y),o.visible=!1,o.fill=currentPallette[0],i=!1,a.stop(),l.stop()}var e=_.identity,n=5,i=!1,o=two.makeRectangle(0,0,width/n*1.5,height);o.fill=currentPallette[0],o.noStroke(),o.visible=!0;var r=function(t,n){i=!0,o.visible=!0,a.start(),_.isFunction(t)&&(e=t)};r.onComplete=t;var a=new TWEEN.Tween(o.translation).to({y:center.y},shortDuration).easing(Easing.Cubic.Out).onComplete(function(){l.start()});console.log(Easing);var l=new TWEEN.Tween(o.translation).to({y:height+height/2},shortDuration).easing(Easing.Cubic.Out).onComplete(function(){r.onComplete(),e()});t();var s={start:r,clear:t,playing:function(){return i}};return s}(),sqaureExplode=function(){function t(){i.rotation=Math.PI*Math.random()*10,i.visible=!0,n=!1,a.stop(),l.stop()}var e=_.identity,n=!1,i=two.makeStar(center.x,center.y,200,400,5),o=randomColor({luminosity:"light"});i.fill=convertHex(o,100),i.stroke=convertHex(o,100),i.linewidth=10,i.visible=!0,i.scale=0;var r=function(t,o){var r=randomColor({luminosity:"light"});i.fill=convertHex(r,100),i.stroke=convertHex(r,100),n=!0,i.visible=!0,a.start(),_.isFunction(t)&&(e=t)};r.onComplete=t;var a=new TWEEN.Tween(i).to({scale:1},.2*duration).easing(Easing.Exponential.Out).onComplete(function(){l.start()}),l=new TWEEN.Tween(i).to({scale:0},.2*duration).easing(Easing.Exponential.In).onComplete(function(){r.onComplete(),e()});t();var s={start:r,clear:t,playing:function(){return n}};return s}(),middleGround=two.makeGroup(),foreGround=two.makeGroup(),circlePop=function(){function t(){var t=midCornerPositions[rand(0,midCornerPositions.length)];i.translation.set(t.x,t.y),i.visible=!1,i.fill=currentPallette[rand(0,currentPallette.length)],n=!1,r.stop(),a.stop()}var e=_.identity,n=!1,i=two.makeCircle(center.x,center.y,200,200);i.fill="#FFF",i.noStroke(),i.visible=!0;var o=function(t,o){n=!0,i.visible=!0,r.start(),_.isFunction(t)&&(e=t)};o.onComplete=t;var r=new TWEEN.Tween(i).to({scale:1},shortDuration).easing(Easing.Exponential.Out).onComplete(function(){a.start()}),a=new TWEEN.Tween(i).to({scale:0},shortDuration).easing(Easing.Exponential.Out).onComplete(function(){o.onComplete(),e()});t();var l={start:o,clear:t,playing:function(){return n}};return l}();