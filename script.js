const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name1 = document.getElementById('name1')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)
    // each second is 1000 milliseconds.

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80" alt="laptop"/>'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique delectus ea distinctio consequatur saepe.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg " alt=" ">'
    name1.innerHTML = 'John Doe'
    date.innerHTML = 'Feb. 21, 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_text.forEach(bg => bg.classList.remove('animated-bg-text'))
        // this works because each class features bg hyphened alone somewhere in the class description.
}

// errors that occurred in this project were due to spacing issues that were created upon save. This may have been a result of beautify. Check settings to see if this can be avoided. Other than that. Good job debuggin the problem Orion. Remember that debugging is what a majority of programmers time is spent on.