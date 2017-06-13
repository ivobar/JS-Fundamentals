function moviePrices(arr) {
    let [movieTitle,dayOfWeek]=arr;
    let price = '';

    switch (movieTitle.toLowerCase()){
        case 'the godfather':
            switch (dayOfWeek.toLowerCase()){
                case 'monday': price='12'; break;
                case 'tuesday': price='10'; break;
                case 'wednesday': price='15'; break;
                case 'thursday': price='12.50'; break;
                case 'friday': price='15'; break;
                case 'saturday': price='25'; break;
                case 'sunday': price='30'; break;
                default: price='error'; break;
            }
            break;
        case 'schindler\'s list':
            switch (dayOfWeek.toLowerCase()){
                case 'monday': price='8.50'; break;
                case 'tuesday': price='8.50'; break;
                case 'wednesday': price='8.50'; break;
                case 'thursday': price='8.50'; break;
                case 'friday': price='8.50'; break;
                case 'saturday': price='15'; break;
                case 'sunday': price='15'; break;
                default: price='error'; break;
            }
            break;
        case 'casablanca':
            switch (dayOfWeek.toLowerCase()){
                case 'monday': price='8'; break;
                case 'tuesday': price='8'; break;
                case 'wednesday': price='8'; break;
                case 'thursday': price='8'; break;
                case 'friday': price='8'; break;
                case 'saturday': price='10'; break;
                case 'sunday': price='10'; break;
                default: price='error'; break;
            }
            break;
        case 'the wizard of oz':
            switch (dayOfWeek.toLowerCase()){
                case 'monday': price='10'; break;
                case 'tuesday': price='10'; break;
                case 'wednesday': price='10'; break;
                case 'thursday': price='10'; break;
                case 'friday': price='10'; break;
                case 'saturday': price='15'; break;
                case 'sunday': price='15'; break;
                default: price='error'; break;
            }
            break;
        default:
            price='error';
            break;
    }

    return price;
}

console.log(moviePrices(['','']));