$(document).ready(function() {
  // Block#: 1
  function on_Label_target1_click() {
    try {
      // Block#: 2
      com.fc.JavaScriptDistLib.Label.setProperty["Text color"]("target1", '#ff0000'); // Block#: 4
      com.fc.JavaScriptDistLib.Label.setProperty["Font size"]("target1", 30); // Block#: 6
      com.fc.JavaScriptDistLib.Label.setProperty["Font family"]("target1", 'Didot'); // Block#: 8
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("content", com.fc.JavaScriptDistLib.Label.getProperty["Text"]("target1")); // Block#: 116
      com.fc.JavaScriptDistLib.Label.setProperty["Max lines"]("content", 0); // Block#: 10
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("family", com.fc.JavaScriptDistLib.Label.getProperty["Font family"]("target1")); // Block#: 12
      com.fc.JavaScriptDistLib.Label.setProperty["Background color"]("color", com.fc.JavaScriptDistLib.Label.getProperty["Text color"]("target1")); // Block#: 14
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("style", com.fc.JavaScriptDistLib.Label.getProperty["Font style"]("target1")); // Block#: 16
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("size", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Label.getProperty["Font size"]("target1")))); // Block#: 19
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("alignment", com.fc.JavaScriptDistLib.Label.getProperty["Text Alignment"]("target1")); // Block#: 21
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("bckcolor", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Label.getProperty["Background color"]("target1")))); // Block#: 24
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("alpha", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Label.getProperty["Alpha"]("target1")))); // Block#: 27
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("width", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Label.getProperty["width"]("target1")))); // Block#: 30
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("height", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Label.getProperty["height"]("target1")))); // Block#: 33
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("y", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Label.getProperty["y"]("target1")))); // Block#: 36
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("x", (com.fc.JavaScriptDistLib.TextLib.convertToText(com.fc.JavaScriptDistLib.Label.getProperty["x"]("target1"))));
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name= "target1"]').on('click', on_Label_target1_click);
  // Block#: 39
  function on_next_click() {
    try {
      // Block#: 40
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      hideScreen.hide();
      let showScreen = $('[obj-name="Screen2"]');
      showScreen.show();
      history.pushState({
        'view': 'Screen2'
      }, 'Screen2', 'Screen2');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="next"]').on('click', on_next_click);
  // Block#: 41
  function on_font2_click() {
    try {
      // Block#: 42
      com.fc.JavaScriptDistLib.Label.setProperty["Font family"]("target2", 'Copperplate');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="font2"]').on('click', on_font2_click);
  // Block#: 44
  function on_next2_click() {
    try {
      // Block#: 45
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      hideScreen.hide();
      let showScreen = $('[obj-name="Screen3"]');
      showScreen.show();
      history.pushState({
        'view': 'Screen3'
      }, 'Screen3', 'Screen3');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="next2"]').on('click', on_next2_click);
  // Block#: 46
  function on_font1_click() {
    try {
      // Block#: 47
      com.fc.JavaScriptDistLib.Label.setProperty["Font family"]("target2", 'Helvetica');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="font1"]').on('click', on_font1_click);
  // Block#: 49
  function on_show_click() {
    try {
      // Block#: 50
      $('[obj-name="target1"]').show();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="show"]').on('click', on_show_click);
  // Block#: 51
  function on_hide_click() {
    try {
      // Block#: 52
      $('[obj-name="target1"]').hide();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="hide"]').on('click', on_hide_click);
  // Block#: 53
  function on_disable_click() {
    try {
      // Block#: 54
      com.fc.JavaScriptDistLib.removeGesture('target1', 'CLICK');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="disable"]').on('click', on_disable_click);
  // Block#: 55
  function on_enable_click() {
    try {
      // Block#: 56
      $('[obj-name= "target1"]').on('click', on_Label_target1_click);
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="enable"]').on('click', on_enable_click);
  // Block#: 70
  function on_Button_click() {
    try {
      // Block#: 71
      let hideScreen = $('.HTML5-deploy-wrapper .Screen:visible');
      hideScreen.hide();
      let showScreen = $('[obj-name="MainScreen"]');
      showScreen.show();
      history.pushState({
        'view': 'MainScreen'
      }, 'MainScreen', 'MainScreen');
      hideScreen.triggerHandler('hide');
      showScreen.triggerHandler('show');
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button"]').on('click', on_Button_click);
  com.fc.JavaScriptDistLib.Screen.screenPopInit();
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 626108-306223-593805-137318
