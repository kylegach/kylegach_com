var Tween = TweenLite;
var Timeline = TimelineMax;


var svg = document.getElementById('aBrandNewWayOfDoingThings');
var rectIds = ['layout-1', 'layout-2', 'layout-3', 'layout-4', 'layout-5', 'layout-6', 'container-1', 'container-2', 'container-3', 'widget-title', 'widget-text-1', 'widget-text-2', 'widget-text-3', 'widget-text-4', 'widget-text-5', 'widget-text-6', 'widget-text-7', 'widget-text-8', 'widget-text-9', 'widget-text-10', 'widget-text-11'];
var layout = document.getElementById('layout');
var container = document.getElementById('container');
var widget = document.getElementById('widget');
var layouts = document.getElementsByClassName('layout');
var containers = document.getElementsByClassName('container');
var widgets = document.getElementsByClassName('widget');
var widgetCol1 = document.getElementById('widget-col1');
var widgetCol2 = document.getElementById('widget-col2');

var rects = [];

function initRects() {
	for( var i=0; i<rectIds.length; i++ ) {
		var el = document.getElementById(rectIds[i]);
		rects[i] = el;

		var w = el.getAttribute('width');
		var h = el.getAttribute('height');
		var l = (w*2)+(h*2);

		el.dasharray = l + ' ' + l;
		el.dashoffset = l;

		setUpStyle(el);
	}
}

function setUpRects() {
	for( var i=0; i<rectIds.length; i++ ) {
		setUpStyle(rects[i]);
	}
}

function setUpStyle(el) {
	el.style.strokeDasharray = el.dasharray;
	el.style.strokeDashoffset = el.dashoffset;

	el.getBoundingClientRect();
}


initRects();


var instant = 0.01;
var fast = 0.75;
var normal = 1;
var slow = 2;
var vslow = 4;

var fadeLayouts = Tween.to(layouts, normal, { opacity: '0.333' });
var fadeContainers = Tween.to(containers, normal, { opacity: '0.333' });
var fadeWidgets = Tween.to(widgets, normal, { opacity: '0.333' });

var fadeContainersIn = Tween.to(containers, normal, { opacity: '1' });
var fadeWidgetsIn = Tween.to(widgets, normal, { opacity: '1' });

var fadeEverythingOut = Tween.to([layouts, containers, widgets], normal, { opacity: '0' });

var rect0 = Tween.to(rects[0], slow, { strokeDashoffset: '1' } );
var rect1 = Tween.to(rects[1], normal, { strokeDashoffset: '1' });
var rect2 = Tween.to(rects[2], normal, { strokeDashoffset: '1' });
var rect3 = Tween.to(rects[3], normal, { strokeDashoffset: '1' });
var rect4 = Tween.to(rects[4], normal, { strokeDashoffset: '1' });
var rect5 = Tween.to(rects[5], normal, { strokeDashoffset: '1' });
var rect0_strokeReset = Tween.to(rects[0], instant, { strokeDasharray: '0 0', strokeDashoffset: '0' } );
var rect4_strokeReset = Tween.to(rects[4], instant, { strokeDasharray: '0 0', strokeDashoffset: '0' } );

var rect6 = Tween.to(rects[6], normal, { strokeDashoffset: '1' });
var rect7 = Tween.to(rects[7], normal, { strokeDashoffset: '1' });
var rect8 = Tween.to(rects[8], normal, { strokeDashoffset: '1' });
var rect8_strokeReset = Tween.to(rects[8], instant, { strokeDasharray: '0 0', strokeDashoffset: '0' } );

var rect9 = Tween.to(rects[9], fast, { strokeDashoffset: '1' });
var rect10 = Tween.to(rects[10], fast, { strokeDashoffset: '1' });
var rect11 = Tween.to(rects[11], fast, { strokeDashoffset: '1' });
var rect12 = Tween.to(rects[12], fast, { strokeDashoffset: '1' });
var rect13 = Tween.to(rects[13], fast, { strokeDashoffset: '1' });
var rect14 = Tween.to(rects[14], fast, { strokeDashoffset: '1' });
var rect15 = Tween.to(rects[15], fast, { strokeDashoffset: '1' });
var rect16 = Tween.to(rects[16], fast, { strokeDashoffset: '1' });
var rect17 = Tween.to(rects[17], fast, { strokeDashoffset: '1' });
var rect18 = Tween.to(rects[18], fast, { strokeDashoffset: '1' });
var rect19 = Tween.to(rects[19], fast, { strokeDashoffset: '1' });
var rect20 = Tween.to(rects[20], fast, { strokeDashoffset: '1' });

