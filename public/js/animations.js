function angleBetween(n,t){var e=t.x-n.x,o=t.y-t.y;return Math.atan2(o,e)}function lerp(n,t,e){return(t-n)*e+n}var audienceShape=function(n,t){return function(){function e(){r.visible=!0,i=!1,p.stop(),h.stop()}var o=_.identity,i=!1,a=n;console.log(a);var r;switch(n=n||"star"){case"sqaure":r=two.makeRectangle(center.x,center.y,50,50);break;case"circle":r=two.makeCircle(center.x,center.y,25);break;case"triangle":r=two.makePolygon(center.x,center.y,25,3);break;case"star":r=two.makeStar(center.x,center.y,25,40,5)}middleGround.add(r);var s=t;r.fill=convertHex(s,50),r.stroke=convertHex(s,100),r.linewidth=5,r.visible=!0,r.scale=1;var c=Math.PI*Math.random()*10;console.log("Angle ",c);var l=Math.cos(c),u=Math.sin(c);console.log(l,u),l*=width,u*=width,l+=center.x,u+=center.y;var d=function(n,t){i=!0,r.visible=!0,p.start(),_.isFunction(n)&&(o=n)};d.onComplete=e;var f={x:l,y:u},p=new TWEEN.Tween(r.translation).to(f,4*duration).easing(Easing.Exponential.Out).onComplete(function(){h.start(),two.remove(r)}),h=new TWEEN.Tween(r).to({scale:0},1*duration).easing(Easing.Exponential.In).onComplete(function(){d.onComplete(),o()});e();var g={start:d,clear:e,playing:function(){return i}};return g}()},centerCircle=function(){function n(){l.scale=a,u.scale=r,s.visible=!0,e=!1,d.stop(),f.stop()}var t=_.identity,e=!1,o=.5,i=.5,a=o+i,r=o,s=two.makeCircle(center.x,center.y,200,200);s.fill="#FFF",s.noStroke(),s.visible=!0,s.scale=o;var c=function(n,c){console.log("Acceleration is ",acceleration);var l=acceleration/40*1.5;console.log("x is ",l),l>2&&(l=2),o>l&&(l=o),l>r?(a=l+i,r=l):r>l&&(a=a,r=l),console.log("x is ",l),console.log("pulseIn is ",a),console.log("pulseOut is ",r),e=!0,s.visible=!0,d.start(),_.isFunction(n)&&(t=n)};c.onComplete=n;var l={scale:a},u={scale:r},d=new TWEEN.Tween(s).to(l,.04*duration).easing(Easing.Exponential.Out).onComplete(function(){f.start()}),f=new TWEEN.Tween(s).to(u,.04*duration).easing(Easing.Exponential.In).onComplete(function(){c.onComplete(),t()});n();var p={start:c,clear:n,playing:function(){return e}};return p}(),veil=function(){function n(){a.visible=!1,e=!1,o=Math.random()>.5,o?(a.translation.set(center.x,-center.y),u.y=1.5*height):(a.translation.set(center.x,1.5*height),u.y=-center.y),l.y=center.y,d.stop(),f.stop()}var t=_.identity,e=!1,o=!0,i=[new Two.Anchor(-center.x,-center.y),new Two.Anchor(center.x,-center.y),new Two.Anchor(center.x,center.y),new Two.Anchor(-center.x,center.y)],a=two.makePolygon(i);a.fill="#EEE",a.noStroke();var r=function(n,o){e=!0,a.visible=!0,d.start(),!o&&p.sound&&p.sound.stop().play(),_.isFunction(n)&&(t=n)};r.onComplete=n;var s=function(){a.fill="#EEE"},c=function(){i[0].set(-center.x,-center.y),i[1].set(center.x,-center.y),i[2].set(center.x,center.y),i[3].set(-center.x,center.y)},l={y:center.y},u={y:0},d=new TWEEN.Tween(a.translation).to(l,.5*duration).easing(Easing.Exponential.Out).onComplete(function(){f.start()}),f=new TWEEN.Tween(a.translation).to(u,.5*duration).easing(Easing.Exponential.In).onComplete(function(){r.onComplete(),t()});n();var p={start:r,update:s,resize:c,clear:n,playing:function(){return e},hash:"1,1",filename:"veil"};return p}(),ufo=function(){function n(){i.visible=!1;var n=Math.random()>.5,t=Math.random()>.5;n?i.translation.x=.75*width:i.translation.x=.25*width,t?i.origin=i.translation.y=-center.y:i.origin=i.translation.y=1.5*height,i.destination.y=center.y,i.scale=1,c.stop(),l.stop()}var t=!1,e=_.identity,o=.25*min_dimension,i=two.makeCircle(0,0,o);i.noStroke().fill="#6ECCFA";var a=function(n,o){t=!0,c.start(),i.visible=!0,!o&&u.sound&&u.sound.stop().play(),_.isFunction(n)&&(e=n)};a.onComplete=n;var r=function(){i.fill="#6ECCFA"},s=function(){o=.25*min_dimension};i.destination={y:center.y};var c=new TWEEN.Tween(i.translation).to(i.destination,duration/2).easing(Easing.Circular.Out).onComplete(function(){l.start()}),l=new TWEEN.Tween(i).to({scale:0},duration/2).easing(Easing.Circular.Out).onComplete(function(){t=!1,a.onComplete(),e()});n();var u={resize:s,update:r,clear:n,start:a,playing:function(){return t},hash:"1,2",filename:"ufo"};return u}(),dotted_spiral=function(){function n(){_.each(s,v),l.rotation=Math.random()*TWO_PI,l.scale=1,m.to({rotation:l.rotation+Math.PI/8,scale:2*Math.random()+10},2*duration).stop(),t=!1}var t=!1,e=_.identity,o=120,i=min_dimension/o,a=4,r=min_dimension/2,s=_.map(_.range(o),function(n){var t=n/o,e=r*t,s=t*Math.PI*a,c=e*Math.cos(s),l=e*Math.sin(s);t=(n+.25)/o,e=r*t,s=t*Math.PI*a;var u=e*Math.cos(s),d=e*Math.sin(s),f=two.makeLine(c,l,u,d);return f.stroke=_colors.black,f.linewidth=(1-Math.sqrt(1-t))*i,f.cap=f.join="round",f}),c=function(n,t){var e=t/o;n.linewidth=Math.sqrt(1-e)*i};s.reverse();var l=two.makeGroup(s);l.translation.set(center.x,center.y);var u=function(n,t){m.start(),!t&&y.sound&&y.sound.stop().play(),_.isFunction(n)&&(e=n)};u.onComplete=n;var d,f,p,h=function(){l.stroke=_colors.black},g=function(){l.translation.set(center.x,center.y),i=min_dimension/o,_.each(s,c)},m=new TWEEN.Tween(l).onStart(function(){t=!0}).easing(Easing.Circular.In).to({rotation:Math.PI/8,scale:8},2*duration).onUpdate(function(n){for(f=Math.min(map(n,0,.25,0,1),1),p=Math.floor(f*o),d=0;p>d;d++)s[d].visible=!0}).onComplete(function(){u.onComplete(),e()}),v=function(n){n.visible=!1};n();var y={start:u,update:h,clear:n,resize:g,playing:function(){return t},hash:"0,9",filename:"dotted-spiral"};return y}(),clay=function(){function n(){s.visible=!1,impact=new Two.Vector(Math.random()*width,Math.random()*height);var n,t,c=8*Math.random();for(c>7?(n=center.x,t=0):c>6?(n=0,t=0):c>5?(n=0,t=center.y):c>4?(n=0,t=height):c>3?(n=center.x,t=height):c>2?(n=width,t=height):c>1?(n=width,t=center.y):(n=width,t=0),s.translation.set(n,t),w.ending=0,i=height,u=0;o>u;u++)l=r[u],pct=u/o,m=pct*TWO_PI,l.set(i*Math.cos(m),i*Math.sin(m)),g=angleBetween(l,impact)-m,d=l.distanceTo(impact),h=10*i/Math.sqrt(d),n=h*Math.cos(g)+l.x,t=h*Math.sin(g)+l.y,a[u].set(n,t);e=!1,x.stop()}var t=_.identity,e=!1,o=8*Math.floor(Math.random())+8,i=(width*Math.random(),height*Math.random(),height),a=(Math.PI/2,[]),r=_.map(_.range(o),function(n){var t=n/o,e=TWO_PI*t,r=i*Math.sin(e),s=i*Math.cos(e);return a.push(new Two.Vector(r,s)),new Two.Anchor(r,s)}),s=two.makeCurve(r);s.fill=_colors.seafoam,s.noStroke(),r=s.vertices;var c=function(n,e){s.visible=!0,x.start(),!e&&E.sound&&E.sound.stop().play(),_.isFunction(n)&&(t=n)};c.onComplete=n;var l,u,d,f,p,h,g,m,v=function(){s.fill=_colors.seafoam},y=function(){},w={ending:0},x=new TWEEN.Tween(w).to({ending:1},.75*duration).easing(Easing.Circular.In).onStart(function(){e=!0}).onUpdate(function(){var n=w.ending;for(u=0;o>u;u++)l=r[u],d=a[u],f=lerp(l.x,d.x,n),p=lerp(l.y,d.y,n),l.set(f,p)}).onComplete(function(){c.onComplete(),t()});n();var E={start:c,update:v,clear:n,resize:y,playing:function(){return e},hash:"0,1",filename:"clay"};return E}(),strike=function(){function n(){for(t=!1,c=Math.random(),r.linewidth=Math.round(7*c)+3,i=Math.round(map(c,0,1,.5*height,width)),l=Math.random()*TWO_PI,y.x=i*Math.cos(l),y.y=i*Math.sin(l),l+=Math.PI,w.x=i*Math.cos(l),w.y=i*Math.sin(l),r.ending=r.beginning=0,r.visible=!1,d=0;o>d;d++)f=a[d],u=d/(o-1),f.x=lerp(y.x,w.x,u),f.y=lerp(y.y,w.y,u);g.stop(),m.stop()}var t=!1,e=_.identity,o=32,i=.5*min_dimension,a=_.map(_.range(o),function(n){return new Two.Anchor}),r=two.makePolygon(a,!0);r.noFill().stroke=_colors.black,r.translation.set(center.x,center.y),r.cap="round";var s=function(n,o){r.visible=!0,t=!0,g.start(),!o&&v.sound&&v.sound.stop().play(),_.isFunction(n)&&(e=n)};s.onComplete=n;var c,l,u,d,f,p=function(){r.translation.set(center.x,center.y)},h=function(){r.stroke=_colors.black},g=new TWEEN.Tween(r).to({ending:1},.25*duration).easing(Easing.Circular.In).onComplete(function(){console.log("End of in"),m.start()}),m=new TWEEN.Tween(r).to({beginning:1},.25*duration).easing(Easing.Circular.Out).onComplete(function(){console.log("End of out"),s.onComplete(),e()}),v={start:s,update:h,clear:n,resize:p,playing:function(){return t},hash:"1,5",filename:"strike"},y={x:0,y:0},w={x:0,y:0};return n(),v}(),squiggle=function(){function n(){for(l.visible=!1,a=Math.round(6*Math.random())+1,s=Math.PI/2,l.rotation=Math.random()>.5?Math.PI:0,l.ending=l.beginning=0,d=0;o>d;d++)f=c[d],p=d/o,h=TWO_PI*a*p+s,g=map(p,0,1,-i/2,i/2),m=r*Math.sin(h),f.set(g,m);t=!1,w.stop(),x.stop()}var t=!1,e=_.identity,o=200,i=center.x,a=6,r=.33*height,s=.5*Math.PI,c=_.map(_.range(o),function(n){var t=n/o,e=TWO_PI*a*t+s,c=map(t,0,1,-i/2,i/2),l=r*Math.sin(e);return new Two.Anchor(c,l)}),l=two.makePolygon(c,!0);l.translation.set(center.x,center.y),l.stroke=_colors.accent,l.linewidth=min_dimension/40,l.cap=l.join="round",l.noFill();var u=function(n,o){l.visible=!0,t=!0,w.start(),!o&&E.sound&&E.sound.stop().play(),_.isFunction(n)&&(e=n)};u.onComplete=n;var d,f,p,h,g,m,v=function(){l.stroke=_colors.accent},y=function(){i=center.x,r=.33*height,l.linewidth=min_dimension/40,l.translation.set(center.x,center.y)},w=new TWEEN.Tween(l).to({ending:1},duration/2).easing(Easing.Sinusoidal.Out).onComplete(function(){x.start()}),x=new TWEEN.Tween(l).to({beginning:1},duration/2).easing(Easing.Sinusoidal.In).onComplete(function(){u.onComplete(),e()});n();var E={start:u,update:v,clear:n,resize:y,playing:function(){return t},hash:"0,7",filename:"squiggle"};return E}(),flash=function(){var n,t=!1,e=_.identity,o=two.makeRectangle(center.x,center.y,width,height);o.noStroke().fill=_colors.white,o.visible=!1;var i=function(i,a){_.isUndefined(n)||(clearTimeout(n),n=void 0),t=!0,!a&&s.sound&&s.sound.stop().play(),n=setTimeout(function(){t=!1,e(),o.visible=!1},.25*duration),_.isFunction(i)&&(e=i)},a=function(){o.fill=_colors.white},r=function(){var n=o.vertices;n[0].set(-center.x,-center.y),n[1].set(center.x,-center.y),n[2].set(center.x,center.y),n[3].set(-center.x,center.y),o.translation.copy(center)};two.bind("update",function(){t&&(o.visible=Math.random()>.5)});var s={start:i,update:a,clear:_.identity,resize:r,playing:function(){return t}};return s}(),pistons=function(){function n(){d.beginning=d.ending=0;var n=Math.random()>.5;for(n?(t=-s/2,e=s/2):(t=s/2,e=-s/2),o=0;r>o;o++)h=u[o],u.visible=!1,g=h.vertices,g[0].x=g[1].x=g[2].x=g[3].x=t;i=!1,y.stop(),w.stop()}var t,e,o=1,i=!1,a=_.identity,r=4*o+1,s=.75*width,c=center.y,l=two.makeGroup();l.translation.copy(center);var u=_.map(_.range(r),function(n){var t=c/r-c/(3*r),e=0,o=-c/2+(n+1)*(c/(r+1)),i=two.makeRectangle(e,o,s,t);return i.fill="#C695FA",i.noStroke(),l.add(i),i}),d={ending:0,beginning:0},f=function(n){n.visible=!0},p=function(n,t){_.each(u,f),y.start(),!t&&x.sound&&x.sound.stop().play(),_.isFunction(n)&&(a=n)};p.onComplete=n;var h,g,m=function(){for(o=0;r>o;o++)u[o].fill=_colors.white},v=function(){s=.75*width,c=center.y,l.translation.copy(center)},y=new TWEEN.Tween(d).to({ending:1},.125*duration).easing(Easing.Sinusoidal.Out).onStart(function(){i=!0}).onUpdate(function(){for(o=0;r>o;o++)h=u[o],g=h.vertices,g[3].x=g[0].x=e*d.ending}).onComplete(function(){w.start()}),w=new TWEEN.Tween(d).to({beginning:1},.125*duration).easing(Easing.Sinusoidal.Out).onUpdate(function(){for(o=0;r>o;o++)h=u[o],g=h.vertices,g[1].x=g[2].x=e*d.beginning}).onComplete(function(){p.onComplete(),a()}),x={start:p,update:m,clear:n,resize:v,playing:function(){return i}};return n(),x}(),pistons=function(){function n(){d.beginning=d.ending=0;var n=Math.random()>.5;for(n?(t=-s/2,e=s/2):(t=s/2,e=-s/2),o=0;r>o;o++)h=u[o],u.visible=!1,g=h.vertices,g[0].x=g[1].x=g[2].x=g[3].x=t;i=!1,y.stop(),w.stop()}var t,e,o=1,i=!1,a=_.identity,r=4*o+1,s=.75*width,c=center.y,l=two.makeGroup();l.translation.copy(center);var u=_.map(_.range(r),function(n){var t=c/r-c/(3*r),e=0,o=-c/2+(n+1)*(c/(r+1)),i=two.makeRectangle(e,o,s,t);return i.fill="#C695FA",i.noStroke(),l.add(i),i}),d={ending:0,beginning:0},f=function(n){n.visible=!0},p=function(n,t){_.each(u,f),y.start(),!t&&x.sound&&x.sound.stop().play(),_.isFunction(n)&&(a=n)};p.onComplete=n;var h,g,m=function(){for(o=0;r>o;o++)u[o].fill=_colors.white},v=function(){s=.75*width,c=center.y,l.translation.copy(center)},y=new TWEEN.Tween(d).to({ending:1},.125*duration).easing(Easing.Sinusoidal.Out).onStart(function(){i=!0}).onUpdate(function(){for(o=0;r>o;o++)h=u[o],g=h.vertices,g[3].x=g[0].x=e*d.ending}).onComplete(function(){w.start()}),w=new TWEEN.Tween(d).to({beginning:1},.125*duration).easing(Easing.Sinusoidal.Out).onUpdate(function(){for(o=0;r>o;o++)h=u[o],g=h.vertices,g[1].x=g[2].x=e*d.beginning}).onComplete(function(){p.onComplete(),a()}),x={start:p,update:m,clear:n,resize:v,playing:function(){return i}};return n(),x}();