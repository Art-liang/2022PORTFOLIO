(function(a){a.fn.superfish=function(j){var e=a.fn.superfish,g=e.c,d=a(['<span class="',g.arrowClass,'"> &#187;</span>'].join("")),h=function(){var l=a(this),i=k(l);clearTimeout(i.sfTimer);l.showSuperfishUl().siblings().hideSuperfishUl()},f=function(){var n=a(this),m=k(n),l=e.op;clearTimeout(m.sfTimer);m.sfTimer=setTimeout(function(){l.retainPath=a.inArray(n[0],l.$path)>-1;n.hideSuperfishUl();if(l.$path.length&&n.parents(["li.",l.hoverClass].join("")).length<1){h.call(l.$path)}},l.delay)},k=function(i){var l=i.parents(["ul.",g.menuClass,":first"].join(""))[0];e.op=e.o[l.serial];return l},c=function(i){i.addClass(g.anchorClass).append(d.clone())};return this.each(function(){var m=this.serial=e.o.length;var n=a.extend({},e.defaults,j);n.$path=a("li."+n.pathClass,this).slice(0,n.pathLevels).each(function(){a(this).addClass([n.hoverClass,g.bcClass].join(" ")).filter("li:has(ul)").removeClass(n.pathClass)});e.o[m]=e.op=n;a("li:has(ul)",this)[a.fn.hoverIntent&&!n.disableHI?"hoverIntent":"hover"](h,f).each(function(){if(n.autoArrows){c(a(">a:first-child",this))}}).not("."+g.bcClass).hideSuperfishUl();var l=a("a",this);l.each(function(i){var o=l.eq(i).parents("li");l.eq(i).focus(function(){h.call(o)}).blur(function(){f.call(o)})});n.onInit.call(this)}).each(function(){var i=[g.menuClass];if(e.op.dropShadows&&!(a.browser.msie&&a.browser.version<7)){i.push(g.shadowClass)}a(this).addClass(i.join(" "))})};var b=a.fn.superfish;b.o=[];b.op={};b.IE7fix=function(){var c=b.op;if(a.browser.msie&&a.browser.version>6&&c.dropShadows&&c.animation.opacity!=undefined){this.toggleClass(b.c.shadowClass+"-off")}};b.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator",shadowClass:"sf-shadow"};b.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},speed:"normal",autoArrows:true,dropShadows:true,disableHI:false,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}};a.fn.extend({hideSuperfishUl:function(){var d=b.op,e=d.retainPath===true?d.$path:"";d.retainPath=false;var c=a(["li.",d.hoverClass].join(""),this).add(this).not(e).removeClass(d.hoverClass).find(">ul").hide().css("visibility","hidden");d.onHide.call(c);return this},showSuperfishUl:function(){var c=b.op,d=b.c.shadowClass+"-off",f=this.addClass(c.hoverClass).find(">ul:hidden").css("visibility","visible");b.IE7fix.call(f);c.onBeforeShow.call(f);f.animate(c.animation,c.speed,function(){b.IE7fix.call(f);c.onShow.call(f)});return this}})})(jQuery);