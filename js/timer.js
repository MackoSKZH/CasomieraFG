var _0x3463b6 = _0x5895;
(function(_0x241422, _0x2637b0) {
    var _0xa7b714 = _0x5895
      , _0x4aa124 = _0x241422();
    while (!![]) {
        try {
            var _0x3f4b40 = parseInt(_0xa7b714(0xa8)) / 0x1 + parseInt(_0xa7b714(0x94)) / 0x2 + parseInt(_0xa7b714(0xa5)) / 0x3 * (-parseInt(_0xa7b714(0xb6)) / 0x4) + parseInt(_0xa7b714(0x9f)) / 0x5 * (-parseInt(_0xa7b714(0x98)) / 0x6) + parseInt(_0xa7b714(0xae)) / 0x7 * (-parseInt(_0xa7b714(0x9c)) / 0x8) + parseInt(_0xa7b714(0xbf)) / 0x9 * (-parseInt(_0xa7b714(0x9e)) / 0xa) + parseInt(_0xa7b714(0xba)) / 0xb * (parseInt(_0xa7b714(0xa2)) / 0xc);
            if (_0x3f4b40 === _0x2637b0)
                break;
            else
                _0x4aa124['push'](_0x4aa124['shift']());
        } catch (_0x27a497) {
            _0x4aa124['push'](_0x4aa124['shift']());
        }
    }
}(_0x3dfa, 0xb8417));
var minutes_disp = document[_0x3463b6(0x90)]('minutes')
  , seconds_disp = document[_0x3463b6(0x90)](_0x3463b6(0x9d))
  , dots_disp = document[_0x3463b6(0x90)]('dots')
  , time_cell = document[_0x3463b6(0x90)]('time_cell')
  , first_logo = document[_0x3463b6(0x90)]('first_logo')
  , season_logo = document[_0x3463b6(0x90)]('season_logo')
  , title01_box = document['getElementById'](_0x3463b6(0xb3))
//   , title02_box = document[_0x3463b6(0x90)]('title_row_02')
  , state = 'standby'
  , timer = setInterval(function() {})
  , audio_start = new Audio(_0x3463b6(0xb9))
  , audio_chime = new Audio(_0x3463b6(0xa9))
  , audio_tick = new Audio(_0x3463b6(0xc2))
  , audio_end = new Audio(_0x3463b6(0xa6));
