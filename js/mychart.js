// 워드클라우드 모듈불러오기
zingchart.MODULESDIR = 'https://cdn.zingchart.com/modules/';

//워드클라우드 환경설정
 var myConfig = {
   type: 'wordcloud',
   options: {
    words: [
    {
      text: "뉴트라잇",
      count: 80
    },
    {
      text: "기능성식품",
      count: 70
    },
    {
      text: "전문연구개발기업",
      count: 60
    },
    {
      text: "만더전략",
      count: 50
    },
    {
      text: "기술혁신",
      count: 40
    },
    {
      text: "글로벌화",
      count: 30
    },
    {
      text: "윤리성",
      count: 20
    },
    {
      text: "도전정신",
      count: 10
    },
    {
      text: "건강한 식품기업",
      count: 25
    },
    {
      text: "Nutra-it Inc.",
      count: 8
    },
    {
      text: "Functional",
      count: 5
    },
    {
      text: "Food R&D",
      count: 3
    },
    {
      text: "Only or More",
      count: 7
    },
    {
      text: "Technological innovation",
      count: 24
    },
    {
      text: "Globalization",
      count: 35
    },
    {
      text: "Ethics",
      count: 16
    },
    {
      text: "Challenge",
      count: 47
    },
    {
      text: "Healthy",
      count: 19
    },
    {
      text: "Food Company",
      count: 10
    },
  ],
     minLength: 5,
     maxFontSize: 60,
     minFontSize: 20,
     ignore: [""],
     maxItems: 40,
     aspect: 'spiral', // 'flow-top' | 'flow-center'
  
     colorType: 'palette',
     palette: ['#528BCB', '#AECA4D', '#95B8DC', '#BBDC54', '#6F9ED0'],
  
     style: {
       fontFamily: 'Noto Sans KR',
       backgroundColor:false,
  
       hoverState: {
        visible: false,
         backgroundColor: '#95B8DC',
         borderRadius: 2,
         fontColor: 'white'
       },
       tooltip: {
         text: '%text: %hits',
         visible: false,
         alpha: 0.9,
         backgroundColor: '#1976D2',
         borderRadius: 2,
         borderColor: 'none',
         fontColor: 'white',
         fontFamily: 'Noto Sans KR',
         textAlpha: 1
       }
     }
   },
  
   source: {
     //text: '--President Barack Obama<br> Selma 50th anniversary speech<br>March 7, 2015',
     //Source: https://obamawhitehouse.archives.gov/the-press-office/2015/03/07/remarks-president-50th-anniversary-selma-montgomery-marches
     fontColor: '#64B5F6',
     fontSize: 10,
     fontFamily: 'Georgia',
     fontWeight: 'normal',
     marginBottom: '10%'
   }
 };

//워드클라우드 렌더링
 zingchart.render({
   id: 'myChart',
   data: myConfig,
   height: 400,
   width: '100%'
 });