(function () {
  let time = document.getElementById("time");
  time.style.fontSize = "32px";
  let sana = document.getElementById("sana");
  time.style.fontSize ="28px";
   
  setInterval(function () {
    let my_birthday = new Date('2025,05,12')
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let kun = date.getDate();
    let year = date.getFullYear();
    let hafta =date.getDay();
    let mon =date.getMonth();
    let months=[
      'yanvar',
      'fevral',
      'mart',
      'aprel',
      'may',
      'iyun',
      'iyul',
      'avgust',
      'sentyabr',
       'oktyabr',
       'noyabr',
       'dekabr' 

    ]
    let kunlari =[
      'dushanba',
      'seshanba',
      'chorshanba',
      'payshanba',
      'juma',
      'shanba',
      'yakshanba'
    ]
    
    let left =my_birthday-date
    console.log(left)
    let left_miliseconds = left%1000
    left = (left-left_miliseconds)/ 1000
    let left_seconds = left%60
    left = (left-left_seconds)/60
    let left_minutes = left %60
    left = (left-left_minutes)/60
    let left_hours = left%24
    left = (left-left_hours)/24
    let left_days = left%365
    

    if (left_seconds<10){
      left_seconds='0'+left_seconds;
    }
    if (left_minutes<10){
      left_minutes='0'+left_minutes;
    }
    if (left_hours<10){
      left_hours='0'+left_hours;
    }
    
    time.textContent = ` ${left_days} days ${left_hours} hours ${left_minutes} minutes ${left_seconds} seconds`;

    sana.textContent = `Bugun ${kunlari[hafta]}, ${kun}-${months[mon]}, ${year}-yil`
  },1000);

})();


// 123 days 4 hours 56 minutes 23 seconds left
 