window[_0x3463b6(0xb8)] = function() {
    var _0x2974fb = _0x3463b6;
    !show_first_logo && (first_logo['style']['opacity'] = 0x0),
    !show_seasong_logo && (_0x2974fb(0xaa) === _0x2974fb(0x95) ? _0x2d03bf(_0x8ef776, _0x2974fb(0x97)) : season_logo[_0x2974fb(0xab)][_0x2974fb(0xb2)] = 0x0),
    title01_box[_0x2974fb(0xc0)] = title01,
    // title02_box['textContent'] = title02,
    audio_start[_0x2974fb(0xb4)](),
    audio_chime[_0x2974fb(0xb4)](),
    audio_tick[_0x2974fb(0xb4)](),
    audio_end[_0x2974fb(0xb4)](),
    audio_start['volume'] = 0.8,
    audio_chime['volume'] = 0.8,
    audio_tick[_0x2974fb(0x96)] = 0.7,
    audio_end[_0x2974fb(0x96)] = 0x1,
    reset();
}
;
function submit() {
    var _0x1792a9 = _0x3463b6;
    alert(_0x1792a9(0xa0)),
    console[_0x1792a9(0xa3)]('submit');
}
function startTimer() {
    var _0x4e51ec = _0x3463b6;
    addClass(dots_disp, _0x4e51ec(0xad));
    var _0x5aa0c4 = set_time, _0x5b7f87, _0x2d1ccd;
    timer = setInterval(function() {
        var _0x183a04 = _0x4e51ec;
        _0x5aa0c4 > 0x0 && (_0x183a04(0xbc) !== _0x183a04(0x9a) ? --_0x5aa0c4 : (_0x25d026 = _0x41b2aa,
        _0xd76be0 = _0x183a04(0xc3),
        _0x3d73be(_0x20e83b, _0x183a04(0xad)),
        _0x244e34(_0x48b1a4, 'animate-fade'),
        _0x261285(_0x305fb6, _0x183a04(0xac)),
        _0x36620c(),
        _0x2184ac(_0xa1fbaa))),
        show_time(_0x5aa0c4),
        handle_sound(_0x5aa0c4),
        _0x5aa0c4 <= 0xa && (addClass(minutes_disp, _0x183a04(0xac)),
        addClass(seconds_disp, _0x183a04(0xac))),
        _0x5aa0c4 <= 0x0 && ('UdJxo' !== _0x183a04(0x91) ? (_0x5aa0c4 = set_time,
        state = _0x183a04(0xc3),
        removeClass(dots_disp, 'animate-blink'),
        removeClass(minutes_disp, _0x183a04(0xac)),
        removeClass(seconds_disp, _0x183a04(0xac)),
        red_fx(),
        clearInterval(timer)) : (_0x51346f = 'running',
        _0x174b97 && _0x5c2b56[_0x183a04(0xb5)](),
        _0x103c16(_0x5a7691)));
    }, 0x3e8);
}
function red_fx() {
    var _0x3ba778 = _0x3463b6;
    addClass(time_cell, _0x3ba778(0x97)),
    setTimeout(function() {
        var _0x1b41b0 = _0x3ba778;
        removeClass(time_cell, _0x1b41b0(0x97));
    }, 0x7d0);
}
function _0x3dfa() {
    var _0x547f2c = ['569988wzdGHY', 'YjNFp', 'volume', 'animate-strobe', '214566jvcgdC', 'Start\x20audio\x20volume:\x20(Leave\x20blank\x20for:\x20', 'BILEN', 'keypress', '127096kgcOMI', 'seconds', '1117700eYNHSy', '85owzcDU', 'Submitting', 'location', '16941276yHzKdF', 'log', 'xEIWR', '18534uebhoZ', 'audio/end.mp3', 'menu', '1167025NhvIxA', 'audio/chime.mp3', 'zoVQk', 'style', 'animate-fade', 'animate-blink', '238zlBBLz', 'dWwct', 'Reminder\x20audio\x20volume:\x20(Leave\x20blank\x20for:\x20', 'LsRYY', 'opacity', 'title_row_01', 'load', 'play', '188gwhFiV', 'addEventListener', 'onload', 'audio/start.mp3', '11vgcJkO', 'assign', 'ovYKk', 'ETqCf', 'LccQR', '54EdGAnv', 'textContent', 'running', 'audio/tick.mp3', 'standby', 'getElementById', 'JDxtg', 'keyCode', 'fmgZc'];
    _0x3dfa = function() {
        return _0x547f2c;
    }
    ;
    return _0x3dfa();
}
function show_time(_0x168e14) {
    var _0x119c5f = _0x3463b6;
    minutes = parseInt(_0x168e14 / 0x3c, 0xa),
    seconds = parseInt(_0x168e14 % 0x3c, 0xa),
    minutes = minutes < 0xa ? '0' + minutes : minutes,
    seconds = seconds < 0xa ? '0' + seconds : seconds,
    minutes_disp[_0x119c5f(0xc0)] = minutes,
    seconds_disp['textContent'] = seconds;
}
function reset() {
    var _0x330ff7 = _0x3463b6;
    show_time(set_time),
    state = 'standby',
    removeClass(dots_disp, _0x330ff7(0xad)),
    removeClass(minutes_disp, _0x330ff7(0xac)),
    removeClass(seconds_disp, 'animate-fade'),
    clearInterval(timer);
}
function _0x5895(_0x3fba8c, _0xe07f5d) {
    var _0x3dfa65 = _0x3dfa();
    return _0x5895 = function(_0x5895a3, _0x2f8843) {
        _0x5895a3 = _0x5895a3 - 0x90;
        var _0x48a9a4 = _0x3dfa65[_0x5895a3];
        return _0x48a9a4;
    }
    ,
    _0x5895(_0x3fba8c, _0xe07f5d);
}
function handle_sound(_0x1cfac7) {
    var _0x281517 = _0x3463b6;
    if (_0x1cfac7 == 0x0)
        audio_end['play']();
    else {
        if (_0x1cfac7 == chime_time)
            _0x281517(0xa4) !== _0x281517(0xaf) ? audio_chime[_0x281517(0xb5)]() : _0x29019b[_0x281517(0x96)] = _0x46902c;
        else
            _0x1cfac7 <= beeps && (_0x281517(0xb1) !== _0x281517(0xb1) ? (_0x5ca506 = _0x11a597(_0x2b9e8c / 0x3c, 0xa),
            _0x155ff1 = _0x46df10(_0x469bc7 % 0x3c, 0xa),
            _0x505f7a = _0x2520af < 0xa ? '0' + _0x51716f : _0x5dc175,
            _0x5dcd30 = _0x2cbf00 < 0xa ? '0' + _0xd08fb9 : _0xc18b19,
            _0x1a13af[_0x281517(0xc0)] = _0x586c0c,
            _0x14acda[_0x281517(0xc0)] = _0x274998) : audio_tick[_0x281517(0xb5)]());
    }
}
function audio_setup() {
    var _0x805976 = _0x3463b6, _0x1a1169;
    _0x1a1169 = prompt(_0x805976(0x99) + audio_start[_0x805976(0x96)] + ')');
    isNumeric(_0x1a1169) && (_0x1a1169 >= 0x0 && _0x1a1169 <= 0x1 && (audio_start[_0x805976(0x96)] = _0x1a1169));
    _0x1a1169 = prompt(_0x805976(0xb0) + audio_chime[_0x805976(0x96)] + ')');
    isNumeric(_0x1a1169) && (_0x1a1169 >= 0x0 && _0x1a1169 <= 0x1 && ('Soqra' !== 'Soqra' ? --_0x341059 : audio_chime[_0x805976(0x96)] = _0x1a1169));
    _0x1a1169 = prompt('Tick\x20audio\x20volume:\x20(Leave\x20blank\x20for:\x20' + audio_tick['volume'] + ')');
    isNumeric(_0x1a1169) && (_0x1a1169 >= 0x0 && _0x1a1169 <= 0x1 && (audio_tick['volume'] = _0x1a1169));
    _0x1a1169 = prompt('End\x20audio\x20volume:\x20(Leave\x20blank\x20for:\x20' + audio_end[_0x805976(0x96)] + ')');
    if (isNumeric(_0x1a1169)) {
        if (_0x805976(0xbd) !== _0x805976(0xbd)) {
            if (_0x2afa83 == 0x0)
                _0x89ff97[_0x805976(0xb5)]();
            else {
                if (_0x28d88a == _0x2692e1)
                    _0x1a1682['play']();
                else
                    _0x2465ee <= _0x4495f9 && _0x1a2f42[_0x805976(0xb5)]();
            }
        } else
            _0x1a1169 >= 0x0 && _0x1a1169 <= 0x1 && (audio_end['volume'] = _0x1a1169);
    }
}
document[_0x3463b6(0xb7)](_0x3463b6(0x9b), keyEvent);
function keyEvent(_0x10804d) {
    var _0x587d41 = _0x3463b6;
    if (!(state == _0x587d41(0xa7)))
        switch (_0x10804d[_0x587d41(0x92)]) {
        case 0x20:
            if (state == _0x587d41(0xc3))
                _0x587d41(0xbe) !== _0x587d41(0x93) ? (state = _0x587d41(0xc1),
                play_start_sound && audio_start[_0x587d41(0xb5)](),
                startTimer(set_time)) : _0x3a4576['play']();
            else
                state == 'running' && (state = 'standby',
                removeClass(dots_disp, 'animate-blink'),
                removeClass(minutes_disp, 'animate-fade'),
                removeClass(seconds_disp, _0x587d41(0xac)),
                clearInterval(timer));
            break;
        case 0x72:
            reset();
            break;
        case 0x73:
            audio_setup();
            break;
        case 0x71:
            window[_0x587d41(0xa1)][_0x587d41(0xbb)]('index.html');
            break;
        default:
            break;
        }
}
