$(document).ready(function() {
	/*Chart is a global object defined in Chart.js, we use this object to build our chatrs and set animations for charts. The statements below are used to set some configurations and instantiate our charts*/
	Chart.defaults.global.defaultFontColor = '#000';
	Chart.defaults.global.defaultFontSize = 16;
	Chart.defaults.global.defaultFontFamily = 'wenyue';
	Chart.defaults.global.animation.duration = 3000;
	var myBarChart;
	var myPieChart;
	var myRadarChart;
	var ctx1 = document.getElementById("childRatio").getContext("2d");
	var ctx2 = document.getElementById("childWilling").getContext("2d");
	var ctx3 = document.getElementById("childWillingDetails").getContext("2d");

    /*We use fullpage.js to relize the effect of single-page-slide. After document is loaded, we set up our custom parameters for fullpage.js*/
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        /*Define anchors for our pages*/
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'lastPage'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#fff', '#fff', '#fff', '#fff', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        /*onLeave() is a callback function which is called when user slide to next page. Parameter 'index' defines the page which applys the function*/
        onLeave: function(index, nextIndex, direction){
        	if(index==5){
        		$('.feeList').css({
        			'visibility': 'hidden',
        			'animation': 'none',
        			'-webkit-animation': 'none'
        		});
        	}
        },
        /*afterLoad() is also a callback function which defines the actions when user comes to a new page*/
        afterLoad: function(anchorLink, index){
        	if(index==3){
        		myBarChart = new Chart(ctx1, {
        			type: 'bar',
        			data: {
        				labels : ["1975-1979","1980-1989","1990-1995","1995-2000","2000-2005"],
        				datasets : [
        					{
        						fillColor : "rgba(0,0,0,1)",
        						strokeColor : "rgba(0,0,0,1)",
        						data : [15.6,19.3,35.1,49.5,64],
        						label: "独生子女家庭比例",
        						backgroundColor: [
        						'rgba(255, 206, 86, 1)',
        						'rgba(255, 206, 86, 1)',
        						'rgba(255, 206, 86, 1)',
        						'rgba(255, 206, 86, 1)',
        						'rgba(255, 206, 86, 1)'
        						],
        					}
        					]
        				},
        			options: {
        				scales: {
        					xAxes: [{
        						stacked: true,
        						gridLines: {
        							display: false,
        						},
        					}],
        					yAxes: [{
        						stacked: true,
        						gridLines: {
        							display: false,
        						},
        					}]
        				},
        			},
        		});
        	};
        	if(index==4){
        		myPieChart = new Chart(ctx2, {
        			type: 'pie',
        			data: {
        				labels: ["想生92%", "不生8%"],
        				datasets: [
        				{
        					data: [92, 8],
        					backgroundColor: ['#ff6384', '#ffce56'],
        				}
        				]
        			},
        		});
        		myRadarChart = new Chart(ctx3, {
        			type: 'radar',
        			data: {
        				labels: ["养儿防老 8%", "长辈压力 3%", "独生子女死亡率高 6%", "儿女成双 24%", "太寂寞 58%"],
        				datasets: [
        					{
        						label: "想生二胎的原因分布",
        						backgroundColor: "#493131",
        						borderColor: "rgba(179,181,198,1)",
        						pointBackgroundColor: "rgba(179,181,198,1)",
        						pointBorderColor: "#fff",
        						pointHoverBackgroundColor: "#fff",
        						pointHoverBorderColor: "rgba(179,181,198,1)",
        						data: [8, 3, 6, 24, 58]
        					}
        				]
        			},
        		})
        	};
        	if(index==5){
        		$('.feeList').css({
        			'visibility': 'visible',
        			'animation': 'zoomIn 3s infinite',
        			'-webkit-animation': 'zoomIn 3s 1'
        		});
        	}
        },
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

});

/*The following functions are used for share*/
function shareToWeibo(){
	var WeiboShare = 'http://v.t.sina.com.cn/share/share.php?url=' + encodeURIComponent(document.location) + '&title=' + encodeURIComponent(document.title);
	window.open(WeiboShare,'newwindow');
}
function shareToQzone(){
	var WeiboShare = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + encodeURIComponent(document.location) + '&summary=' + encodeURIComponent(document.title);
	window.open(WeiboShare,'newwindow');
}

/*This like() function only relize the function of changing style. If there is a back-end program, we can implement this function using AJAX*/
function like(){
	var likeImg = document.getElementById("likeImg");
	var likeButton = document.getElementById("likeButton");
	if(likeButton.innerHTML == "快来赞我！"){
		likeButton.innerHTML = "谢谢支持！";
		likeButton.style.backgroundColor = "#c3272b";
		likeImg.src = "./img/like.png";
	}else if(likeButton.innerHTML == "谢谢支持！"){
		likeButton.innerHTML = "快来赞我！";
		likeButton.style.backgroundColor = "#44cef6";
		likeImg.src = "./img/unlike.png";
	}

}