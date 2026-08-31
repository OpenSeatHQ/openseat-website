# OpenSeat marketing website

Static GitHub Pages site for `https://openseat.cc`.

The homepage explains OpenSeat as web ticketing: a hero with a desktop-screenshot placeholder, an About section, and How it works. Organizers use `https://app.openseat.cc`. Guests buy tickets from checkout links; there is no attendee app.

## Product boundaries

- `openseat.cc`: public marketing and legal pages
- `app.openseat.cc`: organizer console
- Guest checkout: shareable links (no attendee account or app)
- OpenSeat Scanner: optional door-staff app (not advertised on the homepage)

## Local preview

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Push to the repository's GitHub Pages branch. The `CNAME` file keeps `openseat.cc` attached to this site.
