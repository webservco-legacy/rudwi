jQuery.preloadContent = function(){
  for(var i = 0; i<arguments.length; i++)
  {
    jQuery("<div>").html(arguments[i]);
  }
}