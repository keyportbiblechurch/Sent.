# Sent

Developed by Keyport Bible Church in Keyport, WA.

Make short, mobile-friendly gospel tracts and send them by text. Recipients open the link in their phone's browser. They don't need an app or an account.

## How it works

- `index.html` is the whole app. Opened normally, it's the **tract builder**.
- Built-in templates and church library tracts get short links like `…/sent/#gn~Sam` or `…/sent/#new-start` (tract, optional theme, optional first name). One-off custom tracts are packed into their link (`…/#t=...`). When someone opens that link, the same page shows the **tract** instead of the builder.
- There's no server, database or sign-in. Templates make short links, and custom tracts make longer ones.

## Publish on GitHub Pages

1. Create a new public repository, for example `sent`.
2. Upload all the files to the main branch: `index.html`, `library.js`, `manifest.webmanifest`, `icon-32.png`, `icon-180.png`, `icon-192.png`, `icon-512.png`, this `README.md`, and the `fonts` folder with everything in it.
3. Go to **Settings → Pages**. Under "Build and deployment," choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/sent/`.
5. Open that address on your phone. Optionally, use "Add to Home Screen" so it works like an app.

Make and send tracts from that address. Links always point to the address you opened Sent from.

## Notes

- Scripture quotations are from the Berean Standard Bible (BSB), public domain. Check the template verses against berean.bible before sending widely.
- If you change the address of your site later, links you already sent will stop working unless the old address still serves the file.

## Adding tracts

`library.js` holds extra tracts that appear under "Start from," each with its own short link based on its `id` (for example `…/#new-start`). To add one, copy the existing entry in `library.js`, edit the text, give it a new `id`, and commit. Don't rename or delete an `id` once its link has been shared.

## Privacy

- No accounts, sign-ins, analytics, tracking, or cookies.
- No outside services: fonts, icons, and the QR code generator are all part of the site, so a recipient's phone only talks to your site.
- A phone number is optional. If the sender adds one, the tract shows text-back buttons, and the number is stored inside the link, so anyone the tract is forwarded to could see it. Without one, recipients reply through the text the link came in.
- A tract lives only inside its link, after the `#`, which browsers never send to the server. GitHub never sees tract contents.
- A link contains only what's shown on the tract: the wording, plus the optional first name, phone number, note, and church details.
- Drafts and settings save in the sender's own browser only.
- GitHub Pages, like any web host, keeps standard server logs of page visits.

## Credits

- Fonts: Newsreader and Inter, SIL Open Font License (see `fonts/OFL-LICENSE.txt`).
- QR codes: qrcode-generator by Kazuhiko Arase, MIT License.
