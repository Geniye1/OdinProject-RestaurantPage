function DisplayAbout() {
    const aboutWrapper = document.createElement('div');
    aboutWrapper.classList.add('about-wrapper', 'centered-v');

    const selfieImage = document.createElement('img');
    selfieImage.src = 'selfie.jpg';
    const nameHeading = document.createElement('h1');
    nameHeading.textContent = 'Chef Nutsak';
    const aboutDesc = document.createElement('p');
    aboutDesc.textContent = 'Yes, I know my name what my name sounds like. But, have I let it slow me down? Immensely. My entire life has ' + 
        'been balls on my locker, balls on my face, balls in my dreams - my entire life has been tormented by these sacks of ' + 
        'barely functioning sperm. But through it all, I cultivated a love for food derived purely from spite. I knew ' + 
        'one day I would show all those simpletons I was more than just a homonym. It was during the most depressive period ' + 
        'of my life that I discovered my secret sauce. Rich, creamy, the face of opulence: I struck gold. And the moment I ' + 
        'got my \'F\' I knew I had done it. I called my parents who were unusually reserved, but no matter. I knew I had finally ' + 
        'achieved my dream.';

    aboutWrapper.appendChild(selfieImage);
    aboutWrapper.appendChild(nameHeading);
    aboutWrapper.appendChild(aboutDesc);

    return aboutWrapper;
}

export default DisplayAbout