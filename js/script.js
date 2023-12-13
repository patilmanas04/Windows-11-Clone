// search icon and home icon script 


let home_icon = document.querySelector(".home");
let startmenu = document.querySelector(".startmenu");
startmenu.style.bottom = "-600px";

let search_icon = document.querySelector("#search-icon-taskbar");
let searchmenu = document.querySelector(".search")
searchmenu.style.bottom = "-600px";



home_icon.addEventListener("click", function(){

    if(startmenu.style.bottom === "-600px"){
        startmenu.style.bottom = "55px";

        searchmenu.style.bottom = "-600px";
        widget_menu.style.left = "-600px";
        quick_settings_panel.style.bottom = "-500px";
        show_hidden_icons_menu.style.bottom = "-100px";
        notification_area.style.right = "-400px";
    }
    else{
        startmenu.style.bottom = "-600px";
    }

});

search_icon.addEventListener("click", function(){

    if(searchmenu.style.bottom === "-600px"){
        searchmenu.style.bottom = "55px";

        startmenu.style.bottom = "-600px";
        widget_menu.style.left = "-600px";
        quick_settings_panel.style.bottom = "-500px";
        show_hidden_icons_menu.style.bottom = "-100px";
        notification_area.style.right = "-400px";
    }
    else{
        searchmenu.style.bottom = "-600px";
    }

});



// widget menu on-click script
let widget_icon = document.querySelector(".widget");
let widget_menu = document.querySelector(".widget-menu");
widget_menu.style.left = "-600px";

widget_icon.addEventListener("click", function(){
    if(widget_menu.style.left === "-600px"){
        widget_menu.style.left = "9px";

        startmenu.style.bottom = "-600px";
        searchmenu.style.bottom = "-600px";
        quick_settings_panel.style.bottom = "-500px";
        show_hidden_icons_menu.style.bottom = "-100px";
        notification_area.style.right = "-400px";
    }
    else{
        widget_menu.style.left = "-600px";
    }
});





// quick settings panel on-click script
let control_shortcuts = document.querySelector(".control-shortcuts");
let quick_settings_panel = document.querySelector(".quick-settings-panel");
quick_settings_panel.style.bottom = "-500px";

control_shortcuts.addEventListener("click", function(){
    if(quick_settings_panel.style.bottom === "-500px"){
        quick_settings_panel.style.bottom = "55px";

        startmenu.style.bottom = "-600px";
        searchmenu.style.bottom = "-600px";
        widget_menu.style.left = "-600px";
        show_hidden_icons_menu.style.bottom = "-100px";
        notification_area.style.right = "-400px";
    }
    else{
        quick_settings_panel.style.bottom = "-500px";
    }
});





// updating date and time
function updateTime(){
    let classTime = document.querySelector(".time");
    let classDate = document.querySelector(".date");
    
    
    let now = new Date();
    
    let time_hh = now.getHours();
    let time_mm = now.getMinutes();
    let amOrPm = time_hh >= 12 ? 'PM' : 'AM';
    let hoursIn12HourFormat = time_hh % 12;
    hoursIn12HourFormat = hoursIn12HourFormat ? hoursIn12HourFormat : 12;

    if(hoursIn12HourFormat.toString().length === 1){
        hoursIn12HourFormat = hoursIn12HourFormat.toString();
        hoursIn12HourFormat = "0" + hoursIn12HourFormat;
    }

    if(time_mm.toString().length === 1){
        time_mm = time_mm.toString();
        time_mm = "0" + time_mm;
    }
    
    let time = hoursIn12HourFormat + ":" + time_mm + " " + amOrPm;
    classTime.innerHTML = time;
    
    
    let date_dd = now.getDate();
    let date_mm = now.getMonth();
    let date_yy = now.getFullYear();
    
    let date = date_dd + "/" + date_mm + "/" + date_yy.toString().slice(2);
    classDate.innerHTML = date;
}

