window.onload = function(){
    let mydata = JSON.parse(JSON.stringify(data));
    let content = mydata['members'][0]['powers'][0];

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const dateString = year + '-' + month  + '-' + day; // 오늘의 날짜 형식 조정 (yyyy-mm-dd->yyyy/mm/dd)
    //각 콘텐츠를 dateString과 일치하는지 보기
    //a.includes(dateString); //0번째 문자열은 오늘날짜가 아니므로 false가 나옴
    //만약 true면 1을 더한다.    

    let member_list = JSON.parse(JSON.stringify(memberlist));
    let total_members = member_list["member_info"].length; //회원수

    let member_signup_date = new Array;
    for(let a=0; a<total_members; a++){
        member_signup_date.push(member_list["member_info"][a]["m_regdate"]);
    }

    let seararr = new RegExp(dateString);//, 'g'
    let resarr = new Array;
        for (let i=0; i<total_members; i++){
            if (seararr.test(member_signup_date[i]) == true){
                resarr.push(member_signup_date[i]);
            }
        }
    let today_total_signup = resarr.length; // 오늘의 가입자
    
    let producer_list = JSON.parse(JSON.stringify(producerdata));
    let total_producer = producer_list["producer_info"].length; //프로듀서 수

    let notice_list = JSON.parse(JSON.stringify(notice));
    let total_notice = notice_list["notice_list"].length;//공지사항 개수

    let notice_title_arr = new Array;
    for (let i=0; i<5; i++){
        notice_title_arr.push(notice_list['notice_list'][i]["bl_title"]);
    } // key, value 한쌍 값 동적으로 넣는 방법을 몰라서 그냥 따로 따로 추출해서 넣어주기로..
    
    /*for(let j=0; j<5; j++){
        notice_title_arr.push(notice_list['notice_list'][j]["bl_context"]);
    }
    */
    let notice_date_arr = new Array;
    for (let i=0; i<5; i++){
        notice_date_arr.push(notice_list['notice_list'][i]["bl_date"]);
    }
    //%%%%%%%%%%%%%%%%%%%%%%%%날짜 잘라서 넣어야함.
    
    let faq_list = JSON.parse(JSON.stringify(faq));
    let total_faq = faq_list["faq_list"].length;    //FAQ 개수

    document.getElementById("total_beat").innerText = "total";
    document.getElementById("today_beat").innerText = "today";
    document.getElementById("today_member").innerText = today_total_signup;
    document.getElementById("total_member").innerText = total_members;
    document.getElementById("total_producer").innerText = total_producer;
    document.getElementById("total_faq").innerText = total_faq;
    document.getElementById("total_notice").innerText = total_notice;
    document.getElementById("notice_1").innerText = notice_title_arr[0]; //추후에는 innerHTML로 table 동적 생성하게 만들어봐야할듯
    document.getElementById("notice_2").innerText = notice_title_arr[1];
    document.getElementById("notice_3").innerText = notice_title_arr[2];
    document.getElementById("notice_4").innerText = notice_title_arr[3];
    document.getElementById("notice_5").innerText = notice_title_arr[4];
}