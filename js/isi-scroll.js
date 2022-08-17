/*	 __
	||  | ___   __
	||  |/ __|||  |
	|||||\__ \|||||
	||__||___/||__|
	 ___   ____   ____   ____    __      __
	/ __| /  __||| __ \ /    \ ||  |   ||  |
	\__ \|| |__ || |/_/||||||||||  |__ ||  |__  
	|___/ \____|||__|_\ \____/ ||_____|||_____|

	Version 1.0

	**********************
	** Start #Important **
	**********************
		- For this can work, the Div.container of the ISI must to have an ID called "isi" in lowercase.
		<div id="isi">
			Isi content
		</div>

		- Besides that, the ISI container must to have the CSS property OVERFLOW with the value "auto", this will show the scroll-bar
	*********************
	** Ends #Important **
	*********************
*/

//*************************************************************************
//** Here START the code that you will have to copy inside of a <script> **
//*************************************************************************

//Definition of Variables
var scroll_velocity = 0.5; //This will set in seconds how many lines will scroll by second
var delay_to_start = 1; //This will set in seconds how many time must to wait to start the scroll

//Convert Seconds to Miliseconds - IMPORTANT, DO NOT TOUCH THIS
var velocity_to_ms = scroll_velocity * 100;
scroll_velocity = velocity_to_ms;
var delay_to_ms = delay_to_start * 1000;
delay_to_start = delay_to_ms;

//This function init the scroll
function scroll_init() {
	isi_div = document.getElementById('isi');//The container of the isi
	
	
	//If the mouse enter to the ISI container, the auto-scroll will stop
	isi_div.onmouseenter = () => pauseScroll();
	//If the mouse leave the ISI container, the auto-scroll will start
	isi_div.onmouseleave= () => resumeScroll();
	
	reached_max_scroll = false; //Set that it is not at the end of the content
	isi_div.scrollTop = 0; //Set the scroll from the top
	previus_scroll = 0; //Set the actual position of the content
	
	scroll_interval = setInterval('scroll()', scroll_velocity);//Set the velocity of the scroll
}
//This activate the scroll if this is not at the end of the content
function scroll() {
	if (!reached_max_scroll) {
		isi_div.scrollTop = previus_scroll; //Set the actual position of the content
		previus_scroll++; //Plus another row to the last position
		reached_max_scroll = isi_div.scrollTop >= (isi_div.scrollHeight - isi_div.offsetHeight); //This validates if we are at the end of the content.
	}
}
//This will stop the scroll
function pauseScroll() {
	clearInterval(scroll_interval); //This will the scroll_interval and stop the scroll
}
//This will start the scroll from the actual position
function resumeScroll() {
	previus_scroll = isi_div.scrollTop; //Set where is the actual position of the content
	delay_to_start = 0;
	scroll_interval = setInterval('scroll()', scroll_velocity); //This will set the scroll_interval again
}
//This will init the scroll with the delay setted
window.onload = setTimeout( function() {
	scroll_init();
}, delay_to_start);

//************************************************************************
//** Here ENDS the code that you will have to copy inside of a <script> **
//************************************************************************
