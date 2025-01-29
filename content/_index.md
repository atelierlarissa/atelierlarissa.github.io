---
# description: An example site for hugo-theme-gallery. Images from Unsplash.
# title: Hugo Gallery
# resources:
#   - src: martin-martz-wRuhOOaG-Z4-unsplash.jpg
#     params:
#       cover: true # cover of the home page is used for OpenGraph cards, etc.
menus:
  main:
    name: Home
    weight: -1
# sub-galleries on list pages are sorted by date and weight (descending)

# Define categories (taxonomy)
categories: ["nature", "landscape", "urban"]

# Define parameters for page styling
params:
  color: "#e0e0e0"  # Example background color for the gallery section
  image: "/images/your-cover-image.jpg"  # Path to your default cover image for the gallery
  featured_image: "martin-martz-wRuhOOaG-Z4-unsplash.jpg"  # Example image used as a featured image
---
