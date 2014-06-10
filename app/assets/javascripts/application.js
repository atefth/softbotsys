// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require twitter/bootstrap/bootstrap-collapse
//= require_tree .

function show_robotics_tab () {
	$('#robotics_tab').slideDown(500);
	hide_software_tab();
	hide_solutions_tab();
}

function show_software_tab () {
	$('#software_tab').slideDown(500);
	hide_robotics_tab();
	hide_solutions_tab();
}

function show_solutions_tab () {
	$('#solutions_tab').slideDown(500);
	hide_software_tab();
	hide_robotics_tab();
}

function hide_robotics_tab () {
	$('#robotics_tab').slideUp(500);
}

function hide_software_tab () {
	$('#software_tab').slideUp(500);
}

function hide_solutions_tab () {
	$('#solutions_tab').slideUp(500);
}