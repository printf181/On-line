eval(function (p, a, c, k, e, r) {
	e = function (c) {
		return (c < 62 ? '' : e(parseInt(c / 62))) + ((c = c % 62) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
	};
	if ('0'.replace(0, e) == 0) {
		while (c--) r[e(c)] = k[c];
		k = [function (e) {
			return r[e] || e
		}];
		e = function () {
			return '[2-9a-df-qs-wyzA-D]'
		};
		c = 1
	};
	while (c--)
		if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
	return p
}(
	';(6($){3 c=new Array("jq22.com");3 d=document.location.href;3 8=i;9(d.j("http")!=-1){for(r=0;r<c.length;r++){9(d.j(c[r])!=-1){8=k;break}}}l{8=k}9(!8){m i}$.fn.7=6(options){3 n=$(\'<o p="4-2"></o>\');3 q=$(\'<s p="2-t">x</s>\');m 5.each(6(){3 7=$(5);7.u(\'v\',\'.a-4\',6(e){e.preventDefault();3 a=$(5);3 2=$(5).w(\'.f-2\');3 y=2.b(\'.f-4\').html();9(2.z().hasClass(\'4-2\')){2.z().g().slideToggle()}l{7.b(\'.a-4\').A(\'h\');7.b(\'.4-2\').g().B(6(){$(5).remove()});3 C=n.clone();C.D(y).D(q).insertAfter(2).slideDown()}$(5).toggleClass(\'h\')}).u(\'v\',\'.2-t\',6(){$(5).w(\'.4-2\').g().B().prev(\'.f-2\').b(\'.a-4\').A(\'h\')})})}})(jQuery);', [],
	40,
	'||block|var|code|this|function|livedemo|accepted_ok|if|btn|find|accepted_domains|domaincheck||demo|stop|filled|false|indexOf|true|else|return|codeblock|div|class|blockclose||span|close|on|click|parents||codes|next|removeClass|slideUp|newblock|append'
	.split('|'), 0, {}))
