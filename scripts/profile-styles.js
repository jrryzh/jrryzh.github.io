hexo.extend.injector.register(
  'head_end',
  '<link rel="stylesheet" href="/css/profile.css">'
);

hexo.extend.filter.register('after_render:html', function (html, data) {
  if (!data.path || !data.path.startsWith('archives/')) {
    return html;
  }

  const writingHeader = [
    '<div id="archive">',
    '<header class="writing-header">',
    '<span class="writing-kicker">Writing</span>',
    '<h1>Notes &amp; Writing</h1>',
    '<p>Notes on research, engineering, and things I am learning.</p>',
    '</header>'
  ].join('');

  return html.replace('<div id="archive">', writingHeader);
});
