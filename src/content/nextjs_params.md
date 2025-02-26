---
title: NextJS Params have to be in a Promise starting NextJS 15
date: 2024-12-01
---

So while I was working on a new NextJS project last week, I was porting a function that worked 
perfectly fine in older versions of NextJS over to the new project that was running the latest and greatest
NextJS at the time of writing (v15+). Running the code through the dev server produced no errors (and this is
another pet peeve I have with NextJS, I wish there is an option to see all the linting/nitpicking errors that 
occur during the actual build), its not until the actual build command that all sort of issues start to pop up
And among the issues that I faced, this one took the cake: 

```
Type Error in Next.js Route: "Type '{ params: { id: string; }; }' does not satisfy the constraint 'PageProps'"
  Types of property 'params' are incompatible. Type '{ postId: string; }' is missing the following properties from type 'Promise<any>': then, catch, finally, [Symbol.toStringTag]
```
Now the code in question was this: 
```
export function generateMetadata({ params }: { params: {postId : string} }) {
  const posts = getSortedPostsData(); // deduped data
  const { postId} =  params;

```
Its fairly simple. Pass an object of type string as parameters to an async function. But the error was complaining about:
1) incompatible type
2) an expectation that a Promise object has to be passed. 

So taking a stab at this before digging into the new changes in NextJS, I tried: 

```
export function generateMetadata({ params }: { params: Promise<{postId : string}> }) {
  const posts = getSortedPostsData(); // deduped data
  const { postId} =  params;

```
That should fix it right? Well not exactly, because now that we are passing a Promise in the parameters, we can't directly access its contents
without using await and turning this method into an async function or perhaps...perhaps we can use "use" from react so that `const {postId} = use(params)`
But now we are running into errors regarding the use library and how this function isn't exactly a React function that neccessitates using "use".

So now what? 

My short term solution was actually turning the function to async and using await. If it now requires using a Promise in its parameters then its already, by design,
an asynchronous function. 

But why this change in version 15?

It appears that even if you try to access those parameters synchrously in NextJS, it still has to check those values in underlying promises. That isn't neccessarily exposed to the user per se, but that's what happens. So in retrospect, it makes sense why the developers are forcing asynchronous calls going forward. 

And surely enough, looking at their release notes..tada!

```
Async Request APIs (Breaking Change)

In traditional Server-Side Rendering, the server waits for a request before rendering any content. However, not all components depend on request-specific data, so it's unnecessary to wait for the request to render them. Ideally, the server would prepare as much as possible before a request arrives. To enable this, and set the stage for future optimizations, we need to know when to wait for the request.

Therefore, we are transitioning APIs that rely on request-specific data—such as headers, cookies, params, and searchParams—to be asynchronous.
```

Source: https://nextjs.org/blog/next-15#async-request-apis-breaking-change

