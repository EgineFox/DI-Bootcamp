class Video {
    constructor (title, uploader, time) {
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

let arrayVideo = 4{
    title: '1','2','3','4','5',
    uploader : 'Stas','Inna','Person','Human','Rabbit',
    time : 20, 30, 40, 50, 60,
}