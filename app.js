function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy('#main', {
        scrollTop(value) {
            return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClient() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            }; 
        },
        pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
});

function files(index) {
    var data = `
    ./cf-avatars/0001.png
    ./cf-avatars/0002.png
    ./cf-avatars/0003.png
    ./cf-avatars/0004.png
    ./cf-avatars/0005.png
    ./cf-avatars/0006.png
    ./cf-avatars/0007.png
    ./cf-avatars/0008.png
    ./cf-avatars/0009.png
    ./cf-avatars/0010.png
    ./cf-avatars/0011.png
    ./cf-avatars/0012.png
    ./cf-avatars/0013.png
    ./cf-avatars/0014.png
    ./cf-avatars/0015.png
    ./cf-avatars/0016.png
    ./cf-avatars/0017.png
    ./cf-avatars/0018.png
    ./cf-avatars/0019.png
    ./cf-avatars/0020.png
    ./cf-avatars/0021.png
    ./cf-avatars/0022.png
    ./cf-avatars/0023.png
    ./cf-avatars/0024.png
    ./cf-avatars/0025.png
    ./cf-avatars/0026.png
    ./cf-avatars/0027.png
    ./cf-avatars/0028.png
    ./cf-avatars/0029.png
    ./cf-avatars/0030.png
    ./cf-avatars/0031.png
    ./cf-avatars/0032.png
    ./cf-avatars/0033.png
    ./cf-avatars/0034.png
    ./cf-avatars/0035.png
    ./cf-avatars/0036.png
    ./cf-avatars/0037.png
    ./cf-avatars/0038.png
    ./cf-avatars/0039.png
    ./cf-avatars/0040.png
    ./cf-avatars/0041.png
    ./cf-avatars/0042.png
    ./cf-avatars/0043.png
    ./cf-avatars/0044.png
    ./cf-avatars/0045.png
    ./cf-avatars/0046.png
    ./cf-avatars/0047.png
    ./cf-avatars/0048.png
    ./cf-avatars/0049.png
    ./cf-avatars/0050.png
    ./cf-avatars/0051.png
    ./cf-avatars/0052.png
    ./cf-avatars/0053.png
    ./cf-avatars/0054.png
    ./cf-avatars/0055.png
    ./cf-avatars/0056.png
    ./cf-avatars/0057.png
    ./cf-avatars/0058.png
    ./cf-avatars/0059.png
    ./cf-avatars/0060.png
    ./cf-avatars/0061.png
    ./cf-avatars/0062.png
    ./cf-avatars/0063.png
    ./cf-avatars/0064.png
    ./cf-avatars/0065.png
    ./cf-avatars/0066.png
    ./cf-avatars/0067.png
    ./cf-avatars/0068.png
    ./cf-avatars/0069.png
    ./cf-avatars/0070.png
    ./cf-avatars/0071.png
    ./cf-avatars/0072.png
    ./cf-avatars/0073.png
    ./cf-avatars/0074.png
    ./cf-avatars/0075.png
    ./cf-avatars/0076.png
    ./cf-avatars/0077.png
    ./cf-avatars/0078.png
    ./cf-avatars/0079.png
    ./cf-avatars/0080.png
    ./cf-avatars/0081.png
    ./cf-avatars/0082.png
    ./cf-avatars/0083.png
    ./cf-avatars/0084.png
    ./cf-avatars/0085.png
    ./cf-avatars/0086.png
    ./cf-avatars/0087.png
    ./cf-avatars/0088.png
    ./cf-avatars/0089.png
    ./cf-avatars/0090.png
    ./cf-avatars/0091.png
    ./cf-avatars/0092.png
    ./cf-avatars/0093.png
    ./cf-avatars/0094.png
    ./cf-avatars/0095.png
    ./cf-avatars/0096.png
    ./cf-avatars/0097.png
    ./cf-avatars/0098.png
    ./cf-avatars/0099.png
    ./cf-avatars/0100.png
    ./cf-avatars/0101.png
    ./cf-avatars/0102.png
    ./cf-avatars/0103.png
    ./cf-avatars/0104.png
    ./cf-avatars/0105.png
    ./cf-avatars/0106.png
    ./cf-avatars/0107.png
    ./cf-avatars/0108.png
    ./cf-avatars/0109.png
    ./cf-avatars/0110.png
    ./cf-avatars/0111.png
    ./cf-avatars/0112.png
    ./cf-avatars/0113.png
    ./cf-avatars/0114.png
    ./cf-avatars/0115.png
    ./cf-avatars/0116.png
    ./cf-avatars/0117.png
    ./cf-avatars/0118.png
    ./cf-avatars/0119.png
    ./cf-avatars/0120.png
    ./cf-avatars/0121.png
    ./cf-avatars/0122.png
    ./cf-avatars/0123.png
    ./cf-avatars/0124.png
    ./cf-avatars/0125.png
    ./cf-avatars/0126.png
    ./cf-avatars/0127.png
    ./cf-avatars/0128.png
    ./cf-avatars/0129.png
    ./cf-avatars/0130.png
    ./cf-avatars/0131.png
    ./cf-avatars/0132.png
    ./cf-avatars/0133.png
    ./cf-avatars/0134.png
    ./cf-avatars/0135.png
    ./cf-avatars/0136.png
    ./cf-avatars/0137.png
    ./cf-avatars/0138.png
    ./cf-avatars/0139.png
    ./cf-avatars/0140.png
    ./cf-avatars/0141.png
    ./cf-avatars/0142.png
    ./cf-avatars/0143.png
    ./cf-avatars/0144.png
    ./cf-avatars/0145.png
    ./cf-avatars/0146.png
    ./cf-avatars/0147.png
    ./cf-avatars/0148.png
    ./cf-avatars/0149.png
    ./cf-avatars/0150.png
    ./cf-avatars/0151.png
    ./cf-avatars/0152.png
    ./cf-avatars/0153.png
    ./cf-avatars/0154.png
    ./cf-avatars/0155.png
    ./cf-avatars/0156.png
    ./cf-avatars/0157.png
    ./cf-avatars/0158.png
    ./cf-avatars/0159.png
    ./cf-avatars/0160.png
    ./cf-avatars/0161.png
    ./cf-avatars/0162.png
    ./cf-avatars/0163.png
    ./cf-avatars/0164.png
    ./cf-avatars/0165.png
    ./cf-avatars/0166.png
    ./cf-avatars/0167.png
    ./cf-avatars/0168.png
    ./cf-avatars/0169.png
    ./cf-avatars/0170.png
    ./cf-avatars/0171.png
    ./cf-avatars/0172.png
    ./cf-avatars/0173.png
    ./cf-avatars/0174.png
    ./cf-avatars/0175.png
    ./cf-avatars/0176.png
    ./cf-avatars/0177.png
    ./cf-avatars/0178.png
    ./cf-avatars/0179.png
    ./cf-avatars/0180.png
    ./cf-avatars/0181.png
    ./cf-avatars/0182.png
    ./cf-avatars/0183.png
    ./cf-avatars/0184.png
    ./cf-avatars/0185.png
    ./cf-avatars/0186.png
    ./cf-avatars/0187.png
    ./cf-avatars/0188.png
    ./cf-avatars/0189.png
    ./cf-avatars/0190.png
    ./cf-avatars/0191.png
    ./cf-avatars/0192.png
    ./cf-avatars/0193.png
    ./cf-avatars/0194.png
    ./cf-avatars/0195.png
    ./cf-avatars/0196.png
    ./cf-avatars/0197.png
    ./cf-avatars/0198.png
    ./cf-avatars/0199.png
    ./cf-avatars/0200.png
    ./cf-avatars/0201.png
    ./cf-avatars/0202.png
    ./cf-avatars/0203.png
    ./cf-avatars/0204.png
    ./cf-avatars/0205.png
    ./cf-avatars/0206.png
    ./cf-avatars/0207.png
    ./cf-avatars/0208.png
    ./cf-avatars/0209.png
    ./cf-avatars/0210.png
    ./cf-avatars/0211.png
    ./cf-avatars/0212.png
    ./cf-avatars/0213.png
    ./cf-avatars/0214.png
    ./cf-avatars/0215.png
    ./cf-avatars/0216.png
    ./cf-avatars/0217.png
    ./cf-avatars/0218.png
    ./cf-avatars/0219.png
    ./cf-avatars/0220.png
    ./cf-avatars/0221.png
    ./cf-avatars/0222.png
    ./cf-avatars/0223.png
    ./cf-avatars/0224.png
    ./cf-avatars/0225.png
    ./cf-avatars/0226.png
    ./cf-avatars/0227.png
    ./cf-avatars/0228.png
    ./cf-avatars/0229.png
    ./cf-avatars/0230.png
    ./cf-avatars/0231.png
    ./cf-avatars/0232.png
    ./cf-avatars/0233.png
    ./cf-avatars/0234.png
    ./cf-avatars/0235.png
    ./cf-avatars/0236.png
    ./cf-avatars/0237.png
    ./cf-avatars/0238.png
    ./cf-avatars/0239.png
    ./cf-avatars/0240.png
    ./cf-avatars/0241.png
    ./cf-avatars/0242.png
    ./cf-avatars/0243.png
    ./cf-avatars/0244.png
    ./cf-avatars/0245.png
    ./cf-avatars/0246.png
    ./cf-avatars/0247.png
    ./cf-avatars/0248.png
    ./cf-avatars/0249.png
    ./cf-avatars/0250.png
    ./cf-avatars/0251.png
    ./cf-avatars/0252.png
    ./cf-avatars/0253.png
    ./cf-avatars/0254.png
    ./cf-avatars/0255.png
    ./cf-avatars/0256.png
    ./cf-avatars/0257.png
    ./cf-avatars/0258.png
    ./cf-avatars/0259.png
    ./cf-avatars/0260.png
    ./cf-avatars/0261.png
    ./cf-avatars/0262.png
    ./cf-avatars/0263.png
    ./cf-avatars/0264.png
    ./cf-avatars/0265.png
    ./cf-avatars/0266.png
    ./cf-avatars/0267.png
    ./cf-avatars/0268.png
    ./cf-avatars/0269.png
    ./cf-avatars/0270.png
    ./cf-avatars/0271.png
    ./cf-avatars/0272.png
    ./cf-avatars/0273.png
    ./cf-avatars/0274.png
    ./cf-avatars/0275.png
    ./cf-avatars/0276.png
    ./cf-avatars/0277.png
    ./cf-avatars/0278.png
    ./cf-avatars/0279.png
    ./cf-avatars/0280.png
    ./cf-avatars/0281.png
    ./cf-avatars/0282.png
    ./cf-avatars/0283.png
    ./cf-avatars/0284.png
    ./cf-avatars/0285.png
    ./cf-avatars/0286.png
    ./cf-avatars/0287.png
    ./cf-avatars/0288.png
    ./cf-avatars/0289.png
    ./cf-avatars/0290.png
    ./cf-avatars/0291.png
    ./cf-avatars/0292.png
    ./cf-avatars/0293.png
    ./cf-avatars/0294.png
    ./cf-avatars/0295.png
    ./cf-avatars/0296.png
    ./cf-avatars/0297.png
    ./cf-avatars/0298.png
    ./cf-avatars/0299.png
    ./cf-avatars/0300.png
    ./cf-avatars/0301.png
    ./cf-avatars/0302.png
    ./cf-avatars/0303.png
    ./cf-avatars/0304.png
    ./cf-avatars/0305.png
    ./cf-avatars/0306.png
    ./cf-avatars/0307.png
    ./cf-avatars/0308.png
    ./cf-avatars/0309.png
    ./cf-avatars/0310.png
    ./cf-avatars/0311.png
    ./cf-avatars/0312.png
    ./cf-avatars/0313.png
    ./cf-avatars/0314.png
    ./cf-avatars/0315.png
    ./cf-avatars/0316.png
    ./cf-avatars/0317.png
    ./cf-avatars/0318.png
    ./cf-avatars/0319.png
    ./cf-avatars/0320.png
    ./cf-avatars/0321.png
    ./cf-avatars/0322.png
    ./cf-avatars/0323.png
    ./cf-avatars/0324.png
    ./cf-avatars/0325.png
    ./cf-avatars/0326.png
    ./cf-avatars/0327.png
    ./cf-avatars/0328.png
    ./cf-avatars/0329.png
    ./cf-avatars/0330.png
    ./cf-avatars/0331.png
    ./cf-avatars/0332.png
    ./cf-avatars/0333.png
    ./cf-avatars/0334.png
    ./cf-avatars/0335.png
    ./cf-avatars/0336.png
    ./cf-avatars/0337.png
    ./cf-avatars/0338.png
    ./cf-avatars/0339.png
    ./cf-avatars/0340.png
    ./cf-avatars/0341.png
    ./cf-avatars/0342.png
    ./cf-avatars/0343.png
    ./cf-avatars/0344.png
    ./cf-avatars/0345.png
    ./cf-avatars/0346.png
    ./cf-avatars/0347.png
    ./cf-avatars/0348.png
    ./cf-avatars/0349.png
    ./cf-avatars/0350.png
    ./cf-avatars/0351.png
    ./cf-avatars/0352.png
    ./cf-avatars/0353.png
    ./cf-avatars/0354.png
    ./cf-avatars/0355.png
    ./cf-avatars/0356.png
    ./cf-avatars/0357.png
    ./cf-avatars/0358.png
    ./cf-avatars/0359.png
    ./cf-avatars/0360.png
    ./cf-avatars/0361.png
    ./cf-avatars/0362.png
    ./cf-avatars/0363.png
    ./cf-avatars/0364.png
    ./cf-avatars/0365.png
    ./cf-avatars/0366.png
    ./cf-avatars/0367.png
    ./cf-avatars/0368.png
    ./cf-avatars/0369.png
    ./cf-avatars/0370.png
    ./cf-avatars/0371.png
    ./cf-avatars/0372.png
    ./cf-avatars/0373.png
    ./cf-avatars/0374.png
    ./cf-avatars/0375.png
    ./cf-avatars/0376.png
    ./cf-avatars/0377.png
    ./cf-avatars/0378.png
    ./cf-avatars/0379.png
    ./cf-avatars/0380.png
    ./cf-avatars/0381.png
    ./cf-avatars/0382.png
    ./cf-avatars/0383.png
    ./cf-avatars/0384.png
    ./cf-avatars/0385.png
    ./cf-avatars/0386.png
    ./cf-avatars/0387.png
    ./cf-avatars/0388.png
    ./cf-avatars/0389.png
    ./cf-avatars/0390.png
    ./cf-avatars/0391.png
    ./cf-avatars/0392.png
    ./cf-avatars/0393.png
    ./cf-avatars/0394.png
    ./cf-avatars/0395.png
    ./cf-avatars/0396.png
    ./cf-avatars/0397.png
    ./cf-avatars/0398.png
    ./cf-avatars/0399.png
    ./cf-avatars/0400.png
    ./cf-avatars/0401.png
    ./cf-avatars/0402.png
    ./cf-avatars/0403.png
    ./cf-avatars/0404.png
    ./cf-avatars/0405.png
    ./cf-avatars/0406.png
    ./cf-avatars/0407.png
    ./cf-avatars/0408.png
    ./cf-avatars/0409.png
    ./cf-avatars/0410.png
    ./cf-avatars/0411.png
    ./cf-avatars/0412.png
    ./cf-avatars/0413.png
    ./cf-avatars/0414.png
    ./cf-avatars/0415.png
    ./cf-avatars/0416.png
    ./cf-avatars/0417.png
    ./cf-avatars/0418.png
    ./cf-avatars/0419.png
    ./cf-avatars/0420.png
    ./cf-avatars/0421.png
    ./cf-avatars/0422.png
    ./cf-avatars/0423.png
    ./cf-avatars/0424.png
    ./cf-avatars/0425.png
    ./cf-avatars/0426.png
    ./cf-avatars/0427.png
    ./cf-avatars/0428.png
    ./cf-avatars/0429.png
    ./cf-avatars/0430.png
    ./cf-avatars/0431.png
    ./cf-avatars/0432.png
    ./cf-avatars/0433.png
    ./cf-avatars/0434.png
    ./cf-avatars/0435.png
    ./cf-avatars/0436.png
    ./cf-avatars/0437.png
    ./cf-avatars/0438.png
    ./cf-avatars/0439.png
    ./cf-avatars/0440.png
    ./cf-avatars/0441.png
    ./cf-avatars/0442.png
    ./cf-avatars/0443.png
    ./cf-avatars/0444.png
    ./cf-avatars/0445.png
    ./cf-avatars/0446.png
    ./cf-avatars/0447.png
    ./cf-avatars/0448.png
    ./cf-avatars/0449.png
    ./cf-avatars/0450.png
    ./cf-avatars/0451.png
    ./cf-avatars/0452.png
    ./cf-avatars/0453.png
    ./cf-avatars/0454.png
    ./cf-avatars/0455.png
    ./cf-avatars/0456.png
    ./cf-avatars/0457.png
    ./cf-avatars/0458.png
    ./cf-avatars/0459.png
    ./cf-avatars/0460.png
    ./cf-avatars/0461.png
    ./cf-avatars/0462.png
    ./cf-avatars/0463.png
    ./cf-avatars/0464.png
    ./cf-avatars/0465.png
    ./cf-avatars/0466.png
    ./cf-avatars/0467.png
    ./cf-avatars/0468.png
    ./cf-avatars/0469.png
`;

    return data.split("\n")[index];
}

