Promise.resolve(10)
    .then(v => {
        console.log(v);
        throw new Error('Shit happens');
    })
    .then(
         _   => console.log('resolve 1'),
         err => console.log(err.message)
    )
    .then( _ => {
        console.log('resolve 2');
        throw new Error('Shit happens 2');
    })
    .catch(err => console.log(err.message))
    .then(_ => console.log('resolve 3'));
    