setInterval(updateTime, 1000);










//search bar, select bar script
let select_bar_all_icon = document.querySelector(".all");
let select_bar_apps_icon = document.querySelector(".apps");
let select_bar_documents_icon = document.querySelector(".documents");
let select_bar_web_icon = document.querySelector(".web");
let select_bar_more_icon = document.querySelector(".more");

select_bar_all_icon.style.borderBottom = "2px solid #40759b";
select_bar_apps_icon.style.borderBottom = "2px solid transparent";
select_bar_documents_icon.style.borderBottom = "2px solid transparent";
select_bar_web_icon.style.borderBottom = "2px solid transparent";
select_bar_more_icon.style.borderBottom = "2px solid transparent";


select_bar_all_icon.addEventListener("click", function(){
    select_bar_all_icon.style.borderBottom = "2px solid #40759b";
    
    select_bar_apps_icon.style.borderBottom = "2px solid transparent";
    select_bar_documents_icon.style.borderBottom = "2px solid transparent";
    select_bar_web_icon.style.borderBottom = "2px solid transparent";
    select_bar_more_icon.style.borderBottom = "2px solid transparent";
});

select_bar_apps_icon.addEventListener("click", function(){
    select_bar_apps_icon.style.borderBottom = "2px solid #40759b";

    select_bar_all_icon.style.borderBottom = "2px solid transparent";
    select_bar_documents_icon.style.borderBottom = "2px solid transparent";
    select_bar_web_icon.style.borderBottom = "2px solid transparent";
    select_bar_more_icon.style.borderBottom = "2px solid transparent";
});

select_bar_documents_icon.addEventListener("click", function(){
    select_bar_documents_icon.style.borderBottom = "2px solid #40759b";
    
    select_bar_all_icon.style.borderBottom = "2px solid transparent";
    select_bar_apps_icon.style.borderBottom = "2px solid transparent";
    select_bar_web_icon.style.borderBottom = "2px solid transparent";
    select_bar_more_icon.style.borderBottom = "2px solid transparent";
});

select_bar_web_icon.addEventListener("click", function(){
    select_bar_web_icon.style.borderBottom = "2px solid #40759b";
    
    select_bar_all_icon.style.borderBottom = "2px solid transparent";
    select_bar_apps_icon.style.borderBottom = "2px solid transparent";
    select_bar_documents_icon.style.borderBottom = "2px solid transparent";
    select_bar_more_icon.style.borderBottom = "2px solid transparent";
});

select_bar_more_icon.addEventListener("click", function(){
    select_bar_more_icon.style.borderBottom = "2px solid #40759b";
    
    select_bar_all_icon.style.borderBottom = "2px solid transparent";
    select_bar_apps_icon.style.borderBottom = "2px solid transparent";
    select_bar_documents_icon.style.borderBottom = "2px solid transparent";
    select_bar_web_icon.style.borderBottom = "2px solid transparent";
});









// quick settings panels script
let wifi_icon = document.querySelector(".js-wifi");
let bluetooth_icon = document.querySelector(".js-bluetooth");
let airplane_mode_icon = document.querySelector(".js-airplane-mode");
let battery_saver_icon = document.querySelector(".js-battery-saver");
let alarms_only_icon = document.querySelector(".js-alarms-only");
let accessibility_icon = document.querySelector(".js-accessibility");
let night_light_icon = document.querySelector(".js-night-light");
wifi_icon.style.background = "#0068c0";
bluetooth_icon.style.background = "#0068c0";
wifi_icon.innerHTML = "<img src='icons/wifi-white.png' alt=''>";
bluetooth_icon.innerHTML = "<img src='icons/bluetooth-white.png' alt=''>";

