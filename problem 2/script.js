const titleButton = document.getElementById('apiCaller1');
const contentButton = document.getElementById('apiCaller2');

titleButton.addEventListener('click', function(){


    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        json.map(posts => {
                        
            if(posts.title.split(" ").length >= 7){

                console.log(`Title: ${posts.title}`);
            }
        })
    })
})

contentButton.addEventListener('click', function(){
    
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {

        const reducer = (previousValue, currentValue) => previousValue + ' ' + currentValue;

        const bodies = json.map(posts => {
            return(posts.body);
        })
        mergedBody = bodies.reduce(reducer);
        wordFreq(mergedBody);
    })
})

function wordFreq(string) {
    let pattern = /\w+/g,
    mergedBody = string,
    matches = mergedBody.match( pattern );

    let counts = matches.reduce(function ( stats, word ) {

       if ( stats.hasOwnProperty( word ) ) {
           
           stats[ word ] = stats[ word ] + 1;
       } else {
           
           stats[ word ] = 1;
       }

       return stats;

   }, {} );

   console.log( counts );
}