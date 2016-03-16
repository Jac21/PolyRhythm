function makeTriangle(n,t,e){var i=.33*TWO_PI,o=.66*TWO_PI,a=TWO_PI,r=[new Two.Anchor(e*Math.cos(i)+n,e*Math.sin(i)+t),new Two.Anchor(e*Math.cos(o)+n,e*Math.sin(o)+t),new Two.Anchor(e*Math.cos(a)+n,e*Math.sin(a)+t)],s=two.makePolygon(r);return s}function colorsEqual(n,t,e){var i=e||.25;return Math.abs(n.r-t.r)<i&&Math.abs(n.g-t.g)<i&&Math.abs(n.b-t.b)<i}function ease(n,t,e){var i=t-n;return Math.abs(i)<=1e-4?t:n+i*e}function toRGB(n){return"rgb("+Math.round(n.r)+","+Math.round(n.g)+","+Math.round(n.b)+")"}function angleBetween(n,t){var e=t.x-n.x,i=t.y-t.y;return Math.atan2(i,e)}function negate(n){return-1*n}function lerp(n,t,e){return(t-n)*e+n}function map(n,t,e,i,o){return i+(o-i)*((n-t)/(e-t))}function sigmoid(n,t,e,i){var i=i||.2;return lerp(n,t,i*e/((1+i)*e))}var type=/(canvas|webgl)/.test(url.type)?url.type:"svg",two=new Two({type:Two.Types[type],fullscreen:!0}).appendTo(document.querySelector("#two")),Easing=TWEEN.Easing,width=$(window).width(),height=$(window).height(),center={x:width/2,y:height/2},duration=1e3,min_dimension=width>height?height:width,TWO_PI=2*Math.PI,colors={black:"#000000",white:"#ffffff",seafoam:"#74C8B1",accent:"#0DB4FE"},r,rectSpin={vars:{square:null},init:function(){r=this.vars,this.bindUI()},reset:function(){r.square.translation.x=-two.width/2},bindUI:function(){r.square=two.makeRectangle(70,0,100,100),r.square.fill="rgba(0, 191, 168, 0.33)",r.square.stroke="rgb(0, 191, 168)",r.square.linewidth=5,r.square.translation.set(-two.width/2,two.height/2);var n=this;this.animate_out=new TWEEN.Tween(r.square.translation).to({x:1.5*two.width},750).easing(TWEEN.Easing.Elastic.In).onUpdate(function(n){r.square.rotation=2*Math.PI*n}).onComplete(n.reset),this.animate_in=new TWEEN.Tween(r.square.translation).to({x:two.width/2},750).delay(500).easing(TWEEN.Easing.Bounce.Out).onUpdate(function(n){r.square.rotation=2*Math.PI*n}).onComplete(function(){n.animate_out.start()})},start:function(){this.animate_in.start()}},centerCircle=function(){function n(){i.visible=!0,e=!1,a.stop(),r.stop()}var t=_.identity,e=!1,i=two.makeCircle(center.x,center.y,200,200);i.fill="#FFF",i.noStroke(),i.visible=!0;var o=function(n,o){console.log("start got called"),e=!0,i.visible=!0,a.start(),_.isFunction(n)&&(t=n)};o.onComplete=n;var a=new TWEEN.Tween(i).to({scale:1.5},.2*duration).easing(Easing.Exponential.In).onComplete(function(){o.onComplete(),t()}),r=new TWEEN.Tween(i).to({scale:1},.15*duration).easing(Easing.Exponential.Out).onComplete(function(){o.onComplete(),t()});n();var s={start:o,clear:n,playing:function(){return e}};return s}(),veil=function(){function n(){a.visible=!1,e=!1,i=Math.random()>.5,i?(a.translation.set(center.x,-center.y),l.y=1.5*height):(a.translation.set(center.x,1.5*height),l.y=-center.y),u.y=center.y,h.stop(),d.stop()}var t=_.identity,e=!1,i=!0,o=[new Two.Anchor(-center.x,-center.y),new Two.Anchor(center.x,-center.y),new Two.Anchor(center.x,center.y),new Two.Anchor(-center.x,center.y)],a=two.makePolygon(o);a.fill="#EEE",a.noStroke();var r=function(n,i){e=!0,a.visible=!0,h.start(),!i&&f.sound&&f.sound.stop().play(),_.isFunction(n)&&(t=n)};r.onComplete=n;var s=function(){a.fill="#EEE"},c=function(){o[0].set(-center.x,-center.y),o[1].set(center.x,-center.y),o[2].set(center.x,center.y),o[3].set(-center.x,center.y)},u={y:center.y},l={y:0},h=new TWEEN.Tween(a.translation).to(u,.5*duration).easing(Easing.Exponential.Out).onComplete(function(){d.start()}),d=new TWEEN.Tween(a.translation).to(l,.5*duration).easing(Easing.Exponential.In).onComplete(function(){r.onComplete(),t()});n();var f={start:r,update:s,resize:c,clear:n,playing:function(){return e},hash:"1,1",filename:"veil"};return f}(),ufo=function(){function n(){o.visible=!1;var n=Math.random()>.5,t=Math.random()>.5;n?o.translation.x=.75*width:o.translation.x=.25*width,t?o.origin=o.translation.y=-center.y:o.origin=o.translation.y=1.5*height,o.destination.y=center.y,o.scale=1,c.stop(),u.stop()}var t=!1,e=_.identity,i=.25*min_dimension,o=two.makeCircle(0,0,i);o.noStroke().fill="#6ECCFA";var a=function(n,i){t=!0,c.start(),o.visible=!0,!i&&l.sound&&l.sound.stop().play(),_.isFunction(n)&&(e=n)};a.onComplete=n;var r=function(){o.fill="#6ECCFA"},s=function(){i=.25*min_dimension};o.destination={y:center.y};var c=new TWEEN.Tween(o.translation).to(o.destination,duration/2).easing(Easing.Circular.Out).onComplete(function(){u.start()}),u=new TWEEN.Tween(o).to({scale:0},duration/2).easing(Easing.Circular.Out).onComplete(function(){t=!1,a.onComplete(),e()});n();var l={resize:s,update:r,clear:n,start:a,playing:function(){return t},hash:"1,2",filename:"ufo"};return l}(),dotted_spiral=function(){function n(){_.each(s,m),u.rotation=Math.random()*TWO_PI,u.scale=1,w.to({rotation:u.rotation+Math.PI/8,scale:2*Math.random()+10},2*duration).stop(),t=!1}var t=!1,e=_.identity,i=120,o=min_dimension/i,a=4,r=min_dimension/2,s=_.map(_.range(i),function(n){var t=n/i,e=r*t,s=t*Math.PI*a,c=e*Math.cos(s),u=e*Math.sin(s);t=(n+.25)/i,e=r*t,s=t*Math.PI*a;var l=e*Math.cos(s),h=e*Math.sin(s),d=two.makeLine(c,u,l,h);return d.stroke=colors.black,d.linewidth=(1-Math.sqrt(1-t))*o,d.cap=d.join="round",d}),c=function(n,t){var e=t/i;n.linewidth=Math.sqrt(1-e)*o};s.reverse();var u=two.makeGroup(s);u.translation.set(center.x,center.y);var l=function(n,t){w.start(),!t&&y.sound&&y.sound.stop().play(),_.isFunction(n)&&(e=n)};l.onComplete=n;var h,d,f,p=function(){u.stroke=colors.black},g=function(){u.translation.set(center.x,center.y),o=min_dimension/i,_.each(s,c)},w=new TWEEN.Tween(u).onStart(function(){t=!0}).easing(Easing.Circular.In).to({rotation:Math.PI/8,scale:8},2*duration).onUpdate(function(n){for(d=Math.min(map(n,0,.25,0,1),1),f=Math.floor(d*i),h=0;f>h;h++)s[h].visible=!0}).onComplete(function(){l.onComplete(),e()}),m=function(n){n.visible=!1};n();var y={start:l,update:p,clear:n,resize:g,playing:function(){return t},hash:"0,9",filename:"dotted-spiral"};return y}(),clay=function(){function n(){s.visible=!1,impact=new Two.Vector(Math.random()*width,Math.random()*height);var n,t,c=8*Math.random();for(c>7?(n=center.x,t=0):c>6?(n=0,t=0):c>5?(n=0,t=center.y):c>4?(n=0,t=height):c>3?(n=center.x,t=height):c>2?(n=width,t=height):c>1?(n=width,t=center.y):(n=width,t=0),s.translation.set(n,t),v.ending=0,o=height,l=0;i>l;l++)u=r[l],pct=l/i,w=pct*TWO_PI,u.set(o*Math.cos(w),o*Math.sin(w)),g=angleBetween(u,impact)-w,h=u.distanceTo(impact),p=10*o/Math.sqrt(h),n=p*Math.cos(g)+u.x,t=p*Math.sin(g)+u.y,a[l].set(n,t);e=!1,E.stop()}var t=_.identity,e=!1,i=8*Math.floor(Math.random())+8,o=(width*Math.random(),height*Math.random(),height),a=(Math.PI/2,[]),r=_.map(_.range(i),function(n){var t=n/i,e=TWO_PI*t,r=o*Math.sin(e),s=o*Math.cos(e);return a.push(new Two.Vector(r,s)),new Two.Anchor(r,s)}),s=two.makeCurve(r);s.fill=colors.seafoam,s.noStroke(),r=s.vertices;var c=function(n,e){s.visible=!0,E.start(),!e&&M.sound&&M.sound.stop().play(),_.isFunction(n)&&(t=n)};c.onComplete=n;var u,l,h,d,f,p,g,w,m=function(){s.fill=colors.seafoam},y=function(){},v={ending:0},E=new TWEEN.Tween(v).to({ending:1},.75*duration).easing(Easing.Circular.In).onStart(function(){e=!0}).onUpdate(function(){var n=v.ending;for(l=0;i>l;l++)u=r[l],h=a[l],d=lerp(u.x,h.x,n),f=lerp(u.y,h.y,n),u.set(d,f)}).onComplete(function(){c.onComplete(),t()});n();var M={start:c,update:m,clear:n,resize:y,playing:function(){return e},hash:"0,1",filename:"clay"};return M}(),strike=function(){function n(){for(t=!1,c=Math.random(),r.linewidth=Math.round(7*c)+3,o=Math.round(map(c,0,1,.5*height,width)),u=Math.random()*TWO_PI,y.x=o*Math.cos(u),y.y=o*Math.sin(u),u+=Math.PI,v.x=o*Math.cos(u),v.y=o*Math.sin(u),r.ending=r.beginning=0,r.visible=!1,h=0;i>h;h++)d=a[h],l=h/(i-1),d.x=lerp(y.x,v.x,l),d.y=lerp(y.y,v.y,l);g.stop(),w.stop()}var t=!1,e=_.identity,i=32,o=.5*min_dimension,a=_.map(_.range(i),function(n){return new Two.Anchor}),r=two.makePolygon(a,!0);r.noFill().stroke=colors.black,r.translation.set(center.x,center.y),r.cap="round";var s=function(n,i){r.visible=!0,t=!0,g.start(),!i&&m.sound&&m.sound.stop().play(),_.isFunction(n)&&(e=n)};s.onComplete=n;var c,u,l,h,d,f=function(){r.translation.set(center.x,center.y)},p=function(){r.stroke=colors.black},g=new TWEEN.Tween(r).to({ending:1},.25*duration).easing(Easing.Circular.In).onComplete(function(){w.start()}),w=new TWEEN.Tween(r).to({beginning:1},.25*duration).easing(Easing.Circular.Out).onComplete(function(){s.onComplete(),e()}),m={start:s,update:p,clear:n,resize:f,playing:function(){return t},hash:"1,5",filename:"strike"},y={x:0,y:0},v={x:0,y:0};return n(),m}(),squiggle=function(){function n(){for(u.visible=!1,a=Math.round(6*Math.random())+1,s=Math.PI/2,u.rotation=Math.random()>.5?Math.PI:0,u.ending=u.beginning=0,h=0;i>h;h++)d=c[h],f=h/i,p=TWO_PI*a*f+s,g=map(f,0,1,-o/2,o/2),w=r*Math.sin(p),d.set(g,w);t=!1,v.stop(),E.stop()}var t=!1,e=_.identity,i=200,o=center.x,a=6,r=.33*height,s=.5*Math.PI,c=_.map(_.range(i),function(n){var t=n/i,e=TWO_PI*a*t+s,c=map(t,0,1,-o/2,o/2),u=r*Math.sin(e);return new Two.Anchor(c,u)}),u=two.makePolygon(c,!0);u.translation.set(center.x,center.y),u.stroke=colors.accent,u.linewidth=min_dimension/40,u.cap=u.join="round",u.noFill();var l=function(n,i){u.visible=!0,t=!0,v.start(),!i&&M.sound&&M.sound.stop().play(),_.isFunction(n)&&(e=n)};l.onComplete=n;var h,d,f,p,g,w,m=function(){u.stroke=colors.accent},y=function(){o=center.x,r=.33*height,u.linewidth=min_dimension/40,u.translation.set(center.x,center.y)},v=new TWEEN.Tween(u).to({ending:1},duration/2).easing(Easing.Sinusoidal.Out).onComplete(function(){E.start()}),E=new TWEEN.Tween(u).to({beginning:1},duration/2).easing(Easing.Sinusoidal.In).onComplete(function(){l.onComplete(),e()});n();var M={start:l,update:m,clear:n,resize:y,playing:function(){return t},hash:"0,7",filename:"squiggle"};return M}(),flash=function(){var n,t=!1,e=_.identity,i=two.makeRectangle(center.x,center.y,width,height);i.noStroke().fill=colors.white,i.visible=!1;var o=function(o,a){_.isUndefined(n)||(clearTimeout(n),n=void 0),t=!0,!a&&s.sound&&s.sound.stop().play(),n=setTimeout(function(){t=!1,e(),i.visible=!1},.25*duration),_.isFunction(o)&&(e=o)},a=function(){i.fill=colors.white},r=function(){var n=i.vertices;n[0].set(-center.x,-center.y),n[1].set(center.x,-center.y),n[2].set(center.x,center.y),n[3].set(-center.x,center.y),i.translation.copy(center)};two.bind("update",function(){t&&(i.visible=Math.random()>.5)});var s={start:o,update:a,clear:_.identity,resize:r,playing:function(){return t}};return s}(),pistons=function(){function n(){h.beginning=h.ending=0;var n=Math.random()>.5;for(n?(t=-s/2,e=s/2):(t=s/2,e=-s/2),i=0;r>i;i++)p=l[i],l.visible=!1,g=p.vertices,g[0].x=g[1].x=g[2].x=g[3].x=t;o=!1,y.stop(),v.stop()}var t,e,i=1,o=!1,a=_.identity,r=4*i+1,s=.75*width,c=center.y,u=two.makeGroup();u.translation.copy(center);var l=_.map(_.range(r),function(n){var t=c/r-c/(3*r),e=0,i=-c/2+(n+1)*(c/(r+1)),o=two.makeRectangle(e,i,s,t);return o.fill="#C695FA",o.noStroke(),u.add(o),o}),h={ending:0,beginning:0},d=function(n){n.visible=!0},f=function(n,t){_.each(l,d),y.start(),!t&&E.sound&&E.sound.stop().play(),_.isFunction(n)&&(a=n)};f.onComplete=n;var p,g,w=function(){for(i=0;r>i;i++)l[i].fill=colors.white},m=function(){s=.75*width,c=center.y,u.translation.copy(center)},y=new TWEEN.Tween(h).to({ending:1},.125*duration).easing(Easing.Sinusoidal.Out).onStart(function(){o=!0}).onUpdate(function(){for(i=0;r>i;i++)p=l[i],g=p.vertices,g[3].x=g[0].x=e*h.ending}).onComplete(function(){v.start()}),v=new TWEEN.Tween(h).to({beginning:1},.125*duration).easing(Easing.Sinusoidal.Out).onUpdate(function(){for(i=0;r>i;i++)p=l[i],g=p.vertices,g[1].x=g[2].x=e*h.beginning}).onComplete(function(){f.onComplete(),a()}),E={start:f,update:w,clear:n,resize:m,playing:function(){return o}};return n(),E}();