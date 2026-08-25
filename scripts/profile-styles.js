hexo.extend.injector.register(
  'head_end',
  '<link rel="stylesheet" href="/css/profile.css">'
);

hexo.extend.filter.register('after_render:html', function (html, data) {
  let output = html;

  if (data.path && data.path.startsWith('archives/')) {
    const writingHeader = [
      '<div id="archive">',
      '<header class="writing-header">',
      '<span class="writing-kicker">Writing</span>',
      '<h1>Notes &amp; Writing</h1>',
      '<p>Notes on research, engineering, and things I am learning.</p>',
      '</header>'
    ].join('');

    output = output.replace('<div id="archive">', writingHeader);
  }

  if (data.path && /^\d{4}\/\d{2}\/\d{2}\//.test(data.path)) {
    const postHeader = [
      '<header id="header" class="unified-post-header">',
      '<a class="u-url u-uid" href="/">',
      '<div id="title"><h1 class="p-name">Jinyu Zhang</h1></div>',
      '</a>',
      '<nav id="nav" aria-label="Primary navigation"><ul>',
      '<li><a href="/">Home</a></li>',
      '<li><a href="/#research">Research</a></li>',
      '<li><a href="/#publications">Publications</a></li>',
      '<li><a href="/#opensource">Open Source</a></li>',
      '<li><a href="/#experience">Experience</a></li>',
      '<li><a href="/#writing">Writing</a></li>',
      '</ul></nav>',
      '</header>'
    ].join('');

    output = output.replace('<article class="post h-entry"', postHeader + '<article class="post h-entry"');
  }

  return output;
});
