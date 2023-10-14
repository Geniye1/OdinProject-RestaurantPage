function DisplayMenu() {
    const menuWrapper = document.createElement('div');
    menuWrapper.classList.add('menu-wrapper', 'centered-v');

    // TOAST N GRAVY
    const toastWrapper = document.createElement('div');
    toastWrapper.classList.add('menu-item', 'centered-v');
    const toastImage = document.createElement('img');
    toastImage.src = 'toast_gravy.jpeg';
    const toastInfoWrapper = document.createElement('div');
    toastInfoWrapper.classList.add('menu-item-info-wrapper');
    const toastTitle = document.createElement('h1');
    toastTitle.textContent = 'Toast with secret sauce - $23.99';
    const toastDesc = document.createElement('p');
    toastDesc.textContent = 'The dish that made the mayor of Chicago cry, my secret sauce elevates the flavor of the toast to ' + 
        'heights that you didn\'t even know were possible.';

    toastInfoWrapper.appendChild(toastTitle);
    toastInfoWrapper.appendChild(toastDesc);
    toastWrapper.appendChild(toastImage);
    toastWrapper.appendChild(toastInfoWrapper);

    // GLOCK N GUAC
    const glockWrapper = document.createElement('div');
    glockWrapper.classList.add('menu-item', 'centered-v');
    const glockImage = document.createElement('img');
    glockImage.src = 'glock_n_guac.jpeg';
    const glockInfoWrapper = document.createElement('div');
    glockInfoWrapper.classList.add('menu-item-info-wrapper');
    const glockTitle = document.createElement('h1');
    glockTitle.textContent = 'The Glock\'n Guac - $50.99';
    const glockDesc = document.createElement('p');
    glockDesc.textContent = 'Our most popular item, a mix of our "homemade" guacamole and a fully loaded Glock 9mm pistol. Taste how ' + 
        'the metal of the barrel compliments the avocado taste. Be careful eating it though, 4 people have died ' + 
        'after they accidentally pressed the trigger.';

    glockInfoWrapper.appendChild(glockTitle);
    glockInfoWrapper.appendChild(glockDesc);
    glockWrapper.appendChild(glockInfoWrapper);
    glockWrapper.appendChild(glockImage);

    // PIZZA WID DA CHARMS
    const pizzaWrapper = document.createElement('div');
    pizzaWrapper.classList.add('menu-item', 'centered-v');
    const pizzaImage = document.createElement('img');
    pizzaImage.src = 'pizza_wid_charms.jpeg';
    const pizzaInfoWrapper = document.createElement('div');
    pizzaInfoWrapper.classList.add('menu-item-info-wrapper');
    const pizzaTitle = document.createElement('h1');
    pizzaTitle.textContent = 'Pizza, with Charm!';
    const pizzaDesc = document.createElement('p');
    pizzaDesc.textContent = 'My greatest invention: a slice cheese pizza topped with Lucky Charm\'s marshmellows, served with a can of Guiness ' + 
        'and one raw potato. Someone was so impressed they passed out last week in the restaurant - the paramedics said ' + 
        'something about a \'diabetic coma,\' I don\'t know what that is but it sounds like he really enjoyed it! May ' + 
        'he rest in peace.';

    pizzaInfoWrapper.appendChild(pizzaTitle);
    pizzaInfoWrapper.appendChild(pizzaDesc);
    pizzaWrapper.appendChild(pizzaImage);
    pizzaWrapper.appendChild(pizzaInfoWrapper);

    // PUT THAT SHIT ALL TOGETHER
    menuWrapper.appendChild(toastWrapper);
    menuWrapper.appendChild(glockWrapper);
    menuWrapper.appendChild(pizzaWrapper);

    return menuWrapper;
}

export default DisplayMenu;