module.exports = function toReadable (number) {
    const unit0_9 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const unit10_19 = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const str = number.toString();

    if (str < 10) return unit0_9[str] 

    if (str > 9 && str < 20) return unit10_19[str[1]]  

    if (str > 19 && str < 100) {
        if(str[1] == 0) return dozens[str[0]-2]
        else return `${dozens[str[0]-2]} ${unit0_9[str[1]]}`
    } 

    if (str >= 100 && str[1] != 1 && str[1] != 0){
        if (str[2] == 0) return `${unit0_9[str[0]]} hundred ${dozens[str[1]-2]}`
        else return `${unit0_9[str[0]]} hundred ${dozens[str[1]-2]} ${unit0_9[str[2]]}`
    } 

    if (str >= 100 && str[1] == 1 && str[1] != 0) return `${unit0_9[str[0]]} hundred ${unit10_19[str[2]]}` 

    if (str >= 100 && str[1] == 0) {
        if (str[2] == 0) return `${unit0_9[str[0]]} hundred`
        else return `${unit0_9[str[0]]} hundred ${unit0_9[str[2]]}`  
    } 
}
