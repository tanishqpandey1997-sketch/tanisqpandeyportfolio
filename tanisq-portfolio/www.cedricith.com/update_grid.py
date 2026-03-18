import re

def update_second_grid():
    html_path = '/Users/tanisqpandey07/Desktop/AI Design Agency/tanisq-portfolio/www.cedricith.com/about.html'
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Split into two sections around the second <section class="about-img-wrap">
    # The first one is updated, so it contains src="../assets/images/...
    # The second one contains src="https://cdn.prod.website-files.com/...
    
    parts = html.split('<section class="about-img-wrap">')
    if len(parts) < 3:
        print("Error: less than 2 sections found")
        return
        
    second_part = parts[2]
    
    # We want to replace the first 5 img tags inside this second part.
    # img01, img02, img03, img04, img05 divs.
    
    # The new srcs
    new_srcs = [
        '../assets/images/tany-pfp/img6.jpeg',
        '../assets/images/tany-pfp/img7.jpeg',
        '../assets/images/tany-pfp/img8.jpeg',
        '../assets/images/tany-pfp/img9.jpeg',
        '../assets/images/tany-pfp/img1.jpeg'
    ]
    
    # A function to replace img tag
    def repl(m):
        nonlocal count
        if count < 5:
            # Reconstruct the img tag safely
            # We keep style="..." and class="img-cover", ignore sizes, srcset, loading
            style = ""
            style_m = re.search(r'style="([^"]+)"', m.group(0))
            if style_m:
                style = style_m.group(0)
                
            new_tag = f'<img src="{new_srcs[count]}" alt="Tanisq Pandey" {style} class="img-cover"/>'
            count += 1
            return new_tag
        return m.group(0)

    count = 0
    updated_second_part = re.sub(r'<img\s+[^>]+>', repl, second_part, count=5)
    
    parts[2] = updated_second_part
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write('<section class="about-img-wrap">'.join(parts))

    print("Success")

if __name__ == "__main__":
    update_second_grid()

