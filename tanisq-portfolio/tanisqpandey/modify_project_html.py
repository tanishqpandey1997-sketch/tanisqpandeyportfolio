import re

file_path = "/Users/tanisqpandey07/Desktop/AI Design Agency/tanisq-portfolio/www.cedricith.com/project.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# I want to find the big chunk starting at the first video container:
# <section class="two-col-video-text-container">
# And ending right before:
# <main class="conclusion"></main></div><div class="full-height-text end">

start_str = '<section class="two-col-video-text-container"><div class="single-column-video">'
end_str = '<main class="conclusion"></main>'

new_content = """<main class="full-height-text"><div class="proj-copy-contain w-container"><div class="proj-col w-row"><div class="w-col w-col-3"><h2 class="proj-subhead">Research</h2></div><div class="w-col w-col-9"><div class="rich-text w-richtext"><p>To be added...</p></div></div></div></div></main><div class="full-width-img" style="text-align: center; padding: 40px 0;"><img src="../assets/images/placeholder_research.png" alt="Research Visuals" style="object-fit: contain; width: 100%; height: auto; max-width: 1200px; margin: 0 auto; display: block;"/></div>
<main class="full-height-text"><div class="proj-copy-contain w-container"><div class="proj-col w-row"><div class="w-col w-col-3"><h2 class="proj-subhead">User Flow</h2></div><div class="w-col w-col-9"><div class="rich-text w-richtext"><p>To be added...</p></div></div></div></div></main><div class="full-width-img" style="text-align: center; padding: 40px 0;"><img src="../assets/images/placeholder_userflow.png" alt="User Flow Diagram" style="object-fit: contain; width: 100%; height: auto; max-width: 1200px; margin: 0 auto; display: block;"/></div>
<main class="full-height-text"><div class="proj-copy-contain w-container"><div class="proj-col w-row"><div class="w-col w-col-3"><h2 class="proj-subhead">Wireframes</h2></div><div class="w-col w-col-9"><div class="rich-text w-richtext"><p>To be added...</p></div></div></div></div></main><div class="full-width-img" style="text-align: center; padding: 40px 0;"><img src="../assets/images/placeholder_wireframes.png" alt="Low-Fidelity Wireframes" style="object-fit: contain; width: 100%; height: auto; max-width: 1200px; margin: 0 auto; display: block;"/></div>
<main class="full-height-text"><div class="proj-copy-contain w-container"><div class="proj-col w-row"><div class="w-col w-col-3"><h2 class="proj-subhead">UI Design</h2></div><div class="w-col w-col-9"><div class="rich-text w-richtext"><p>To be added...</p></div></div></div></div></main><div class="full-width-img" style="text-align: center; padding: 40px 0;"><img src="../assets/images/placeholder_uidesign.png" alt="High-Fidelity UI Screens" style="object-fit: contain; width: 100%; height: auto; max-width: 1200px; margin: 0 auto; display: block;"/></div>
<main class="full-height-text"><div class="proj-copy-contain w-container"><div class="proj-col w-row"><div class="w-col w-col-3"><h2 class="proj-subhead">Design System</h2></div><div class="w-col w-col-9"><div class="rich-text w-richtext"><p>To be added...</p></div></div></div></div></main><div class="full-width-img" style="text-align: center; padding: 40px 0;"><img src="../assets/images/placeholder_designsystem.png" alt="Typography, Colors, and Components" style="object-fit: contain; width: 100%; height: auto; max-width: 1200px; margin: 0 auto; display: block;"/></div>
<main class="full-height-text conclusion"><div class="proj-copy-contain w-container"><div class="proj-col w-row"><div class="w-col w-col-3"><h2 class="proj-subhead">Final Screens</h2></div><div class="w-col w-col-9"><div class="rich-text w-richtext"><p>To be added...</p></div></div></div></div></main><div class="full-width-img" style="text-align: center; padding: 40px 0;"><img src="../assets/images/placeholder_finalscreens.png" alt="Polished UI Mockups" style="object-fit: contain; width: 100%; height: auto; max-width: 1200px; margin: 0 auto; display: block;"/></div>
"""

start_idx = content.find(start_str)
end_idx = content.find(end_str, start_idx)

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + new_content + content[end_idx:]
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Successfully replaced layout!")
else:
    print("Could not find start or end bounds.")
    print("start_idx:", start_idx)
    print("end_idx:", end_idx)
