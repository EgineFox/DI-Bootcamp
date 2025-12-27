class Video {
    constructor (title, uploader, time) {
       Y
       this.title = title,
       this.uploader = uploader,
       this.time  = time;
    }
    watch() {
        alert(` ${this.uploader} watched all ${this.time} of ${this.title}!`) ;
    }
}


let video1 = new Video("Very fanny video", "Michael", 60);
video1.watch(); 

let video2 = new Video("Educational video", "Anna", 70);

//Bonus

let arrayVideo = [
  { title: '1', uploader: 'Stas', time: 20 },
  { title: '2', uploader: 'Inna', time: 30 },
  { title: '3', uploader: 'Person', time: 40 },
  { title: '4', uploader: 'Human', time: 50 },
  { title: '5', uploader: 'Rabbit', time: 60 }
];

// Looping to Create Video Instances

arrayVideo.forEach(data => {
    const video = new Video( data.title, data.uploader, data.time);
    video.watch();

});
    
