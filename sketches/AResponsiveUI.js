var Tween = TweenLite;
var Timeline = TimelineMax;


// Elements
var fullWidth = document.getElementsByClassName('fullWidth');
var panelWidth = document.getElementsByClassName('panelWidth');
var fullHeight = document.getElementsByClassName('fullHeight');
var toolbarBorder = document.getElementsByClassName('toolbar-border');
var input = document.getElementsByClassName('input');
var inputMain = document.getElementsByClassName('input--main');
var inputAddtl = document.getElementsByClassName('input--addtl');
var inputLabel = document.getElementsByClassName('input-label');
var inputLabelFilled = document.getElementsByClassName('input-label--filled');
var inputLabelAddtl = document.getElementsByClassName('input-label--addtl');
var inputValue = document.getElementsByClassName('input-value');
var addtlBorder = document.getElementsByClassName('cal-form-addtl-border');
var listWidth = document.getElementsByClassName('listWidth');
var raWidth = document.getElementsByClassName('raWidth');
var raItemBkg = document.getElementsByClassName('db-ra-item-bkg');
var raItemShift = document.getElementsByClassName('db-ra-item-shift');
var raItemHide = document.getElementsByClassName('db-ra-item-hide');
var raItemIcon = document.getElementsByClassName('db-ra-item-icon');
var raItemBorder = document.getElementsByClassName('db-ra-item-border');

var svg = document.getElementById('aResponsiveUI');
var device = document.getElementById('deviceFrame');
var toolbarShadow = document.getElementById('toolbar-shadow');
var toolbarBkg = document.getElementById('toolbar-bkg');
var hamburger = document.getElementById('hamburger');
var toolbarTitle = document.getElementById('toolbar-title');
var toolbarItemsLeft = document.getElementById('toolbar-items--left');
var toolbarItemsRight = document.getElementById('toolbar-items--right');
var toolbarDbLink = document.getElementById('toolbar-dbLink');
var panel = document.getElementById('panel');
var overlay = document.getElementById('overlay');

var db = document.getElementById('db');
var dbHeader = document.getElementById('db-header');
var ru = document.getElementById('db-ru');
var ruBkg = document.getElementById('db-ru-bkg');
var ruBorder = document.getElementById('db-ru-border');
var ruOutline = document.getElementById('db-ru-outline');
var ruHeading = document.getElementById('db-ru-heading');
var ruIcon1 = document.getElementById('db-ru-icon-1');
var ruIcon2 = document.getElementById('db-ru-icon-2');
var ruIcon3 = document.getElementById('db-ru-icon-3');
var ruIcon4 = document.getElementById('db-ru-icon-4');
var ruIcon5 = document.getElementById('db-ru-icon-5');
var ruIcon6 = document.getElementById('db-ru-icon-6');
var dbScrollable = document.getElementById('db-scrollable');
var dbList = document.getElementById('db-list');
var dbListOutline = document.getElementById('db-list-outline');
var dbListItem = document.getElementById('db-list-item');
var dbListItem1Bkg = document.getElementById('db-list-item-1-bkg');
var ra = document.getElementById('db-ra');
var raScrollable = document.getElementById('db-ra-scrollable');
var raOutline = document.getElementById('db-ra-outline');
var raHeaderBkg = document.getElementById('db-ra-header-bkg');
var raHeaderShadow = document.getElementById('db-ra-header-shadow');
var raHeaderIcon = document.getElementById('db-ra-header-icon');
var raHeaderSeperator = document.getElementById('db-ra-header-seperator');
var raHeaderTitle = document.getElementById('db-ra-header-title');
var raHeaderCount = document.getElementById('db-ra-header-count');
var raHeaderButton1 = document.getElementById('db-ra-header-button1');
var raHeaderButton2 = document.getElementById('db-ra-header-button2');
var raHeaderBorder = document.getElementById('db-ra-header-border');
var raItem1 = document.getElementById('db-ra-item-1');
var raItem2 = document.getElementById('db-ra-item-2');
var raItem3 = document.getElementById('db-ra-item-3');
var raItem4 = document.getElementById('db-ra-item-4');
var raItem5 = document.getElementById('db-ra-item-5');
var raItem6 = document.getElementById('db-ra-item-6');
var raItem7 = document.getElementById('db-ra-item-7');
var raItem4Bkg = document.getElementById('db-ra-item-4-bkg');
var dbTiles = document.getElementById('db-tiles');

