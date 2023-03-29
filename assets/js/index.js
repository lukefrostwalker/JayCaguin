const _0x29a3d9 = _0x3777;
(function (_0x51acf1, _0x457590) {
    const _0x28981f = _0x3777,
        _0x36d0d1 = _0x51acf1();
    while (!![]) {
        try {
            const _0x367640 =
                -parseInt(_0x28981f(0x134)) / 0x1 +
                -parseInt(_0x28981f(0x13a)) / 0x2 +
                parseInt(_0x28981f(0x12e)) / 0x3 +
                parseInt(_0x28981f(0x132)) / 0x4 +
                (-parseInt(_0x28981f(0x13c)) / 0x5) *
                    (-parseInt(_0x28981f(0x137)) / 0x6) +
                parseInt(_0x28981f(0x12f)) / 0x7 +
                (-parseInt(_0x28981f(0x135)) / 0x8) *
                    (parseInt(_0x28981f(0x133)) / 0x9);
            if (_0x367640 === _0x457590) break;
            else _0x36d0d1['push'](_0x36d0d1['shift']());
        } catch (_0x18f8df) {
            _0x36d0d1['push'](_0x36d0d1['shift']());
        }
    }
})(_0x5397, 0xeccfe);
import {
    renderFooter,
    renderSkills,
    renderNav,
    renderWorks,
} from './render.js';
const currentUrl = window[_0x29a3d9(0x12d)][_0x29a3d9(0x130)];
AOS['init'](), renderNav();
(currentUrl[_0x29a3d9(0x138)](_0x29a3d9(0x139)) > -0x1 ||
    currentUrl[_0x29a3d9(0x138)](_0x29a3d9(0x13b)) > -0x1 ||
    currentUrl[_0x29a3d9(0x138)]('contact') > -0x1 ||
    currentUrl['indexOf']('thank-you') > -0x1) &&
    renderFooter();
function _0x5397() {
    const _0x4e1bc9 = [
        'works',
        '1351018OnihyA',
        'about',
        '9612145vDyitZ',
        'location',
        '4808181VqTliL',
        '13542487yvQqvb',
        'href',
        'Tooltip',
        '613028RbNyRl',
        '4545DhOdyP',
        '1415798qFqQSu',
        '40424FPEeHz',
        'map',
        '6fqsXob',
        'indexOf',
    ];
    _0x5397 = function () {
        return _0x4e1bc9;
    };
    return _0x5397();
}
function _0x3777(_0x265797, _0x5a4d2e) {
    const _0x539753 = _0x5397();
    return (
        (_0x3777 = function (_0x377718, _0x1bb30a) {
            _0x377718 = _0x377718 - 0x12d;
            let _0x2aabcd = _0x539753[_0x377718];
            return _0x2aabcd;
        }),
        _0x3777(_0x265797, _0x5a4d2e)
    );
}
if (currentUrl[_0x29a3d9(0x138)](_0x29a3d9(0x139)) > -0x1) renderWorks();
else currentUrl[_0x29a3d9(0x138)](_0x29a3d9(0x13b)) > -0x1 && renderSkills();
const tooltipTriggerList = document['querySelectorAll'](
        '[data-bs-toggle=\x22tooltip\x22]'
    ),
    tooltipList = [...tooltipTriggerList][_0x29a3d9(0x136)](
        (_0x486b78) => new bootstrap[_0x29a3d9(0x131)](_0x486b78)
    );
