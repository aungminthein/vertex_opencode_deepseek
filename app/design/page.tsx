import type { ReactNode } from "react";

const colors = [
  { name: "Primary 500", hex: "#F97316", color: "#F97316" },
  { name: "Primary 400", hex: "#FB923C", color: "#FB923C" },
  { name: "Primary 300", hex: "#FDBA74", color: "#FDBA74" },
  { name: "Primary 200", hex: "#FED7AA", color: "#FED7AA" },
  { name: "Primary 100", hex: "#FFF1E5", color: "#FFF1E5" },
  { name: "Neutral 900", hex: "#0F172A", color: "#0F172A" },
  { name: "Neutral 700", hex: "#334155", color: "#334155" },
  { name: "Neutral 500", hex: "#64748B", color: "#64748B" },
  { name: "Neutral 300", hex: "#CBD5E1", color: "#CBD5E1" },
  { name: "Neutral 200", hex: "#E2E8F0", color: "#E2E8F0" },
  { name: "Neutral 100", hex: "#F1F5F9", color: "#F1F5F9" },
  { name: "Neutral 50", hex: "#FAFAFC", color: "#FAFAFC" },
  { name: "White", hex: "#FFFFFF", color: "#FFFFFF" },
];

const typeScale = [
  ["Display 1", "Playfair Display", "48 / 56", "Bold", "Page titles"],
  ["Display 2", "Playfair Display", "36 / 44", "Bold", "Section titles"],
  ["Heading 1", "Inter", "28 / 36", "Semi Bold", "Card titles"],
  ["Heading 2", "Inter", "22 / 30", "Semi Bold", "Sub section"],
  ["Heading 3", "Inter", "18 / 26", "Medium", "Small titles"],
  ["Body Large", "Inter", "16 / 24", "Regular", "Body copy"],
  ["Body", "Inter", "14 / 20", "Regular", "Supporting text"],
  ["Small", "Inter", "12 / 16", "Regular", "Captions, meta"],
];

const spacing = [
  { value: "4", size: 5, rem: "0.25rem" },
  { value: "8", size: 10, rem: "0.5rem" },
  { value: "12", size: 14, rem: "0.75rem" },
  { value: "16", size: 18, rem: "1rem" },
  { value: "24", size: 24, rem: "1.5rem" },
  { value: "32", size: 30, rem: "2rem" },
  { value: "40", size: 36, rem: "2.5rem" },
  { value: "48", size: 42, rem: "3rem" },
  { value: "64", size: 50, rem: "4rem" },
];

const iconNames = [
  "bell",
  "search",
  "play",
  "file",
  "bookmark",
  "chart",
  "clock",
  "user",
  "chevron",
] as const;

const iconPaths: Record<(typeof iconNames)[number], ReactNode> = {
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4z" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M8 13h8M8 17h8" />
    </>
  ),
  bookmark: <path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4z" />,
  chart: (
    <>
      <path d="M4 20h16" />
      <path d="M7 16v-4M12 16V8M17 16v-7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  chevron: <path d="m9 18 6-6-6-6" />,
};