var cal = document.getElementById('cal');
var calTitlebar = document.getElementById('cal-titlebar');
var calTitlebarShadow = document.getElementById('cal-titlebar-shadow');
var calForm = document.getElementById('cal-form-scrollable');
var calFieldAddtl5Bkg = document.getElementById('cal-form-field-5-bkg');
var calButtons = document.getElementById('cal-buttons');
var calButton1 = document.getElementById('cal-buttons-1');
var calButton2 = document.getElementById('cal-buttons-2');
var calButton3 = document.getElementById('cal-buttons-3');
var calBreadcrumbs = document.getElementById('cal-breadcrumbs');
var calTitle = document.getElementById('cal-title');
var calFieldsMain = document.getElementById('cal-form-main');
var calField1 = document.getElementById('cal-form-field-1');
var calField2 = document.getElementById('cal-form-field-2');
var calField2Bkg = document.getElementById('cal-form-field-2-bkg');
var calField2Text1 = document.getElementById('cal-form-field-2-text-1');
var calField2Text2 = document.getElementById('cal-form-field-2-text-2');
var calField2Text3 = document.getElementById('cal-form-field-2-text-3');
var calField3 = document.getElementById('cal-form-field-3');
var calField4 = document.getElementById('cal-form-field-4');
var calFieldsAddtl = document.getElementById('cal-form-addtl');
var calFieldsAddtlHeading = document.getElementById('cal-form-addtl-heading');
var calField5 = document.getElementById('cal-form-field-5');
var calField6 = document.getElementById('cal-form-field-6');
var calField7 = document.getElementById('cal-form-field-7');
var calField8 = document.getElementById('cal-form-field-8');
var calField9 = document.getElementById('cal-form-field-9');
var calField10 = document.getElementById('cal-form-field-10');
var calHeader = document.getElementById('cal-header');
var calHeaderBkg = document.getElementById('cal-header-bkg');
var calSearch = document.getElementById('cal-search');
var calNavbar = document.getElementById('cal-navbar');
var calDivider = document.getElementById('cal-divider');


var sizes = {
	sm: [375, 667],
	md: [525, 690],
	lg: [720, 721],
	xl: [1024, 768]
};

var deviceWidth = {};
var padding = 3;

for ( var size in sizes ) {
  deviceWidth[size] = (sizes[size][0]/sizes.xl[0] - 2*(padding/100))*100 + '%';
}

// Tweens
Tween.defaultEase = Quad.easeOut;
var instant = 0.1;
var vfast = 0.25;
var fast = 0.333;
var normal = 0.666;
var slow = 1.5;

var selectListItem = Tween.to(dbListItem1Bkg, vfast, { fill: '#dae4f0' });
var dbListOut = Tween.to(dbList, fast, { x: '-375' });
var raIn = Tween.to(ra, fast, { x: '0' });
var scrollUp = Tween.to(dbScrollable, normal, { y: '-187', ease: Quad.easeIn });
var toolbarShadowOut = Tween.to(toolbarShadow, instant, { opacity: '0' });
var raHeaderShadowIn = Tween.to(raHeaderShadow, instant, { opacity: '1' });
var scrollUp2 = Tween.to(raScrollable, normal, { y: '-200', ease: Quad.easeOut });
var selectRAItem = Tween.to(raItem4Bkg, vfast, { fill: '#dae4f0' });
var dbOut = Tween.to(db, normal, { opacity: '0' });
var calIn = Tween.to(cal, normal, { opacity: '1' });
var selectCalField = Tween.to(calFieldAddtl5Bkg, vfast, { fill: '#dae4f0' });
var overlayIn  = Tween.to(overlay, fast, { opacity: '0.4' });
var panelIn = Tween.to(panel, fast, { x: '19' });

