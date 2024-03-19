const roots = document.querySelectorAll('.root');

const data = [
    { name: 'ARTIST STARTER KIT', price: '$10.00', img: 'images/preset1.png' },
    { name: 'ARTIST STARTER KIT', price: '$15.00', img: 'images/preset2.png' },
    { name: 'ARTIST STARTER KIT', price: '$20.00', img: 'images/preset3.png' },
    { name: 'ARTIST STARTER KIT', price: '$15.00', img: 'images/preset4.png' },
    { name: 'ARTIST STARTER KIT', price: '$15.00', img: 'images/preset5.png' },
    { name: 'ARTIST STARTER KIT', price: '$15.00', img: 'images/preset6.png' },
    { name: 'ARTIST STARTER KIT', price: '$15.00', img: 'images/preset7.png' },
    { name: 'ARTIST STARTER KIT', price: '$15.00', img: 'images/preset2.png' },
    { name: 'ARTIST STARTER KIT', price: '$15.00', img: 'images/preset3.png' },
    { name: 'ARTIST STARTER KIT', price: '$15.00', img: 'images/preset4.png' },
    { name: 'ARTIST STARTER KIT', price: '$15.00', img: 'images/preset5.png' },
    { name: 'ARTIST STARTER KIT', price: '$15.00', img: 'images/preset6.png' }
];


let akk__iconBtn = document.querySelector('.acc')
let registrationModal = document.querySelector('.main__authorization__contener')

akk__iconBtn.onclick = () => {
location.href = "/front/components/profile/index.html"
}

console.log(akk__iconBtn);

function presets(data) {
    return (
        <div className="card_item">
            <img src={data.img} className='card_img'></img>
            <div className='text'>
                <p>{data.price}</p><br></br>
                <h6>{data.name}</h6>
            </div>
        </div>
    );
}

const cardCounts = [4, 12];

const cardContainers = data.map((item, index) => (
    <div className="card_wrapper">
        {[...Array(cardCounts[index])].map((unused, cardIndex) => (
            presets(item)
        ))}
    </div>
));

Array.from(roots).forEach((root, index) => {
    const cardIndex = index % data.length;
    const cardContainer = (
        <div className="card_wrapper">
            {[...Array(cardCounts[cardIndex])].map((unused, cardIndex) => (
                presets(data[cardIndex])
            ))}
        </div>
    );
    ReactDOM.render(cardContainer, root);
});


const slides = document.querySelector('.slider-wrapper');
const slideWidth = document.querySelector('.slide').clientWidth;
let index = 0;

document.getElementById('prev').addEventListener('click', () => {
    if (index === 0) {
        index = slides.children.length - 1;
    } else {
        index = Math.max(index - 1, 0);
    }
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
});

document.getElementById('next').addEventListener('click', () => {
    if (index === slides.children.length - 1) {
        index = 0;
    } else {
        index = Math.min(index + 1, slides.children.length - 1);
    }
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
});
