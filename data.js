window.onload = function(){
    let mydata = JSON.parse(JSON.stringify(data));
    let content = mydata['members'][0]['powers'][0];

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const dateString = year + '-' + month  + '-' + day; // 가입날짜와 오늘 날짜를 구분하면 됨
    //let member_list_roof = member_list["member_info"][0]["m_regdate"];//각 콘텐츠를 dateString과 일치하는지 보기
    //a.includes(dateString); //0번째 문자열은 오늘날짜가 아니므로 false가 나옴
    //만약 true면 1을 더한다.    

    let member_list = JSON.parse(JSON.stringify(memberlist));
    //let today_members = member_list["member_info"]["m_regdate"];
    let total_members = member_list["member_info"].length;

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
    let today_total_signup = resarr.length; //최종 갯수
    
    console.log(resarr);
    

    document.getElementById("total_beat").innerText = "total";
    document.getElementById("today_beat").innerText = "today";
    document.getElementById("today_member").innerText = today_total_signup;
    document.getElementById("total_member").innerText = total_members;
}