var SVG_smToMd = Tween.to(svg, slow, { attr:{viewBox: '0 0 525 690'} });
var device_smToMd = Tween.to(device, slow, { width: deviceWidth.md });
var fullWidth_smToMd = Tween.to(fullWidth, slow, { width: '525' });
var fullHeight_smToMd = Tween.to(fullHeight, slow, { height: '690' });
var toolbarShadowIn = Tween.to(toolbarShadow, instant, { opacity: '1' });
var titlebarShadowOut = Tween.to(calTitlebarShadow, instant, { opacity: '0' });
var panelElements_smToMd = Tween.to(panelWidth, slow, { width: '506' });
var panelOut = Tween.to(panel, normal, { x: '525', opacity: '0' });
var overlayOut = Tween.to(overlay, normal, { opacity: '0' });
var calElements2_smToMd = Tween.to([calTitlebar, calForm], slow, { x: '48' });
var calBreadcrumbs_smToMd = Tween.to(calBreadcrumbs, slow, { x: '0', y: '20' });
var calTitle_smToMd = Tween.to(calTitle, slow, { x: '-14', y: '-50' });
var calButtons_smToMd = Tween.to(calButtons, slow, { x: '-14', y: '80' });
var calButton1_smToMd = Tween.to(calButton1, slow, { x: '+=15' });
var calButton2_smToMd = Tween.to(calButton2, slow, { x: '+=30' });
var calButton3_smToMd = Tween.to(calButton3, slow, { x: '+=45' });
var calFields_smToMd = Tween.to([inputMain, inputAddtl], slow, { width: '429' });
var inputs_smToMd = Tween.to(input, slow, { x: '0', y: '30', height: '44' });
var inputLabels_smToMd = Tween.to(inputLabel, slow, { x: '-14', y: '-10', height: '15' });
var inputLabelsFilled_smToMd = Tween.to(inputLabelFilled, slow, { x: '-14', y: '0', height: '15' });
var inputValues_smToMd = Tween.to(inputValue, slow, { y: '17' });
var calFieldsMain_smToMd = Tween.to(calFieldsMain, slow, { y: '20' });
var callField2Bkg_smToMd = Tween.to(calField2Bkg, slow, { y: '30', height: '144' });
var calField2Text1_smToMd = Tween.to(calField2Text1, slow, { width: '350' });
var calField2Text2And3_smToMd = Tween.to([calField2Text2, calField2Text3], slow, { opacity: '0.2' });
var calField2_smToMd = Tween.to(calField2, slow, { y: '91' }); // +40
var calField3_smToMd = Tween.to(calField3, slow, { y: '282' }); // +80 +100
var calField4_smToMd = Tween.to(calField4, slow, { y: '373' }); // +120 +100
var calFieldsAddtl_smToMd = Tween.to(calFieldsAddtl, slow, { y: '520' });
var calFieldsAddtlHeading_smToMd = Tween.to(calFieldsAddtlHeading, slow, { x: '-14' });

var SVG_mdToLg = Tween.to(svg, slow, { attr:{viewBox: '0 0 720 721'} });
var device_mdToLg = Tween.to(device, slow, { width: deviceWidth.lg });
var fullWidth_mdToLg = Tween.to(fullWidth, slow, { width: '720' });
var toolbarContentsOut_mdToLg = Tween.to([hamburger, toolbarTitle], normal, { opacity: '0' });
var toolbarContentsIn_mdToLg = Tween.to([toolbarItemsLeft, toolbarItemsRight], normal, { opacity: '1' });
var calElements_mdToLg = Tween.to([calHeader, calNavbar], slow, { x: '0' });
var calElements2_mdToLg = Tween.to([calTitlebar, calForm], slow, { x: '148' });
var inputs_mdToLg = Tween.to(input, slow, { width: '524' });
var calHeaderIn = Tween.to(calHeader, normal, { y: '+=130' });
var calElements3_mdToLg = Tween.to([calTitlebar, calFieldsMain, calFieldsAddtl], normal, { y: '+=130' });

var SVG_lgToXl = Tween.to(svg, slow, { attr:{viewBox: '0 0 1024 768'} });
var device_lgToXl = Tween.to(device, slow, { width: deviceWidth.xl });
var fullWidth_lgToXl = Tween.to([toolbarBkg, toolbarBorder, toolbarShadow], slow, { width: '1024' });
var shiftRight_lgToXl = Tween.to(toolbarItemsRight, slow, { x: '800' });
var calHeaderBkg_lgToXl = Tween.to(calHeaderBkg, slow, { width: '924' });
var calSearch_lgToXl = Tween.to(calSearch, slow, { x: '+=304' });
var calButtons_lgToXl = Tween.to(calButtons, slow, { x: '410', y: '20' });
var calFieldsMain_lgToXl = Tween.to(calFieldsMain, slow, { y: '100' });
var inputsMain_lgToXl = Tween.to(inputMain, slow, { width: '435' });
var calDividerIn = Tween.to(calDivider, normal, { opacity: '1', delay: '1' });
var calFieldsAddtl_lgToXl = Tween.to(calFieldsAddtl, slow, { x: '531', y: '110' });
var caladdtlBordersIn = Tween.to(addtlBorder, normal, { opacity: '1', delay: '1' });
var inputsAddtl_lgToXl = Tween.to([inputAddtl, addtlBorder], slow, { width: '297' });
var inputsAddtlBkgOut = Tween.to(inputAddtl, normal, { opacity: '0', delay: '1' });
var inputLabelAddtl_lgToXl = Tween.to(inputLabelAddtl, normal, { y: '0', delay: '1' });

