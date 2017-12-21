document.addEventListener('DOMContentLoaded', ()=>{
    var about = document.querySelector('#about');
    var mission = document.querySelector('#mission');
    var notes = document.querySelector('#notes');
    var hide = document.getElementsByClassName('hide');
    var table = document.querySelector('table');
    var a1 = document.getElementById('a1')
    var a2 = document.getElementById('a2')
    var a3 = document.getElementById('a3')
    var a4 = document.getElementById('a4')
    var a5 = document.getElementById('a5')
    var s1 = document.getElementById('s1')
    var s2 = document.getElementById('s2')
    var s3 = document.getElementById('s3')
    var s4 = document.getElementById('s4')
    var s5 = document.getElementById('s5')
    var body = document.querySelector('body');
    var form = document.querySelector('form');
    var sign = document.querySelector('#sign');
    body.style.backgroundColor = "red"
    
    document.addEventListener('mousemove', (e)=>{
        var x = e.clientX;
        var y = e.clientY;
        body.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)'
        console.log(x,y)
    })
    sign.addEventListener('mouseover', (e)=>{
        form.classList.remove("hide");
        form.addEventListener('mouseleave', ()=>{
            form.classList.add('hide');
        })
    })

    // about.addEventListener('mouseover', (e)=>{
    //     about.style.backgroundColor = 'yellow';
    //     about.addEventListener('mouseleave', (e)=>{
    //         about.style.backgroundColor = 'none'
    //     })
    // })
    // mission.addEventListener('mouseover', (e)=>{
    //     mission.style.backgroundColor = 'yellow';
    //     mission.addEventListener('mouseleave', (e)=>{
    //         mission.style.backgroundColor = 'none'
    //     })
    // })
    var artistUrl = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=c18d4a266b137ba738f2bd91651d4e4b&format=json"
    fetch(artistUrl, {
        method:'GET',
        mode:'cors'
    })
    .then(function(response){
        return response.json();
    })
    .then(function(myBlob){
        console.log(myBlob);
        a1.innerText = myBlob.artists.artist[0].name;
        a2.innerText = myBlob.artists.artist[1].name;
        a3.innerText = myBlob.artists.artist[2].name;
        a4.innerText = myBlob.artists.artist[3].name;
        a5.innerText = myBlob.artists.artist[4].name;    
    })

    var songsUrl = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=c18d4a266b137ba738f2bd91651d4e4b&format=json"
    fetch(songsUrl, {
        method:'GET',
        mode:'cors'
    })
    .then(function(response){
        return response.json();
    })
    .then(function(myBlob){
        console.log(myBlob);
        s1.innerText = myBlob.tracks.track[0].name + " (" + myBlob.tracks.track[0].artist.name + ")";
        s2.innerText = myBlob.tracks.track[1].name + " (" + myBlob.tracks.track[1].artist.name + ")";
        s3.innerText = myBlob.tracks.track[2].name + " (" + myBlob.tracks.track[2].artist.name + ")";
        s4.innerText = myBlob.tracks.track[3].name + " (" + myBlob.tracks.track[3].artist.name + ")";
        s5.innerText = myBlob.tracks.track[4].name + " (" + myBlob.tracks.track[4].artist.name + ")";      
    })

    var b = document.querySelector('button');
    
})