# Chinese bot traffic: the Vercel firewall steps (for Paul, 4 Nov 2026)

These are dashboard steps. The firewall is a security setting, so Paul makes
them himself; nothing in this repo changes the firewall.

## What the code already does (data/refresh-1104)

`app/robots.ts` now has one group that closes the whole site to Bytespider,
TikTokSpider, Baiduspider, Sogou web spider, 360Spider, HaosouSpider,
YisouSpider, PetalBot and ChatGLM-Spider. The AI-crawler allowlist and the
`/compare?` rule are unchanged.

That only stops crawlers that read robots.txt. Bytespider is widely reported
to ignore it. And the "China" visitors in Vercel Web Analytics are clients
that ran the page's JavaScript, i.e. browsers, most likely headless ones,
which announce no crawler name. robots.txt cannot reach those. Only the
firewall can.

## The steps

Vercel → the burnaboystats project → **Firewall**.

1. **Look first.** Open **Traffic**, set the window to the last 24 hours and
   filter Country = China. Note the top user agents and the top networks
   (ASN). That tells you whether the next two rules are needed and which
   networks to name.
2. **Deny the crawler names.** Rules → Add Rule:
   - If **User Agent** matches
     `Bytespider|TikTokSpider|Baiduspider|Sogou|360Spider|HaosouSpider|YisouSpider|PetalBot|ChatGLM-Spider`
     (add any other agent string step 1 shows), then **Deny**.
   - Name it "Block Chinese crawlers".
3. **Then the networks or the country.** Pick one:
   - **ASN rules (narrower).** If **ASN** is one of the cloud networks step 1
     shows, then **Deny**. The inventory names Alibaba (AS45102, AS37963),
     Tencent (AS45090, AS132203) and Huawei Cloud (AS136907). Check each
     against the Traffic tab's ASN column before adding it. These are data
     centres, not home connections, so real readers are not on them.
   - **Country = China → Challenge (wider).** Real readers in China can
     still pass the challenge. Headless browsers mostly can't.
4. **Order.** Drag the new rules **above "Allow link previews"**. That rule is
   a Bypass, and a Bypass skips every rule below it. Since 14 Oct the order
   from the top has been: "Rate limit /compare to 60/min per IP", "Block
   Lightpanda", "Allow link previews". Put the new rules after "Block
   Lightpanda" and before "Allow link previews".
5. **Save and check.**
   - burnaboystats.com and /compare still load on your phone.
   - A WhatsApp link preview still shows its card.
   - The next day, Traffic for China has fallen and Web Analytics' China row
     has shrunk.

Bot Protection stays on **Challenge**, and **AI Bots** stays on Allow: the
AI crawlers on the allowlist are wanted.

Not done, by choice: no analytics filtering. A `beforeSend` filter in
`app/layout.tsx` would only hide these visits from the stats. It would not
stop them.
