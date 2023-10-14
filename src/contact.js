function DisplayContact() {
    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper', 'centered-v');

    const messageWrapper = document.createElement('div');
    messageWrapper.classList.add('message-wrapper');
    const messageP = document.createElement('p');
    messageP.innerHTML = 'If you MUST contact us, please know we only pick up the phone when the current time is a multiple of 12. If you ' + 
        'call anytime other than that, my staff are instructed to ignore the call and block your number. Hey, don\'t ' +  
        'blame me - I got prank called like 27 times in one day by this group of Youtube pranksters placing fake orders. ' + 
        'I\'m a serious establishment! I serve REAL food here! They think they can prank the father of the famouse \'Glock\'n Guac?' + 
        '<br>' + 
        '<br>' + 
        'And, if you think I\'m punishing the masses for the actions of a couple of teenagers - You\'re right! That\'s actually ' + 
        '<i>exactly</i> what I\'m doing!';
    
    messageWrapper.appendChild(messageP);

    const contactInfoWrapper = document.createElement('div');
    contactInfoWrapper.classList.add('contact-info-wrapper');
    const restaurantPhoneNum = document.createElement('h1');
    restaurantPhoneNum.innerHTML = '<span id="info-id">Restaurant Phone</span>: 382-283-9611';
    const restaurantFaxNum = document.createElement('h1');
    restaurantFaxNum.innerHTML = '<span id="info-id">Restaurant Fax#</span>: +1-837-528-3558';
    const address = document.createElement('h1');
    address.innerHTML = '<span id="info-id">Address</span>: 7320 Hwy 54 70, Almamogordo, NM 88310';

    contactInfoWrapper.appendChild(restaurantPhoneNum);
    contactInfoWrapper.appendChild(restaurantFaxNum);
    contactInfoWrapper.appendChild(address);

    contactWrapper.appendChild(messageWrapper);
    contactWrapper.appendChild(contactInfoWrapper);

    return contactWrapper;
}

export default DisplayContact;