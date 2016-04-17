import React from 'react'

import './AFullyResponsiveCMS.css'
import './AnAllNewWayToBuildWebsites.css'


const Figures = {

  // Live example: http://codepen.io/kylegach/pen/wGpRWY
  AFullyResponsiveCMS: React.createClass({

    componentDidMount: function() {
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

      var svg = document.getElementById('aFullyResponsiveCMS');
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


      /*
      With 3% padding...
      sm: (375  x 667) = 30.6% x 70.6%
      md: (525  x 690) = 45.3% x 77%
      lg: (720  x 721) = 64.3% x 83.6%
      xl: (1024 x 768) = 94%   x 91.6%
      */

      var deviceSize = {
      	sm: ['30.6%', '70.6%'],
      	md: ['45.3%', '77%'  ],
      	lg: ['64.3%', '83.6%'],
      	xl: ['94%',   '91.6%'],
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
      var device_smToMd = Tween.to(device, slow, { width: deviceSize.md[0], height: deviceSize.md[1] });
      var fullWidth_smToMd = Tween.to(fullWidth, slow, { attr:{width: '525'} });
      var fullHeight_smToMd = Tween.to(fullHeight, slow, { attr:{height: '690'} });
      var toolbarShadowIn = Tween.to(toolbarShadow, instant, { opacity: '1' });
      var titlebarShadowOut = Tween.to(calTitlebarShadow, instant, { opacity: '0' });
      var panelElements_smToMd = Tween.to(panelWidth, slow, { attr:{width: '506'} });
      var panelOut = Tween.to(panel, normal, { x: '525', opacity: '0' });
      var overlayOut = Tween.to(overlay, normal, { opacity: '0' });
      var calElements2_smToMd = Tween.to([calTitlebar, calForm], slow, { x: '48' });
      var calBreadcrumbs_smToMd = Tween.to(calBreadcrumbs, slow, { x: '0', y: '20' });
      var calTitle_smToMd = Tween.to(calTitle, slow, { x: '-14', y: '-50' });
      var calButtons_smToMd = Tween.to(calButtons, slow, { x: '-14', y: '80' });
      var calButton1_smToMd = Tween.to(calButton1, slow, { x: '+=15' });
      var calButton2_smToMd = Tween.to(calButton2, slow, { x: '+=30' });
      var calButton3_smToMd = Tween.to(calButton3, slow, { x: '+=45' });
      var calFields_smToMd = Tween.to([inputMain, inputAddtl], slow, { attr:{width: '429'} });
      var inputs_smToMd = Tween.to(input, slow, { x: '0', y: '30', attr:{height: '44'} });
      var inputLabels_smToMd = Tween.to(inputLabel, slow, { x: '-14', y: '-10', attr:{height: '15'} });
      var inputLabelsFilled_smToMd = Tween.to(inputLabelFilled, slow, { x: '-14', y: '0', attr:{height: '15'} });
      var inputValues_smToMd = Tween.to(inputValue, slow, { y: '17' });
      var calFieldsMain_smToMd = Tween.to(calFieldsMain, slow, { y: '20' });
      var callField2Bkg_smToMd = Tween.to(calField2Bkg, slow, { y: '30', attr:{height: '144'} });
      var calField2Text1_smToMd = Tween.to(calField2Text1, slow, { attr:{width: '350'} });
      var calField2Text2And3_smToMd = Tween.to([calField2Text2, calField2Text3], slow, { opacity: '0.2' });
      var calField2_smToMd = Tween.to(calField2, slow, { y: '91' }); // +40
      var calField3_smToMd = Tween.to(calField3, slow, { y: '282' }); // +80 +100
      var calField4_smToMd = Tween.to(calField4, slow, { y: '373' }); // +120 +100
      var calFieldsAddtl_smToMd = Tween.to(calFieldsAddtl, slow, { y: '520' });
      var calFieldsAddtlHeading_smToMd = Tween.to(calFieldsAddtlHeading, slow, { x: '-14' });

      var SVG_mdToLg = Tween.to(svg, slow, { attr:{viewBox: '0 0 720 721'} });
      var device_mdToLg = Tween.to(device, slow, { width: deviceSize.lg[0], height: deviceSize.lg[1] });
      var fullWidth_mdToLg = Tween.to(fullWidth, slow, { attr:{width: '720'} });
      var toolbarContentsOut_mdToLg = Tween.to([hamburger, toolbarTitle], normal, { opacity: '0' });
      var toolbarContentsIn_mdToLg = Tween.to([toolbarItemsLeft, toolbarItemsRight], normal, { opacity: '1' });
      var calElements_mdToLg = Tween.to([calHeader, calNavbar], slow, { x: '0' });
      var calElements2_mdToLg = Tween.to([calTitlebar, calForm], slow, { x: '148' });
      var inputs_mdToLg = Tween.to(input, slow, { attr:{width: '524'} });
      var calHeaderIn = Tween.to(calHeader, normal, { y: '+=130' });
      var calElements3_mdToLg = Tween.to([calTitlebar, calFieldsMain, calFieldsAddtl], normal, { y: '+=130' });

      var SVG_lgToXl = Tween.to(svg, slow, { attr:{viewBox: '0 0 1024 768'} });
      var device_lgToXl = Tween.to(device, slow, { width: deviceSize.xl[0], height: deviceSize.xl[1] });
      var fullWidth_lgToXl = Tween.to([toolbarBkg, toolbarBorder, toolbarShadow], slow, { attr:{width: '1024'} });
      var shiftRight_lgToXl = Tween.to(toolbarItemsRight, slow, { x: '800' });
      var calHeaderBkg_lgToXl = Tween.to(calHeaderBkg, slow, { attr:{width: '924'} });
      var calSearch_lgToXl = Tween.to(calSearch, slow, { x: '+=304' });
      var calButtons_lgToXl = Tween.to(calButtons, slow, { x: '410', y: '20' });
      var calFieldsMain_lgToXl = Tween.to(calFieldsMain, slow, { y: '100' });
      var inputsMain_lgToXl = Tween.to(inputMain, slow, { attr:{width: '435'} });
      var calDividerIn = Tween.to(calDivider, normal, { opacity: '1', delay: '1' });
      var calFieldsAddtl_lgToXl = Tween.to(calFieldsAddtl, slow, { x: '531', y: '110' });
      var caladdtlBordersIn = Tween.to(addtlBorder, normal, { opacity: '1', delay: '1' });
      var inputsAddtl_lgToXl = Tween.to([inputAddtl, addtlBorder], slow, { attr:{width: '297'} });
      var inputsAddtlBkgOut = Tween.to(inputAddtl, normal, { opacity: '0', delay: '1' });
      var inputLabelAddtl_lgToXl = Tween.to(inputLabelAddtl, normal, { y: '0', delay: '1' });

      var selectDbLink = Tween.to(toolbarDbLink, vfast, { fill: '#dae4f0' });
      var dbHeader_xl = Tween.to(dbHeader, instant, { opacity: '1' })
      var resetDbScroll = Tween.to(dbScrollable, instant, { y: '0' });
      var ru_xl = Tween.to(ru, instant, { x: '48', y: '210' });
      var ruBkg_xl = Tween.to(ruBkg, instant, { x: '0', attr:{width: '928', height: '72'} });
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
      var listItemWidth_xl = Tween.to(listWidth, instant, { attr:{width: '250'} });
      var deselectListItem = Tween.to(dbListItem1Bkg, vfast, { fill: 'white' });
      var ra_xl = Tween.to(ra, instant, { x: '346', y: '312' });
      var raOutline_xl = Tween.to(raOutline, instant, { opacity: '1' });
      var raHeaderBkg_xl = Tween.to(raHeaderBkg, instant, { attr:{height: '52'} });
      var raHeaderShadowOut = Tween.to(raHeaderShadow, instant, { opacity: '0' });
      var raHeaderIcon_xl = Tween.to(raHeaderIcon, instant, { y:'-15' });
      var raHeaderSeperator_xl = Tween.to(raHeaderSeperator, instant, { y:'-15' });
      var raHeaderTitle_xl = Tween.to(raHeaderTitle, instant, { y:'2' });
      var raHeaderCount_xl = Tween.to(raHeaderCount, instant, { x: '260', y:'2' });
      var raHeaderButton1_xl = Tween.to(raHeaderButton1, instant, { x: '390', y:'8' });
      var raHeaderButton2_xl = Tween.to(raHeaderButton2, instant, { x: '480', y:'8' });
      var raHeaderBorder_xl = Tween.to(raHeaderBorder, instant, { y: '-30' });
      var resetRaScroll = Tween.to(raScrollable, instant, { y: '52' });
      var raWidth_xl = Tween.to(raWidth, instant, { attr:{width: '630'} });
      var raItemBkg_xl = Tween.to(raItemBkg, instant, { attr:{height: '52'} });
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
      var device_xlToSm = Tween.to(device, slow, { width: deviceSize.sm[0], height: deviceSize.sm[1] });
      var fullWidth_xlToSm = Tween.to(fullWidth, slow, { attr:{width: '375'} });
      var outlinesOut_xlToSm = Tween.to([ruOutline, dbListOutline, raOutline], fast, { opacity: '0' });
      var toolbarHamburgerIn_xlToSm = Tween.to(hamburger, normal, { opacity: '1' });
      var toolbarTitleIn_xlToSm = Tween.to(toolbarTitle, normal, { opacity: '0.5' });
      var toolbarContentsOut_xlToSm = Tween.to([toolbarItemsLeft, toolbarItemsRight], normal, { opacity: '0' });
      var dbHeaderOut_xlToSm = Tween.to(dbHeader, slow, { y: '-130', opacity: '0' });
      var ru_xlToSm = Tween.to(ru, slow, { x: '0', y: '50' });
      var ruBkg_xlToSm = Tween.to(ruBkg, slow, { x: '0', attr:{width: '375', height: '187'} });
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
      var fullWidth_reset = Tween.to(fullWidth, instant, { attr:{width: '375'} });
      var ruBkg_reset = Tween.to(ruBkg, instant, { attr:{height: '187'} });
      var raHeaderBkg_reset = Tween.to(raHeaderBkg, instant, { attr:{height: '82'} });
      var raHeaderBorder_reset = Tween.to(raHeaderBorder, instant, { y: '0' });
      var raItemBkg_reset = Tween.to(raItemBkg, instant, { attr:{height: '130'} });
      var fullHeight_reset = Tween.to(fullHeight, instant, { attr:{height: '667'} });
      var input_reset = Tween.to(input, instant, { attr:{width: '375', height: '52'} });
      var inputLabel_reset = Tween.to(inputLabel, instant, { attr:{height: '15'} });
      var inputLabelFilled_reset = Tween.to(inputLabelFilled, instant, { attr:{height: '13'} });
      var calField2Text1_reset = Tween.to(calField2Text1, instant, { attr:{width: '280'} });
      var panelWidth_reset = Tween.to(panelWidth, instant, { attr:{width: '358'} });
      var calHeaderBkg_reset = Tween.to(calHeaderBkg, instant, { attr:{width: '620'} });


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


      svg.paused = false;
      svg.addEventListener('click', function() {
        if ( svg.paused ) {
          t1.play();
        } else {
          t1.pause();
        }
        svg.paused = !svg.paused;
      })
    },

    render: function() {
      return (
        <div className="svgHolder" style={{paddingBottom: '77%'}}>
        	<div id="deviceFrame" style={{width: '30.6%', height: '70.6%'}}>
        		<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="aFullyResponsiveCMS" viewBox="0 0 375 667" style={{background: '#e9eef3'}} aria-labelledby="rwdCMS-title" aria-describedby="rwdCMS-desc" role="img">
              <title id="rwdCMS-title">A Fully Responsive CMS</title>
              <desc id="rwdCMS-desc">An animated illustration of a CMS’ UI as it navigates between pages and adapts to different device sizes.</desc>
        			<filter id="shadow--y" width="150%" height="150%">
        				<feOffset result="offOut" in="SourceAlpha" dx="0" dy="4" />
        				<feGaussianBlur result="blurOut" in="offOut" stdDeviation="8" />
        				<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        			</filter>
        			<filter id="shadow--x" width="150%" height="150%">
        				<feOffset result="offOut" in="SourceAlpha" dx="-4" dy="0" />
        				<feGaussianBlur result="blurOut" in="offOut" stdDeviation="8" />
        				<feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        			</filter>
        			<g id="db">
        				<g id="db-scrollable">
        					<g id="db-tiles" transform="translate(58,612)">
        						<rect className="white" width="260" height="150" />
        						<rect width="260" height="2" fill="#00aeaa" />
        					</g>
        					<g id="db-list" transform="translate(0,237)">
        						<rect id="db-list-outline" className="border" x="-1" y="-1" width="252" height="314" style={{opacity: '0'}}/>
        						<g id="db-list-item-1">
        							<rect id="db-list-item-1-bkg" className="fullWidth listWidth white" width="375" height="52" />
        							<g transform="translate(13,13)">
        								<rect className="icon" width="26" height="26" />
        							</g>
        							<rect x="52" y="15" width="1" height="21" fill="#ddd" />
        							<rect className="black text" x="66" y="18" width="100" height="15" />
        							<rect className="fullWidth listWidth border" x="0" y="52" width="375" height="1" />
        						</g>
        						<g id="db-list-item-2" transform="translate(0,52)">
        							<rect className="fullWidth listWidth white" width="375" height="52" />
        							<g transform="translate(13,13)">
        								<rect className="icon" width="26" height="26" />
        							</g>
        							<rect x="52" y="15" width="1" height="21" fill="#ddd" />
        							<rect className="black text" x="66" y="18" width="120" height="15" />
        							<rect className="fullWidth listWidth border" x="0" y="52" width="375" height="1" />
        						</g>
        						<g id="db-list-item-3" transform="translate(0,104)">
        							<rect className="fullWidth listWidth white" width="375" height="52" />
        							<g transform="translate(13,13)">
        								<rect className="icon" width="26" height="26" />
        							</g>
        							<rect x="52" y="15" width="1" height="21" fill="#ddd" />
        							<rect className="black text" x="66" y="18" width="100" height="15" />
        							<rect className="fullWidth listWidth border" x="0" y="52" width="375" height="1" />
        						</g>
        						<g id="db-list-item-4" transform="translate(0,156)">
        							<rect className="fullWidth listWidth white" width="375" height="52" />
        							<g transform="translate(13,13)">
        								<rect className="icon" width="26" height="26" />
        							</g>
        							<rect x="52" y="15" width="1" height="21" fill="#ddd" />
        							<rect className="black text" x="66" y="18" width="90" height="15" />
        							<rect className="fullWidth listWidth border" x="0" y="52" width="375" height="1" />
        						</g>
        						<g id="db-list-item-5" transform="translate(0,208)">
        							<rect className="fullWidth listWidth white" width="375" height="52" />
        							<g transform="translate(13,13)">
        								<rect className="icon" width="26" height="26" />
        							</g>
        							<rect x="52" y="15" width="1" height="21" fill="#ddd" />
        							<rect className="black text" x="66" y="18" width="130" height="15" />
        							<rect className="fullWidth listWidth border" x="0" y="52" width="375" height="1" />
        						</g>
        						<g id="db-list-item-6" transform="translate(0,260)">
        							<rect className="fullWidth listWidth white" width="375" height="52" />
        							<g transform="translate(13,13)">
        								<rect className="icon" width="26" height="26" />
        							</g>
        							<rect x="52" y="15" width="1" height="21" fill="#ddd" />
        							<rect className="black text" x="66" y="18" width="100" height="15" />
        							<rect className="fullWidth listWidth border" x="0" y="52" width="375" height="1" />
        						</g>
        					</g>
        					<g id="db-ra" transform="translate(375,237)">
        						<rect id="db-ra-outline" className="border" x="-1" y="-1" width="632" height="418" />
        						<g id="db-ra-scrollable" transform="translate(0,80)">
        							<g id="db-ra-item-1">
        								<rect className="fullWidth raWidth white db-ra-item-bkg" width="375" height="130" />
        								<rect className="blue text heading" x="10" y="15" width="230" height="15" />
        								<rect className="text" x="296" y="15" width="68" height="15" />
        								<rect className="text db-ra-item-shift" x="314" y="35" width="50" height="12" />
        								<rect className="text db-ra-item-hide" x="10" y="54" width="100" height="12" />
        								<rect className="text db-ra-item-hide" x="10" y="84" width="88" height="12" />
        								<rect className="icon db-ra-item-icon" x="329" y="87" width="26" height="26" />
        								<rect className="border fullWidth raWidth db-ra-item-border" x="0" y="130" width="375" height="1" />
        							</g>
        							<g id="db-ra-item-2" transform="translate(0,130)">
        								<rect className="fullWidth raWidth white db-ra-item-bkg" width="375" height="130" />
        								<rect className="blue text heading" x="10" y="15" width="200" height="15" />
        								<rect className="text" x="296" y="15" width="68" height="15" />
        								<rect className="text db-ra-item-shift" x="314" y="35" width="50" height="12" />
        								<rect className="text db-ra-item-hide" x="10" y="54" width="100" height="12" />
        								<rect className="text db-ra-item-hide" x="10" y="84" width="88" height="12" />
        								<rect className="icon db-ra-item-icon" x="329" y="87" width="26" height="26" />
        								<rect className="border fullWidth raWidth db-ra-item-border" x="0" y="130" width="375" height="1" />
        							</g>
        							<g id="db-ra-item-3" transform="translate(0,260)">
        								<rect className="fullWidth raWidth white db-ra-item-bkg" width="375" height="130" />
        								<rect className="blue text heading" x="10" y="15" width="210" height="15" />
        								<rect className="text" x="296" y="15" width="68" height="15" />
        								<rect className="text db-ra-item-shift" x="314" y="35" width="50" height="12" />
        								<rect className="text db-ra-item-hide" x="10" y="54" width="100" height="12" />
        								<rect className="text db-ra-item-hide" x="10" y="84" width="88" height="12" />
        								<rect className="icon db-ra-item-icon" x="329" y="87" width="26" height="26" />
        								<rect className="border fullWidth raWidth db-ra-item-border" x="0" y="130" width="375" height="1" />
        							</g>
        							<g id="db-ra-item-4" transform="translate(0,390)">
        								<rect id="db-ra-item-4-bkg" className="fullWidth raWidth white db-ra-item-bkg" width="375" height="130" />
        								<rect className="blue text heading" x="10" y="15" width="240" height="15" />
        								<rect className="text" x="296" y="15" width="68" height="15" />
        								<rect className="text db-ra-item-shift" x="314" y="35" width="50" height="12" />
        								<rect className="text db-ra-item-hide" x="10" y="54" width="100" height="12" />
        								<rect className="text db-ra-item-hide" x="10" y="84" width="88" height="12" />
        								<rect className="icon db-ra-item-icon" x="329" y="87" width="26" height="26" />
        								<rect className="border fullWidth raWidth db-ra-item-border" x="0" y="130" width="375" height="1" />
        							</g>
        							<g id="db-ra-item-5" transform="translate(0,520)">
        								<rect className="fullWidth raWidth white db-ra-item-bkg" width="375" height="130" />
        								<rect className="blue text heading" x="10" y="15" width="210" height="15" />
        								<rect className="text" x="296" y="15" width="68" height="15" />
        								<rect className="text db-ra-item-shift" x="314" y="35" width="50" height="12" />
        								<rect className="text db-ra-item-hide" x="10" y="54" width="100" height="12" />
        								<rect className="text db-ra-item-hide" x="10" y="84" width="88" height="12" />
        								<rect className="icon db-ra-item-icon" x="329" y="87" width="26" height="26" />
        								<rect className="border fullWidth raWidth db-ra-item-border" x="0" y="130" width="375" height="1" />
        							</g>
        							<g id="db-ra-item-6" transform="translate(0,650)">
        								<rect className="fullWidth raWidth white db-ra-item-bkg" width="375" height="130" />
        								<rect className="blue text heading" x="10" y="15" width="220" height="15" />
        								<rect className="text" x="296" y="15" width="68" height="15" />
        								<rect className="text db-ra-item-shift" x="314" y="35" width="50" height="12" />
        								<rect className="text db-ra-item-hide" x="10" y="54" width="100" height="12" />
        								<rect className="text db-ra-item-hide" x="10" y="84" width="88" height="12" />
        								<rect className="icon db-ra-item-icon" x="329" y="87" width="26" height="26" />
        								<rect className="border fullWidth raWidth db-ra-item-border" x="0" y="130" width="375" height="1" />
        							</g>
        							<g id="db-ra-item-7" transform="translate(0,780)">
        								<rect className="fullWidth raWidth white db-ra-item-bkg" width="375" height="130" />
        								<rect className="blue text heading" x="10" y="15" width="200" height="15" />
        								<rect className="text" x="296" y="15" width="68" height="15" />
        								<rect className="text db-ra-item-shift" x="314" y="35" width="50" height="12" />
        								<rect className="text db-ra-item-hide" x="10" y="54" width="100" height="12" />
        								<rect className="text db-ra-item-hide" x="10" y="84" width="88" height="12" />
        								<rect className="icon db-ra-item-icon" x="329" y="87" width="26" height="26" />
        								<rect className="border fullWidth raWidth db-ra-item-border" x="0" y="130" width="375" height="1" />
        							</g>
        						</g>
        						<g id="db-ra-header">
        							<rect id="db-ra-header-shadow" className="fullWidth raWidth accent" width="375" height="82" filter="url(#shadow--y)" style={{opacity: '0'}} />
        							<rect id="db-ra-header-bkg" className="fullWidth raWidth accent" width="375" height="82" />
        							<rect id="db-ra-header-icon" className="icon--blue" x="12" y="28" width="26" height="26" />
        							<rect id="db-ra-header-seperator" x="51" y="30" width="1" height="20" fill="#a6c0d6" />
        							<rect id="db-ra-header-title" className="blue text heading" x="66" y="16" width="101" height="14" />
        							<rect id="db-ra-header-count" className="text" x="316" y="16" width="43" height="12" />
        							<g id="db-ra-header-button1" transform="translate(66,40)">
        								<rect className="button" width="80" height="30" />
        								<rect className="text" x="7" y="9" width="66" height="12" />
        								<rect className="buttonBorder" x="0" y="28" width="80" height="2" />
        							</g>
        							<g id="db-ra-header-button2" transform="translate(163,40)">
        								<rect className="button" width="80" height="30" />
        								<rect className="text" x="7" y="9" width="66" height="12" />
        								<rect className="buttonBorder" x="0" y="28" width="80" height="2" />
        							</g>
        							<rect id="db-ra-header-border" className="fullWidth raWidth blue" x="0" y="80" width="375" height="2" />
        						</g>
        					</g>
        					<g id="db-ru" transform="translate(0,50)">
        						<rect id="db-ru-outline" className="border" x="-1" y="-1" width="930" height="74" style={{opacity: '0'}} />
        						<rect id="db-ru-bkg" className="fullWidth white" width="375" height="187" />
        						<rect id="db-ru-heading" className="black text" x="141" y="18" width="93" height="16" />
        						<g id="db-ru-icon-1" transform="translate(44.5,52)">
        							<rect className="icon--blue" width="26" height="26" />
        							<rect className="blue text" x="-5" y="36" width="36" height="12" />
        						</g>
        						<g id="db-ru-icon-2" transform="translate(174.5,52)">
        							<rect className="icon--blue" width="26" height="26" />
        							<rect className="blue text" x="-10" y="36" width="46" height="12" />
        						</g>
        						<g id="db-ru-icon-3" transform="translate(304.5,52)">
        							<rect className="icon--blue" width="26" height="26" />
        							<rect className="blue text" x="-5" y="36" width="36" height="12" />
        						</g>
        						<g id="db-ru-icon-4" transform="translate(44.5,122)">
        							<rect className="icon--blue" width="26" height="26" />
        							<rect className="blue text" x="-10" y="36" width="46" height="12" />
        						</g>
        						<g id="db-ru-icon-5" transform="translate(174.5,122)">
        							<rect className="icon--blue" width="26" height="26" />
        							<rect className="blue text" x="-20" y="36" width="66" height="12" />
        						</g>
        						<g id="db-ru-icon-6" transform="translate(304.5,122)">
        							<rect className="icon--blue" width="26" height="26" />
        							<rect className="blue text" x="-10" y="36" width="46" height="12" />
        						</g>
        						<rect id="db-ru-border" className="fullWidth border" x="0" y="187" width="375" height="1" />
        					</g>
        					<g id="db-header" transform="translate(0,50)" style={{opacity: '0'}}>
        						<rect id="db-header-bkg" className="blue" width="1024" height="130" />
        						<rect className="icon--white" x="48" y="30" width="70" height="70" />
        						<rect className="text white heading" x="133" y="40" width="100" height="20" />
        						<rect className="text white" x="133" y="70" width="120" height="15" />
        						<g id="db-search" transform="translate(800,43)">
        							<rect className="white" width="170" height="44" />
        							<rect className="button" x="126" y="0" width="44" height="44" />
        							<rect className="text" x="14" y="14" width="50" height="15" />
        						</g>
        					</g>
        				</g>
        			</g>
        			<g id="cal" style={{opacity: '0'}}>
        				<g id="cal-scrollable">
        					<g id="cal-form-scrollable" transform="translate(0,180)">
        						<g id="cal-form-main">
        							<g id="cal-form-field-1">
        								<rect className="input input--main filled" x="-1" y="0" width="375" height="52" />
        								<rect className="blue text input-label--filled" x="14" y="7" width="60" height="13" />
        								<rect className="text input-value" x="14" y="27" width="170" height="15" />
        							</g>
        							<g id="cal-form-field-2" transform="translate(0,51)">
        								<rect id="cal-form-field-2-bkg" className="input input--main filled" x="-1" y="0" width="375" height="52" />
        								<rect className="blue text input-label--filled" x="14" y="7" width="90" height="13" />
        								<rect id="cal-form-field-2-text-1" className="text input-value" x="14" y="27" width="280" height="15" />
        								<rect id="cal-form-field-2-text-2" className="text input-value" x="14" y="47" width="370" height="15" style={{opacity: '0'}}/>
        								<rect id="cal-form-field-2-text-3" className="text input-value" x="14" y="67" width="200" height="15" style={{opacity: '0'}}/>
        							</g>
        							<g id="cal-form-field-3" transform="translate(0,102)">
        								<rect className="input input--main" x="-1" y="0" width="375" height="52" />
        								<rect className="blue text input-label" x="14" y="18" width="120" height="15" />
        							</g>
        							<g id="cal-form-field-4" transform="translate(0,153)">
        								<rect className="input input--main" x="-1" y="0" width="375" height="52" />
        								<rect className="blue text input-label" x="14" y="18" width="150" height="15" />
        							</g>
        						</g>
        						<rect id="cal-divider" className="border" x="483" y="110" width="1" height="440" style={{opacity: '0'}}/>
        						<g id="cal-form-addtl" transform="translate(0,233)">
        							<rect id="cal-form-addtl-heading" className="text" x="14" y="0" width="120" height="15" />
        							<g id="cal-form-field-5" transform="translate(0,37)">
        								<rect id="cal-form-field-5-bkg" className="input input--addtl" x="-1" y="0" width="375" height="52" />
        								<rect className="blue text input-label input-label--addtl" x="14" y="18" width="100" height="15" />
        								<rect className="cal-form-addtl-border border" x="0" y="52" width="375" height="1" style={{opacity: '0'}}/>
        							</g>
        							<g id="cal-form-field-6" transform="translate(0,88)">
        								<rect className="input input--addtl" x="-1" y="0" width="375" height="52" />
        								<rect className="blue text input-label input-label--addtl" x="14" y="18" width="130" height="15" />
        								<rect className="cal-form-addtl-border border" x="0" y="52" width="375" height="1" style={{opacity: '0'}}/>
        							</g>
        							<g id="cal-form-field-7" transform="translate(0,139)">
        								<rect className="input input--addtl" x="-1" y="0" width="375" height="52" />
        								<rect className="blue text input-label input-label--addtl" x="14" y="18" width="160" height="15" />
        								<rect className="cal-form-addtl-border border" x="0" y="52" width="375" height="1" style={{opacity: '0'}}/>
        							</g>
        							<g id="cal-form-field-8" transform="translate(0,190)">
        								<rect className="input input--addtl" x="-1" y="0" width="375" height="52" />
        								<rect className="blue text input-label input-label--addtl" x="14" y="18" width="120" height="15" />
        								<rect className="cal-form-addtl-border border" x="0" y="52" width="375" height="1" style={{opacity: '0'}}/>
        							</g>
        							<g id="cal-form-field-9" transform="translate(0,241)">
        								<rect className="input input--addtl" x="-1" y="0" width="375" height="52" />
        								<rect className="blue text input-label input-label--addtl" x="14" y="18" width="140" height="15" />
        								<rect className="cal-form-addtl-border border" x="0" y="52" width="375" height="1" style={{opacity: '0'}}/>
        							</g>
        							<g id="cal-form-field-10" transform="translate(0,292)">
        								<rect className="input input--addtl" x="-1" y="0" width="375" height="52" />
        								<rect className="blue text input-label input-label--addtl" x="14" y="18" width="150" height="15" />
        								<rect className="cal-form-addtl-border border" x="0" y="52" width="375" height="1" style={{opacity: '0'}}/>
        							</g>
        						</g>
        					</g>
        					<g id="cal-titlebar" transform="translate(0,50)">
        						<rect id="cal-titlebar-shadow" width="375" height="44" fill="#e9eef3" filter="url(#shadow--y)" />
        						<g id="cal-buttons">
        							<g id="cal-buttons-1">
        								<rect className="button" width="95" height="44" />
        								<rect className="text" x="14" y="16" width="67" height="12" />
        								<rect className="buttonBorder" x="0" y="42" width="95" height="2" />
        							</g>
        							<g id="cal-buttons-2" transform="translate(96,0)">
        								<rect className="button" width="161" height="44" />
        								<rect className="text" x="14" y="16" width="133" height="12" />
        								<rect className="buttonBorder" x="0" y="42" width="161" height="2" />
        							</g>
        							<g id="cal-buttons-3" transform="translate(258,0)">
        								<rect className="green" width="117" height="44" />
        								<rect className="text" x="14" y="16" width="89" height="12" />
        								<rect className="greenBorder" x="0" y="42" width="117" height="2" />
        							</g>
        						</g>
        						<g id="cal-breadcrumbs" transform="translate(14,68)">
        							<rect className="blue text" width="68" height="12" />
        							<rect className="blue text" x="98" y="0" width="68" height="12" />
        						</g>
        						<rect id="cal-title" className="text heading" x="14" y="98" width="140" height="15" />
        					</g>
        					<g id="cal-header" transform="translate(0,-80)">
        						<rect id="cal-header-bkg" className="blue" x="100" y="0" width="620" height="130" />
        						<rect className="icon--white" x="148" y="30" width="70" height="70" />
        						<rect className="text white heading" x="233" y="40" width="100" height="20" />
        						<rect className="text white" x="233" y="70" width="60" height="15" />
        						<g id="cal-search" transform="translate(505,43)">
        							<rect className="white" width="170" height="44" />
        							<rect className="button" x="126" y="0" width="44" height="44" />
        							<rect className="text" x="14" y="14" width="50" height="15" />
        						</g>
        					</g>
        				</g>
        				<g id="cal-navbar" transform="translate(-100,50)">
        					<rect className="darkBlue" width="100" height="718" />
        					<g transform="translate(0,130)">
        						<rect width="101" height="72" fill="#e9eef3" />
        						<rect className="icon--blue" x="37" y="13" width="26" height="26" />
        						<rect className="text blue" x="32" y="45" width="36" height="13" />
        					</g>
        					<g transform="translate(0,202)">
        						<rect className="icon--white" x="37" y="13" width="26" height="26" />
        						<rect className="text white" x="27" y="45" width="46" height="13" />
        					</g>
        					<g transform="translate(0,274)">
        						<rect className="icon--white" x="37" y="13" width="26" height="26" />
        						<rect className="text white" x="32" y="45" width="36" height="13" />
        					</g>
        					<g transform="translate(0,346)">
        						<rect className="icon--white" x="37" y="13" width="26" height="26" />
        						<rect className="text white" x="22" y="45" width="56" height="13" />
        					</g>
        					<g transform="translate(0,418)">
        						<rect className="icon--white" x="37" y="13" width="26" height="26" />
        						<rect className="text white" x="32" y="45" width="36" height="13" />
        					</g>
        					<g transform="translate(0,490)">
        						<rect className="icon--white" x="37" y="13" width="26" height="26" />
        						<rect className="text white" x="27" y="45" width="46" height="13" />
        					</g>
        				</g>
        			</g>
        			<g id="toolbar">
        				<rect id="toolbar-shadow" className="fullWidth" width="375" height="50" filter="url(#shadow--y)" />
        				<rect id="toolbar-bkg" className="fullWidth white" width="375" height="50" />
        				<rect className="toolbar-border fullWidth red" width="375" height="3" />
        				<g id="hamburger" transform="translate(10,16)">
        					<rect className="black" width="25" height="3" />
        					<rect className="black" x="0" y="8" width="25" height="3" />
        					<rect className="black" x="0" y="16" width="25" height="3" />
        				</g>
        				<rect id="toolbar-title" className="text heading" x="46" y="18" width="75" height="15" />
        				<g id="toolbar-items--left" style={{opacity: '0'}}>
        					<g>
        						<rect className="red" x="12" y="12" width="26" height="26" />
        					</g>
        					<g transform="translate(50,0)">
        						<rect id="toolbar-dbLink" x="0" y="3" width="108" height="47" fill="white" />
        						<rect className="icon" x="12" y="12" width="26" height="26" />
        						<rect className="text" x="48" y="17" width="50" height="15" />
        					</g>
        					<g transform="translate(158,0)">
        						<rect className="icon" x="12" y="12" width="26" height="26" />
        						<rect className="text" x="48" y="17" width="50" height="15" />
        					</g>
        					<g transform="translate(266,0)">
        						<rect className="icon" x="12" y="12" width="26" height="26" />
        						<rect className="text" x="48" y="17" width="50" height="15" />
        					</g>
        				</g>
        				<g id="toolbar-items--right" transform="translate(440,0)" style={{opacity: '0'}}>
        					<g>
        						<rect className="icon" x="12" y="12" width="26" height="26" />
        						<rect className="text" x="48" y="17" width="50" height="15" />
        					</g>
        					<g transform="translate(108,0)">
        						<rect className="icon" x="12" y="12" width="26" height="26" />
        						<rect className="text" x="48" y="17" width="50" height="15" />
        					</g>
        				</g>
        				<rect className="toolbar-border fullWidth border" x="0" y="49" width="375" height="1" />
        			</g>
        			<rect id="overlay" className="fullWidth fullHeight overlay" width="375" height="667" />
        			<g id="panel" transform="translate(425,0)" filter="url(#shadow--x)">
        				<rect className="fullHeight panelWidth white" width="356" height="667" />
        				<rect className="accent panelWidth" width="356" height="50" />
        				<rect className="blue" width="80" height="50" />
        				<rect className="white text heading" x="25" y="17" width="35" height="15" />
        				<rect className="text heading" x="100" y="17" width="170" height="15" />
        				<g transform="translate(0,50)">
        					<g id="panel-form-field-1" transform="translate(0,0)">
        						<rect className="input panelWidth" x="-1" y="0" width="358" height="52" />
        						<rect className="blue text" x="14" y="18" width="120" height="15" />
        					</g>
        					<g id="panel-form-field-2" transform="translate(0,51)">
        					<rect className="input panelWidth" x="-1" y="0" width="358" height="52" />
        					<rect className="blue text" x="14" y="18" width="150" height="15" />
        					</g>
        					<g id="panel-form-field-3" transform="translate(0,102)">
        						<rect className="input panelWidth" x="-1" y="0" width="358" height="52" />
        						<rect className="blue text" x="14" y="18" width="140" height="15" />
        					</g>
        					<g id="panel-form-field-4" transform="translate(0,153)">
        					<rect className="input panelWidth" x="-1" y="0" width="358" height="52" />
        					<rect className="blue text" x="14" y="18" width="90" height="15" />
        					</g>
        					<g id="panel-form-field-5" transform="translate(0,204)">
        						<rect className="input panelWidth" x="-1" y="0" width="358" height="52" />
        						<rect className="blue text" x="14" y="18" width="180" height="15" />
        					</g>
        					<g id="panel-form-field-6" transform="translate(0,255)">
        						<rect className="input panelWidth" x="-1" y="0" width="358" height="52" />
        						<rect className="blue text" x="14" y="18" width="150" height="15" />
        					</g>
        				</g>
        			</g>
        		</svg>
        	</div>
        </div>
      )
    }

  }),

  // Live example: http://codepen.io/kylegach/pen/XdZjVX
  AnAllNewWayToBuildWebsites: React.createClass({

    componentDidMount: function() {
      var Tween = TweenLite;
      var Timeline = TimelineMax;


      var svg = document.getElementById('anAllNewWayToBuildWebsites');
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
      var rect0_strokeReset = Tween.to(rects[0], instant, { strokeDasharray: '5000 5000', strokeDashoffset: '0' } );
      var rect4_strokeReset = Tween.to(rects[4], instant, { strokeDasharray: '5000 5000', strokeDashoffset: '0' } );

      var rect6 = Tween.to(rects[6], normal, { strokeDashoffset: '1' });
      var rect7 = Tween.to(rects[7], normal, { strokeDashoffset: '1' });
      var rect8 = Tween.to(rects[8], normal, { strokeDashoffset: '1' });
      var rect8_strokeReset = Tween.to(rects[8], instant, { strokeDasharray: '5000 5000', strokeDashoffset: '0' } );

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
      var rect0_widgetBP = Tween.to(rects[0], fast, { attr:{width: '615', height: '912'} });
      var rect2_widgetBP = Tween.to(rects[2], fast, { x: '295', attr:{width: '300'} });
      var rect3_widgetBP = Tween.to(rects[3], fast, { attr:{width: '575'} });
      var rect4_widgetBP = Tween.to(rects[4], fast, { x: '262', attr:{width: '333', height: '582'} });
      var rect5_widgetBP = Tween.to(rects[5], fast, { attr:{width: '222'} });
      var container_widgetBP = Tween.to(container, fast, { x: '282' });
      var rect6_widgetBP = Tween.to(rects[6], fast, { attr:{width: '194', height: '425'} });
      var rect7_widgetBP = Tween.to(rects[7], fast, { y: '445', attr:{width: '194'} });
      var rect8_widgetBP = Tween.to(rects[8], fast, { x: '214', attr:{width: '79'} });
      var widgetCol2_widgetBP = Tween.to(widgetCol2, fast, { x: '0', y: '244' });

      var SVG_containerBP = Tween.to(svg, fast, { attr:{viewBox: '0 0 1024 1330'} });
      var layout_containerBP = Tween.to(layout, fast, { x: '287' });
      var rect0_containerBP = Tween.to(rects[0], fast, { attr:{width: '450', height: '1330'} });
      var rect1_containerBP = Tween.to(rects[1], fast, { attr:{width: '150'} });
      var rect2_containerBP = Tween.to(rects[2], fast, { x: '190', attr:{width: '240'} });
      var rect3_containerBP = Tween.to(rects[3], fast, { attr:{width: '410'} });
      var rect4_containerBP = Tween.to(rects[4], fast, { x: '196', attr:{width: '234', height: '1000'} });
      var rect5_containerBP = Tween.to(rects[5], fast, { attr:{width: '156'} });
      var container_containerBP = Tween.to(container, fast, { x: '216' });
      var rect6_containerBP = Tween.to(rects[6], fast, {  });
      var rect7_containerBP = Tween.to(rects[7], fast, {  });
      var rect8_containerBP = Tween.to(rects[8], fast, { x: '0', y: '562', attr:{width: '194'} });

      var SVG_layoutBP = Tween.to(svg, fast, { attr:{viewBox: '0 0 1024 1858'} });
      var layout_layoutBP = Tween.to(layout, fast, { x: '375' });
      var rect0_layoutBP = Tween.to(rects[0], fast, { attr:{width: '274', height: '1858'} });
      var rect1_layoutBP = Tween.to(rects[1], fast, { x: '62', y: '80' });
      var rect2_layoutBP = Tween.to(rects[2], fast, { x: '0', y: '0', attr:{width: '274'} });
      var rect3_layoutBP = Tween.to(rects[3], fast, { y: '160', attr:{width: '234'} });
      var rect4_layoutBP = Tween.to(rects[4], fast, { x: '20', y: '380', attr:{width: '234', height: '1000'} });
      var rect5_layoutBP = Tween.to(rects[5], fast, { y: '1400', attr:{width: '234'} });
      var container_layoutBP = Tween.to(container, fast, { x: '40', y: '400' });

      var SVG_layoutZoom = Tween.to(svg, normal, { attr:{viewBox: '287 0 450 1330'}, delay: '0.5' });
      var layout_layoutBP_rev = Tween.to(layout, normal, { x: '287' });
      var rect0_layoutBP_rev = Tween.to(rects[0], normal, { attr:{width: '450', height: '1330'} });
      var rect1_layoutBP_rev = Tween.to(rects[1], normal, { x: '20', y: '20', attr:{width: '150'} });
      var rect2_layoutBP_rev = Tween.to(rects[2], normal, { x: '190', y: '20', attr:{width: '240'} });
      var rect3_layoutBP_rev = Tween.to(rects[3], normal, { y: '90', attr:{width: '410'} });
      var rect4_layoutBP_rev = Tween.to(rects[4], normal, { x: '196', y: '310', attr:{width: '234', height: '1000'} });
      var rect5_layoutBP_rev = Tween.to(rects[5], normal, { y: '310', attr:{width: '156'} });
      var container_layoutBP_rev = Tween.to(container, normal, { x: '216', y: '330' });

      var SVG_containerZoom = Tween.to(svg, normal, { attr:{viewBox: '204.5 0 615 912'}, delay: '0.5' });
      var layout_containerBP_rev = Tween.to(layout, normal, { x: '204.5' });
      var rect0_containerBP_rev = Tween.to(rects[0], normal, { attr:{width: '615', height: '912'} });
      var rect1_containerBP_rev = Tween.to(rects[1], normal, { attr:{width: '200'} });
      var rect2_containerBP_rev = Tween.to(rects[2], normal, { x: '295', attr:{width: '300'} });
      var rect3_containerBP_rev = Tween.to(rects[3], normal, { attr:{width: '575'} });
      var rect4_containerBP_rev = Tween.to(rects[4], normal, { x: '262', attr:{width: '333', height: '582'} });
      var rect5_containerBP_rev = Tween.to(rects[5], normal, { attr:{width: '222'} });
      var container_containerBP_rev = Tween.to(container, normal, { x: '282' });
      var rect8_containerBP_rev = Tween.to(rects[8], normal, { x: '214', y: '0', attr:{width: '79'} });

      var SVG_widgetZoom = Tween.to(svg, normal, { attr:{viewBox: '0 0 1024 768'}, delay: '0.5' });
      var layout_widgetBP_rev = Tween.to(layout, normal, { x: '0' });
      var rect0_widgetBP_rev = Tween.to(rects[0], normal, { attr:{width: '1024', height: '768'} });
      var rect2_widgetBP_rev = Tween.to(rects[2], normal, { x: '504', attr:{width: '500'} });
      var rect3_widgetBP_rev = Tween.to(rects[3], normal, { attr:{width: '984'} });
      var rect4_widgetBP_rev = Tween.to(rects[4], normal, { x: '423', attr:{width: '581', height: '438'} });
      var rect5_widgetBP_rev = Tween.to(rects[5], normal, { attr:{width: '383'} });
      var container_widgetBP_rev = Tween.to(container, normal, { x: '443' });
      var rect6_widgetBP_rev = Tween.to(rects[6], normal, { attr:{width: '374', height: '281'} });
      var rect7_widgetBP_rev = Tween.to(rects[7], normal, { y: '301', attr:{width: '374'} });
      var rect8_widgetBP_rev = Tween.to(rects[8], normal, { x: '394', attr:{width: '150'} });
      var widgetCol2_widgetBP_rev = Tween.to(widgetCol2, normal, { x: '187', y: '52' });

      // This block of tweens is needed to enable clean looping
      var rect0_reset = Tween.to(rects[0], instant, { attr:{width: '1024', height: '768'} });
      var rect1_reset = Tween.to(rects[1], instant, { attr:{width: '200'} });
      var rect2_reset = Tween.to(rects[2], instant, { attr:{width: '500'} });
      var rect3_reset = Tween.to(rects[3], instant, { attr:{width: '984'} });
      var rect4_reset = Tween.to(rects[4], instant, { attr:{width: '581', height: '438'} });
      var rect5_reset = Tween.to(rects[5], instant, { attr:{width: '383'} });
      var rect6_reset = Tween.to(rects[6], instant, { attr:{width: '374', height: '281'} });
      var rect7_reset = Tween.to(rects[7], instant, { attr:{width: '374'} });
      var rect8_reset = Tween.to(rects[8], instant, { attr:{width: '150'} });


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


      svg.paused = false;
      svg.addEventListener('click', function() {
        if ( svg.paused ) {
          t1.play();
        } else {
          t1.pause();
        }
        svg.paused = !svg.paused;
      })
    },

    render: function() {
      return (
        <div className="svgHolder">
        	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="anAllNewWayToBuildWebsites" viewBox="0 0 1024 768" style={{width: '100%', height: '100%'}} aria-labelledby="buildWebsites-title" aria-describedby="buildWebsites-desc" role="img">
          <title id="buildWebsites-title">An All-New Way to Build Websites</title>
          <desc id="buildWebsites-desc">An animated illustration of a simplified website layout as it adapts to different device sizes.</desc>
        		<g id="layout">
        			<rect id="layout-1" className="layout" width="1024" height="768" style={{strokeWidth: '8'}} />
        			<rect id="layout-2" className="layout" width="200" height="50" transform="translate(20,20)" />
        			<rect id="layout-3" className="layout" width="500" height="50" transform="translate(504,20)" />
        			<rect id="layout-4" className="layout" width="984" height="200" transform="translate(20,90)" />
        			<rect id="layout-5" className="layout" width="581" height="438" transform="translate(423,310)" />
        			<rect id="layout-6" className="layout" width="383" height="438" transform="translate(20,310)" />
        			<g id="container" transform="translate(443,330)">
        				<rect id="container-1" className="container" width="374" height="281" />
        				<rect id="container-2" className="container" width="374" height="97" transform="translate(0,301)" />
        				<rect id="container-3" className="container" width="150" height="398" transform="translate(394,0)" />
        				<g id="widget" transform="translate(20,20)">
        					<rect id="widget-title" className="widget" width="127" height="1" style={{strokeWidth: '24'}} transform="translate(8,12)" />
        					<g id="widget-col1" transform="translate(0,52)">
        						<rect id="widget-text-1" className="widget" width="121" height="1" transform="translate(8,8)"/>
        						<rect id="widget-text-2" className="widget" width="131" height="1" transform="translate(8,40)"/>
        						<rect id="widget-text-3" className="widget" width="111" height="1" transform="translate(8,72)"/>
        						<rect id="widget-text-4" className="widget" width="121" height="1" transform="translate(8,104)"/>
        						<rect id="widget-text-5" className="widget" width="131" height="1" transform="translate(8,136)"/>
        						<rect id="widget-text-6" className="widget" width="91" height="1" transform="translate(8,168)"/>
        					</g>
        					<g id="widget-col2" transform="translate(187,52)">
        						<rect id="widget-text-7" className="widget" width="101" height="1" transform="translate(8,8)"/>
        						<rect id="widget-text-8" className="widget" width="91" height="1" transform="translate(8,40)"/>
        						<rect id="widget-text-9" className="widget" width="121" height="1" transform="translate(8,72)"/>
        						<rect id="widget-text-10" className="widget" width="101" height="1" transform="translate(8,104)"/>
        						<rect id="widget-text-11" className="widget" width="111" height="1" transform="translate(8,136)"/>
        					</g>
        				</g>
        			</g>
        		</g>
        	</svg>
        </div>
      )
    }

  })

}

export default Figures