let flag1 = 1;
wifi_icon.addEventListener("click", function(){
    if(flag1 === 0){
        wifi_icon.style.background = "#0068c0";
        wifi_icon.innerHTML = "<img src='icons/wifi-white.png' alt=''>";
        flag1 = 1;
    }
    else{
        wifi_icon.style.background = "#fcfbfc";
        wifi_icon.innerHTML = "<img src='icons/wifi.png' alt=''>";
        flag1 = 0;
    }
});

let flag2 = 1;
bluetooth_icon.addEventListener("click", function(){
    if(flag2 === 0){
        bluetooth_icon.style.background = "#0068c0";
        bluetooth_icon.innerHTML = "<img src='icons/bluetooth-white.png' alt=''>";
        flag2 = 1;
    }
    else{
        bluetooth_icon.style.background = "#fcfbfc";
        bluetooth_icon.innerHTML = "<img src='icons/bluetooth.png' alt=''>";
        flag2 = 0;
    }
});

let flag3 = 0;
airplane_mode_icon.addEventListener("click", function(){
    if(flag3 === 0){
        airplane_mode_icon.style.background = "#0068c0";
        airplane_mode_icon.innerHTML = "<img src='icons/plane-alt-white.png' alt=''>";
        flag3 = 1;
    }
    else{
        airplane_mode_icon.style.background = "#fcfbfc";
        airplane_mode_icon.innerHTML = "<img src='icons/plane-alt.png' alt=''>";
        flag3 = 0;
    }
});

let flag4 = 0;
battery_saver_icon.addEventListener("click", function(){
    if(flag4 === 0){
        battery_saver_icon.style.background = "#0068c0";
        battery_saver_icon.innerHTML = "<img src='icons/leaf-white.png' alt=''>";
        flag4 = 1;
    }
    else{
        battery_saver_icon.style.background = "#fcfbfc";
        battery_saver_icon.innerHTML = "<img src='icons/leaf.png' alt=''>";
        flag4 = 0;
    }
});

let flag5 = 0;
alarms_only_icon.addEventListener("click", function(){
    if(flag5 === 0){
        alarms_only_icon.style.background = "#0068c0";
        alarms_only_icon.innerHTML = "<img src='icons/moon-white.png' alt=''>";
        flag5 = 1;
    }
    else{
        alarms_only_icon.style.background = "#fcfbfc";
        alarms_only_icon.innerHTML = "<img src='icons/moon.png' alt=''>";
        flag5 = 0;
    }
});

let flag6 = 0;
accessibility_icon.addEventListener("click", function(){
    if(flag6 === 0){
        accessibility_icon.style.background = "#0068c0";
        accessibility_icon.innerHTML = "<img src='icons/gingerbread-man-white.png' alt=''> <img src='icons/angle-small-right-white.png' alt=''>";
        flag6 = 1;
    }
    else{
        accessibility_icon.style.background = "#fcfbfc";
        accessibility_icon.innerHTML = "<img src='icons/gingerbread-man.png' alt=''> <img src='icons/angle-small-right.png' alt=''>";
        flag6 = 0;
    }
});

let flag7 = 0;
night_light_icon.addEventListener("click", function(){
    if(flag7 === 0){
        night_light_icon.style.background = "#0068c0";
        night_light_icon.innerHTML = "<img src='icons/eclipse-alt-white.png' alt=''>";
        flag7 = 1;
    }
    else{
        night_light_icon.style.background = "#fcfbfc";
        night_light_icon.innerHTML = "<img src='icons/eclipse-alt.png' alt=''>";
        flag7 = 0;
    }
});

// navigator.getBattery();




// Right click context menu and submenu positioning script
let view_submenu = document.querySelector(".view-submenu");
let sort_by_submenu = document.querySelector(".sort-by-submenu");
let new_item_submenu = document.querySelector(".new-item-submenu");
let context_menu = document.querySelector(".right-click-menu");
// context_menu.style.opacity = "0";
// context_menu.style.display = "none";
context_menu.style.visibility = "hidden";

let submenu = document.getElementsByClassName("submenu");

