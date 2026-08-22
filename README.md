# OpenSeat marketing website

Static marketing and legal pages for `https://openseat.cc`, hosted with GitHub Pages.

The site's primary job is to explain OpenSeat to event organizers and send them to the organizer console at `https://app.openseat.cc/login`.

## Product boundaries

- `openseat.cc`: public marketing and legal pages
- `app.openseat.cc`: organizer account and ticketing platform
- `checkout.openseat.cc`: guest checkout; no attendee account or app required
- OpenSeat Scanner: optional iOS/Android door-staff scanner

Do not use App Store or Play Store links as organizer calls to action. Organizers use the web console; store links are only appropriate when specifically describing the optional scanner.

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Push to the repository's GitHub Pages branch. The `CNAME` file keeps `openseat.cc` attached to this site.
