const choice = (items) => {
    return Math.floor(Math.random() * items.length);
}

const remove = (items, item) => {
    items.splice(item, 1);
}

export {choice, remove};