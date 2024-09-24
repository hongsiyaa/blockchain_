
gsap.registerPlugin(ScrollTrigger);

const ani1 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-visual",
        start:"top top",
        end:"100% 100%",
        scrub:0,
        markers:false,
        //해당영역 벗어났을때
        onLeave:function () {
            $('.sc-visual .scroll-down').fadeOut();
        },
        //해당영역에 다시 돌아왔을때
        onEnterBack:function () {
            $('.sc-visual .scroll-down').fadeIn();
            
        }
        // onUpdate:function (self) {
        //     if(self.progress >= 0.14){
        //         $('#header').addClass('active')
        //     }else{
        //         $('#header').removeClass('active')
        //     }
        // }
    }
});
ani1.to(".sc-visual .desc01",{ opacity: 1},"togetder01")
    .to(".sc-visual .desc-wrap",{"--opacity--01":.35},"togetder01")
    .to(".sc-visual .desc01",{ 
        opacity: 0,
        //해당 시점에 도달 후 되돌아갈때 실행해라
        onReverseComplete:function () {
            $('#header').removeClass('active')
        },
        //해당 시점도달했을때 실행해라
        onStart:function () {
            $('#header').addClass('active')
        
        }
    })
    .to(".sc-visual .desc02",{ opacity: 1})
    .to(".sc-visual .desc02",{ opacity: 0})
    .to(".sc-visual .desc03",{ opacity: 1})
    .to(".sc-visual .desc03",{ opacity: 0})
    .to(".sc-visual .desc04",{ opacity: 1})
    //.to(".sc-visual .scroll-down",{ opacity: 0})


/**
 * 기록하고 증명하고 성장하기
 */
const ani2 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-showcase01",
        start:"top top",
        end:"bottom bottom",
        scrub:0,
        markers:false
    }
}
);
ani2.to(".sc-showcase01 .title-wrap",{opacity: 1},"a")
    .to(".sc-showcase01 .img-wrap",{"--opacity--02":.35},"a")
    .to(".sc-showcase01 .title-wrap .title01",{xPercent: 100},"b")
    .to(".sc-showcase01 .title-wrap .title03",{xPercent: -100},"b")
    .to(".sc-showcase01 .img-wrap",{"--opacity--02":0},"b")
    .to(".sc-showcase01 .title-wrap",{opacity: 0, duration: .4})
    .to(".sc-showcase01 .img01",{ height: 0})
    .to(".sc-showcase01 .img02",{ height: 0})
    .to(".sc-showcase01 .img-wrap",{"--opacity--02":.35},"c")
    .to(".sc-showcase01 .desc-wrap",{"opacity":1},"c")


/**
 * 헤더 검은색
 */ 

ScrollTrigger.create({
    trigger:'.sc-challenge',
    start:'top top',
    end:'100% 100%',
    onEnter:function () {
        $('#header').addClass('dark');
    },
    onLeaveBack:function () {
        $('#header').removeClass('dark');
    }
});

/**
 * 가치를 증명하고 싶다면 누구든지
 */
const ani3 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-prove",
        start:"top 80%",
        end:"bottom bottom",
        scrub:0,
        markers:false
    }
});
ani3.from(".sc-prove",{"--width": 0},"a")
    .from(".sc-prove .title-wrap .title01",{x:0},"a")
    .from(".sc-prove .title-wrap .title03",{x:0},"a")

/**
 * 바디 컬러 체인지
 * [data-theme="dark"]
 */
ScrollTrigger.create({
    trigger:`[data-theme="dark"]`,
    start:'0 50%',
    end:'100% 50%',
    toggleClass:{
        targets:'body',
        className:'dark'
    }
});

const ani_slide = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-slide",
        start:"top top",
        end:"bottom bottom",
        scrub:0,
        invalidateOnfresh: true // 사이즈 변화가 있을시 리프레시 헤줌
    }
});
//width가 딱 맞을때 사용...
// ani_slide.to(".sc-slide .slide-sub-wrap",{
//     xPercent:-100,
//     x: function () {
//         return window.innerWidth;
//     }
// }) 
ani_slide.to(".sc-slide .slide-sub-wrap",{
    x: function () {
        return -1*($('.sc-slide .slide-title-wrap').outerWidth() + $('.sc-slide .slide-list').outerWidth())
    }
}) 



const aniColor1= gsap.timeline({
    scrollTrigger:{
        trigger:".sc-colorbar",
        start:"top 95%",
        end:"bottom 80%",
        scrub:0,
        // markers:true
    }
});
aniColor1.from(".sc-colorbar .colorbox .colorbox01",{x:-300},"a")
        .from(".sc-colorbar .colorbox .colorbox02",{x:-300},"a")
        .from(".sc-colorbar .colorbox .colorbox03",{x:300},"a")

const aniColor2 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-colorbar",
        start:"top 45%",
        end:"bottom 30%",
        scrub:0,
        //markers:true,
         onEnter:function () {
            $('.sc-colorbar').addClass('on')
        },
        onLeaveBack:function () {
            $('.sc-colorbar').removeClass('on')
            
        }
        
    }
});
aniColor2.to(".sc-colorbar .colorbar-title",{opacity:1})

