import os
from bs4 import BeautifulSoup

def update_about_images():
    html_path = '/Users/tanisqpandey07/Desktop/AI Design Agency/tanisq-portfolio/www.cedricith.com/about.html'
    
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find all sections with class 'about-img-wrap'
    sections = soup.find_all('section', class_='about-img-wrap')
    
    if len(sections) > 1:
        # The second section is the one we want to update
        second_section = sections[1]
        
        images = second_section.find_all('img')
        
        # New image sources to map
        new_sources = [
            '../assets/images/tany-pfp/img6.jpeg',
            '../assets/images/tany-pfp/img7.jpeg',
            '../assets/images/tany-pfp/img8.jpeg',
            '../assets/images/tany-pfp/img9.jpeg',
            '../assets/images/tany-pfp/img1.jpeg', # reuse img1 for the 5th
        ]
        
        for i, img in enumerate(images):
            if i < len(new_sources):
                # Update attributes
                img['src'] = new_sources[i]
                img['alt'] = "Tanisq Pandey"
                
                # Remove unneeded remote attributes if present
                if 'srcset' in img.attrs:
                    del img['srcset']
                if 'sizes' in img.attrs:
                    del img['sizes']
                    
        # Write back out
        with open(html_path, 'w', encoding='utf-8') as f:
            f.write(str(soup))
        print("Successfully updated the second image grid in about.html")
    else:
        print("Error: Could not find second 'about-img-wrap' section")

if __name__ == '__main__':
    update_about_images()
