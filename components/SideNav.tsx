import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Writing Guidance',
    links: [{href: '/docs/overview', children: 'Overview'},
            {href: '/docs/brand', children: 'Brand Writing Style'},
            {href: '/docs/voice-and-tone', children: 'Product Voice and Tone'},
            {href: '/docs/product-style-guide', children: 'Product Style Guide'},
            {href: '/docs/procedural-instructions', children: 'Procedural Instructions'},
            {href: '/docs/style-ux', children: 'UX Writing'},
            {href: '/docs/style-incident', children: 'Incident Comms'}]
  },
  {
  title: 'Guide Templates',
  links: [{href: '/docs/temp-guides', children: 'Guide Design'},
          {href: '/docs/temp-slideout', children: 'Slideout Guide'},
          {href: '/docs/temp-edutooltip', children: 'Education Tooltip'}]
 },
 {
   title: 'Article Templates',
   links: [{href: '/docs/temp-typesofcontent', children: 'Content Types'},
           {href: '/docs/temp-kb', children: 'Help Center Articles'},
           {href: '/docs/temp-informational', children: 'Informational Content'},
           {href: '/docs/temp-instructional', children: 'Instructional Content'},
           {href: '/docs/temp-troubleshooting', children: 'Troubleshooting Content'}]
 },
 {
   title: 'Appendix',
   links: [{href: '/docs/appx-eduslideout', children: 'Education Slideout Guide'},
           {href: '/docs/appx-troubleslideout', children: 'Troubleshooting Slideout Guide'},
           {href: '/docs/appx-bestslideout', children: 'Best Practices Slideout Guide'},
           {href: '/docs/appx-supportdeflectionguide', children: 'TS - Support Deflection Guides'},
           {href: '/docs/appx-pfsuinstallchecklist', children: 'PFSU Install Checklist Guides'}]
 }
];

// const moreitems = [
//   {
//   title: 'Guides',
//   links: [{href: '/docs/brand', children: 'Brand'},
//           {href: '/docs/dark', children: 'Dark'},
//           {href: '/docs/IGST', children: 'IGST'}]
//   }
// ];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <span>{item.title}</span>
          <ul className="flex column">
            {item.links.map((link) => {
              const active = router.pathname === link.href;
              return (
                <li key={link.href} className={active ? 'active' : ''}>
                  <Link {...link}>
                    <a href={link.href}>{link.children}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2.5rem 2rem 2rem;
            border-right: 1px solid var(--border-color);
          }
          span {
            font-size: larger;
            font-weight: 500;
            padding: 0.5rem 0 0.5rem;
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            margin: 0;
          }
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active > a {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
    // <nav className="sidenav">
    // {moreitems}.map((moreitems) => (
    //   <div key={moreitems.title}>
    //     <span>{moreitems.title}</span>
    //     <ul className="flex column">
    //       {moreitems.links.map((link) => {
    //         const active = router.pathname === link.href;
    //         return (
    //           <li key={link.href} className={active ? 'active' : ''}>
    //             <Link {...link}>
    //               <a href={link.href}>{link.children}</a>
    //             </Link>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // ))}
    //     <style jsx>
    //       {`
    //         nav {
    //           position: sticky;
    //           top: var(--top-nav-height);
    //           height: calc(100vh - var(--top-nav-height));
    //           flex: 0 0 auto;
    //           overflow-y: auto;
    //           padding: 2.5rem 2rem 2rem;
    //           border-right: 1px solid var(--border-color);
    //         }
    //         span {
    //           font-size: larger;
    //           font-weight: 500;
    //           padding: 0.5rem 0 0.5rem;
    //         }
    //         ul {
    //           padding: 0;
    //         }
    //         li {
    //           list-style: none;
    //           margin: 0;
    //         }
    //         li a {
    //           text-decoration: none;
    //         }
    //         li a:hover,
    //         li.active > a {
    //           text-decoration: underline;
    //         }
    //       `}
    //     </style>
    //   </nav>
  );
}
