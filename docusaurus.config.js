const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Redpanda Docs',
  tagline: 'A modern streaming platform for mission critical workloads',
  url: 'https://docs.redpanda.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'vectorizedio', // Usually your GitHub org/user name.
  projectName: 'redpanda', // Usually your repo name.,
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: '',
      hideOnScroll: true,
      logo: {
        alt: 'Vectorized Logo',
        src: 'img/RedpandaLogo.svg',
        srcDark: 'img/RedpandaLogoInverted.svg',
      },
      items: [
        // { type: 'docsVersionDropdown',position: 'right'},
        // { type: 'localeDropdown',position: 'right'},
        { href: 'https://vectorized.io/redpanda', label: 'Redpanda', position: 'right' },
        { href: 'https://vectorized.io/cloud', label: 'Cloud', position: 'right' },
        { href: '/', label: 'Docs', position: 'right' },
        { href: 'https://vectorized.io/team', label: 'Team', position: 'right' },
        { href: 'https://vectorized.io/careers', label: 'Careers', position: 'right' },        
        { href: 'https://vectorized.io/blog', label: 'Blog', position: 'right' },
        { 
          href: 'https://join.slack.com/t/vectorizedcommunity/shared_invite/zt-ng2ze1uv-l5VMWSGQHB9gp47~kNnYGA', 
          position: 'right',
          label: 'Slack',
          className: 'header-icon header-icon-slack',
          'aria-label': 'Slack',
        },
        {
          href: 'https://github.com/vectorizedio/redpanda',
          position: 'right',
          label: 'Github',
          className: 'header-icon header-icon-github',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            { label: 'Redpanda', to: 'https://vectorized.io/redpanda' },
            { label: 'Cloud', to: 'https://vectorized.io/cloud' },
            { label: 'Documentation', to: '/' },
            { label: 'Blog', to: 'https://vectorized.io/blog' },
            { label: 'Events', to: 'https://vectorized.io/events' },
            { label: 'Support', to: 'https://support.vectorized.io' },
          ],
        },
        {
          title: 'Company',
          items: [
            { label: 'Team', to: 'https://vectorized.io/team' },
            { label: 'Careers', to: 'https://vectorized.io/careers' },
            { label: 'Press & Media', to: 'https://vectorized.io/press' },
            { label: 'Privacy Policy', to: 'https://vectorized.io/privacy-policy' },
          ],
        },
        {
          title: 'Connect',
          items: [
            { label: 'Contact', to: 'https://vectorized.io/contact' },
            { label: 'Feedback', to: 'https://vectorized.io/feedback' },
            { label: 'h4ck::73h::pl4n37 scholarship', to: 'https://vectorized.io/scholarship' },
          ],
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
        }
      },
    ],
  ],
};