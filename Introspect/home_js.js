function myfun()
{
    var controller=new ScrollMagic.Controller();
    var t1 =new  TimelineLite();
    t1.from('#banid', 2, {opacity: 0})
        .from('.myheader', 2, {y:-100,opacity: 0},'-=2')
        .to('#maintext', {duration: 3, text: "Introspect A free template background and Respondive Design", ease: "none"},'-=1');
    var t2 = new TimelineMax();
    t2.from('.mel',{opacity:0,x:-40,duration:1,ease:Power0.easeIn})

    var scene=new ScrollMagic.Scene(
        {
            triggerElement:'.mel',
            triggerHook:0.6
        }
    )
        scene.setTween(t2)
        scene.addTo(controller)

    var t3=new TimelineMax();
    t3.from('.pelle',{opacity:0,x:-40,duration:1,ease:Power0.easeIn})
        .from('.morbi',{opacity:0,x:40,duration:1,ease:Power0.easeIn},'-=1');
    var scene=new ScrollMagic.Scene(
        {
            triggerElement:'.cards',
            triggerHook:0.5
        }
    )
    scene.setTween(t3)
    scene.addTo(controller)
    var t4=new TimelineMax();
    t4.from('.threecards',{opacity:0,duration:1,y:-50,ease:Power0.easeIn});
    var scene=new ScrollMagic.Scene(
        {
            triggerElement:'.threecards',
            triggerHook:0.6
        }
    )
    scene.setTween(t4)
    scene.addTo(controller)

    var t5=new TimelineMax();
    t5.from('.foot',{opacity:0,duration:1,ease:Power0.easeIn});
    var scene=new ScrollMagic.Scene(
        {
            triggerElement:'.foot',
            triggerHook:0.6
        }
    )
    scene.setTween(t5)
    scene.addTo(controller)
}
$(document).ready(myfun);