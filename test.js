fetch("https://e-biz.in/ebizservices/hrms.service/getMyAttendanceRegulationList?uId=1962", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9,en-IN;q=0.8,en-GB;q=0.7",
      "content-type": "application/json; charset=UTF-8",
      "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Microsoft Edge\";v=\"126\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Linux\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "sec-gpc": "1",
      "Referer": "https://hrms.e-biz.in/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{}",
    "method": "POST"
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  //attDate:\"2024-07-09\",branchName:\" \"