var selectDbLink = Tween.to(toolbarDbLink, vfast, { fill: '#dae4f0' });
var dbHeader_xl = Tween.to(dbHeader, instant, { opacity: '1' })
var resetDbScroll = Tween.to(dbScrollable, instant, { y: '0' });
var ru_xl = Tween.to(ru, instant, { x: '48', y: '210' });
var ruBkg_xl = Tween.to(ruBkg, instant, { x: '0', width: '928', height: '72' });
var ruBorder_xl = Tween.to(ruBorder, instant, { opacity: '0' });
var ruOutline_xl = Tween.to(ruOutline, instant, { x: '0', opacity: '1' });
var ruHeading_xl = Tween.to(ruHeading, instant, { x: '-117', y: '11' });
var ruIcon1_xl = Tween.to(ruIcon1, instant, { x: '190', y: '12' });
var ruIcon2_xl = Tween.to(ruIcon2, instant, { x: '320', y: '12' });
var ruIcon3_xl = Tween.to(ruIcon3, instant, { x: '450', y: '12' });
var ruIcon4_xl = Tween.to(ruIcon4, instant, { x: '580', y: '12' });
var ruIcon5_xl = Tween.to(ruIcon5, instant, { x: '710', y: '12' });
var ruIcon6_xl = Tween.to(ruIcon6, instant, { x: '840', y: '12' });
var list_xl = Tween.to(dbList, instant, { x: '48', y: '312' });
var listOutline_xl = Tween.to(dbListOutline, instant, { opacity: '1' });
var listItemWidth_xl = Tween.to(listWidth, instant, { width: '250' });
var deselectListItem = Tween.to(dbListItem1Bkg, vfast, { fill: 'white' });
var ra_xl = Tween.to(ra, instant, { x: '346', y: '312' });
var raOutline_xl = Tween.to(raOutline, instant, { opacity: '1' });
var raHeaderBkg_xl = Tween.to(raHeaderBkg, instant, { height: '52' });
var raHeaderShadowOut = Tween.to(raHeaderShadow, instant, { opacity: '0' });
var raHeaderIcon_xl = Tween.to(raHeaderIcon, instant, { y:'-15' });
var raHeaderSeperator_xl = Tween.to(raHeaderSeperator, instant, { y:'-15' });
var raHeaderTitle_xl = Tween.to(raHeaderTitle, instant, { y:'2' });
var raHeaderCount_xl = Tween.to(raHeaderCount, instant, { x: '260', y:'2' });
var raHeaderButton1_xl = Tween.to(raHeaderButton1, instant, { x: '390', y:'8' });
var raHeaderButton2_xl = Tween.to(raHeaderButton2, instant, { x: '480', y:'8' });
var raHeaderBorder_xl = Tween.to(raHeaderBorder, instant, { y: '-30' });
var resetRaScroll = Tween.to(raScrollable, instant, { y: '52' });
var raWidth_xl = Tween.to(raWidth, instant, { width: '630' });
var raItemBkg_xl = Tween.to(raItemBkg, instant, { height: '52' });
var raItemShift_xl = Tween.to(raItemShift, instant, { x: '140', y: '-20' });
var raItemHide_xl = Tween.to(raItemHide, instant, { opacity: '0' });
var raItemIcon_xl = Tween.to(raItemIcon, instant, { x: '260', y: '-75' });
var raItemBorder_xl = Tween.to(raItemBorder, instant, { y: '-78' });
var raItem2_xl = Tween.to(raItem2, instant, { y: '52' });
var raItem3_xl = Tween.to(raItem3, instant, { y: '104' });
var raItem4_xl = Tween.to(raItem4, instant, { y: '156' });
var raItem5_xl = Tween.to(raItem5, instant, { y: '208' });
var raItem6_xl = Tween.to(raItem6, instant, { y: '260' });
var raItem7_xl = Tween.to(raItem7, instant, { y: '312' });
var deSelectRAItem = Tween.to(raItem4Bkg, instant, { fill: 'white' });
var tiles_xl = Tween.to(dbTiles, instant, { opacity: '0' });
var calOut = Tween.to(cal, normal, { opacity: '0' });
var dbIn = Tween.to(db, normal, { opacity: '1' });
var deSelectDbLink = Tween.to(toolbarDbLink, vfast, { fill: 'white' });

