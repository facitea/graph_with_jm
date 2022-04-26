window.onload = function(){
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

    let todaysdate = new RegExp(dateString);//, 'g'
    let today_member_date = new Array;
        for (let i=0; i<total_members; i++){
            if (todaysdate.test(member_signup_date[i]) == true){
                today_member_date.push(member_signup_date[i]);
            }
        }
    let today_total_signup = today_member_date.length; // 오늘의 가입자

    let beat_list = JSON.parse(JSON.stringify(beatinfo));
    let total_beat = beat_list["beat_info"].length; //비트 수

    let beat_date = new Array;
    for(let a=0; a<total_beat; a++){
        beat_date.push(beat_list["beat_info"][a]["bt_regdate"]);
    }
    let today_beat_date = new Array;
        for (let i=0; i<total_beat; i++){
            if (todaysdate.test(beat_date[i]) == true){
                today_beat_date.push(beat_date[i]);
            }
        }
    let today_total_beat = today_beat_date.length; //오늘의 비트 수
    
    let producer_list = JSON.parse(JSON.stringify(producerdata));
    let total_producer = producer_list["producer_info"].length; //프로듀서 수

    let notice_list = JSON.parse(JSON.stringify(notice));
    let total_notice = notice_list["notice_list"].length;//공지사항 개수

    let notice_title_arr = new Array;
    for (let i=0; i<5; i++){
        notice_title_arr.push(notice_list['notice_list'][i]["bl_title"]);
    } // key, value 한쌍 값 동적으로 넣는 방법을 몰라서 그냥 따로 따로 추출해서 넣어주기로..
    
    let notice_date_arr = new Array;
    for (let i=0; i<5; i++){
        notice_date_arr.push(notice_list['notice_list'][i]["bl_date"].substr(0, 10));
    }
    // 공지사항 날짜

    
    let faq_list = JSON.parse(JSON.stringify(faq));
    let total_faq = faq_list["faq_list"].length;    //FAQ 개수

    document.getElementById("total_beat").innerText = total_beat;
    document.getElementById("today_beat").innerText = today_total_beat;
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
    document.getElementById("notice_1_date").innerText = notice_date_arr[0];
    document.getElementById("notice_2_date").innerText = notice_date_arr[1];
    document.getElementById("notice_3_date").innerText = notice_date_arr[2];
    document.getElementById("notice_4_date").innerText = notice_date_arr[3];
    document.getElementById("notice_5_date").innerText = notice_date_arr[4];
}