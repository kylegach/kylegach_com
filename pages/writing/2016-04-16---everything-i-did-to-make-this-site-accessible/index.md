---
title: Everything I Did to Make This Site Accessible
path: /writing/everything-i-did-to-make-this-site-accessible/
date: 2016-04-16T04:54:54Z
intro: I believe the web is meant to be open and available to everyone, no matter who they are, what device/software they’re using, or the speed/quality of the network they’re on.
commentPrompt: true
---

Accessibility (also known as [a11y](https://en.wikipedia.org/wiki/Numeronym)) is so much bigger than just making things work for people with no or low vision. But, even if you define it so narrowly, that’s still [285 million people](http://www.who.int/mediacentre/factsheets/fs282/en/) or ~5% of the world’s population. What follows is a collection of everything I’ve done to make this site as accessible as I could.

_Note: I‘m using [The A11y Project‘s helpful checklist](http://a11yproject.com/checklist.html) as a rough starting point for this post._

## Not relying on JavaScript (Progressive Enhancement)

This site is built using [React](http://facebook.github.io/react/), a JS library. _But_, it renders everything from the server before all that JS does anything. The JS then progressively enhances the site to enable things like super-fast additional page loads and the SVG animations. This means that the site will be accessible even if the JS were to fail for any reason. You may think the numbers for that are small... like, 1%. Keep in mind that it’s not 1% of people who always encounter a broken site, and 99% of people who don’t. It’s 1% of _visits_. I stole that line from [this wonderful illustration of the phenomenon](http://kryogenix.org/code/browser/why-availability/).

Also, progressive enhancement makes supporting older browsers *so much easier*. Because the site will always work without JS, you can [cut the mustard](http://responsivenews.co.uk/post/18948466399/cutting-the-mustard) so that your JS only runs on your supported browsers. Meaning you don’t ever have to write JS to work in non-modern browsers.

## Making it responsive

The only reasonable way I know of to ensure a website is usable on _any_ device/software is [Responsive Web Design](https://bradfrost.github.io/this-is-responsive/).

## Writing semantic HTML

The easiest way to make something accessible is when you get it for free. By using `<header>`, `<footer>`, `<nav>`, `<button>`,  and other elements appropriately, you build accessibility into the very structure of your app. This includes using `<h1>`, `<h2>`, etc&hellip; in a sensible order. I reviewed this site’s code and found some areas I could improve.

[A11y commit #1](https://github.com/kylegach/kylegach_com/commit/9b7d4b063fef4d1e0a8997a739bdf96598479154)

## Supplanting semantic HTML with `aria` landmark roles

While most browsers automatically associate, say, `<main>` with `aria-role="main"`, [not all do](http://alistapart.com/column/wai-finding-with-aria-landmark-roles). So it’s best to go ahead and define those yourself.

[A11y commit #2](https://github.com/kylegach/kylegach_com/commit/1e24b97eddc4ad5dd853af0e2c6954823de675e5)

## Focus states

A lot of sites have some CSS like this to remove the default dotted outline when elements are focused in some browsers:

```css
a:focus {
  outline: none;
}
```

Don‘t do that! If you absolutely must remove it, you also _must_ define your own focus styles.

## Use alt text (and the equivalent for SVG)

Any image in the content of a site must have an appropriate `alt` attribute defined. The only exception is images that are purely decorative.

For SVGs, you can use the `<title>` and `<desc>` elements to describe the graphic in combination with `aria` attributes. See the commit for examples.

[A11y commit #3](https://github.com/kylegach/kylegach_com/commit/02f01c7b3eb7df5ceb8d2d1fa4f95c6494e6744d)

## Test for sufficient color contrast and color blindness

Researchers have determined a minimum threshold for foreground/background color contrast that is readable by most people, which is specified as part of [WCAG](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html). You can use a tool like [aXe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US), which integrates into Chrome‘s Dev Tools, or [tota11y](http://khan.github.io/tota11y/), which can be integrated into your site or used as a bookmarklet, to check if the text of your site meets this threshold. There are some gotchas, though:

1. It will only test actual text and backgrounds, not text that is part of or on top of an image.
2. It cannot determine the contrast of pseudo-elements (`::before` & `::after`)

After running checks, if I find any colors that need changed, I like to use [Colorable](http://jxnblk.com/colorable/demos/text/) to find values with sufficient contrast.

[A11y commit #4](https://github.com/kylegach/kylegach_com/commit/f90a098774856b657e3c19c75239c5a4ec2baecd) &amp; [A11y commit #5](https://github.com/kylegach/kylegach_com/commit/646dec0acd9c51657fcda47caeaed860b9734a49)

## Consider a “Skip to content” link

Sometimes a site can have a lot of stuff that a person using a screenreader or restricted to a keyboard would have to wade through before they get to the content. Including a [link to skip down to the content](https://www.bignerdranch.com/blog/web-accessibility-skip-navigation-links/) in the very beginning of your page that is visually hidden until focused is a nice way to help them out.

This site has a very minimal header and the primary navigation is at the bottom of the page, so the link I‘m adding will be “Skip to navigation”.

[A11y commit #6](https://github.com/kylegach/kylegach_com/commit/5c8529bc0cc50fa15cd15f3a8c8bf562e1deed13) &amp; [A11y commit #7](https://github.com/kylegach/kylegach_com/commit/bf4617b170a383586ba9454e6f16dedd727cde91)

## Make sure to use descriptive links

Consider the post teasers on my [Writing](/writing/) page. They have a title, a brief excerpt of the post, and a Keep Reading&hellip; link. Sighted users can see that the “Keep Reading&hellip;” belongs to the post above it, but screen readers have no way of relaying that information to their users. That is, not without a little help.

We can use `aria` attributes again to add a more descriptive label to those links:

```html
<article role="article">
  <h3 id="everything-i-did-to-make-this-site-accessible"><a href="/writing/everything-i-did-to-make-this-site-accessible/">Everything I Did to Make This Site Accessible</a></h3>
  <em><span title="April 12, 2016">3 days ago</span></em>
  <div>I believe the web is meant to be open and available to everyone, no matter who they are, what device/software...</div>
  <a href="/writing/everything-i-did-to-make-this-site-accessible/" aria-labelledby="everything-i-did-to-make-this-site-accessible">Keep reading…</a>
</article>
```

_Thanks to [this CodePen](http://codepen.io/grayghostvisuals/pen/Gtoua) by [Gray Ghost Visuals](http://grayghostvisuals.com/) for the technique._

You should also generally avoid using generic phrases like “Click here” for your links, because they provide very little context.

[A11y commit #8](https://github.com/kylegach/kylegach_com/commit/f5e61a774cf339f30988ad9566a017aecee049b2)

## Test, test, test

After you’ve done everything you can, you should test your site using assistive technology tools. Ideally, you‘d do so with someone who uses such tools on a regular basis, but you can simply use the tools yourself in a pinch. If you‘re on a Mac, you have [VoiceOver](https://www.apple.com/voiceover/info/guide/) built in.