var SVG_xlToSm = Tween.to(svg, slow, { attr:{viewBox: '0 0 375 667'} });
var device_xlToSm = Tween.to(device, slow, { width: deviceWidth.sm });
var fullWidth_xlToSm = Tween.to(fullWidth, slow, { width: '375' });
var outlinesOut_xlToSm = Tween.to([ruOutline, dbListOutline, raOutline], fast, { opacity: '0' });
var toolbarHamburgerIn_xlToSm = Tween.to(hamburger, normal, { opacity: '1' });
var toolbarTitleIn_xlToSm = Tween.to(toolbarTitle, normal, { opacity: '0.5' });
var toolbarContentsOut_xlToSm = Tween.to([toolbarItemsLeft, toolbarItemsRight], normal, { opacity: '0' });
var dbHeaderOut_xlToSm = Tween.to(dbHeader, slow, { y: '-130', opacity: '0' });
var ru_xlToSm = Tween.to(ru, slow, { x: '0', y: '50' });
var ruBkg_xlToSm = Tween.to(ruBkg, slow, { x: '0', width: '375', height: '187' });
var ruBorder_xlToSm = Tween.to(ruBorder, slow, { opacity: '1' });
var ruHeading_xlToSm = Tween.to(ruHeading, slow, { x: '0', y: '0' });
var ruIcon1_xlToSm = Tween.to(ruIcon1, slow, { x: '44.5', y: '52' });
var ruIcon2_xlToSm = Tween.to(ruIcon2, slow, { x: '174.5', y: '52' });
var ruIcon3_xlToSm = Tween.to(ruIcon3, slow, { x: '304.5', y: '52' });
var ruIcon4_xlToSm = Tween.to(ruIcon4, slow, { x: '44.5', y: '122' });
var ruIcon5_xlToSm = Tween.to(ruIcon5, slow, { x: '174.5', y: '122' });
var ruIcon6_xlToSm = Tween.to(ruIcon6, slow, { x: '304.5', y: '122' });
var list_xlToSm = Tween.to(dbList, slow, { x: '0', y: '237' });
var ra_xlToSm = Tween.to(ra, slow, { x: '375', y: '237' });
var tiles_xlToSm = Tween.to(dbTiles, slow, { opacity: '1' });

// This block of tweens is needed to enable clean looping
var fullWidth_reset = Tween.to(fullWidth, instant, { width: '375' });
var ruBkg_reset = Tween.to(ruBkg, instant, { height: '187' });
var raHeaderBkg_reset = Tween.to(raHeaderBkg, instant, { height: '82' });
var raHeaderBorder_reset = Tween.to(raHeaderBorder, instant, { y: '0' });
var raItemBkg_reset = Tween.to(raItemBkg, instant, { height: '130' });
var fullHeight_reset = Tween.to(fullHeight, instant, { height: '667' });
var input_reset = Tween.to(input, instant, { width: '375', height: '52' });
var inputLabel_reset = Tween.to(inputLabel, instant, { height: '15' });
var inputLabelFilled_reset = Tween.to(inputLabelFilled, instant, { height: '13' });
var calField2Text1_reset = Tween.to(calField2Text1, instant, { width: '280' });
var panelWidth_reset = Tween.to(panelWidth, instant, { width: '358' });
var calHeaderBkg_reset = Tween.to(calHeaderBkg, instant, { width: '620' });


// Timeline
var t1 = new Timeline({repeat: -1});

