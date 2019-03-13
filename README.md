# parcel-craft-example
This is a ParcelJS + CraftCMS starter project. For simplicity's sake, I'm assuming you're running your site via Laravel Valet.

### Installation
Copy `.env.example` to `.env`, updating variables as needed in order to connect to your local database.

Then, run `yarn` to install `parcel-bundler`.

When you're to ready to start developing, run `yarn dev` and navigate to your local Craft site (e.g., https://parcel-craft.test.

Note that as you save changes to either `app.js` or `app.css`, the website with instantly reload with your changes.

When you're ready for prime-time (read: `PRODUCTION`), go ahead and run `yarn build` so that the built assets get sent to the `/web/dist/` directory.