window.addEventListener("contextmenu", function(e){
    e.preventDefault();
    
    let x = e.clientX;
    let y = e.clientY;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let menuWidth = context_menu.offsetWidth;
    let menuHeight = context_menu.offsetHeight;

    let effective_submenu_width = windowWidth - (menuWidth + 160); 

    view_submenu.style.left = "252px";
    sort_by_submenu.style.left = "252px";
    new_item_submenu.style.left = "252px";

    if(x > effective_submenu_width){
        view_submenu.style.left = "-153px";
        sort_by_submenu.style.left = "-153px";
        new_item_submenu.style.left = "-153px";
    }
    
    if(x > (windowWidth - menuWidth)){
        x = windowWidth - menuWidth;
        view_submenu.style.left = "-153px";
        sort_by_submenu.style.left = "-153px";
        new_item_submenu.style.left = "-153px";
    }
    if(y > (windowHeight - menuHeight)){
        y = windowHeight - menuHeight;
    }

    
    context_menu.style.top = y + "px";
    context_menu.style.left = x + "px";
    context_menu.style.visibility = "visible";
    // context_menu.style.opacity = "100";
});

window.addEventListener("click", function(){
    // context_menu.style.opacity = "0";
    // context_menu.style.display = "none";
    context_menu.style.visibility = "hidden";
});


















// view submenu
let large_view_button = document.querySelector(".large");
let large_view = document.querySelector(".large-select");

let medium_view_button = document.querySelector(".medium");
let medium_view = document.querySelector(".medium-select");

let small_view_button = document.querySelector(".small");
let small_view = document.querySelector(".small-select");
small_view.style.visibility = "visible";

large_view_button.addEventListener("click", function(){
    large_view.style.visibility = "visible";
    medium_view.style.visibility = "hidden";
    small_view.style.visibility = "hidden";
});

medium_view_button.addEventListener("click", function(){
    large_view.style.visibility = "hidden";
    medium_view.style.visibility = "visible";
    small_view.style.visibility = "hidden";
});

small_view_button.addEventListener("click", function(){
    large_view.style.visibility = "hidden";
    medium_view.style.visibility = "hidden";
    small_view.style.visibility = "visible";
});











let show_hidden_icons_option = document.querySelector(".menu-up");
let show_hidden_icons_menu = document.querySelector(".show-hidden-icons");
show_hidden_icons_menu.style.bottom = "-100px";

show_hidden_icons_option.addEventListener("click", function(){
    if(show_hidden_icons_menu.style.bottom === "-100px"){
        show_hidden_icons_menu.style.bottom = "55px";

        notification_area.style.right = "-400px";
        quick_settings_panel.style.bottom = "-500px";
        startmenu.style.bottom = "-600px";
        searchmenu.style.bottom = "-600px";
        widget_menu.style.left = "-600px";
    }
    else{
        show_hidden_icons_menu.style.bottom = "-100px";
    }
});












//changing date in notification area


function updateCalenderDate(){
    let calender_date_div = document.querySelector(".calender-date");
    let calender_date = new Date();
    let calender_dd = calender_date.getDate();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = dayNames[calender_date.getDay()];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[calender_date.getMonth()];

    calender_date_div.innerHTML = day + ", " + calender_dd + " " + month;
} 

setInterval(updateCalenderDate, 1000);



//date and time click event to open the notification area
let date_time_taskbar_option = document.querySelector(".date-time");
let notification_area = document.querySelector(".notification-area");
notification_area.style.right = "-400px";

date_time_taskbar_option.addEventListener("click", function(){
    if(notification_area.style.right === "-400px"){
        notification_area.style.right = "9px";

        quick_settings_panel.style.bottom = "-500px";
        startmenu.style.bottom = "-600px";
        searchmenu.style.bottom = "-600px";
        widget_menu.style.left = "-600px";
        show_hidden_icons_menu.style.bottom = "-100px";
    }
    else{
        notification_area.style.right = "-400px";
    }
});









