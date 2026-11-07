# Sent

**An evangelism ministry of Keyport Bible Church, Keyport, WA.**

Sent lets anyone share a short, mobile-friendly gospel tract by text. Recipients open the link in their phone's browser. They don't need an app or an account.

Every tract is written and approved by the church. People using Sent choose a tract and can add a personal touch, but they can't change a tract's wording:
- their first name ("A message from Sam")
- a short note, shown separately as "A note from Sam"
- an optional phone number and/or email for "I prayed this," "Text me," and "Email me" buttons
- colors, a layout style, and an animation

Each tract ends with next steps: Read the Bible (the Gospel of John, BSB), Find a church near you, and Visit Keyport Bible Church.

## Files

| File | What it is |
|---|---|
| `index.html` | The app |
| `library.js` | Church settings and the approved tract library |
| `manifest.webmanifest`, `icon-*.png` | Home-screen app name and icons |
| `fonts/` | Self-hosted fonts |

## Publishing (GitHub Pages)

Upload every file to the top level of the repo, with `fonts/` kept as a folder. In **Settings → Pages**, choose **Deploy from a branch**, then `main`, then `/ (root)`. Check the version shown at the bottom of the builder to confirm an update is live.

## Managing the tract library

All tracts live in `library.js`. To add one, copy an existing entry, change the text, give it a new `id`, choose a `topic` (The Gospel, Hard times, Big questions, Holidays), and commit. The `id` becomes the tract's short link, like `…/Sent./#grief`. Don't rename or delete an `id` once its link has been shared.

Scripture is quoted from the Berean Standard Bible (BSB), public domain. The current library's verses were taken directly from the official BSB text published by BSB Publishing.

Church details and next-step links (church name, website, Bible link, church finder) are in `window.SENT_SETTINGS` at the top of `library.js`.

## Links

A link looks like `…/#grief.nx~Sam!3605550100$sam%40example%2Ecom*A_short_note`: the tract id, then the optional look letters, first name, phone, email, and note. Links only open tracts from the approved library. Any link that asks for a tract that isn't in the library, including custom tracts made with earlier versions of Sent, shows "This tract isn't available."

## Privacy

- No accounts, sign-ins, analytics, tracking, or cookies.
- No outside services. The fonts, icons, and QR code generator are all part of the site.
- The "Find a church near you" button opens a map search on the reader's own phone. Sent never sees their location.
- A tract's personal details (name, note, phone, email) live only in its link, after the `#`. Browsers never send that part of a link to the server.
- If a sender adds a phone number or email, anyone the link is forwarded to could see it.
- The sender's details save in their own browser only.

## Credits

- Scripture: Berean Standard Bible (BSB), public domain.
- Fonts: Newsreader and Inter, SIL Open Font License (`fonts/OFL-LICENSE.txt`).
- QR codes: qrcode-generator by Kazuhiko Arase, MIT License.
