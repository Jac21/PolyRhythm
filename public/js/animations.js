function angleBetween(n,t){var e=t.x-n.x,i=t.y-t.y;return Math.atan2(i,e)}function lerp(n,t,e){return(t-n)*e+n}var audienceShape=function(n,t){return function(){function e(){r.visible=!0,o=!1,f.stop(),g.stop()}var i=_.identity,o=!1,a=n;console.log(a);var r;switch(n=n||"star"){case"sqaure":r=two.makeRectangle(center.x,center.y,50,50);break;case"circle":r=two.makeCircle(center.x,center.y,25);break;case"triangle":r=two.makePolygon(center.x,center.y,25,3);break;case"star":r=two.makeStar(center.x,center.y,25,40,5)}middleGround.add(r);var c=t;r.fill=convertHex(c,50),r.stroke=convertHex(c,100),r.linewidth=5,r.visible=!0,r.scale=1;var s=Math.PI*Math.random()*10;console.log("Angle ",s);var l=Math.cos(s),u=Math.sin(s);console.log(l,u),l*=width,u*=width,l+=center.x,u+=center.y;var d=function(n,t){o=!0,r.visible=!0,f.start(),_.isFunction(n)&&(i=n)};d.onComplete=e;var p={x:l,y:u},f=new TWEEN.Tween(r.translation).to(p,4*duration).easing(Easing.Exponential.Out).onComplete(function(){g.start(),two.remove(r)}),g=new TWEEN.Tween(r).to({scale:0},1*duration).easing(Easing.Exponential.In).onComplete(function(){d.onComplete(),i()});e();var h={start:d,clear:e,playing:function(){return o}};return h}()},centerCircle=function(){function n(){l.scale=a,u.scale=r,c.visible=!0,e=!1,d.stop(),p.stop()}var t=_.identity,e=!1,i=.5,o=.5,a=i+o,r=i,c=two.makeCircle(center.x,center.y,200,200);c.fill="#FFF",c.noStroke(),c.visible=!0,c.scale=i;var s=function(n,s){console.log("Acceleration is ",acceleration);var l=acceleration/40*1.5;console.log("x is ",l),l>2&&(l=2),i>l&&(l=i),l>r?(a=l+o,r=l):r>l&&(a=a,r=l),console.log("x is ",l),console.log("pulseIn is ",a),console.log("pulseOut is ",r),e=!0,c.visible=!0,d.start(),_.isFunction(n)&&(t=n)};s.onComplete=n;var l={scale:a},u={scale:r},d=new TWEEN.Tween(c).to(l,.04*duration).easing(Easing.Exponential.Out).onComplete(function(){p.start()}),p=new TWEEN.Tween(c).to(u,.04*duration).easing(Easing.Exponential.In).onComplete(function(){s.onComplete(),t()});n();var f={start:s,clear:n,playing:function(){return e}};return f}(),veil=function(){function n(){a.visible=!1,e=!1,i=Math.random()>.5,i?(a.translation.set(center.x,-center.y),u.y=1.5*height):(a.translation.set(center.x,1.5*height),u.y=-center.y),l.y=center.y,d.stop(),p.stop()}var t=_.identity,e=!1,i=!0,o=[new Two.Anchor(-center.x,-center.y),new Two.Anchor(center.x,-center.y),new Two.Anchor(center.x,center.y),new Two.Anchor(-center.x,center.y)],a=two.makePolygon(o);a.fill="#EEE",a.noStroke();var r=function(n,i){e=!0,a.visible=!0,d.start(),!i&&f.sound&&f.sound.stop().play(),_.isFunction(n)&&(t=n)};r.onComplete=n;var c=function(){a.fill="#EEE"},s=function(){o[0].set(-center.x,-center.y),o[1].set(center.x,-center.y),o[2].set(center.x,center.y),o[3].set(-center.x,center.y)},l={y:center.y},u={y:0},d=new TWEEN.Tween(a.translation).to(l,.5*duration).easing(Easing.Exponential.Out).onComplete(function(){p.start()}),p=new TWEEN.Tween(a.translation).to(u,.5*duration).easing(Easing.Exponential.In).onComplete(function(){r.onComplete(),t()});n();var f={start:r,update:c,resize:s,clear:n,playing:function(){return e},hash:"1,1",filename:"veil"};return f}(),ufo=function(){function n(){o.visible=!1;var n=Math.random()>.5,t=Math.random()>.5;n?o.translation.x=.75*width:o.translation.x=.25*width,t?o.origin=o.translation.y=-center.y:o.origin=o.translation.y=1.5*height,o.destination.y=center.y,o.scale=1,s.stop(),l.stop()}var t=!1,e=_.identity,i=.25*min_dimension,o=two.makeCircle(0,0,i);o.noStroke().fill="#6ECCFA";var a=function(n,i){t=!0,s.start(),o.visible=!0,!i&&u.sound&&u.sound.stop().play(),_.isFunction(n)&&(e=n)};a.onComplete=n;var r=function(){o.fill="#6ECCFA"},c=function(){i=.25*min_dimension};o.destination={y:center.y};var s=new TWEEN.Tween(o.translation).to(o.destination,duration/2).easing(Easing.Circular.Out).onComplete(function(){l.start()}),l=new TWEEN.Tween(o).to({scale:0},duration/2).easing(Easing.Circular.Out).onComplete(function(){t=!1,a.onComplete(),e()});n();var u={resize:c,update:r,clear:n,start:a,playing:function(){return t},hash:"1,2",filename:"ufo"};return u}(),dotted_spiral=function(){function n(){_.each(c,v),l.rotation=Math.random()*TWO_PI,l.scale=1,m.to({rotation:l.rotation+Math.PI/8,scale:2*Math.random()+10},2*duration).stop(),t=!1}var t=!1,e=_.identity,i=120,o=min_dimension/i,a=4,r=min_dimension/2,c=_.map(_.range(i),function(n){var t=n/i,e=r*t,c=t*Math.PI*a,s=e*Math.cos(c),l=e*Math.sin(c);t=(n+.25)/i,e=r*t,c=t*Math.PI*a;var u=e*Math.cos(c),d=e*Math.sin(c),p=two.makeLine(s,l,u,d);return p.stroke=currentPallette[rand(0,currentPallette.length)],p.linewidth=(1-Math.sqrt(1-t))*o,p.cap=p.join="round",p}),s=function(n,t){var e=t/i;n.linewidth=Math.sqrt(1-e)*o};c.reverse();var l=two.makeGroup(c);l.translation.set(center.x,center.y);var u=function(n,t){m.start(),!t&&y.sound&&y.sound.stop().play(),_.isFunction(n)&&(e=n)};u.onComplete=n;var d,p,f,g=function(){l.stroke=currentPallette[rand(0,currentPallette.length)]},h=function(){l.translation.set(center.x,center.y),o=min_dimension/i,_.each(c,s)},m=new TWEEN.Tween(l).onStart(function(){t=!0}).easing(Easing.Circular.In).to({rotation:Math.PI/8,scale:8},2*duration).onUpdate(function(n){for(p=Math.min(map(n,0,.25,0,1),1),f=Math.floor(p*i),d=0;f>d;d++)c[d].visible=!0}).onComplete(function(){u.onComplete(),e()}),v=function(n){n.visible=!1};n();var y={start:u,update:g,clear:n,resize:h,playing:function(){return t},hash:"0,9",filename:"dotted-spiral"};return y}(),clay=function(){function n(){c.visible=!1,impact=new Two.Vector(Math.random()*width,Math.random()*height);var n,t,s=8*Math.random();for(s>7?(n=center.x,t=0):s>6?(n=0,t=0):s>5?(n=0,t=center.y):s>4?(n=0,t=height):s>3?(n=center.x,t=height):s>2?(n=width,t=height):s>1?(n=width,t=center.y):(n=width,t=0),c.translation.set(n,t),w.ending=0,o=height,u=0;i>u;u++)l=r[u],pct=u/i,m=pct*TWO_PI,l.set(o*Math.cos(m),o*Math.sin(m)),h=angleBetween(l,impact)-m,d=l.distanceTo(impact),g=10*o/Math.sqrt(d),n=g*Math.cos(h)+l.x,t=g*Math.sin(h)+l.y,a[u].set(n,t);e=!1,x.stop()}var t=_.identity,e=!1,i=8*Math.floor(Math.random())+8,o=(width*Math.random(),height*Math.random(),height),a=(Math.PI/2,[]),r=_.map(_.range(i),function(n){var t=n/i,e=TWO_PI*t,r=o*Math.sin(e),c=o*Math.cos(e);return a.push(new Two.Vector(r,c)),new Two.Anchor(r,c)}),c=two.makeCurve(r);c.fill=currentPallette[1],c.noStroke(),r=c.vertices;var s=function(n,e){c.visible=!0,x.start(),!e&&E.sound&&E.sound.stop().play(),_.isFunction(n)&&(t=n)};s.onComplete=n;var l,u,d,p,f,g,h,m,v=function(){c.fill=currentPallette[1]},y=function(){},w={ending:0},x=new TWEEN.Tween(w).to({ending:1},.75*duration).easing(Easing.Circular.In).onStart(function(){e=!0}).onUpdate(function(){var n=w.ending;for(u=0;i>u;u++)l=r[u],d=a[u],p=lerp(l.x,d.x,n),f=lerp(l.y,d.y,n),l.set(p,f)}).onComplete(function(){s.onComplete(),t()});n();var E={start:s,update:v,clear:n,resize:y,playing:function(){return e},hash:"0,1",filename:"clay"};return E}(),strike=function(){function n(){for(t=!1,s=Math.random(),r.linewidth=Math.round(7*s)+3,o=Math.round(map(s,0,1,.5*height,width)),l=Math.random()*TWO_PI,y.x=o*Math.cos(l),y.y=o*Math.sin(l),l+=Math.PI,w.x=o*Math.cos(l),w.y=o*Math.sin(l),r.ending=r.beginning=0,r.visible=!1,d=0;i>d;d++)p=a[d],u=d/(i-1),p.x=lerp(y.x,w.x,u),p.y=lerp(y.y,w.y,u);h.stop(),m.stop()}var t=!1,e=_.identity,i=32,o=.5*min_dimension,a=_.map(_.range(i),function(n){return new Two.Anchor}),r=two.makePolygon(a,!0);r.noFill().stroke=currentPallette[2],r.translation.set(center.x,center.y),r.cap="round";var c=function(n,i){r.visible=!0,t=!0,h.start(),!i&&v.sound&&v.sound.stop().play(),_.isFunction(n)&&(e=n)};c.onComplete=n;var s,l,u,d,p,f=function(){r.translation.set(center.x,center.y)},g=function(){r.stroke=currentPallette[2]},h=new TWEEN.Tween(r).to({ending:1},.25*duration).easing(Easing.Circular.In).onComplete(function(){console.log("End of in"),m.start()}),m=new TWEEN.Tween(r).to({beginning:1},.25*duration).easing(Easing.Circular.Out).onComplete(function(){console.log("End of out"),c.onComplete(),e()}),v={start:c,update:g,clear:n,resize:f,playing:function(){return t},hash:"1,5",filename:"strike"},y={x:0,y:0},w={x:0,y:0};return n(),v}(),squiggle=function(){function n(){for(l.visible=!1,a=Math.round(6*Math.random())+1,c=Math.PI/2,l.rotation=Math.random()>.5?Math.PI:0,l.ending=l.beginning=0,d=0;i>d;d++)p=s[d],f=d/i,g=TWO_PI*a*f+c,h=map(f,0,1,-o/2,o/2),m=r*Math.sin(g),p.set(h,m);t=!1,w.stop(),x.stop()}var t=!1,e=_.identity,i=200,o=center.x,a=6,r=.33*height,c=.5*Math.PI,s=_.map(_.range(i),function(n){var t=n/i,e=TWO_PI*a*t+c,s=map(t,0,1,-o/2,o/2),l=r*Math.sin(e);return new Two.Anchor(s,l)}),l=two.makePolygon(s,!0);l.translation.set(center.x,center.y),l.stroke=currentPallette[1],l.linewidth=min_dimension/40,l.cap=l.join="round",l.noFill();var u=function(n,i){l.visible=!0,t=!0,w.start(),!i&&E.sound&&E.sound.stop().play(),_.isFunction(n)&&(e=n)};u.onComplete=n;var d,p,f,g,h,m,v=function(){l.stroke=currentPallette[1]},y=function(){o=center.x,r=.33*height,l.linewidth=min_dimension/40,l.translation.set(center.x,center.y)},w=new TWEEN.Tween(l).to({ending:1},duration/2).easing(Easing.Sinusoidal.Out).onComplete(function(){x.start()}),x=new TWEEN.Tween(l).to({beginning:1},duration/2).easing(Easing.Sinusoidal.In).onComplete(function(){u.onComplete(),e()});n();var E={start:u,update:v,clear:n,resize:y,playing:function(){return t},hash:"0,7",filename:"squiggle"};return E}(),flash=function(){var n,t=!1,e=_.identity,i=two.makeRectangle(center.x,center.y,width,height);i.noStroke().fill=currentPallette[0],i.visible=!1;var o=function(o,a){_.isUndefined(n)||(clearTimeout(n),n=void 0),t=!0,!a&&c.sound&&c.sound.stop().play(),n=setTimeout(function(){t=!1,e(),i.visible=!1},.25*duration),_.isFunction(o)&&(e=o)},a=function(){i.fill=currentPallette[0]},r=function(){var n=i.vertices;n[0].set(-center.x,-center.y),n[1].set(center.x,-center.y),n[2].set(center.x,center.y),n[3].set(-center.x,center.y),i.translation.copy(center)};two.bind("update",function(){t&&(i.visible=Math.random()>.5)});var c={start:o,update:a,clear:_.identity,resize:r,playing:function(){return t}};return c}(),pistons=function(){function n(){d.beginning=d.ending=0;var n=Math.random()>.5;for(n?(t=-c/2,e=c/2):(t=c/2,e=-c/2),i=0;r>i;i++)g=u[i],u.visible=!1,h=g.vertices,h[0].x=h[1].x=h[2].x=h[3].x=t;o=!1,y.stop(),w.stop()}var t,e,i=1,o=!1,a=_.identity,r=4*i+1,c=.75*width,s=center.y,l=two.makeGroup();l.translation.copy(center);var u=_.map(_.range(r),function(n){var t=s/r-s/(3*r),e=0,i=-s/2+(n+1)*(s/(r+1)),o=two.makeRectangle(e,i,c,t);return o.fill="#C695FA",o.noStroke(),l.add(o),o}),d={ending:0,beginning:0},p=function(n){n.visible=!0},f=function(n,t){_.each(u,p),y.start(),!t&&x.sound&&x.sound.stop().play(),_.isFunction(n)&&(a=n)};f.onComplete=n;var g,h,m=function(){for(i=0;r>i;i++)u[i].fill=currentPallette[0]},v=function(){c=.75*width,s=center.y,l.translation.copy(center)},y=new TWEEN.Tween(d).to({ending:1},.125*duration).easing(Easing.Sinusoidal.Out).onStart(function(){o=!0}).onUpdate(function(){for(i=0;r>i;i++)g=u[i],h=g.vertices,h[3].x=h[0].x=e*d.ending}).onComplete(function(){w.start()}),w=new TWEEN.Tween(d).to({beginning:1},.125*duration).easing(Easing.Sinusoidal.Out).onUpdate(function(){for(i=0;r>i;i++)g=u[i],h=g.vertices,h[1].x=h[2].x=e*d.beginning}).onComplete(function(){f.onComplete(),a()}),x={start:f,update:m,clear:n,resize:v,playing:function(){return o}};return n(),x}(),pistons=function(){function n(){d.beginning=d.ending=0;var n=Math.random()>.5;for(n?(t=-c/2,e=c/2):(t=c/2,e=-c/2),i=0;r>i;i++)g=u[i],u.visible=!1,h=g.vertices,h[0].x=h[1].x=h[2].x=h[3].x=t;o=!1,y.stop(),w.stop()}var t,e,i=1,o=!1,a=_.identity,r=4*i+1,c=.75*width,s=center.y,l=two.makeGroup();l.translation.copy(center);var u=_.map(_.range(r),function(n){var t=s/r-s/(3*r),e=0,i=-s/2+(n+1)*(s/(r+1)),o=two.makeRectangle(e,i,c,t);return o.fill="#C695FA",o.noStroke(),l.add(o),o}),d={ending:0,beginning:0},p=function(n){n.visible=!0},f=function(n,t){_.each(u,p),y.start(),!t&&x.sound&&x.sound.stop().play(),_.isFunction(n)&&(a=n)};f.onComplete=n;var g,h,m=function(){for(i=0;r>i;i++)u[i].fill=currentPallette[rand(0,currentPallette.length)]},v=function(){c=.75*width,s=center.y,l.translation.copy(center)},y=new TWEEN.Tween(d).to({ending:1},.125*duration).easing(Easing.Sinusoidal.Out).onStart(function(){o=!0}).onUpdate(function(){for(i=0;r>i;i++)g=u[i],h=g.vertices,h[3].x=h[0].x=e*d.ending}).onComplete(function(){w.start()}),w=new TWEEN.Tween(d).to({beginning:1},.125*duration).easing(Easing.Sinusoidal.Out).onUpdate(function(){for(i=0;r>i;i++)g=u[i],h=g.vertices,h[1].x=h[2].x=e*d.beginning}).onComplete(function(){f.onComplete(),a()}),x={start:f,update:m,clear:n,resize:v,playing:function(){return o}};return n(),x}();