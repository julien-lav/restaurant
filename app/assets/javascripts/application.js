// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery3
//= require jquery_ujs
//= require_tree .




$(document).ready(function() {
 
  
    var one = $('#accueil');
    var two = $('#carte');
    var three = $('#photo');
    var four= $('#avis');
    var five= $('#acces');

   
    var one_paragraph = $('#bloc-accueil');
    var two_paragraph = $('#bloc-carte');
    var three_paragraph = $('#bloc-photo');
    var four_paragraph = $('#bloc-avis');
    var five_paragraph = $('#bloc-acces');

    var visible_element = [];


    var tab_link  = [one, two, three, four, five]
    var tab_paragraph = [one_paragraph, two_paragraph, three_paragraph, four_paragraph, five_paragraph ]


/*
  $('a').click(function(e) {
    e.preventDefault();
    tab_paragraph[$('a').index(this)].attr('style', 'display : none;');
    tab_paragraph.siblings().attr('style', 'display : block;');
  });
*/ /* Ma vie mon oeuvre mes testes !!!*/


/*
  for (var i = 0; i < tab_link.length-1; i++){
    e.preventDefault();
    
    tab_link[i].click(function(e) {
  
      visible_element[0].attr('style', 'display : none;');
      visible_element = [];
   
      tab_paragraph[i].attr('style', 'display : block;');
   
      visible_element.push(tab_paragraph[i]);
    });
   }
*/ /* Encore des testes*/

  /* code a factoriser */

   tab_link[0].click(function(e) {
    e.preventDefault();
        tab_paragraph[0].attr('style', 'display : block;');
        tab_paragraph[1].attr('style', 'display : none;');
        tab_paragraph[2].attr('style', 'display : none;'); 
        tab_paragraph[3].attr('style', 'display : none;');
        tab_paragraph[4].attr('style', 'display : none;');
    });

   tab_link[1].click(function(e) {
    e.preventDefault();
        tab_paragraph[0].attr('style', 'display : none;');
        tab_paragraph[1].attr('style', 'display : block;');
        tab_paragraph[2].attr('style', 'display : none;'); 
        tab_paragraph[3].attr('style', 'display : none;');
        tab_paragraph[4].attr('style', 'display : none;');
    });

   tab_link[2].click(function(e) {
    e.preventDefault();
        tab_paragraph[0].attr('style', 'display : none;');
        tab_paragraph[1].attr('style', 'display : none;');
        tab_paragraph[2].attr('style', 'display : block;');
        tab_paragraph[3].attr('style', 'display : none;');
        tab_paragraph[4].attr('style', 'display : none;');
    });

   tab_link[3].click(function(e) {
    e.preventDefault();
        tab_paragraph[0].attr('style', 'display : none;');
        tab_paragraph[1].attr('style', 'display : none;');
        tab_paragraph[2].attr('style', 'display : none;'); 
        tab_paragraph[3].attr('style', 'display : block;');
        tab_paragraph[4].attr('style', 'display : none;');
    });

   tab_link[4].click(function(e) {
    e.preventDefault();
        tab_paragraph[0].attr('style', 'display : none;');
        tab_paragraph[1].attr('style', 'display : none;');
        tab_paragraph[2].attr('style', 'display : none;');  
        tab_paragraph[3].attr('style', 'display : none;');
        tab_paragraph[4].attr('style', 'display : block;');
    });
});