function Icon({
  name,
  filled = false,
  className = "",
}: {
  name: (typeof iconNames)[number];
  filled?: boolean;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={`icon ${filled ? "icon-filled" : ""} ${className}`}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}

function Section({
  number,
  title,
  id,
  className = "",
  children,
}: {
  number: string;
  title: string;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`panel section ${className}`}>
      <h2 className="section-heading">
        <span className="section-number">{number}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function BrandMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="brand-mark">
      <path d="M2 4h9l5 8 5-8h9L16 29 2 4Zm8 5 6 11 6-11h-3l-3 5-3-5h-3Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="top" className="design-page">
      <div className="design-board">
        <section className="panel intro-panel">
          <div className="intro-copy">
            <div className="brand-lockup">
              <BrandMark />
              <span>Vertex</span>
            </div>
            <h1>Design System</h1>
            <p>
              A unified design language for Vertex learning platform. Clean,
              modern and focused on clarity, consistency and intuitive learning
              experiences.
            </p>
            <div className="version">VERSION 1.0 <span /> MAY 2025</div>
          </div>
          <div className="color-panel">
            <h2 className="section-heading">
              <span className="section-number">01</span> COLORS
            </h2>
            <p className="color-group-title">Primary</p>
            <div className="swatch-grid primary-swatches">
              {colors.slice(0, 5).map((color) => (
                <div className="swatch" key={color.name}>
                  <span className="swatch-color" style={{ backgroundColor: color.color }} />
                  <span className="swatch-name">{color.name}</span>
                  <span className="swatch-hex">{color.hex}</span>
                </div>
              ))}
            </div>
            <p className="color-group-title neutral-title">Neutral</p>
            <div className="swatch-grid neutral-swatches">
              {colors.slice(5).map((color) => (
                <div className="swatch" key={color.name}>
                  <span className="swatch-color" style={{ backgroundColor: color.color }} />
                  <span className="swatch-name">{color.name}</span>
                  <span className="swatch-hex">{color.hex}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Section number="02" title="TYPOGRAPHY" className="typography-panel">
          <div className="font-sample">
            <span className="font-glyph display-glyph">Ag</span>
            <div>
              <div className="font-name display-name">Playfair Display</div>
              <p>Elegant <i /> Readable <i /> Timeless</p>
            </div>
          </div>
          <div className="font-sample">
            <span className="font-glyph sans-glyph">Ag</span>
            <div>
              <div className="font-name sans-name">Inter</div>
              <p>Clean <i /> Modern <i /> Highly legible</p>
            </div>
          </div>
        </Section>

        <Section number="03" title="TYPE SCALE" className="type-scale-panel">
          <div className="type-table" role="table" aria-label="Typography scale">
            <div className="type-row type-header" role="row">
              <span role="columnheader">Style</span>
              <span role="columnheader">Font</span>
              <span role="columnheader">Size / Line Height</span>
              <span role="columnheader">Weight</span>
              <span role="columnheader">Use</span>
            </div>
            {typeScale.map(([style, font, size, weight, use]) => (
              <div className="type-row" role="row" key={style}>
                <span className={style.startsWith("Display") ? "serif-row" : ""} role="cell">{style}</span>
                <span role="cell">{font}</span>
                <span role="cell">{size}</span>
                <span role="cell">{weight}</span>
                <span role="cell">{use}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section number="04" title="SPACING SYSTEM" className="spacing-panel">
          <p className="section-note">Base unit: 4px</p>
          <div className="spacing-scale">
            {spacing.map((item) => (
              <div className="space-token" key={item.value}>
                <span
                  className="space-swatch"
                  style={{ width: item.size, height: item.size }}
                />
                <strong>{item.value}</strong>
                <small>({item.rem})</small>
              </div>
            ))}
          </div>
        </Section>

        <Section number="05" title="RADIUS & SHADOWS" className="radius-panel">
          <p className="section-note">Radius</p>
          <div className="radius-scale">
            {[
              ["4px", "(xs)", "4px"],
              ["8px", "(sm)", "8px"],
              ["12px", "(md)", "12px"],
              ["16px", "(lg)", "16px"],
              ["24px", "(xl)", "24px"],
              ["Full", "(circle)", "50%"],
            ].map(([label, sub, radius]) => (
              <div className="radius-token" key={label}>
                <span className="radius-swatch" style={{ borderRadius: radius }} />
                <strong>{label}</strong>
                <small>{sub}</small>
              </div>
            ))}
          </div>
          <p className="section-note shadow-title">Shadows</p>
          <div className="shadow-scale">
            {[
              ["Sm", "0 1px 2px 0", "rgba(15, 23, 42, 0.06)"],
              ["Md", "0 4px 12px -2px", "rgba(15, 23, 42, 0.08)"],
              ["Lg", "0 12px 24px -6px", "rgba(15, 23, 42, 0.1)"],
              ["Xl", "0 20px 40px -8px", "rgba(15, 23, 42, 0.12)"],
            ].map(([label, shadow, color]) => (
              <div className="shadow-card" key={label} style={{ boxShadow: `${shadow} ${color}` }}>
                <strong>{label}</strong>
                <small>{shadow}</small>
                <small>{color}</small>
              </div>
            ))}
          </div>
        </Section>

        <Section number="06" title="ICONS" className="icons-panel">
          <p className="section-note">Outline Style</p>
          <div className="icon-row">
            {iconNames.map((name) => <Icon name={name} key={name} />)}
          </div>
          <p className="section-note icon-style-title">Filled Style</p>
          <div className="icon-row">
            {iconNames.map((name) => <Icon name={name} filled key={name} />)}
          </div>
          <p className="section-note icon-style-title">Icon Specs</p>
          <ul className="spec-list">
            <li>24×24px grid</li>
            <li>2px stroke width (outline)</li>
            <li>Rounded line caps</li>
            <li>Consistent optical balance</li>
          </ul>
        </Section>

        <Section number="07" title="BUTTONS" className="buttons-panel">
          <div className="button-examples">
            <span className="button-heading" />
            <span className="button-heading">Primary</span>
            <span className="button-heading">Secondary</span>
            <span className="button-heading">Tertiary</span>
            <span className="button-heading">Text</span>
            <span className="button-state">Default</span>
            <button type="button" className="button button-primary">Get Started</button>
            <button type="button" className="button button-secondary">Explore Courses</button>
            <button type="button" className="button button-tertiary">View Lesson <span aria-hidden="true">↗</span></button>
            <button type="button" className="button button-text">Watch Video <Icon name="play" /></button>
            <span className="button-state">Hover</span>
            <button type="button" className="button button-primary hover-sample">Get Started</button>
            <button type="button" className="button button-secondary hover-sample">Explore Courses</button>
            <button type="button" className="button button-tertiary hover-sample">View Lesson <span aria-hidden="true">↗</span></button>
            <button type="button" className="button button-text hover-sample">Watch Video <Icon name="play" /></button>
            <span className="button-state">Disabled</span>
            <button type="button" className="button button-primary" disabled>Get Started</button>
            <button type="button" className="button button-secondary" disabled>Explore Courses</button>
            <button type="button" className="button button-tertiary" disabled>View Lesson <span aria-hidden="true">↗</span></button>
            <button type="button" className="button button-text" disabled>Watch Video <Icon name="play" /></button>
          </div>
          <p className="section-note button-spec-title">Button Specs</p>
          <ul className="spec-list inline-specs">
            <li>Height: 44px (default)</li>
            <li>Padding: 0 16px (lg), 0 12px (md)</li>
            <li>Radius: 12px</li>
            <li>Font: Inter Medium (14–16px)</li>
          </ul>
        </Section>

        <Section number="08" title="INPUTS" className="inputs-panel">
          <label className="control-label" htmlFor="design-search">Search / Text Input</label>
          <div className="search-control">
            <Icon name="search" />
            <input id="design-search" type="search" placeholder="Search anything..." />
            <kbd>⌘ K</kbd>
          </div>
          <label className="control-label select-label" htmlFor="sort-select">Select</label>
          <select id="sort-select" className="select-control" defaultValue="Most Relevant">
            <option>Most Relevant</option>
            <option>Newest</option>
            <option>Shortest</option>
          </select>
          <p className="section-note field-spec-title">Field Specs</p>
          <ul className="spec-list">
            <li>Height: 44px</li>
            <li>Radius: 12px</li>
            <li>Border: 1px solid #E2E8F0</li>
            <li>Padding: 0 16px</li>
            <li>Focus: Border color #F97316</li>
          </ul>
        </Section>

        <Section number="09" title="BADGES / TAGS" className="badge-panel">
          <div className="badge-columns">
            <div><p>Video</p><span className="badge badge-video">VIDEO</span></div>
            <div><p>Lesson</p><span className="badge badge-lesson">LESSON</span></div>
            <div><p>Popular</p><span className="badge badge-popular">POPULAR</span></div>
          </div>
        </Section>

        <Section number="10" title="STATUS / INDICATORS" className="status-panel">
          <div className="status-row">
            <span><i className="status-icon in-progress" />In Progress</span>
            <span><i className="status-icon completed">✓</i>Completed</span>
            <span><i className="status-icon now-playing">▶</i>Now Playing</span>
            <span><svg aria-hidden="true" className="lock-icon" viewBox="0 0 16 16"><rect x="3" y="7" width="10" height="7" rx="1" /><path d="M5 7V5a3 3 0 0 1 6 0v2" /></svg>Locked</span>
          </div>
        </Section>

        <Section number="11" title="PROGRESS BAR" className="progress-panel">
          <div className="progress-row">
            <div className="progress-track" role="progressbar" aria-label="Course progress" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>
              <span />
            </div>
            <strong>35% <span>complete</span></strong>
          </div>
        </Section>

        <Section number="12" title="CARDS" id="cards" className="cards-panel">
          <div className="card-grid">
            <div className="card-sample">
              <p className="card-type">Course Card</p>
              <article className="course-card">
                <div className="course-avatar">N</div>
                <div className="card-copy">
                  <h3>Next.js for Production</h3>
                  <p>Build scalable, high-performance web applications with Next.js.</p>
                </div>
                <div className="card-meta"><span>▥ Intermediate</span><span>◷ 18h 24m</span><span>▤ 12 modules</span></div>
              </article>
            </div>
            <div className="card-sample">
              <p className="card-type">Lesson Card (Video)</p>
              <article className="lesson-card">
                <span className="badge badge-video">VIDEO</span>
                <h3>Data Fetching in Server Components</h3>
                <p>Learn how to fetch data on the server using async/await and Next.js best practices.</p>
                <div className="lesson-card-meta"><span>Lesson 5.1&nbsp; · &nbsp;12:46</span><a href="#navigation"><Icon name="play" /> Watch from 12:45</a></div>
              </article>
            </div>
            <div className="card-sample">
              <p className="card-type">Lesson Card (Lesson)</p>
              <article className="lesson-card">
                <span className="badge badge-lesson">LESSON</span>
                <h3>Data Fetching &amp; Caching</h3>
                <p>Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance.</p>
                <div className="lesson-card-meta"><span>Module 5</span><a href="#navigation">View lesson <span aria-hidden="true">↗</span></a></div>
              </article>
            </div>
            <div className="card-sample">
              <p className="card-type">Resource Card</p>
              <article className="resource-card">
                <Icon name="file" />
                <div><h3>Caching and Revalidation Guide</h3><p>Deep dive into Next.js caching strategies.</p></div>
                <div className="resource-meta"><span>PDF&nbsp; · &nbsp;1.2 MB</span><a href="#navigation" aria-label="Open Caching and Revalidation Guide">↗</a></div>
              </article>
            </div>
          </div>
        </Section>

        <Section number="13" title="NAVIGATION" id="navigation" className="navigation-panel">
          <div className="navigation-examples">
            <nav className="sample-nav" aria-label="Sample navigation">
              <a className="nav-brand" href="#top"><BrandMark />Vertex</a>
              <a className="nav-active" href="#cards">Courses</a>
              <a href="#cards">My Learning</a>
            </nav>
            <div className="breadcrumbs" aria-label="Breadcrumb">
              <span>Breadcrumbs</span>
              <div><a href="#top">All Courses</a><b>›</b><a href="#cards">Next.js for Production</a><b>›</b><strong>Data Fetching &amp; Caching</strong></div>
            </div>
            <nav className="pagination" aria-label="Sample pagination">
              <span>Pagination</span>
              <div><button type="button" aria-label="Previous page">‹</button><button type="button" className="current-page" aria-current="page">1</button><button type="button">2</button><button type="button">3</button><span>…</span><button type="button">8</button><button type="button" aria-label="Next page">›</button></div>
            </nav>
          </div>
        </Section>

        <Section number="14" title="PRINCIPLES" className="principles-panel">
          <div className="principles-grid">
            <article><span className="principle-icon eye-icon">◎</span><div><h3>Clarity First</h3><p>Every element should communicate clearly.</p></div></article>
            <article><span className="principle-icon">▦</span><div><h3>Consistency</h3><p>Use components and patterns consistently across the platform.</p></div></article>
            <article><span className="principle-icon target-icon">◎</span><div><h3>Focus &amp; Calm</h3><p>Remove noise and help learners focus on what matters.</p></div></article>
            <article><span className="principle-icon access-icon">♙</span><div><h3>Accessible</h3><p>Design with accessibility and inclusivity in mind.</p></div></article>
          </div>
        </Section>
      </div>
    </main>
  );
}