const frameCount = 469;

const images = [];
const imageSeq = {
    frame: 1,
};

for (let i = 0; i < frameCount; i++){
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 0.15,
        trigger: `#page>canvas`,
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
    },
    onUpdate: render,
});

images[1].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
}

ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
});

gsap.to("#page1",{
    scrollTrigger:{
        trigger:`#page1`,
        start:`top top`,
        end:`bottom top`,
        markers: true,
        pin:true,
        scroller:`#main`
    }
})
gsap.to("#page2",{
    scrollTrigger:{
        trigger:`#page2`,
        start:`top top`,
        end:`bottom top`,
        markers: true,
        pin:true,
        scroller:`#main`
    }
})
gsap.to("#page3",{
    scrollTrigger:{
        trigger:`#page3`,
        start:`top top`,
        end:`bottom top`,
        markers: true,
        pin:true,
        scroller:`#main`
    }
})
gsap.to("#page4",{
    scrollTrigger:{
        trigger:`#page4`,
        start:`top top`,
        end:`bottom top`,
        markers: true,
        pin:true,
        scroller:`#main`
    }
})

// gsap.to("#page5",{
//     scrollTrigger:{
//         trigger:`#page5`,
//         start:`top top`,
//         end:`bottom top`,
//         markers: true,
//         pin:true,
//         scroller:`#main`
//     }
// })
// gsap.to("#page6",{
//     scrollTrigger:{
//         trigger:`#page6`,
//         start:`top top`,
//         end:`bottom top`,
//         markers: true,
//         pin:true,
//         scroller:`#main`
//     }
// })
// gsap.to("#page7",{
//     scrollTrigger:{
//         trigger:`#page7`,
//         start:`top top`,
//         end:`bottom top`,
//         markers: true,
//         pin:true,
//         scroller:`#main`
//     }
// })