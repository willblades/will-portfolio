
---
title: NextJS Params Have to be in a Promise Starting NextJS 15
date: 2024-12-01
---

While working on a new NextJS project last week, I was porting a function that worked perfectly in older versions to a project running the latest NextJS (v15+ at the time). Running the code through the development server produced no errors (another pet peeve of mine—I wish there were an option to see all the linting and nitpicking errors during the build). However, once I executed the build command, various issues began to emerge. Among these, one issue stood out:

```plaintext
Type Error in Next.js Route: "Type '{ params: { id: string; }; }' does not satisfy the constraint 'PageProps'"
  Types of property 'params' are incompatible. Type '{ postId: string; }' is missing the following properties from type 'Promise<any>': then, catch, finally, [Symbol.toStringTag]
```

The problematic code was:

```typescript
export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;
  // ...
}
```

It seemed straightforward—pass an object with a string parameter to an asynchronous function. However, the error pointed out two issues:
1. An incompatible type.
2. An expectation that a Promise object must be passed.

Before diving into the new changes in NextJS, I tried modifying the code as follows:

```typescript
export function generateMetadata({ params }: { params: Promise<{ postId: string }> }) {
  const posts = getSortedPostsData();
  const { postId } = params;
  // ...
}
```

At first glance, this appeared to fix the issue. However, by passing a Promise as the parameter, you can no longer access its contents directly without using `await`—which means the function itself must be declared as async. An alternative might be to use React’s `use` (e.g., `const { postId } = use(params)`), but that approach leads to errors since this function isn’t a React component that requires hooks.

The short-term solution was to convert the function into an async function and use `await`. If the function now expects a Promise in its parameters, then by design it is asynchronous.

### Why This Change in Version 15?

It appears that even if you try to access these parameters synchronously, NextJS still resolves them as underlying Promises. This behavior isn’t directly exposed to the user, but it is enforced internally. In retrospect, it makes sense why the developers are moving toward asynchronous calls.

The release notes confirm this change:

```plaintext
Async Request APIs (Breaking Change)

In traditional Server-Side Rendering, the server waits for a request before rendering any content. However, not all components depend on request-specific data, so it's unnecessary to wait for the request to render them. Ideally, the server would prepare as much as possible before a request arrives. To enable this, and set the stage for future optimizations, we need to know when to wait for the request.

Therefore, we are transitioning APIs that rely on request-specific data—such as headers, cookies, params, and searchParams—to be asynchronous.
```

Source: [NextJS 15 Blog Post](https://nextjs.org/blog/next-15#async-request-apis-breaking-change)
