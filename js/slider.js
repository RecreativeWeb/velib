$(function(){
  carrousel.init($("#carrousel"));
});

var carrousel = {

  nbSlide: 0,
  nbCurrent: 1,
  elemCurrent: null,
  elem: null,
  

  init: function(elem){
    this.nbSlide=elem.find(".slide").length;
    //on crée la navigation
    elem.append('<div class="navigation"></div>');
    for(var i=1; i<=this.nbSlide; i++){
      elem.find('.navigation').append("<span>"+i+"</span>");
    }
    //on créé un evenement qui déclenche la fonction gotoSlide
    elem.find('.navigation span').click(function(){
      carrousel.gotoSlide($(this).text());
    })
    //on initialise notre carrousel
    this.elem=elem;
    elem.find(".slide").hide();//on cache tous les slides
    elem.find(".slide:first").show();//on affiche le premier slide
    this.elemCurrent=elem.find(".slide:first");
    this.elem.find(".navigation span:first").addClass("active");
  },

  gotoSlide: function(num){
    if(num==this.nbCurrent){
      return false;
    }
    this.elemCurrent.fadeOut();
    this.elem.find("#slide"+num).fadeIn();
    this.elem.find(".navigation span").removeClass("active");
    this.elem.find(".navigation span:eq("+(num-1)+")").addClass("active");
    this.nbCurrent=num;
    this.elemCurrent=this.elem.find("#slide"+num);
  }
}



