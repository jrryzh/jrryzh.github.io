(function () {
  'use strict';

  const content = {
    person: {
      name: 'Jinyu Zhang',
      role: 'Third-year Ph.D. student in Embodied Intelligence',
      affiliation: 'Shanghai Innovation Institute (SII) · Fudan University',
      current: 'Research intern at Agibot Finch, advised by Professor Jianlan Luo.',
      bio: 'I work on embodied intelligence and robot learning, with a focus on VLA models, scalable pre-training, and general-purpose manipulation.',
      photo: '/assets/home/jinyu-academic.JPG'
    },
    links: [
      { label: 'Email', href: 'mailto:zhangjinyu25@sii.edu.cn' },
      { label: 'GitHub', href: 'https://github.com/jrryzh', external: true },
      { label: 'Hugging Face', href: 'https://huggingface.co/J3rr1', external: true }
    ],
    research: [
      {
        title: 'Embodied pre-training',
        text: 'Data, objectives, architectures, and inference for scalable robot learning.'
      },
      {
        title: 'VLA and manipulation',
        text: 'General-purpose policies that connect perception, reasoning, and action.'
      },
      {
        title: 'Embodied systems',
        text: 'How learning, sensing, control, and hardware interact in real robot systems.'
      }
    ],
    publications: [
      {
        year: '2026',
        type: 'Technical Report',
        status: 'First Author',
        title: 'τ0-VLA: A Hierarchical Robot Foundation Model with World-Model-Guided Test-Time Computation',
        team: 'τ0-VLA Team',
        authors: ['Jinyu Zhang'],
        authorRole: 'First Author',
        links: [
          ['Project', 'https://tau0-vla.github.io/'],
          ['Paper', 'https://tau0-vla.github.io/tau0-vla.pdf'],
          ['Code', 'https://github.com/sii-research/tau-0-vla'],
          ['Model', 'https://huggingface.co/sii-research/tau-0-vla']
        ]
      },
      {
        year: '2025',
        status: 'First Author',
        title: 'Beyond “Templates”: Category-Agnostic Object Pose, Size, and Shape Estimation from a Single View',
        authors: ['Jinyu Zhang', 'Haitao Lin', 'Jiashu Hou', 'Xiangyang Xue', 'Yanwei Fu'],
        links: [['Paper', 'https://arxiv.org/abs/2510.11687']]
      },
      {
        year: '2025',
        type: 'Technical Report',
        status: 'Core Contributor',
        title: 'InternVLA-M1: A Spatially Guided Vision-Language-Action Framework for Generalist Robot Policy',
        team: 'InternVLA-M1 Team',
        authors: ['Jinyu Zhang'],
        authorRole: 'Core Contributor',
        links: [
          ['Project', 'https://internrobotics.github.io/internvla-m1.github.io/'],
          ['Code', 'https://github.com/InternRobotics/InternVLA-M1']
        ]
      },
      {
        year: 'IROS 2024',
        status: 'Oral Pitch',
        title: 'LAC-Net: Linear-Fusion Attention-Guided Convolutional Network for Accurate Robotic Grasping Under Occlusion',
        authors: [
          'Jinyu Zhang', 'Yongchong Gu', 'Jianxiong Gao', 'Haitao Lin',
          'Qiang Sun', 'Xinwei Sun', 'Xiangyang Xue', 'Yanwei Fu'
        ],
        links: [
          ['Project', 'https://jrryzh.github.io/LAC-Net/'],
          ['PDF', '/assets/paper/LAC-Net.pdf'],
          ['Code', 'https://github.com/jrryzh/LAC-Net-repo']
        ]
      }
    ],
    openSource: [
      {
        name: 'InternManip',
        role: 'Contributor · Maintainer',
        text: 'A unified framework for robotic training and evaluation.',
        href: 'https://github.com/InternRobotics/InternManip'
      },
      {
        name: 'InternData-M1',
        role: 'Core contributor',
        text: 'A large-scale embodied robotics dataset with rich spatial annotations.',
        href: 'https://huggingface.co/datasets/InternRobotics/InternData-M1'
      },
      {
        name: 'InternVLA-M1',
        role: 'Core contributor',
        text: 'A spatially grounded foundation model for generalist robot policy.',
        href: 'https://github.com/InternRobotics/InternVLA-M1'
      },
      {
        name: 'IROS 2025 Challenge',
        role: 'Core Contributor',
        text: 'A dual-arm manipulation benchmark spanning ten evaluation scenarios.',
        href: 'https://internrobotics.shlab.org.cn/challenge/2025/'
      }
    ],
    writing: [
      {
        date: 'Jul 2026',
        title: 'Thoughts after Tau0-VLA',
        href: '/2026/07/30/thoughts-after-tau0-vla/'
      },
      {
        date: 'May 2026',
        title: 'April–May research notes',
        href: '/2026/05/17/April-May-think/'
      },
      {
        date: 'Jan 2026',
        title: 'VLA reflections & the PI–Sequoia podcast',
        href: '/2026/01/12/PI-%E7%BA%A2%E6%9D%89%E6%92%AD%E5%AE%A2/'
      },
      {
        date: 'Nov 2025',
        title: '最近',
        href: '/2025/11/01/%E6%9C%80%E8%BF%91/'
      },
      {
        date: 'Oct 2025',
        title: '记一次深入解决问题的经历',
        href: '/2025/10/06/%E8%AE%B0%E4%B8%80%E6%AC%A1%E6%B7%B1%E5%85%A5%E8%A7%A3%E5%86%B3%E9%97%AE%E9%A2%98%E7%9A%84%E7%BB%8F%E5%8E%86/'
      },
      {
        date: 'Sep 2025',
        title: '效率脑科学',
        href: '/2025/09/29/%E6%95%88%E7%8E%87%E8%84%91%E7%A7%91%E5%AD%A6/'
      },
      {
        date: 'Sep 2025',
        title: 'gpt for paper',
        href: '/2025/09/24/gpt-for-paper/'
      },
      {
        date: 'Sep 2025',
        title: 'vibe coding',
        href: '/2025/09/23/vibe-coding/'
      },
      {
        date: 'Sep 2025',
        title: '浦美奥赛展',
        href: '/2025/09/22/%E5%A5%A5%E8%B5%9B%E5%B1%95/'
      }
    ]
  };

  const variants = {
    a1: { label: 'A1', density: 'entry', visual: 'text', title: 'Complete entry · Text first' },
    a2: { label: 'A2', density: 'entry', visual: 'modern', title: 'Complete entry · Modern minimal' },
    b1: { label: 'B1', density: 'single', visual: 'text', title: 'Single-page academic · Text first' },
    b2: { label: 'B2', density: 'single', visual: 'modern', title: 'Single-page academic · Modern minimal' }
  };

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function anchor(label, href, external) {
    const extra = external || /^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${escapeHtml(href)}"${extra}>${escapeHtml(label)}${extra ? ' ↗' : ''}</a>`;
  }

  function renderLinkList(items, className) {
    return `<div class="${className}">${items.map((item) => anchor(item.label, item.href, item.external)).join('<span aria-hidden="true">·</span>')}</div>`;
  }

  function renderHero() {
    const production = document.body.dataset.production === 'true';
    return `
      <section class="hero" aria-labelledby="page-title">
        <div class="hero-copy">
          ${production ? '' : '<p class="kicker">Embodied Intelligence · Robot Learning</p>'}
          <h1 id="page-title">${content.person.name}</h1>
          <p class="role">${content.person.role}</p>
          <p class="affiliation">${content.person.affiliation}</p>
          <p class="bio">${content.person.bio}</p>
          ${renderLinkList(content.links, 'profile-links')}
        </div>
        <figure class="portrait-wrap">
          <img class="portrait" src="${content.person.photo}" alt="Formal portrait of Jinyu Zhang">
        </figure>
      </section>`;
  }

  function renderResearch() {
    return `
      <section id="research" class="page-section" aria-labelledby="research-title">
        <header class="section-header">
          <p class="section-label">Research</p>
          <h2 id="research-title">Research interests</h2>
        </header>
        <div class="research-list">
          ${content.research.map((item) => `
            <article class="research-item">
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.text)}</p>
            </article>`).join('')}
        </div>
      </section>`;
  }

  function renderNow() {
    return `
      <section id="now" class="page-section now-section" aria-labelledby="now-title">
        <header class="section-header">
          <p class="section-label">Now</p>
          <h2 id="now-title">Current</h2>
        </header>
        <div class="now-copy">
          <p>${escapeHtml(content.person.current)}</p>
          <p>Currently exploring data, pre-training, and test-time computation for general-purpose robot policies.</p>
        </div>
      </section>`;
  }

  function renderAuthors(item) {
    const rendered = item.authors.map((author) => {
      const name = escapeHtml(author);
      return author === content.person.name
        ? `<strong class="author-self">${name}</strong>`
        : name;
    });

    if (item.team) {
      return `${escapeHtml(item.team)} <span aria-hidden="true">·</span> ${rendered[0]} (${escapeHtml(item.authorRole)})`;
    }

    return rendered.join(', ');
  }

  function renderPublication(item) {
    const links = item.links.map(([label, href]) => anchor(label, href, true)).join('<span aria-hidden="true">·</span>');
    const meta = [item.year, item.type, item.status].filter(Boolean);
    return `
      <article class="publication-item">
        <div class="publication-meta">
          ${meta.map((value) => `<span>${escapeHtml(value)}</span>`).join('')}
        </div>
        <div class="publication-copy">
          <h3>${escapeHtml(item.title)}</h3>
          <p class="authors">${renderAuthors(item)}</p>
          ${item.authorNote ? `<p class="author-note">${escapeHtml(item.authorNote)}</p>` : ''}
          <div class="resource-links">${links}</div>
        </div>
      </article>`;
  }

  function renderPublications(density) {
    const selected = density === 'entry' ? content.publications.slice(0, 3) : content.publications;
    const heading = density === 'entry' ? 'Selected work' : 'Publications';
    const more = density === 'entry'
      ? '<p class="section-action"><a href="/academic/">View all research and publications →</a></p>'
      : '';
    return `
      <section id="publications" class="page-section" aria-labelledby="publications-title">
        <header class="section-header">
          <p class="section-label">Work</p>
          <h2 id="publications-title">${heading}</h2>
        </header>
        <div class="publication-list">${selected.map(renderPublication).join('')}</div>
        ${more}
      </section>`;
  }

  function renderOpenSource() {
    return `
      <section id="opensource" class="page-section" aria-labelledby="opensource-title">
        <header class="section-header">
          <p class="section-label">Community</p>
          <h2 id="opensource-title">Open-source contributions</h2>
        </header>
        <div class="opensource-list">
          ${content.openSource.map((item) => `
            <article class="opensource-item">
              <p class="item-meta">${escapeHtml(item.role)}</p>
              <h3>${anchor(item.name, item.href, true)}</h3>
              <p>${escapeHtml(item.text)}</p>
            </article>`).join('')}
        </div>
      </section>`;
  }

  function renderWriting() {
    const visible = content.writing.slice(0, 3);
    const hidden = content.writing.slice(3);
    const rows = (items) => items.map((item) => `
      <article class="writing-item">
        <time>${escapeHtml(item.date)}</time>
        <h3><a href="${escapeHtml(item.href)}">${escapeHtml(item.title)}</a></h3>
      </article>`).join('');
    return `
      <section id="writing" class="page-section" aria-labelledby="writing-title">
        <header class="section-header">
          <p class="section-label">Notes</p>
          <h2 id="writing-title">Recent writing</h2>
        </header>
        <div class="writing-list">
          ${rows(visible)}
          <details class="disclosure writing-disclosure">
            <summary>Show all writing (${hidden.length} more)</summary>
            <div class="writing-list writing-list--expanded">${rows(hidden)}</div>
          </details>
        </div>
      </section>`;
  }

  function renderExperience() {
    return `
      <section id="experience" class="page-section" aria-labelledby="experience-title">
        <header class="section-header">
          <p class="section-label">CV</p>
          <h2 id="experience-title">Education &amp; Experience</h2>
        </header>
        <div class="career-groups">
          <section class="career-group" aria-labelledby="education-title">
            <h3 id="education-title">Education</h3>
            <ol class="career-list">
              <li><article><div><h4>Shanghai Innovation Institute × Fudan University</h4><span>Sep 2025–Present</span></div><p>Ph.D. Student in Embodied Intelligence</p></article></li>
              <li><article><div><h4>Fudan University, School of Data Science</h4><span>Sep 2023–Jun 2025</span></div><p>Master’s Student</p></article></li>
              <li><article><div><h4>Fudan University, School of Data Science</h4><span>Sep 2018–Jun 2022</span></div><p>Undergraduate</p></article></li>
            </ol>
          </section>
          <section class="career-group" aria-labelledby="work-experience-title">
            <h3 id="work-experience-title">Experience</h3>
            <ol class="career-list">
              <li><article><div><h4>Agibot Finch</h4><span>Nov 2025–Aug 2026</span></div><p>Research Intern</p></article></li>
              <li><article><div><h4>Shanghai Artificial Intelligence Laboratory</h4><span>Mar 2025–Nov 2025</span></div><p>Research Intern · Embodied Intelligence Center</p></article></li>
            </ol>
          </section>
        </div>
      </section>`;
  }

  function renderNav(variant) {
    const production = document.body.dataset.production === 'true';
    const links = production
      ? [
          ['Home', '#top'], ['Research', '#research'], ['Publications', '#publications'],
          ['Open source', '#opensource'], ['Experience', '#experience'], ['Writing', '#writing']
        ]
      : variant.density === 'single'
      ? [
          ['Home', '#top'], ['Research', '#research'], ['Publications', '#publications'],
          ['Open source', '#opensource'], ['Writing', '#writing'], ['About', '/preview/about/']
        ]
      : [
          ['Home', '#top'], ['About', '/preview/about/'], ['Writing', '/archives/'], ['Academic', '/academic/']
        ];
    return `
      <header class="concept-header${production ? ' concept-header--nav-only' : ''}">
        ${production ? '' : '<a class="wordmark" href="#top">Jinyu Zhang</a>'}
        <nav aria-label="Primary navigation">
          ${links.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
        </nav>
      </header>`;
  }

  function renderSwitcher(activeKey) {
    return `
      <aside class="variant-switcher" aria-label="Prototype variants">
        <span>Compare</span>
        ${Object.entries(variants).map(([key, variant]) => `
          <a href="/preview/${key}/"${key === activeKey ? ' aria-current="page"' : ''} title="${variant.title}">${variant.label}</a>`).join('')}
        <a class="all-variants" href="/preview/">All</a>
      </aside>`;
  }

  function renderFooter() {
    const production = document.body.dataset.production === 'true';
    return `
      <footer class="concept-footer">
        <span>Jinyu Zhang</span>
        <span>${production ? 'Embodied Intelligence · Robot Learning' : 'Homepage concept preview · 2026'}</span>
      </footer>`;
  }

  function renderAboutPage() {
    const production = document.body.dataset.production === 'true';
    document.documentElement.dataset.visual = production ? 'text' : 'modern';
    document.documentElement.dataset.density = 'entry';
    document.title = production ? 'About — Jinyu Zhang' : 'About — Jinyu Zhang homepage concept';
    document.getElementById('app').innerHTML = `
      <div class="site-frame about-frame" id="top">
        <header class="concept-header">
          <a class="wordmark" href="${production ? '/' : '/preview/'}">Jinyu Zhang</a>
          <nav aria-label="Primary navigation">
            <a href="${production ? '/' : '/preview/'}">${production ? 'Home' : 'Concepts'}</a>
            ${production ? '<a href="/#publications">Publications</a>' : ''}
            <a href="/archives/">Writing</a>
            ${production ? '' : '<a href="/academic/">Academic</a>'}
          </nav>
        </header>
        <main class="about-preview">
          <section class="about-lead" aria-labelledby="about-title">
            <figure class="portrait-wrap">
              <img class="portrait" src="${content.person.photo}" alt="Formal portrait of Jinyu Zhang">
            </figure>
            <div>
              <p class="kicker">About</p>
              <h1 id="about-title">Jinyu Zhang <span lang="zh-CN">张晋瑜</span></h1>
              <p class="role">${content.person.role}</p>
              <p class="affiliation">${content.person.affiliation}</p>
              ${renderLinkList(content.links, 'profile-links')}
            </div>
          </section>
          <section class="about-section" aria-labelledby="biography-title">
            <header class="section-header">
              <p class="section-label">Biography</p>
              <h2 id="biography-title">Biography</h2>
            </header>
            <div class="bilingual-copy">
              <article>
                <h3>English</h3>
                <p>I am a third-year Ph.D. student in Embodied Intelligence at the <strong>Shanghai Innovation Institute (SII)</strong>, having transferred from the master’s track to the Ph.D. program. I received my undergraduate degree from <strong>Fudan University</strong>.</p>
                <p>My research centers on embodied and spatial intelligence, especially data and pre-training for general-purpose manipulation. I previously interned at the <strong>Shanghai Artificial Intelligence Laboratory</strong> and am currently a research intern at <strong>Agibot Finch</strong>, advised by Professor Jianlan Luo.</p>
              </article>
              <article lang="zh-CN">
                <h3>中文</h3>
                <p>你好！我叫<strong>张晋瑜</strong>，目前是上海创智学院（SII）具身智能方向的博士三年级学生，由硕士阶段转入博士项目，本科就读于复旦大学大数据学院。</p>
                <p>我的研究聚焦于具身智能与空间智能，尤其关注面向通用操作智能的数据与预训练。我曾在上海人工智能实验室具身智能中心实习，目前在 <strong>Agibot Finch</strong> 实习，受罗剑岚老师指导。</p>
              </article>
            </div>
          </section>
          <section class="about-section" aria-labelledby="experience-title">
            <header class="section-header">
              <p class="section-label">Background</p>
              <h2 id="experience-title">Education &amp; experience</h2>
            </header>
            <dl class="experience-list">
              <div><dt>Shanghai Innovation Institute · Fudan University</dt><dd>Ph.D. student in Embodied Intelligence</dd></div>
              <div><dt>Agibot Finch</dt><dd>Research intern · Advised by Professor Jianlan Luo</dd></div>
              <div><dt>Shanghai Artificial Intelligence Laboratory</dt><dd>Research internship · Embodied Intelligence Center</dd></div>
              <div><dt>Fudan University</dt><dd>Undergraduate degree · School of Data Science</dd></div>
            </dl>
          </section>
        </main>
        ${renderFooter()}
      </div>`;
  }

  function renderPage(key) {
    const variant = variants[key];
    const production = document.body.dataset.production === 'true';
    document.documentElement.dataset.visual = variant.visual;
    document.documentElement.dataset.density = variant.density;
    document.title = production
      ? 'Jinyu Zhang — Embodied Intelligence & Robot Learning'
      : `${variant.label} — ${variant.title} — Jinyu Zhang`;

    const singleSections = variant.density === 'single' ? renderOpenSource() : '';
    document.getElementById('app').innerHTML = `
      ${production ? '' : renderSwitcher(key)}
      <div class="site-frame" id="top">
        ${renderNav(variant)}
        <main>
          ${renderHero()}
          ${renderNow()}
          ${renderResearch()}
          ${renderPublications(variant.density)}
          ${singleSections}
          ${renderExperience()}
          ${renderWriting()}
        </main>
        ${renderFooter()}
      </div>`;
  }

  function renderHub() {
    document.title = 'Homepage concept comparison — Jinyu Zhang';
    document.getElementById('app').innerHTML = `
      <main class="comparison-hub">
        <p class="hub-kicker">Jinyu Zhang · Homepage study</p>
        <h1>Four clean homepage directions</h1>
        <p class="hub-intro">The content is held constant. Compare information density vertically and visual language horizontally.</p>
        <div class="comparison-axis" aria-hidden="true">
          <span>Text first</span><span>Modern minimal</span>
        </div>
        <div class="variant-grid">
          ${Object.entries(variants).map(([key, variant]) => `
            <a class="variant-card" href="/preview/${key}/">
              <span class="variant-code">${variant.label}</span>
              <span class="variant-density">${variant.density === 'entry' ? 'Complete academic entry' : 'Single-page academic'}</span>
              <strong>${variant.visual === 'text' ? 'Text first' : 'Modern minimal'}</strong>
              <span class="variant-open">Open prototype →</span>
            </a>`).join('')}
        </div>
        <p class="hub-note">A = concise entry with links to dedicated pages · B = academic content consolidated on the homepage</p>
      </main>`;
  }

  const body = document.body;
  const variantKey = body.dataset.variant;
  if (body.dataset.mode === 'about') {
    renderAboutPage();
  } else if (variantKey && variants[variantKey]) {
    renderPage(variantKey);
  } else {
    renderHub();
  }
}());
