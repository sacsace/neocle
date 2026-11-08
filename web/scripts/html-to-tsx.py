from html.parser import HTMLParser
from pathlib import Path

ATTRS = {
    "class": "className",
    "for": "htmlFor",
    "tabindex": "tabIndex",
    "autocomplete": "autoComplete",
    "novalidate": "noValidate",
    "stroke-width": "strokeWidth",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-opacity": "strokeOpacity",
    "fill-opacity": "fillOpacity",
    "text-anchor": "textAnchor",
    "clip-path": "clipPath",
    "stop-color": "stopColor",
    "referrerpolicy": "referrerPolicy",
    "crossorigin": "crossOrigin",
    "srcset": "srcSet",
    "fetchpriority": "fetchPriority",
}

VOID = {
    "area", "base", "br", "col", "embed", "hr", "img", "input", "link",
    "meta", "source", "track", "wbr",
}

class ToJsx(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out = []

    def attr(self, name, value):
        key = ATTRS.get(name, name)
        if value is None:
            return key
        if name == "src" and value.startswith("assets/"):
            value = "/" + value
        value = value.replace("\\", "\\\\").replace('"', "&quot;").replace("{", "&#123;").replace("}", "&#125;")
        return f'{key}="{value}"'

    def start(self, tag, attrs, close):
        parts = " ".join(self.attr(n, v) for n, v in attrs)
        gap = " " if parts else ""
        slash = " /" if close else ""
        self.out.append(f"<{tag}{gap}{parts}{slash}>")

    def handle_starttag(self, tag, attrs):
        self.start(tag, attrs, tag in VOID)

    def handle_startendtag(self, tag, attrs):
        self.start(tag, attrs, True)

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        self.out.append(f"</{tag}>")

    def handle_data(self, data):
        self.out.append(data.replace("{", "&#123;").replace("}", "&#125;"))

    def handle_comment(self, data):
        text = data.replace("*/", "* /").strip()
        if text:
            self.out.append("{/* " + text + " */}")

html = Path(r"d:\Software Project\Neocle International\index.html").read_text(encoding="utf-8")
body = html.split("<body>", 1)[1].split("</body>", 1)[0]
body = body.replace('<script src="js/main.js"></script>', "")
parser = ToJsx()
parser.feed(body)
jsx = "".join(parser.out)
file = '''"use client";

export function SiteMarkup() {
  return (
    <>
''' + jsx + '''
    </>
  );
}
'''
Path(r"d:\Software Project\Neocle International\web\src\components\site-markup.tsx").write_text(file, encoding="utf-8")
print("bytes", len(file))