var SVG_widgetBP = Tween.to(svg, fast, { attr:{viewBox: '0 0 1024 912'} });
var layout_widgetBP = Tween.to(layout, fast, { x: '204.5' });
var rect0_widgetBP = Tween.to(rects[0], fast, { width: '615', height: '912' });
var rect2_widgetBP = Tween.to(rects[2], fast, { x: '295', width: '300' });
var rect3_widgetBP = Tween.to(rects[3], fast, { width: '575' });
var rect4_widgetBP = Tween.to(rects[4], fast, { x: '262', width: '333', height: '582' });
var rect5_widgetBP = Tween.to(rects[5], fast, { width: '222' });
var container_widgetBP = Tween.to(container, fast, { x: '282' });
var rect6_widgetBP = Tween.to(rects[6], fast, { width: '194', height: '425' });
var rect7_widgetBP = Tween.to(rects[7], fast, { y: '445', width: '194' });
var rect8_widgetBP = Tween.to(rects[8], fast, { x: '214', width: '79' });
var widgetCol2_widgetBP = Tween.to(widgetCol2, fast, { x: '0', y: '244' });

var SVG_containerBP = Tween.to(svg, fast, { attr:{viewBox: '0 0 1024 1330'} });
var layout_containerBP = Tween.to(layout, fast, { x: '287' });
var rect0_containerBP = Tween.to(rects[0], fast, { width: '450', height: '1330' });
var rect1_containerBP = Tween.to(rects[1], fast, { width: '150' });
var rect2_containerBP = Tween.to(rects[2], fast, { x: '190', width: '240' });
var rect3_containerBP = Tween.to(rects[3], fast, { width: '410' });
var rect4_containerBP = Tween.to(rects[4], fast, { x: '196', width: '234', height: '1000' });
var rect5_containerBP = Tween.to(rects[5], fast, { width: '156' });
var container_containerBP = Tween.to(container, fast, { x: '216' });
var rect6_containerBP = Tween.to(rects[6], fast, {  });
var rect7_containerBP = Tween.to(rects[7], fast, {  });
var rect8_containerBP = Tween.to(rects[8], fast, { x: '0', y: '562', width: '194' });

var SVG_layoutBP = Tween.to(svg, fast, { attr:{viewBox: '0 0 1024 1858'} });
var layout_layoutBP = Tween.to(layout, fast, { x: '375' });
var rect0_layoutBP = Tween.to(rects[0], fast, { width: '274', height: '1858' });
var rect1_layoutBP = Tween.to(rects[1], fast, { x: '62', y: '80' });
var rect2_layoutBP = Tween.to(rects[2], fast, { x: '0', y: '0', width: '274' });
var rect3_layoutBP = Tween.to(rects[3], fast, { y: '160', width: '234' });
var rect4_layoutBP = Tween.to(rects[4], fast, { x: '20', y: '380', width: '234', height: '1000' });
var rect5_layoutBP = Tween.to(rects[5], fast, { y: '1400', width: '234' });
var container_layoutBP = Tween.to(container, fast, { x: '40', y: '400' });

var SVG_layoutZoom = Tween.to(svg, normal, { attr:{viewBox: '287 0 450 1330'}, delay: '0.5' });
var layout_layoutBP_rev = Tween.to(layout, normal, { x: '287' });
var rect0_layoutBP_rev = Tween.to(rects[0], normal, { width: '450', height: '1330' });
var rect1_layoutBP_rev = Tween.to(rects[1], normal, { x: '20', y: '20', width: '150' });
var rect2_layoutBP_rev = Tween.to(rects[2], normal, { x: '190', y: '20', width: '240' });
var rect3_layoutBP_rev = Tween.to(rects[3], normal, { y: '90', width: '410' });
var rect4_layoutBP_rev = Tween.to(rects[4], normal, { x: '196', y: '310', width: '234', height: '1000' });
var rect5_layoutBP_rev = Tween.to(rects[5], normal, { y: '310', width: '156' });
var container_layoutBP_rev = Tween.to(container, normal, { x: '216', y: '330' });

var SVG_containerZoom = Tween.to(svg, normal, { attr:{viewBox: '204.5 0 615 912'}, delay: '0.5' });
var layout_containerBP_rev = Tween.to(layout, normal, { x: '204.5' });
var rect0_containerBP_rev = Tween.to(rects[0], normal, { width: '615', height: '912' });
var rect1_containerBP_rev = Tween.to(rects[1], normal, { width: '200' });
var rect2_containerBP_rev = Tween.to(rects[2], normal, { x: '295', width: '300' });
var rect3_containerBP_rev = Tween.to(rects[3], normal, { width: '575' });
var rect4_containerBP_rev = Tween.to(rects[4], normal, { x: '262', width: '333', height: '582' });
var rect5_containerBP_rev = Tween.to(rects[5], normal, { width: '222' });
var container_containerBP_rev = Tween.to(container, normal, { x: '282' });
var rect8_containerBP_rev = Tween.to(rects[8], normal, { x: '214', y: '0', width: '79' });

