$(window).on('load',function(){
    const windowInnerWidth = $(window).innerWidth()
    const windowInnerHeigth = $(window).innerHeight()
    const sec4Innerbox2Innerbox = $('.sec4-box2-innerbox')
    const sec4Innerbox1 = $('.sec4-innerbox1')
    const sec5Box2Innerbox1 = $('.sec5-box2-innerbox1')
    const sec5Box2Innerbox1P = $('.sec5-box2-innerbox1 p')
    const sec5Box2Innerbox2 = $('.sec5-box2-innerbox2')
    const sec5Box2Innerbox2P = $('.sec5-box2-innerbox2 p')
    let Lastscroll = 0;

    sec4Innerbox2Innerbox.css("height",`${sec4Innerbox1.innerHeight()}px`)
    sec5Box2Innerbox1.css("width",`${sec5Box2Innerbox1P.width()}px`)
    sec5Box2Innerbox2.css("width",`${sec5Box2Innerbox2P.innerWidth()}px`)

    $('.sec1-wrap').css("height",`calc(var(--vh,1vh) * 100 - ${$('header').innerHeight()}px)`)
    $('.sec1-wrap').css("margin-top",`${$('header').innerHeight()}px`)
    $('.sec1-bg').css("width","90%")
    $('.sec1-bg').css("height","90%")
    $('.sec1-bg').css("border-radius","20px")
    $('.sec1-box h2').css("transform","translate3d(0,0,0)")
    $('.sec1-box h2').css("opacity",1)
    $('.sec1-box h2 span').css("transform","translate3d(0,0,0)")
    $('.sec1-box h2 span').css("opacity",1)
    let sec1h2Up  = setTimeout(()=>{
        if(windowInnerWidth <= 768){
            $('.sec1-box h2').css("transform","translate3d(0,-20px,0)")    
        }else{
            $('.sec1-box h2').css("transform","translate3d(0,-50px,0)")    
        }  
    },2000)
    $('.sec1-box p').css("opacity",1)


    if($(window).innerHeight() <= 768){
        if(navigator.userAgent.indexOf('KAKAO') >= 0){
        document.documentElement.style.setProperty("--vh",`${windowInnerHeigth*0.01}px`)
        $(window).resize(()=>{
        document.documentElement.style.setProperty("--vh",`${windowInnerHeigth*0.01+1.03}px`)
        })
        }else{
        
        $(window).resize(()=>{
        document.documentElement.style.setProperty("--vh",`${$(window).innerHeight()*0.01}px`)
        })
        }
    }









    $(window).scroll(function(){
        let scrollY = $(window).scrollTop()
        
        if(windowInnerWidth <= 768){

        }else{
            if(scrollY > Lastscroll){
                $("header").css("transform","translate3d(0,-110%,0)")
            }else{
                $("header").css("transform","translate3d(0,0,0)")
            }
        Lastscroll = scrollY;

        }
        


        
        /* OnScrollingTo(요소,양음수,시작위치,끝위치,시작값 = 0,무브값,속도 = 1,방향,스케일 = 1,트렌지션 = ".5s linear") */
        function OnScrollingTo({
            element = "", 
            sign = "", 
            offsetstart = 0, 
            offsetend = 0, 
            startdistance = 0,
            distance = 0,
            fakedistance = 0,
            basedistance = 0,
            direction = "Y",
            speed = 1,
            scale = 1,
            transitionIn ="none",
            transitionOut ="none",
            opacity = 1
        })
        {
            this.element = element,
            this.sign = sign, 
            this.offsetstart = offsetstart,
            this.offsetend = offsetend, 
            this.startdistance = startdistance,
            this.distance = distance,
            this.fakedistance = fakedistance,
            this.basedistance = basedistance,
            this.direction = direction,
            this.speed = speed,
            this.scale = scale,
            this.transitionIn = transitionIn,
            this.transitionOut =transitionOut,
            this.opacity = opacity,
            this.event = function(){
                let moveValue = (scrollY - this.offsetstart) * this.speed * this.distance / (this.offsetend - this.offsetstart)
                moveValue < 0 ? moveValue = 0 : moveValue > this.distance ? moveValue = this.distance : moveValue = moveValue
                this.direction.toUpperCase()
            if(scrollY >= this.offsetstart && scrollY <= this.offsetend){
                    $(this.element).css("transition",`${this.transitionIn}`)
                    $(this.element).css("opacity",this.opacity)
                    if(this.scale !== 1){
                    $(this.element).css("transform",`translate${this.direction}(${this.sign}${this.startdistance+moveValue}px) scale(${1+ (this.scale-1) * (moveValue/this.distance)})`)
                    }else {
                    $(this.element).css("transform",`translate${this.direction}(${this.sign}${this.startdistance+moveValue}px)`)
                    }
    
            }else if(scrollY < this.offsetstart - this.fakedistance ){
                    if(this.scale !== 1){
                    $(this.element).css("transform",`translate${this.direction}(${this.basedistance}px) scale(1)`)
                    }else {
                    $(this.element).css("transform",`translate${this.direction}(${this.basedistance}px)`)
                    }
                    $(this.element).css("transition",`${this.transitionOut}`)
    
            }else if(scrollY > this.offsetend){
                if(this.scale !== 1){
                $(this.element).css("transform",`translate${this.direction}(${this.sign}${this.startdistance+this.distance}px) scale(${this.scale})`)
                }else {
                $(this.element).css("transform",`translate${this.direction}(${this.sign}${this.startdistance+this.distance}px)`)
                }
                $(this.element).css("transition",`${this.transitionOut}`)
            }
        }
        }

       

        function OnScrollingToOpacity({
            element = "", 
            offsetstart = 0, 
            offsetend = 0,
            opacity = 1,
            transition = "none",
            previousEvent = false,
            previousEventValue = 0,
            nextEvent = false,
            nextEventValue = 0,

        })
        {
            this.event = function(){
                if(scrollY >= offsetstart && scrollY <= offsetend){
                    $(element).css("transtion",transition)
                    $(element).css("opacity",opacity)
                  }

                  if(previousEvent){
                    if(scrollY < offsetstart - previousEventValue){
                            if(opacity === 1){
                            $(element).css("opacity",0)
                            }else{
                            $(element).css("opacity",1)
                            }
                        }
                  }
                  if(nextEvent){
                    if(scrollY > offsetend + nextEventValue){
                            if(opacity === 1){
                            $(element).css("opacity",0)
                            }else{
                            $(element).css("opacity",1)
                            }
                        }
                  }
            }
            }

            let fakescroll = new OnScrollingTo({
                element :".fake-txt p", 
                sign :"-", 
                offsetstart : 100,
                offsetend :300,
                startdistance :0,
                distance :200,
                direction :"Y",
                speed :1,
                scale :1,
                transitionIn :".5s cubic-bezier(0.215, 0.610, 0.355, 1)",
                transitionOut :".5s cubic-bezier(0.215, 0.610, 0.355, 1)"
            })
            if(windowInnerWidth <= 768){
            fakescroll.distance = 100;
            }
            fakescroll.event()

            let sec2wrapscroll = new OnScrollingTo({
                element : ".sec2-wrap",
                sign : "-",
                offsetstart : 100,
                offsetend : 300,
                startdistance : 0,
                distance : 200,
                speed : 1,
                direction : "Y",
                scale : 1,
                transitionIn :".5s cubic-bezier(0.215, 0.610, 0.355, 1)",
                transitionOut :".5s cubic-bezier(0.215, 0.610, 0.355, 1)"
            })
            if(windowInnerWidth <= 768){
                sec2wrapscroll.distance = 100;
            }
            sec2wrapscroll.event()
      
            
            

            let faketxtOpa = new OnScrollingToOpacity({
                element : ".fake-txt p",
                offsetstart : 400,
                offsetend : 600,
                opacity : 0,
                transition :".5s linear",
                previousEvent : true,

            })
            faketxtOpa.event()

            let sec2pOpa = new OnScrollingToOpacity({
                element : ".sec2-wrap p:nth-child(1)",
                offsetstart : 400,
                offsetend : 600,
                opacity : 1,
                transition :".5s linear",
                previousEvent : true,
            })
            sec2pOpa.event()

            let sec2wrapscroll2 = new OnScrollingTo({
                element : ".sec2-wrap",
                sign : "",
                offsetstart : 600,
                offsetend : 1400,
                basedistance : 200,
                startdistance : -200,
                fakedistance : 500,
                distance : 1000,
                speed : 1,
                direction : "Y",
                scale : 1,
                transitionIn :".5s cubic-bezier(0.215, 0.610, 0.355, 1)",
                transitionOut :".5s cubic-bezier(0.215, 0.610, 0.355, 1)"
            })
            if(windowInnerWidth <= 768){
                sec2wrapscroll2.startdistance = -100;
                sec2wrapscroll2.distance = 800;
            }

            

            sec2wrapscroll2.event()

           
            if( scrollY >= 601){
                $(".sec2-wrap p:nth-child(1)").css("color",`#000`)
            } else {
                $(".sec2-wrap p:nth-child(1)").css("color",`#505050`)
            }     

            let sec2Pscroll1 = new OnScrollingTo({
                element : ".sec2-wrap p:nth-child(1)",
                sign : "-",
                offsetstart : 1000,
                offsetend : 1600,
                basedistance : 0,
                startdistance : 0,
                fakedistance : 0,
                distance : 1600,
                speed : 1.4,
                direction : "X",
                scale : 1,
                transitionIn :".5s linear",
                transitionOut :".5s linear"
            })
            if(windowInnerWidth <= 768){
                sec2Pscroll1.offsetstart = 800;
                sec2Pscroll1.distance = 500;
            }
            sec2Pscroll1.event()

            let sec2Pscroll2 = new OnScrollingTo({
                element : ".sec2-wrap p:nth-child(2)",
                sign : "+",
                offsetstart : 1000,
                offsetend : 1600,
                basedistance : 0,
                startdistance : 0,
                fakedistance : 0,
                distance : 1600,
                speed : 1.2,
                direction : "X",
                scale : 1,
                transitionIn :".5s linear",
                transitionOut :".5s linear"
            })
            if(windowInnerWidth <= 768){
                sec2Pscroll2.offsetstart = 800;
                sec2Pscroll2.distance = 500;
            }
            sec2Pscroll2.event()

            let sec2Pscroll3 = new OnScrollingTo({
                element : ".sec2-wrap p:nth-child(3)",
                sign : "+",
                offsetstart : 1000,
                offsetend : 1600,
                basedistance : 0,
                startdistance : 0,
                fakedistance : 0,
                distance : 1600,
                speed : 1.8,
                direction : "X",
                scale : 1,
                transitionIn :".5s linear",
                transitionOut :".5s linear"
            })
            if(windowInnerWidth <= 768){
                sec2Pscroll3.offsetstart = 800;
                sec2Pscroll3.distance = 500;
            }
            sec2Pscroll3.event()

            let sec3Boxscroll = new OnScrollingTo({
                element : ".sec3-wrap .sec3-box",
                sign : "-",
                offsetstart : 1200,
                offsetend : 2500,
                basedistance : 0,
                startdistance : 0,
                fakedistance : 0,
                distance : 500,
                speed : 0.2,
                direction : "Y",
                scale : 1,
                transitionIn :".2s linear",
                transitionOut :".2s linear"
            })
            sec3Boxscroll.event()

            let sec3Imgscroll1 = new OnScrollingTo({
                element : ".sec3-wrap img:nth-child(2)",
                sign : "-",
                offsetstart : 1200,
                offsetend : 2500,
                basedistance : 0,
                startdistance : 0,
                fakedistance : 0,
                distance : 350,
                speed : 0.2,
                direction : "Y",
                scale : 1,
                transitionIn :".2s linear",
                transitionOut :".2s linear"
            })

            if(windowInnerWidth <= 768){
                sec3Imgscroll1.offsetend = 1800
                sec3Imgscroll1.direction = "X"
                sec3Imgscroll1.speed = 1
                sec3Imgscroll1.transitionIn =".5s cubic-bezier(0.215, 0.610, 0.355, 1)",
                sec3Imgscroll1.transitionOut =".5s linear"
            }
            sec3Imgscroll1.event()

            let sec3Imgscroll2 = new OnScrollingTo({
                element : ".sec3-wrap img:nth-child(3)",
                sign : "-",
                offsetstart : 1200,
                offsetend : 2500,
                basedistance : 0,
                startdistance : 0,
                fakedistance : 0,
                distance : 400,
                speed : 0.4,
                direction : "Y",
                scale : 1,
                transitionIn :".2s linear",
                transitionOut :".2s linear"
            })
            if(windowInnerWidth <= 768){
                sec3Imgscroll2.offstart = 1800
                sec3Imgscroll2.offsetend = 2500
                sec3Imgscroll2.sign = "+"
                sec3Imgscroll2.direction = "X"
                sec3Imgscroll2.speed = 0.7
                sec3Imgscroll2.transitionIn =".5s cubic-bezier(0.215, 0.610, 0.355, 1)",
                sec3Imgscroll2.transitionOut =".5s linear"
                let sec3Imgscroll3 = new OnScrollingTo({
                    element : ".sec3-wrap img:nth-child(4)",
                    sign : "-",
                    offsetstart : 1200,
                    offsetend : 2500,
                    basedistance : 0,
                    startdistance : 0,
                    fakedistance : 0,
                    distance : 400,
                    speed : 0.4,
                    direction : "Y",
                    scale : 1,
                    transitionIn :".2s linear",
                    transitionOut :".2s linear"
                })
                sec3Imgscroll3.event()
            }
            sec3Imgscroll2.event()

            

            let sec3Imgscroll4 = new OnScrollingTo({
                element : ".sec3-wrap img:nth-child(5)",
                sign : "-",
                offsetstart : 1200,
                offsetend : 2500,
                basedistance : 0,
                startdistance : 0,
                fakedistance : 0,
                distance : 400,
                speed : 0.1,
                direction : "Y",
                scale : 1,
                transitionIn :".2s linear",
                transitionOut :".2s linear"
            })
            if(windowInnerWidth <= 768){
                sec3Imgscroll4.offsetend = 1800
                sec3Imgscroll4.sign = "+"
                sec3Imgscroll4.direction = "X"
                sec3Imgscroll4.speed = 0.4
                sec3Imgscroll4.transitionIn =".5s cubic-bezier(0.215, 0.610, 0.355, 1)",
                sec3Imgscroll4.transitionOut =".5s linear"
            }
            sec3Imgscroll4.event()

            const sec4 = $('#sec4')

            if(windowInnerWidth <= 768){
                let sec4Ratio = (scrollY - sec4.offset().top) / (sec4.innerHeight() - windowInnerHeigth);
                sec4Ratio < 0 ? sec4Ratio = 0 : sec4Ratio > 1 ? sec4Ratio = 1 : sec4Ratio = sec4Ratio;

                if(sec4Ratio > 0.1 && sec4Ratio <=0.5){
                $(".sec4-box2-img-wrap img:nth-child(2)").css("opacity",`${(sec4Ratio-0.1)*5}`)
                $(".sec4-innerbox-wrap").css("transform",`translateX(${-sec4Innerbox1.innerWidth()*(sec4Ratio - 0.1)*2.5}px)`)
                }
                if(sec4Ratio > 0.5 && sec4Ratio <=0.9){
                $(".sec4-box2-img-wrap img:nth-child(3)").css("opacity",`${(sec4Ratio-0.5)*5}`)
                $(".sec4-innerbox-wrap").css("transform",`translateX(${-sec4Innerbox1.innerWidth()*(sec4Ratio - 0.1)*2.5}px)`)
                } 
            }else{
                let sec4Ratio = (scrollY - sec4.offset().top) / (sec4.innerHeight() - windowInnerHeigth);
                sec4Ratio < 0 ? sec4Ratio = 0 : sec4Ratio > 1 ? sec4Ratio = 1 : sec4Ratio = sec4Ratio;

                if(sec4Ratio > 0.1 && sec4Ratio <=0.5){
                $(".sec4-box2-img-wrap img:nth-child(2)").css("opacity",`${(sec4Ratio-0.1)*5}`)
                $(".sec4-innerbox-wrap").css("transform",`translateY(${-sec4Innerbox1.innerHeight()*(sec4Ratio - 0.1)*2.5}px)`)
                }
                if(sec4Ratio > 0.5 && sec4Ratio <=0.9){
                $(".sec4-box2-img-wrap img:nth-child(3)").css("opacity",`${(sec4Ratio-0.5)*5}`)
                $(".sec4-innerbox-wrap").css("transform",`translateY(${-sec4Innerbox1.innerHeight()*(sec4Ratio - 0.1)*2.5}px)`)
                }
            }

                           


            let sec5Pscroll1 = new OnScrollingTo({
                element : ".sec5-box1 p:nth-child(2)",
                sign : "+",
                offsetstart : 6800,
                offsetend : 7900,
                basedistance : 0,
                startdistance : 0,
                fakedistance : 0,
                distance : 250,
                speed : 0.5,
                direction : "X",
                scale : 0.8,
                transitionIn :".5s cubic-bezier(0.215, 0.610, 0.355, 1)",
                transitionOut :".5s cubic-bezier(0.215, 0.610, 0.355, 1)"
            })
            sec5Pscroll1.event()

            let sec5Pscroll2 = new OnScrollingTo({
                element : ".sec5-box1 p:nth-child(3)",
                sign : "+",
                offsetstart : 6800,
                offsetend : 7900,
                basedistance : 0,
                startdistance : 0,
                fakedistance : 0,
                distance : 400,
                speed : 1,
                direction : "X",
                scale : 0.8,
                transitionIn :".5s cubic-bezier(0.215, 0.610, 0.355, 1)",
                transitionOut :".5s cubic-bezier(0.215, 0.610, 0.355, 1)"
            })
            sec5Pscroll2.event()

            let sec5Imgscroll1 = new OnScrollingTo({
                element : ".sec5-box2-innerbox1",
                sign : "-",
                offsetstart : 6800,
                offsetend : 7900,
                basedistance : 0,
                startdistance : 0,
                fakedistance : 0,
                distance : 100,
                speed : 0.2,
                direction : "Y",
                scale : 1,
                transitionIn :".2s linear",
                transitionOut :".2s linear"
            })
            sec5Imgscroll1.event()

            let sec5Imgscroll2 = new OnScrollingTo({
                element : ".sec5-box2-innerbox2",
                sign : "-",
                offsetstart : 6800,
                offsetend : 7900,
                basedistance : 0,
                startdistance : 0,
                fakedistance : 0,
                distance : 250,
                speed : 0.4,
                direction : "Y",
                scale : 1,
                transitionIn :".2s linear",
                transitionOut :".2s linear"
            })
            sec5Imgscroll2.event()

            let sec5Box3scroll = new OnScrollingTo({
                element : ".sec5-box3 p",
                sign : "-",
                offsetstart : 8300,
                offsetend : 8600,
                basedistance : 150,
                startdistance : 0,
                fakedistance : 0,
                distance : 150,
                speed : 1,
                direction : "Y",
                scale : 1,
                transitionIn :".5s cubic-bezier(0.215, 0.610, 0.355, 1)",
                transitionOut :".5s cubic-bezier(0.215, 0.610, 0.355, 1)"
            })

            if(windowInnerWidth <= 768){
                sec5Box3scroll.offsetstart = 7300
                sec5Box3scroll.offsetend = 7500
                sec5Box3scroll.distance = 50
            }
            sec5Box3scroll.event()
            console.log(sec5Box3scroll.event.moveValue)











    
                 
            // $('.fixed-gui p:nth-child(1)').html(`scrollY : ${scrollY}`)

    })





})  