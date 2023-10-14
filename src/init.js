function InitPage() {
    const homeWrapper = document.createElement('div');
    homeWrapper.classList.add('home-wrapper', 'centered-v');
    const infoWrapper = document.createElement('div');
    infoWrapper.classList.add('info-wrapper');
    const interiorImage = document.createElement('img');
    interiorImage.src = 'restaurant-min.jpg';
    const quoteWrapper = document.createElement('div');
    quoteWrapper.classList.add('quote-wrapper');
    const description = document.createElement('p');
    description.textContent = 'The food at Good Food: Bar and Grill is light years ahead of any other restaurant that dares open at the same' + 
        'time as us, anywhere on the planet. We often get questioned how we are so sure we have the best food, well how' + 
        'about you take a look at the giant \'F\' on our front window? We\'ve been awarded that by the Chicago health department' +  
        'every year for 10 consecutive years. \'F\'. For \'Fantastic.\'';

    const quote = document.createElement('h1');
    quote.textContent = '"The best Bar and Grill on the planet"';
    const quoteAuthor = document.createElement('h2');
    quoteAuthor.textContent = '-My mom';

    quoteWrapper.appendChild(quote);
    quoteWrapper.appendChild(quoteAuthor);
    infoWrapper.appendChild(quoteWrapper);
    infoWrapper.appendChild(description);

    homeWrapper.appendChild(infoWrapper);
    homeWrapper.appendChild(interiorImage);

    return homeWrapper;
}

export default InitPage;