var SVG_widgetZoom = Tween.to(svg, normal, { attr:{viewBox: '0 0 1024 768'}, delay: '0.5' });
var layout_widgetBP_rev = Tween.to(layout, normal, { x: '0' });
var rect0_widgetBP_rev = Tween.to(rects[0], normal, { width: '1024', height: '768' });
var rect2_widgetBP_rev = Tween.to(rects[2], normal, { x: '504', width: '500' });
var rect3_widgetBP_rev = Tween.to(rects[3], normal, { width: '984' });
var rect4_widgetBP_rev = Tween.to(rects[4], normal, { x: '423', width: '581', height: '438' });
var rect5_widgetBP_rev = Tween.to(rects[5], normal, { width: '383' });
var container_widgetBP_rev = Tween.to(container, normal, { x: '443' });
var rect6_widgetBP_rev = Tween.to(rects[6], normal, { width: '374', height: '281' });
var rect7_widgetBP_rev = Tween.to(rects[7], normal, { y: '301', width: '374' });
var rect8_widgetBP_rev = Tween.to(rects[8], normal, { x: '394', width: '150' });
var widgetCol2_widgetBP_rev = Tween.to(widgetCol2, normal, { x: '187', y: '52' });

// This block of tweens is needed to enable clean looping
var rect0_reset = Tween.to(rects[0], instant, { width: '1024', height: '768' });
var rect1_reset = Tween.to(rects[1], instant, { width: '200' });
var rect2_reset = Tween.to(rects[2], instant, { width: '500' });
var rect3_reset = Tween.to(rects[3], instant, { width: '984' });
var rect4_reset = Tween.to(rects[4], instant, { width: '581', height: '438' });
var rect5_reset = Tween.to(rects[5], instant, { width: '383' });
var rect6_reset = Tween.to(rects[6], instant, { width: '374', height: '281' });
var rect7_reset = Tween.to(rects[7], instant, { width: '374' });
var rect8_reset = Tween.to(rects[8], instant, { width: '150' });


var t1 = new Timeline({repeat: -1});

// Everything before 'start' is to enable clean looping
t1.add([rect0_reset, rect1_reset, rect2_reset, rect3_reset, rect4_reset, rect5_reset, rect6_reset, rect7_reset, rect8_reset]);
t1.addLabel('start');
t1.addCallback(setUpRects);
t1.add([rect0, rect1, rect2, rect3, rect5, rect4, rect0_strokeReset, rect4_strokeReset], '0', 'normal', 0.5);
t1.add([rect6, rect7, rect8, rect8_strokeReset], '-=0.1', 'normal', 0.5);
t1.add([rect9, rect10, rect11, rect12, rect13, rect14, rect15, rect16, rect17, rect18, rect19, rect20], '-=0.1', 'normal', 0.1);
t1.add([SVG_widgetBP, layout_widgetBP, rect0_widgetBP, rect2_widgetBP, rect3_widgetBP, rect4_widgetBP, rect5_widgetBP, container_widgetBP, rect6_widgetBP, rect7_widgetBP, rect8_widgetBP, widgetCol2_widgetBP]);
t1.add([SVG_containerBP, layout_containerBP, rect0_containerBP, rect1_containerBP, rect2_containerBP, rect3_containerBP, rect4_containerBP, rect5_containerBP, container_containerBP, rect6_containerBP, rect7_containerBP, rect8_containerBP]);
t1.add([SVG_layoutBP, layout_layoutBP, rect0_layoutBP, rect1_layoutBP, rect2_layoutBP, rect3_layoutBP, rect4_layoutBP, rect5_layoutBP, container_layoutBP]);
t1.add([SVG_layoutZoom, fadeWidgets, fadeContainers], '+=0.5');
t1.add([layout_layoutBP_rev, rect0_layoutBP_rev, rect1_layoutBP_rev, rect2_layoutBP_rev, rect3_layoutBP_rev, rect4_layoutBP_rev, rect5_layoutBP_rev, container_layoutBP_rev]);
t1.add([SVG_containerZoom, fadeContainersIn, fadeLayouts], '+=0.5');
t1.add([layout_containerBP_rev, rect0_containerBP_rev, rect1_containerBP_rev, rect2_containerBP_rev, rect3_containerBP_rev, rect4_containerBP_rev, rect5_containerBP_rev, container_containerBP_rev, rect8_containerBP_rev]);
t1.add([SVG_widgetZoom, fadeWidgetsIn, fadeContainers], '+=0.5');
t1.add([layout_widgetBP_rev, rect0_widgetBP_rev, rect2_widgetBP_rev, rect3_widgetBP_rev, rect4_widgetBP_rev, rect5_widgetBP_rev, container_widgetBP_rev, rect6_widgetBP_rev, rect7_widgetBP_rev, rect8_widgetBP_rev, widgetCol2_widgetBP_rev]);
t1.add(fadeEverythingOut, '+=1');

t1.play('start');