// Everything before 'start' is to enable clean looping
t1.add([fullWidth_reset, ruBkg_reset, raHeaderBkg_reset, raHeaderBorder_reset, raItemBkg_reset, fullHeight_reset, input_reset, inputLabel_reset, inputLabelFilled_reset, calField2Text1_reset, calHeaderBkg_reset]);
t1.add(panelWidth_reset);
t1.addLabel('start');
t1.addLabel('Dashboard@sm');
t1.add(selectListItem, '+=2');
t1.add([dbListOut, raIn], '+=0.25');
t1.add(scrollUp, '+=1');
t1.add([toolbarShadowOut, raHeaderShadowIn, scrollUp2]);
t1.add(selectRAItem, '+=1');
t1.add([dbOut, calIn], '+=0.25');
t1.addLabel('Calendar@sm');
t1.add(selectCalField, '+=2');
t1.add([panelIn, overlayIn], '+=0.25');
t1.add([SVG_smToMd, device_smToMd, fullWidth_smToMd, fullHeight_smToMd, toolbarShadowIn, titlebarShadowOut, panelElements_smToMd], '+=1');
t1.add([panelOut, overlayOut]);
t1.add([calElements2_smToMd, calBreadcrumbs_smToMd, calTitle_smToMd, calButtons_smToMd, calButton1_smToMd, calButton2_smToMd, calButton3_smToMd, calFields_smToMd, inputs_smToMd, inputLabels_smToMd, inputLabelsFilled_smToMd, inputValues_smToMd, calFieldsMain_smToMd, callField2Bkg_smToMd, calField2Text1_smToMd, calField2Text2And3_smToMd, calField2_smToMd, calField3_smToMd, calField4_smToMd, calFieldsAddtl_smToMd, calFieldsAddtlHeading_smToMd], '-=0.5');
t1.addLabel('Calendar@md');
t1.add([SVG_mdToLg, device_mdToLg, fullWidth_mdToLg, toolbarContentsOut_mdToLg, toolbarContentsIn_mdToLg, calElements_mdToLg, calElements2_mdToLg, inputs_mdToLg]);
t1.add([calHeaderIn, calElements3_mdToLg], '-=0.5');
t1.addLabel('Calendar@lg');
t1.add([SVG_lgToXl, device_lgToXl, fullWidth_lgToXl, shiftRight_lgToXl, calHeaderBkg_lgToXl, calSearch_lgToXl, calButtons_lgToXl, calFieldsMain_lgToXl, inputsMain_lgToXl, calDividerIn, calFieldsAddtl_lgToXl, caladdtlBordersIn, inputsAddtl_lgToXl, inputsAddtlBkgOut, inputLabelAddtl_lgToXl], '+=0.5');
t1.addLabel('Calendar@xl');
t1.add(selectDbLink, '+=1.5');
t1.add([dbHeader_xl, resetDbScroll, ru_xl, ruBkg_xl, ruBorder_xl, ruOutline_xl, ruHeading_xl, ruIcon1_xl, ruIcon2_xl, ruIcon3_xl, ruIcon4_xl, ruIcon5_xl, ruIcon6_xl, list_xl, listOutline_xl, listItemWidth_xl, deselectListItem, ra_xl, raOutline_xl, raHeaderBkg_xl, raHeaderShadowOut, raHeaderIcon_xl, raHeaderSeperator_xl, raHeaderTitle_xl, raHeaderCount_xl, raHeaderButton1_xl, raHeaderButton2_xl, raHeaderBorder_xl, resetRaScroll, raWidth_xl, raItemBkg_xl, raItemShift_xl, raItemHide_xl, raItemIcon_xl, raItemBorder_xl, raItem2_xl, raItem3_xl, raItem4_xl, raItem5_xl, raItem6_xl, raItem7_xl, deSelectRAItem, tiles_xl]);
t1.add(deSelectDbLink);
t1.add([calOut, dbIn], '+=0.25');
t1.addLabel('Dashboard@xl');
t1.add([SVG_xlToSm, device_xlToSm, fullWidth_xlToSm, outlinesOut_xlToSm, toolbarHamburgerIn_xlToSm, toolbarTitleIn_xlToSm, toolbarContentsOut_xlToSm, dbHeaderOut_xlToSm, ru_xlToSm, ruBkg_xlToSm, ruBorder_xlToSm, ruHeading_xlToSm, ruIcon1_xlToSm, ruIcon2_xlToSm, ruIcon3_xlToSm, ruIcon4_xlToSm, ruIcon5_xlToSm, ruIcon6_xlToSm, list_xlToSm, ra_xlToSm, tiles_xlToSm], '+=2');

t1.seek('start');