const cardWidth = $('.sc-service .service-area1 .card_list-wrap .card-item');
const area1Title = $('.sc-service .service-area1 .card-title-wrap');
const dataIdSlide01 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-service .service-area1",
        start:"top top",
        end:"bottom bottom",
        scrub:0,
        //markers:true,
        invalidateOnfresh:true,
        onEnter:function () {},
        onLeaveBack:function () {}
    }
});
dataIdSlide01.to(".sc-service .service-area1 .inner",{
    x: function () {
        return -area1Title.innerWidth();
    }
})
dataIdSlide01.to(".sc-service .service-area1 .card_list-wrap .card-item:nth-child(2)",1,{
    // xPercent: -100
    x:  function () {
        return -1*(cardWidth.outerWidth(true));
    }
},'a')
dataIdSlide01.to(".sc-service .service-area1 .card_list-wrap .card-item:nth-child(3)",1,{
    x:  function () {
        return -2*(cardWidth.outerWidth(true));
    }
},'a')
dataIdSlide01.to(".sc-service .service-area1 .card_list-wrap .card-item:nth-child(4)",1,{
    x:  function () {
        return -3*(cardWidth.outerWidth(true));
    }
},'a')
dataIdSlide01.to(".sc-service .service-area1 .card-img-box .lock-img01",{opacity:0},'b-=1')
dataIdSlide01.to(".sc-service .service-area1 .card-img-box .lock-img02",{opacity:1},'b-=0.5')
dataIdSlide01.to(".sc-service .service-area1 .card-img-box .lock-img02",{opacity:0})
dataIdSlide01.to(".sc-service .service-area1 .card-img-box .text-gradient",{opacity:1})


const dataIDSlide02 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-service .service-area2",
        start:"0% 0%",
        end:"100% 100%",
        scrub:0,
        invalidateOnRefresh:true,
        //markers:true,
        onEnter:function(){
            gsap.set('.sc-service .service-area1 .card_list',{opacity:0})
            gsap.set('.sc-service .service-area2 .col-left',{opacity:1})
        },
        onLeaveBack:function(){
            gsap.set('.sc-service .service-area1 .card_list',{opacity:1})
            gsap.set('.sc-service .service-area2 .col-left',{opacity:0})
        }
    }
 });
const card3Width = $('.sc-service .service-area3 .card02_list-wrap .card-item');
const area3Slide = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-service .service-area3",
        start:"top top",
        end:"bottom bottom",
        scrub:0,
        //markers:true,
        invalidateOnfresh:true,
        onEnter:function(){
            gsap.set('.sc-service .service-area2 .col-left',{opacity:0})
            gsap.set('.sc-service .service-area3 .card',{opacity:1})
        },
        onLeaveBack:function(){
            gsap.set('.sc-service .service-area2 .col-left',{opacity:1})
            gsap.set('.sc-service .service-area3 .card',{opacity:0})
        }
    }
});
area3Slide.to(".sc-service .service-area3 .card02_list-wrap .card-item:nth-child(1)",1,{
    x:  function () {
        return -1*(card3Width.outerWidth(true));
    }
},'a')
area3Slide.to(".sc-service .service-area3 .card02_list-wrap .card-item:nth-child(2)",1,{
    x:  function () {
        return -2*(card3Width.outerWidth(true));
    }
},'a')
area3Slide.to(".sc-service .service-area3 .card02_list-wrap .card-item:nth-child(3)",1,{
    x:  function () {
        return -3*(card3Width.outerWidth(true));
    }
},'a')
area3Slide.to('.sc-service .service-area3 .service-bottom-text .title',{opacity:1})




const aniBottom = gsap.timeline();
aniBottom.addLabel("togetder__")
    .to(".sc-prove-bottom",{"--width": "416px"},"togetder__")
    .to(".sc-prove-bottom .title-wrap .title01",{x:-300},"togetder__")
    .to(".sc-prove-bottom .title-wrap .title03",{x:300},"togetder__")

ScrollTrigger.create({
    animation:aniBottom,
    trigger:".sc-challenge-bottom",
    start:"300px top",
    end:"bottom bottom",
    scrub:true,
    markers:false
});



const cardlist01 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-card-list01",
        start:"top top",
        end:"bottom bottom",
        scrub:0,
        //markers:true,
    }
});
//width가 딱 맞을때 사용...
// ani_slide.to(".sc-slide .slide-sub-wrap",{
//     xPercent:-100,
//     x: function () {
//         return window.innerWidth;
//     }
// }) 

cardlist01.to(".sc-card-list01 .inner",{
    xPercent: -50
    // x: function () {
    //     xPercent: -100
    // }
},'a') 
cardlist01.to(".sc-card-list01 .arrowmove",{ opacity: 1},'a-=.5') 
cardlist01.to(".sc-card-list01 .arrowmove .arrow-text-item:nth-child(2)",{opacity: 1}) 
cardlist01.to(".sc-card-list01 .arrowmove",{ opacity: 0},) 



const ani___ = gsap.timeline();

ani___.to(".sc-creator .creator-text-wrap",{opacity: 1})
    .to(".sc-creator .creator-text-wrap",{opacity: 0})

ScrollTrigger.create({
    animation:ani___,
    trigger:".sc-creator",
    start:"top top",
    end:"+=1000",
    scrub:true,
    pin:true,
    anticipatePin:1,
    markers:false
});


const cardlist02 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-card-list02",
        start:"top top",
        end:"bottom bottom",
        scrub:0,
        //markers:true,
    }
});
cardlist02.to(".sc-card-list02 .inner",{
    xPercent: -50
    // x: function () {
    //     xPercent: -100
    // }
}) 

gsap.to('.flow-area ',20,{
    xPercent:50,
    repeat:-1,
    ease:'none',
})

const flow = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-ground",
        start:"top top",
        end:"bottom bottom",
        //scrub:0,
        //markers:true,
    }
});
flow.to(".sc-ground .flow-area ",{'margin-bottom': 0}) 