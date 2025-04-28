var url = window.location.href;
let params = (new URL(url)).searchParams;

if (params.get('set_time')) {
    var set_time = (params.get('set_time') ? params.get('set_time') : 150);
    var show_first_logo = ((params.get('show_first') == 'on') ? true : false);
    var show_seasong_logo = ((params.get('show_season') == 'on') ? true : false);
    var play_start_sound = ((params.get('play_start') == 'on') ? true : false);
    var play_end_sound = ((params.get('play_end') == 'on') ? true : false);
    var chime_time = (params.get('chime_time') ? params.get('chime_time') : 30);
    var beeps = (params.get('tick_count') ? params.get('tick_count') : 5);
    var title01 = (params.get('timer_title_01') ? params.get('timer_title_01') : 'FIRST Global Slovensko');
    // var title02 = (params.get('timer_title_02') ? params.get('timer_title_02') : '2025');
} else {
    var set_time = 150;
    var show_first_logo = true;
    var show_seasong_logo = true;
    var play_start_sound = true;
    var play_end_sound = true;
    var chime_time = 30;
    var beeps = 5;
    var title01 = 'FIRST Global Slovensko';
    // var title02 = '2025';
}