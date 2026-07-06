import urllib.request
import json

endpoints = [
    "blogs",
    "blogs/test-slug",
    "services",
    "services/test-slug",
    "projects",
    "projects/test-slug",
    "contact/info",
    "contact/socials",
    "contact/contact-info",
    "about/faqs",
    "about/content",
    "about/advantages",
    "about/stats",
    "home/partners",
    "home/home-hero",
    "home/home-stats",
    "home/work-process-steps",
    "home/global-ctas",
    "home/about",
    "tracking/test-code",
    "crm/features",
    "crm/benefits",
    "crm/pricing",
    "crm/stats"
]

for ep in endpoints:
    url = f"http://127.0.0.1:8000/api/{ep}/"
    try:
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req) as response:
            print(f"{ep}: {response.status}")
    except urllib.error.HTTPError as e:
        print(f"{ep}: {e.code}")
    except Exception as e:
        print(f"{ep}: ERROR {e}")
