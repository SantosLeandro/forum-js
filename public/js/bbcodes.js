function addBold(){
  var txtarea = document.getElementById('contentArea');
  txtarea.value += '[b][/b]';
  txtarea.focus();
  var end = txtarea.selectionEnd;
  txtarea.selectionEnd= end - 4;
}

function addItalic(){
  var txtarea = document.getElementById('contentArea');
  txtarea.value += '[i][/i]';
  txtarea.focus();
  var end = txtarea.selectionEnd;
  txtarea.selectionEnd= end - 4;
}

function addUnderline(){
  var txtarea = document.getElementById('contentArea');
  txtarea.value += '[u][/u]';
  txtarea.focus();
  var end = txtarea.selectionEnd;
  txtarea.selectionEnd= end - 4;
}


function addImg(){
  var txtarea = document.getElementById('contentArea');
  txtarea.value += '[img][/img]';
  txtarea.focus();
  var end = txtarea.selectionEnd;
  txtarea.selectionEnd= end - 6;
}

function addUrl(){
  var txtarea = document.getElementById('contentArea');
  txtarea.value += '[url=][/url]';
  txtarea.focus();
  var end = txtarea.selectionEnd;
  txtarea.selectionEnd= end - 7;
}

function addCode(){
  var txtarea = document.getElementById('contentArea');
  txtarea.value += '[code][/code]';
  txtarea.focus();
  var end = txtarea.selectionEnd;
  txtarea.selectionEnd= end - 7;
}
